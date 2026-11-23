// Token Radar S3 — round 3.
// Program: reads the sealed snapshot, ranks pre-token protocols by implied
// launch value, writes board.json + dossier.json, copies dashboard/ and
// screenshots/ to the output directory. Node 22, standard library only.
// Deterministic: no clock, no randomness; snapshot.as_of is the only date.
//
// Model (every term fitted or stated, nothing hardcoded by name):
//   implied = exp(a + b*ln(TVL)) x growth x maturity x odds
//   - comps curve: OLS log-log mcap~TVL refit at runtime from the 128
//     traded protocols in the snapshot (a, b, R^2 shown on the page).
//   - growth: change_7d is PER CENT: 1 + clamp(change_7d,-60,120)/100*0.5.
//   - maturity: 0.6 + 0.4*min(age,1095)/1095.
//   - odds: smooth exponential 0.55*exp(-age/1500)+0.08, ASSUMED (not
//     fitted). See the dashboard note: a single snapshot cannot estimate
//     a survival hazard; the falling odds are an explicit assumption.
//   - verdict: EV = implied*odds - farm cost; FARM if EV > 2x cost,
//     THIN if EV > 0, SKIP if EV <= 0 or a model input is unreported.
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-board.ts';

const HERE = path.dirname(fileURLToPath(import.meta.url));

interface Proto {
  slug: string;
  name: string;
  category: string | null;
  chains: string[];
  tvl_usd: number;
  change_7d: number | null;
  mcap_usd: number | null;
  listed_at: string | null;
  gecko_id: string | null;
  symbol: string | null;
}

interface Row {
  slug: string;
  name: string;
  rank: number;
  implied_value_usd: number;
  farm_steps: string[];
  chain: string;
  category: string;
  tvl_usd: number;
  change_7d: number | null;
  age_days: number;
  age_reported: boolean;
  growth: number;
  maturity: number;
  odds: number;
  verdict: string;
  farm_cost_usd: number;
  ev_usd: number;
}

const EXCL_CATEGORIES = new Set([
  'Bridge', 'Canonical Bridge', 'Liquid Staking', 'Liquid Restaking',
  'Restaked BTC', 'CEX',
]);
const EXCHANGE_NAMES = ['Binance', 'Coinbase', 'Bybit', 'Kraken', 'Bitget', 'OKX', 'Bitfinex', 'Gemini'];
const VERSION_RE = /\s(?:[Vv]\d+(?:\.\d+)?|\d+\.\d+)$/;
const WRAPPED_RE = /\b(wrapped|staked|staking)\b/i;

// Typical cost of one on-chain transaction on each chain, USD.
// Per-chain figures (not the cheapest across chains): the S2 entry priced
// every action at the cheapest chain's gas, which put a $0.01 Solana gas
// figure on an Ethereum action. Ethereum is $8 here.
const GAS: Record<string, number> = {
  'Ethereum': 8.0, 'Bitcoin': 5.0, 'Solana': 0.01, 'Binance': 0.30,
  'Base': 0.10, 'Arbitrum': 0.50, 'Optimism': 0.20, 'Polygon': 0.05,
  'zkSync Era': 0.20, 'Starknet': 0.20, 'Avalanche': 0.30, 'Sui': 0.02,
  'Aptos': 0.02, 'Tron': 0.50, 'Hyperliquid L1': 0.50, 'Monad': 0.05,
  'Stellar': 0.01, 'Ripple': 0.01, 'Algorand': 0.01, 'Mantle': 0.10,
  'Linea': 0.10, 'Scroll': 0.10, 'Mode': 0.05, 'Fraxtal': 0.05,
  'Blast': 0.10, 'Manta': 0.10, 'ZetaChain': 0.10, 'Kava': 0.10,
  'Cronos': 0.05, 'Fantom': 0.05, 'Celo': 0.01, 'Near': 0.01,
  'Sei': 0.05, 'Berachain': 0.05, 'Sonic': 0.05, 'Story': 0.05,
  'Unichain': 0.10, 'World Chain': 0.10, 'Plume Mainnet': 0.10,
  'Plume': 0.10, 'Katana': 0.05, 'Stable': 0.05, 'Tempo': 0.10,
};
const GAS_DEFAULT = 0.10;

const CAT_ACTION: Record<string, string> = {
  'Lending': 'Lend a small amount and borrow a little against it',
  'Dexs': 'Swap a small amount through the pool',
  'Derivatives': 'Open a small hedged position',
  'Yield': 'Deposit into the highest-yield vault and leave it',
  'Yield Aggregator': 'Deposit into the highest-yield vault and leave it',
  'CDP': 'Mint a small amount against collateral',
  'CDP Manager': 'Mint a small amount against collateral',
  'Basis Trading': 'Take a small basis position and hold it',
  'RWA': 'Hold a small tokenized-asset position',
  'Risk Curators': 'Allocate a small amount to a curated vault',
  'Onchain Capital Allocator': 'Allocate a small amount to a curated vault',
  'Prediction Market': 'Place a small prediction position',
  'Restaking': 'Restake a small amount',
  'Staking Pool': 'Stake a small amount in the pool',
  'Farm': 'Farm a small position in the highest-APR pool',
  'Leveraged Farming': 'Open a small leveraged farm position',
  'Liquidity Manager': 'Provide a small amount of liquidity',
  'Stablecoin Wrapper': 'Wrap a small amount of stablecoins',
  'Chain': 'Bridge a small amount to the chain and use its main app',
  'Payments': 'Make a small payment through the app',
  'Insurance': 'Buy a small cover position',
  'Indexes': 'Buy a small index position',
  'OTC Marketplace': 'Place a small OTC order',
  'Cross Chain Bridge': 'Bridge a small amount through it',
  'Governance Incentives': 'Vote with a small staked position',
  'Crypto Card Issuer': 'Spend a small amount with the card',
  'Uncollateralized Lending': 'Lend a small amount uncollateralized',
  'Interest Rate Derivatives': 'Take a small rates position',
  'Collateral Markets': 'Post a small amount of collateral',
  'CeDeFi': 'Deposit a small amount in the CeDeFi vault',
  'Anchor BTC': 'Deposit a small amount of BTC',
  'Dual-Token Stablecoin': 'Mint a small amount of the stablecoin',
  'Decentralized BTC': 'Deposit a small amount of BTC',
};
const CAT_ACTION_DEFAULT = "Use the protocol's main feature with a small amount";

function argValue(argv: string[], name: string, def: string): string {
  const i = argv.indexOf('--' + name);
  if (i >= 0 && i + 1 < argv.length) return argv[i + 1];
  return def;
}

function clamp(x: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, x));
}

function median(nums: number[]): number {
  const s = [...nums].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

function daysBetween(fromYmd: string, toYmd: string): number {
  const [fy, fm, fd] = fromYmd.split('-').map(Number);
  const [ty, tm, td] = toYmd.split('-').map(Number);
  return Math.floor((Date.UTC(ty, tm - 1, td) - Date.UTC(fy, fm - 1, fd)) / 86400000);
}

function ageDays(listedAt: string | null, asOf: string): number | null {
  if (!listedAt) return null;
  return Math.max(0, daysBetween(listedAt, asOf));
}

function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

function ols(xs: number[], ys: number[]): { a: number; b: number; r2: number } {
  const n = xs.length;
  const mx = xs.reduce((s, x) => s + x, 0) / n;
  const my = ys.reduce((s, y) => s + y, 0) / n;
  let sxy = 0;
  let sxx = 0;
  let sst = 0;
  for (let i = 0; i < n; i++) {
    sxy += (xs[i] - mx) * (ys[i] - my);
    sxx += (xs[i] - mx) * (xs[i] - mx);
    sst += (ys[i] - my) * (ys[i] - my);
  }
  const b = sxy / sxx;
  const a = my - b * mx;
  let ssr = 0;
  for (let i = 0; i < n; i++) ssr += (ys[i] - (a + b * xs[i])) ** 2;
  return { a, b, r2: 1 - ssr / sst };
}

function logRmse(predLn: number[], actualLn: number[]): number {
  let s = 0;
  for (let i = 0; i < predLn.length; i++) s += (actualLn[i] - predLn[i]) ** 2;
  return Math.sqrt(s / predLn.length);
}

// Logistic regression (IRLS) for P(has token | log1p(age)) — cross-sectional.
function irlsLogit(xs: number[], ys: number[]): { b0: number; b1: number } {
  const mean = ys.reduce((s, y) => s + y, 0) / ys.length;
  let b0 = Math.log(mean / (1 - mean));
  let b1 = 0;
  for (let it = 0; it < 100; it++) {
    // Solve (X' W X) db = X' W z for the 2x2 system.
    let s00 = 0; let s01 = 0; let s11 = 0; let t0 = 0; let t1 = 0;
    for (let i = 0; i < xs.length; i++) {
      const eta = b0 + b1 * xs[i];
      const p = sigmoid(eta);
      const w = Math.max(p * (1 - p), 1e-6);
      const z = eta + (ys[i] - p) / w;
      s00 += w; s01 += w * xs[i]; s11 += w * xs[i] * xs[i];
      t0 += w * z; t1 += w * xs[i] * z;
    }
    const det = s00 * s11 - s01 * s01;
    const nb0 = (t0 * s11 - t1 * s01) / det;
    const nb1 = (s00 * t1 - s01 * t0) / det;
    const d = Math.max(Math.abs(nb0 - b0), Math.abs(nb1 - b1));
    b0 = nb0; b1 = nb1;
    if (d < 1e-10) break;
  }
  return { b0, b1 };
}

function logLoss(ps: number[], ys: number[]): number {
  let s = 0;
  for (let i = 0; i < ps.length; i++) {
    const p = clamp(ps[i], 1e-9, 1 - 1e-9);
    s += ys[i] ? -Math.log(p) : -Math.log(1 - p);
  }
  return s / ps.length;
}

function isPreToken(p: Proto): boolean {
  return p.mcap_usd === null && p.gecko_id === null && p.symbol === null;
}

function versioned(name: string): boolean {
  return VERSION_RE.test(name);
}

function wordHit(name: string): boolean {
  return WRAPPED_RE.test(name);
}

function exchangeName(name: string): boolean {
  return EXCHANGE_NAMES.some((e) => new RegExp('^' + e + '\\b').test(name));
}

function isRankable(p: Proto, watchlist: Set<string>): boolean {
  if (watchlist.has(p.slug)) return true;
  if (!isPreToken(p)) return false;
  if (p.category !== null && EXCL_CATEGORIES.has(p.category)) return false;
  if (versioned(p.name)) return false;
  if (wordHit(p.name)) return false;
  if (exchangeName(p.name)) return false;
  return true;
}

function growthOf(change7d: number | null): number {
  const c = change7d === null ? 0 : change7d;
  return 1 + clamp(c, -60, 120) / 100 * 0.5;
}

function maturityOf(age: number): number {
  return 0.6 + 0.4 * Math.min(age, 1095) / 1095;
}

function oddsOf(age: number): number {
  return 0.55 * Math.exp(-age / 1500) + 0.08;
}

function gasFor(chain: string): number {
  return GAS[chain] !== undefined ? GAS[chain] : GAS_DEFAULT;
}

function depositFor(tvl: number): number {
  if (tvl < 10_000_000) return 50;
  if (tvl < 100_000_000) return 100;
  if (tvl < 1_000_000_000) return 150;
  return 250;
}

function holdDays(age: number): number {
  if (age < 180) return 30;
  if (age < 730) return 45;
  return 60;
}

function money(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}

function farmSteps(r: Row): string[] {
  const dep = r.farm_cost_usd - gasFor(r.chain);
  const gas = gasFor(r.chain);
  const hold = holdDays(r.age_days);
  const action = CAT_ACTION[r.category] || CAT_ACTION_DEFAULT;
  return [
    `Move ${money(dep)} USDC to a wallet on ${r.chain} for ${r.name}; network gas is about ${money(gas)}.`,
    `Deposit the ${money(dep)} USDC into ${r.name} (${r.category}) on ${r.chain} and confirm the position shows in the app.`,
    `Hold the position for ${hold} days; check it weekly and add funds only if the pool TVL drops sharply.`,
    `${action} at least once a week so the activity counts toward any future distribution.`,
    `If ${r.name} records a token, claim inside the first claim window; unstake only after the snapshot, not before.`,
    `Exit by withdrawing the ${money(dep)} USDC plus rewards (gas about ${money(gas)}); all-in plan cost is about ${money(r.farm_cost_usd)} plus ${hold} days of time.`,
  ];
}

function validateBoard(rows: Row[], watchlist: Set<string>): void {
  if (rows.length < 100 || rows.length > 4000) throw new Error('board rows out of range: ' + rows.length);
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (r.rank !== i + 1) throw new Error('rank gap at ' + r.slug);
    if (!Number.isInteger(r.implied_value_usd) || r.implied_value_usd < 1 || r.implied_value_usd > 1e14) {
      throw new Error('bad implied value at ' + r.slug);
    }
    if (i > 0 && rows[i - 1].implied_value_usd < r.implied_value_usd) {
      throw new Error('board not sorted at ' + r.slug);
    }
    if (r.farm_steps.length < 3 || r.farm_steps.length > 12) throw new Error('farm steps count at ' + r.slug);
    for (const s of r.farm_steps) {
      const t = s.trim();
      if (t.length < 20 || t.length > 600) throw new Error('farm step length at ' + r.slug + ': ' + t.length);
    }
  }
  for (const w of watchlist) {
    if (!rows.some((r) => r.slug === w)) throw new Error('watchlist missing: ' + w);
  }
}

function main(): void {
  const argv = process.argv.slice(2);
  const inputPath = argValue(argv, 'input', '/input/snapshot.json');
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  const snap = JSON.parse(fs.readFileSync(inputPath, 'utf8')) as {
    as_of: string;
    protocols: Proto[];
    watchlist: string[];
    floor_usd: number;
  };
  const asOf: string = snap.as_of;
  const protocols: Proto[] = snap.protocols;
  const watchlist = new Set<string>(snap.watchlist);

  // --- Comps curve: refit at runtime from traded protocols. ---
  const traded = protocols.filter((p) => p.mcap_usd !== null && p.mcap_usd > 0 && p.tvl_usd > 0);
  const txs = traded.map((p) => Math.log(p.tvl_usd));
  const tys = traded.map((p) => Math.log(p.mcap_usd as number));
  const fit = ols(txs, tys);
  // 5-fold held-out by slug order (index % 5): fitted curve vs flat median ratio.
  const ratios = traded.map((p) => (p.mcap_usd as number) / p.tvl_usd).sort((a, b) => a - b);
  const flatRatio = ratios[Math.floor(ratios.length / 2)];
  let heldFitted = 0;
  let heldFlat = 0;
  for (let k = 0; k < 5; k++) {
    const testIdx: number[] = [];
    const trainIdx: number[] = [];
    for (let i = 0; i < traded.length; i++) (i % 5 === k ? testIdx : trainIdx).push(i);
    const f = ols(trainIdx.map((i) => txs[i]), trainIdx.map((i) => tys[i]));
    const predF = testIdx.map((i) => f.a + f.b * txs[i]);
    const predL = testIdx.map((i) => Math.log(flatRatio * traded[i].tvl_usd));
    const act = testIdx.map((i) => tys[i]);
    heldFitted += logRmse(predF, act) / 5;
    heldFlat += logRmse(predL, act) / 5;
  }

  // --- Hazard evidence (cross-sectional, computed from the snapshot). ---
  const preAges = protocols
    .filter((p) => isPreToken(p) && p.listed_at !== null)
    .map((p) => ageDays(p.listed_at, asOf) as number);
  const ageFill = Math.round(median(preAges));
  const hasToken = protocols.map((p) => (p.gecko_id !== null || p.symbol !== null ? 1 : 0));
  const agesAll = protocols.map((p) => {
    const a = ageDays(p.listed_at, asOf);
    return a === null ? ageFill : a;
  });
  const logit = irlsLogit(agesAll.map((a) => Math.log1p(a)), hasToken);
  const pFit = agesAll.map((a) => sigmoid(logit.b0 + logit.b1 * Math.log1p(a)));
  const pAssumed = agesAll.map((a) => oddsOf(a));
  const baseRate = hasToken.reduce((s, y) => s + y, 0) / hasToken.length;
  const pBase = agesAll.map(() => baseRate);
  const llFit = logLoss(pFit, hasToken);
  const llAssumed = logLoss(pAssumed, hasToken);
  const llBase = logLoss(pBase, hasToken);

  // --- Board. ---
  const rows: Row[] = [];
  for (const p of protocols) {
    if (!isRankable(p, watchlist)) continue;
    if (!p.tvl_usd || p.tvl_usd <= 0) continue;
    const ageRep = ageDays(p.listed_at, asOf);
    const age = ageRep === null ? ageFill : ageRep;
    const growth = growthOf(p.change_7d);
    const maturity = maturityOf(age);
    const odds = oddsOf(age);
    const base = Math.exp(fit.a + fit.b * Math.log(p.tvl_usd));
    const implied = Math.max(1, Math.round(base * growth * maturity * odds));
    const chain = (p.chains && p.chains[0]) || 'Ethereum';
    const gas = gasFor(chain);
    const dep = depositFor(p.tvl_usd);
    const cost = dep + gas;
    const ev = implied * odds - cost;
    let verdict: string;
    if (ageRep === null || p.change_7d === null) {
      verdict = 'SKIP'; // a model input is unreported: odds cannot be priced from observed data
    } else if (ev > 2 * cost) {
      verdict = 'FARM';
    } else if (ev > 0) {
      verdict = 'THIN';
    } else {
      verdict = 'SKIP';
    }
    const row: Row = {
      slug: p.slug,
      name: p.name,
      rank: 0,
      implied_value_usd: implied,
      farm_steps: [],
      chain,
      category: p.category || 'Other',
      tvl_usd: p.tvl_usd,
      change_7d: p.change_7d,
      age_days: age,
      age_reported: ageRep !== null,
      growth,
      maturity,
      odds,
      verdict,
      farm_cost_usd: cost,
      ev_usd: Math.round(ev),
    };
    row.farm_steps = farmSteps(row);
    rows.push(row);
  }
  rows.sort((a, b) => (b.implied_value_usd - a.implied_value_usd) || (a.slug < b.slug ? -1 : 1));
  rows.forEach((r, i) => { r.rank = i + 1; });
  validateBoard(rows, watchlist);

  const verdictCounts: Record<string, number> = { FARM: 0, THIN: 0, SKIP: 0 };
  for (const r of rows) verdictCounts[r.verdict]++;

  // --- Outputs. ---
  fs.mkdirSync(outDir, { recursive: true });
  const board = {
    as_of: asOf,
    model: {
      comps: { a: fit.a, b: fit.b, r2: fit.r2, n_traded: traded.length },
      held_out_5fold: { fitted_log_rmse: heldFitted, flat_log_rmse: heldFlat },
      hazard_cross_sectional: {
        logit_log_loss: llFit, logit_b0: logit.b0, logit_b1: logit.b1,
        smooth_exponential_log_loss: llAssumed, base_rate_log_loss: llBase,
        note: 'Cross-sectional log-loss answers P(records a token | age); the board odds answer the survival question and are an assumption, not a fit.',
      },
      age_fill_median_days: ageFill,
      odds: 'smooth exponential 0.55*exp(-age/1500)+0.08, assumed',
    },
    rows,
  };
  fs.writeFileSync(path.join(outDir, 'board.json'), JSON.stringify(board, null, 2) + '\n');

  // Dashboard data for the page (injected into dashboard/app.js at build time):
  // raw inputs only — the page refits the curve and recomputes every row.
  const appDataJs =
    'const ROWS=' + JSON.stringify(rows.map((r) => [
      r.slug, r.name, r.category, r.chain, r.tvl_usd, r.change_7d,
      r.age_reported ? r.age_days : null, r.implied_value_usd, r.verdict,
    ])) + ';\n' +
    'const TRADED=' + JSON.stringify(traded.map((p) => [p.tvl_usd, p.mcap_usd])) + ';\n' +
    'const MODEL=' + JSON.stringify({
      a: fit.a, b: fit.b, r2: fit.r2, nTraded: traded.length,
      heldFitted, heldFlat, llFit, llAssumed, llBase, ageFill,
      watchlist: watchlist.size, rows: rows.length, asOf,
    }) + ';\n' +
    'const WATCH=' + JSON.stringify([...watchlist].sort()) + ';\n' +
    'const GAS=' + JSON.stringify(GAS) + ';\n';
  fs.writeFileSync(path.join(outDir, 'app-data.js'), appDataJs);

  // Dashboard + screenshots are copied verbatim; the dossier is built from them.
  fs.cpSync(path.join(HERE, 'dashboard'), path.join(outDir, 'dashboard'), { recursive: true });
  fs.cpSync(path.join(HERE, 'screenshots'), path.join(outDir, 'screenshots'), { recursive: true });
  const dossier = buildDossier(outDir, { text_max_bytes: 65536 });
  fs.writeFileSync(path.join(outDir, 'dossier.json'), dossier);

  console.log('rows=' + rows.length + ' watchlist=' + watchlist.size + '/40');
  console.log('comps a=' + fit.a.toFixed(4) + ' b=' + fit.b.toFixed(4) + ' R2=' + fit.r2.toFixed(4) + ' n=' + traded.length);
  console.log('held-out 5-fold log-RMSE fitted=' + heldFitted.toFixed(3) + ' flat=' + heldFlat.toFixed(3));
  console.log('hazard log-loss fit=' + llFit.toFixed(3) + ' assumed=' + llAssumed.toFixed(3) + ' base=' + llBase.toFixed(3) + ' (logit b0=' + logit.b0.toFixed(3) + ' b1=' + logit.b1.toFixed(3) + ')');
  console.log('verdicts FARM=' + verdictCounts.FARM + ' THIN=' + verdictCounts.THIN + ' SKIP=' + verdictCounts.SKIP);
  console.log('dossier bytes=' + dossier.byteLength);
}

main();
