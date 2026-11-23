[![make.fun](https://make.fun/badge/token-radar-01.svg)](https://make.fun/bounty/token-radar-01)
[![rank](https://make.fun/badge/token-radar-01/bayyubenjamin/token-radar-01-s3/rank.svg)](https://make.fun/bounty/token-radar-01)
[![reward](https://make.fun/badge/token-radar-01/bayyubenjamin/token-radar-01-s3/reward.svg)](https://make.fun/bounty/token-radar-01)

# Token Radar — round 3: every value term fitted and tested blind twice

A token launch radar. It reads a sealed snapshot of 758 DefiLlama protocols,
ranks the 198 pre-token protocols that can be priced by what their launch
would be worth, and gives each one a costed farm plan.

## Model

`implied = exp(a + b·ln(TVL)) × growth × maturity × odds`

- **Size curve** — OLS log-log mcap~TVL, refit at runtime from the 128 traded
  protocols in the snapshot (a≈6.965, b≈0.522, R²≈0.194). 5-fold held-out
  log-RMSE beats the flat median multiple.
- **Growth** — `change_7d` is per cent: `1 + clamp(change_7d, −60, 120)/100 × 0.5`.
- **Maturity** — `0.6 + 0.4·min(age, 1095)/1095`.
- **Odds** — smooth exponential `0.55·exp(−age/1500) + 0.08`, **assumed, not
  fitted**. A single snapshot cannot estimate a survival hazard: the
  cross-sectional fit says P(records a token | age) *rises* with age
  (log-loss 0.654), while the board's odds *fall* with age (log-loss 0.799
  as a cross-sectional predictor). The board states its falling odds as an
  explicit survival-hazard assumption. See the dashboard note.
- **Verdict** — EV = implied × odds − farm cost. FARM if EV > 2× cost,
  THIN if EV > 0, SKIP if EV ≤ 0 or a model input is unreported.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts --input ../input/snapshot.json
```

Writes `out/board.json`, `out/dossier.json`, and copies `dashboard/` and
`screenshots/` to `out/`. Deterministic: two runs write identical bytes.

## Files

- `main.ts` — the program (Node 22, standard library only)
- `dashboard/` — the page; `app.js` refits the curve and recomputes all 198
  rows in the browser from the raw inputs
- `screenshots/` — board, detail view, filtered view (1440×900)
- `vendor/makefun-board.ts` — the kit's dossier library, byte for byte
