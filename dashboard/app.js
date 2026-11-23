'use strict';
const ROWS=[["sentora-curator","Sentora Curator","Risk Curators","Ethereum",2757585593,2.3672,407,34111493,"FARM"],["steakhouse-financial","Steakhouse Financial","Risk Curators","Base",2753981495,-2.1935,543,32944698,"FARM"],["gauntlet","Gauntlet","Risk Curators","Base",1577685462,5.645,543,25603886,"FARM"],["veda","Veda","Onchain Capital Allocator","Ink",1563415482,-8.2898,632,23545211,"FARM"],["usdd","USDD","CDP","Tron",1055793606,-2.8062,611,19772499,"FARM"],["upshift","Upshift","Onchain Capital Allocator","Ethereum",499083733,8.3117,710,13970929,"FARM"],["nonce-capital","Nonce Capital","Risk Curators","Ethereum",513783671,-9.7377,45,13496267,"FARM"],["bittensor-dtao","Bittensor dTAO","Dexs","Bittensor",376026255,-6.5592,56,11659045,"FARM"],["onre","OnRe","RWA","Solana",308882355,0.1082,488,10683521,"FARM"],["rockawayx","RockawayX","Risk Curators","Ethereum",292506628,-2.5459,233,10411016,"FARM"],["cian-yield-layer","CIAN Yield Layer","Yield Aggregator","Ethereum",280281384,4.6717,726,10136606,"FARM"],["opentrade","OpenTrade","RWA","Avalanche",241501527,-1.642,708,9107841,"FARM"],["defi-saver-asset-management","Defi Saver Asset Management","CDP Manager","Ethereum",276366296,-19.5797,null,9068915,"SKIP"],["figure-markets-prime","Figure Markets Prime","Lending","Provenance",190506995,18.0338,474,9054666,"FARM"],["mellow-core","Mellow Core","Onchain Capital Allocator","Ethereum",232572763,-8.5335,290,8934071,"FARM"],["hyperithm","Hyperithm","Risk Curators","Monad",221638535,-4.375,543,8738682,"FARM"],["symbiotic","Symbiotic","Collateral Markets","Ethereum",253923299,-12.0318,886,8665999,"FARM"],["r25","R25","RWA","Pharos",198206607,0.2987,199,8628114,"FARM"],["lightning-network","Lightning Network","Payments","Bitcoin",217862346,-10.1445,null,8428330,"SKIP"],["plume-vaults","Plume Vaults","RWA","Ethereum",211537977,-3.081,749,8396837,"FARM"],["bitfi-basis","BitFi Basis","Basis Trading","Binance",214934379,-10.2604,638,8261635,"FARM"],["k3-capital","K3 Capital","Risk Curators","Monad",207711162,-8.9024,543,8251949,"FARM"],["hive-protocol","Hive Protocol","Chain","BSquared",198776765,-10.181,925,7660661,"FARM"],["saturn","Saturn","Stablecoin Wrapper","Ethereum",154313682,-0.7486,219,7526480,"FARM"],["galaxy-curation","Galaxy Curation","Risk Curators","Arc",129994276,11.2334,177,7304204,"FARM"],["clearstar","Clearstar","Risk Curators","Flare",161773491,-10.0936,543,7196936,"FARM"],["theo-network-thusd","Theo Network thUSD","RWA","Ethereum",138588449,0.0059,65,7158010,"FARM"],["lagoon","Lagoon","Onchain Capital Allocator","Ethereum",151263522,-3.2955,691,7087714,"FARM"],["curvance","Curvance","Lending","Monad",136345059,0.6775,352,7060507,"FARM"],["polymarket-international","Polymarket International","Prediction Market","Polygon",320193439,-1.0817,1845,7014350,"FARM"],["figure-markets-exchange","Figure Markets Exchange","OTC Marketplace","Provenance",131265792,2.284,474,6915583,"FARM"],["b14g","b14g","Restaking","Bitcoin",173941404,-28.5327,694,6643710,"FARM"],["shift-defi","Shift DeFi","Yield","Ethereum",47599147,4448.4747,45,6552635,"FARM"],["armitage-by-wintermute","Armitage by Wintermute","Risk Curators","Ethereum",103480212,5.7711,178,6316046,"FARM"],["valos","Valos","RWA","Monad",106328133,0.1453,113,6237264,"FARM"],["tydro","Tydro","Lending","Ink",111314194,-4.8885,394,6157665,"FARM"],["extended-perps","Extended Perps","Derivatives","Arc",96412875,-4.8674,613,5604572,"FARM"],["stellar-defi-hub","Stellar DeFi Hub","Farm","Stellar",83161634,0.6038,92,5498995,"FARM"],["ember","Ember","RWA","Ethereum",90012351,-5.9593,423,5469388,"FARM"],["keyrock","Keyrock","Risk Curators","Arc",83070632,-0.5971,73,5462758,"FARM"],["tori-finance","Tori Finance","Basis Trading","Ethereum",77392441,4.6366,143,5400658,"FARM"],["avant-avusd","Avant avUSD","Onchain Capital Allocator","Avalanche",94636180,-13.9521,541,5329723,"FARM"],["noble","Noble","Chain","Noble",83040073,-5.2314,null,5224722,"SKIP"],["doppler-finance","Doppler Finance","CeDeFi","Ripple",93316487,-14.4873,638,5224444,"FARM"],["axis","Axis","Basis Trading","Ethereum",70145354,2.3316,86,5074577,"FARM"],["gami-labs","Gami Labs","Risk Curators","Stellar",63109489,9.0271,169,4956647,"FARM"],["infinifi","infiniFi","Yield","Ethereum",70716524,-3.2771,535,4842750,"FARM"],["circle-gateway","Circle Gateway","Cross Chain Bridge","Ethereum",65310531,-8.7872,137,4618675,"FARM"],["loopscale-lending","Loopscale Lending","Lending","Solana",70960213,-14.1058,480,4606791,"FARM"],["arcus-perps","Arcus Perps","Derivatives","Robinhood Chain",60151458,-5.8219,127,4493529,"FARM"],["reti-pooling","Reti Pooling","Staking Pool","Algorand",65254391,-10.6865,659,4412947,"FARM"],["usdcx","USDCx","Stablecoin Wrapper","Ethereum",56626077,-3.7532,142,4399569,"FARM"],["lofty","Lofty","RWA","Algorand",101135900,0.025,1563,4397263,"FARM"],["ipor-fusion","IPOR Fusion","Onchain Capital Allocator","Base",68250116,-13.5702,792,4380127,"FARM"],["azverse-perps","AZverse Perps","Derivatives","Arbitrum",51982966,0.1443,106,4292357,"FARM"],["yuzu-money","Yuzu Money","Yield","Plasma",57346091,-9.0455,365,4270404,"FARM"],["solv-strategies","Solv Strategies","Onchain Capital Allocator","Binance",56603770,-5.0448,557,4263638,"FARM"],["nado-spot","Nado Spot","Dexs","Ink",51104757,-4.8346,345,4114788,"FARM"],["mezo-earn","Mezo Earn","Governance Incentives","Mezo",53638061,-12.2175,186,4088692,"FARM"],["current","Current","Lending","Sui",49631964,-7.8161,228,4013122,"FARM"],["tulipa-capital","Tulipa Capital","Risk Curators","Ethereum",52404471,-9.3511,543,4010264,"FARM"],["project-0","Project 0","Lending","Solana",48867055,-9.8516,325,3920929,"FARM"],["firelight","Firelight","Insurance","Flare",51272081,-14.4069,340,3920829,"FARM"],["august-digital","August Digital","Risk Curators","Monad",22373995,77.9812,73,3838479,"FARM"],["exponent-yield-exchange","Exponent Yield Exchange","Yield","Solana",45177163,-1.3185,649,3826274,"FARM"],["3f","3F","Leveraged Farming","Ethereum",40368186,-0.0399,173,3754416,"FARM"],["arrakis-modular","Arrakis Modular","Liquidity Manager","Ethereum",48488073,-9.91,752,3754137,"FARM"],["vishwa","Vishwa","Anchor BTC","Bitcoin",45307916,-10.645,418,3730629,"FARM"],["re7-labs","Re7 Labs","Risk Curators","World Chain",46889655,-13.9104,543,3693515,"FARM"],["nuva","NUVA","Yield","Provenance",15864571,160.8009,130,3691701,"FARM"],["makina","Makina","Onchain Capital Allocator","Ethereum",38711093,-0.066,374,3639462,"FARM"],["noon","Noon","Yield","Ethereum",38329220,1.1384,649,3554918,"FARM"],["ultrayield-curator","UltraYield Curator","Risk Curators","Ethereum",40359035,-10.3636,386,3525160,"FARM"],["aegis-yusd","Aegis YUSD","Basis Trading","Ethereum",34465848,0.0465,583,3367807,"FARM"],["project-x","Project X","Dexs","Hyperliquid L1",34354598,-2.4436,486,3350222,"FARM"],["felix-vaults","Felix Vaults","Onchain Capital Allocator","Hyperliquid L1",31906510,5.3279,535,3335557,"FARM"],["plasma-saving-vaults","Plasma Saving Vaults","Onchain Capital Allocator","Plasma",31744697,0.2368,414,3277067,"FARM"],["plasma-one","Plasma One","Crypto Card Issuer","Plasma",31926318,0.202,null,3259867,"SKIP"],["liminal-basis","Liminal Basis","Basis Trading","Hyperliquid L1",25662087,21.2736,476,3224864,"FARM"],["drakewell","Drakewell","Basis Trading","Arbitrum",28230939,3.2554,43,3168169,"FARM"],["decibel","Decibel","Derivatives","Aptos",29253135,0.2216,261,3168161,"FARM"],["flux-finance","Flux Finance","Lending","Ethereum",43614505,-0.0568,1368,3111387,"FARM"],["y10k-capital","Y10K Capital","Risk Curators","Ethereum",28339301,-2.411,122,3086491,"FARM"],["mystic-finance-lending","Mystic Finance Lending","Lending","Flare",30236632,-4.6056,584,3071789,"FARM"],["gamma-research","Gamma Research","Risk Curators","Monad",21709938,21.2903,72,3007947,"FARM"],["templar-lending","Templar Lending","Lending","Stellar",27210513,-5.153,459,2932052,"FARM"],["hylo-protocol","Hylo Protocol","Dual-Token Stablecoin","Solana",29173196,-15.3091,473,2878870,"FARM"],["theo-network-thbill","Theo Network thBill","RWA","Stable",11810283,94.0117,430,2867618,"FARM"],["waterline","Waterline","Risk Curators","Ethereum",22598710,5.0287,72,2845922,"FARM"],["apex-omni","Apex Omni","Derivatives","Arbitrum",26834758,-1.262,870,2839211,"FARM"],["manta-cedefi","Manta CeDeFi","Basis Trading","Manta",26526263,-0.6679,905,2817443,"FARM"],["bitlayer-ybtc-family","Bitlayer YBTC Family","Anchor BTC","Bitcoin",27174703,-10.4927,723,2775453,"FARM"],["vfat.io","vfat.io","Yield Aggregator","Base",28071625,-11.1034,914,2746754,"FARM"],["fira","Fira","Lending","Ethereum",19999009,11.6361,291,2741730,"FARM"],["xrpl-dex","XRPL DEX","Dexs","Ripple",27708356,-12.4626,842,2734333,"FARM"],["phoenix-perp","Phoenix Perp","Derivatives","Solana",22522562,-2.6199,231,2727784,"FARM"],["gmx-solana","GMX Solana","Derivatives","Solana",22620052,-4.5855,295,2699222,"FARM"],["flowdesk","Flowdesk","Risk Curators","Ethereum",28044836,-27.6485,73,2677922,"FARM"],["lulo","Lulo","Yield Aggregator","Solana",24457058,-4.7863,819,2674477,"FARM"],["risex","RISEx","Derivatives","RISE",21553525,-2.5101,192,2670621,"FARM"],["avant-aveth","Avant avETH","Onchain Capital Allocator","Ethereum",23890230,-12.9245,386,2644499,"FARM"],["communityv3","CommunityV3","Dexs","Ethereum",17407286,18.2229,26,2641652,"FARM"],["xion-finance","XION Finance","Chain","XION",22019898,-3.5701,491,2639480,"FARM"],["zoo-finance","Zoo Finance","Yield","Binance",24557589,-13.1939,642,2618642,"FARM"],["nemo-trading","NEMO Trading","Risk Curators","Ethereum",20088275,-0.7307,56,2600696,"FARM"],["bisonfi","BisonFi","Dexs","Solana",20001683,-3.095,80,2564419,"FARM"],["d2-finance","D2 Finance","Onchain Capital Allocator","Hyperliquid L1",22590871,-3.939,862,2562805,"FARM"],["agua","Agua","Onchain Capital Allocator","Ethereum",20194381,-4.984,103,2552527,"FARM"],["origami-finance","Origami Finance","Leveraged Farming","Ethereum",28834258,-27.5934,915,2541972,"FARM"],["neutral-trade","Neutral Trade","Onchain Capital Allocator","Solana",21380669,-4.2692,691,2538489,"FARM"],["adrastea-validator","Adrastea Validator","Staking Pool","Solana",22106682,-16.7108,425,2481140,"FARM"],["defindex","DeFindex","Yield Aggregator","Stellar",18508985,-1.637,276,2469707,"FARM"],["monolith-market","Monolith Market","CDP","Ethereum",7156099,162.8578,191,2433024,"FARM"],["3jane-lending","3Jane Lending","Uncollateralized Lending","Ethereum",14030807,26.3009,437,2413723,"FARM"],["tempo-stablecoin-dex","Tempo Stablecoin Dex","Dexs","Tempo",17043713,1.7778,226,2411211,"FARM"],["perena-vaults","Perena Vaults","Onchain Capital Allocator","Solana",17232534,-1.1868,318,2379570,"FARM"],["katana-pre-launch","Katana Pre-Launch","Farm","Ethereum",17633413,-3.1255,510,2351747,"FARM"],["ultrayield-vaults","UltraYield Vaults","Onchain Capital Allocator","Ethereum",18404824,-10.6883,389,2334792,"FARM"],["felix-cdp","Felix CDP","CDP","Hyperliquid L1",18895180,-10.387,585,2331667,"FARM"],["marginfi-lending","marginfi Lending","Lending","Solana",27713022,-11.9875,1361,2316671,"FARM"],["hyperbeat-earn","Hyperbeat Earn","Yield Aggregator","Hyperliquid L1",17615173,-4.9692,565,2316576,"FARM"],["hakutora","Hakutora","Risk Curators","Ethereum",16194180,2.6714,543,2308718,"FARM"],["exponent-strategy-vaults","Exponent Strategy Vaults","Onchain Capital Allocator","Solana",16952539,-7.5244,150,2298140,"FARM"],["native-credit-pool","Native Credit Pool","Lending","Morph",19086720,-7.0851,905,2296088,"FARM"],["chain-fusion","Chain Fusion","Decentralized BTC","Bitcoin",20121715,-9.4223,1059,2282070,"FARM"],["rocksolid-network","RockSolid Network","Yield","Ethereum",18161180,-14.49,374,2274331,"FARM"],["manifest-trade","Manifest Trade","Dexs","Solana",9084105,73.6522,731,2259240,"FARM"],["t3tris-finance","T3tris Finance","Onchain Capital Allocator","Arbitrum",13863510,6.7145,142,2222283,"FARM"],["9summits","9Summits","Risk Curators","Ethereum",16040161,-7.948,543,2176856,"FARM"],["strata-markets","Strata Markets","Yield","Ethereum",14899908,-3.9707,394,2164336,"FARM"],["paimon","Paimon","RWA","Binance",14099539,0.0075,270,2160875,"FARM"],["syntropia","Syntropia","Yield Aggregator","Ethereum",13588961,-0.0228,395,2104092,"FARM"],["syntetika","Syntetika","Risk Curators","Base",14612979,-9.956,87,2100835,"FARM"],["exponent-risk-tranching","Exponent Risk Tranching","Yield","Solana",13424399,-1.5552,122,2098311,"FARM"],["anemoy-capital","Anemoy Capital","RWA","Ethereum",27927845,-72.7093,705,2084213,"FARM"],["sygnum-fiusd-liquidity-fund","Sygnum FIUSD Liquidity Fund","RWA","zkSync Era",14194453,0.0759,780,2073157,"FARM"],["rif-on-chain","RIF ON CHAIN","Dual-Token Stablecoin","RSK",16676100,-9.7195,1037,2072176,"FARM"],["estate-protocol","Estate Protocol","RWA","Arbitrum",13945568,null,766,2056826,"SKIP"],["stellar-dex","Stellar DEX","Dexs","Stellar",13370320,-4.1027,528,2021855,"FARM"],["growihf","GrowiHF","Yield","Hyperliquid L1",12818453,0.9833,614,2012179,"FARM"],["goose","Goose","CeDeFi","Binance",12798539,0.0103,730,1975244,"FARM"],["bouncebit-prime","BounceBit Prime","Basis Trading","Binance",11443356,0.0165,369,1927226,"FARM"],["agni-finance","Agni Finance","Dexs","Mantle",15126696,-4.0995,1212,1894571,"FARM"],["tessera-v","Tessera V","Dexs","Solana",11128196,-3.7732,77,1881465,"FARM"],["predict-fun","Predict Fun","Prediction Market","Binance",10662527,9.4025,795,1865170,"FARM"],["strato-cdp","STRATO CDP","CDP","Strato",12637917,-18.4478,183,1858175,"FARM"],["snuggle","Snuggle","Liquidity Manager","Robinhood Chain",10681820,-2.7551,273,1843173,"FARM"],["superearn","SuperEarn","Yield","Klaytn",9764948,5.3326,319,1826649,"FARM"],["sharpbyte-capital","SharpByte Capital","Risk Curators","Monad",10649873,-8.0812,72,1798379,"FARM"],["yieldfi","YieldFi","Yield Aggregator","Ethereum",10760030,-3.4931,677,1783338,"FARM"],["qearn","Qearn","Staking Pool","Qubic",10991952,-8.5249,604,1770923,"FARM"],["tau-labs","TAU Labs","Risk Curators","Ethereum",10548591,-10.0236,332,1758274,"FARM"],["kava-mint","Kava Mint","CDP","Kava",10497149,-8.1034,null,1747850,"SKIP"],["vena-finance","Vena Finance","Lending","Fluent",9223143,0.3217,178,1739488,"FARM"],["steer-protocol","Steer Protocol","Liquidity Manager","Binance",13740727,-7.725,1264,1723054,"FARM"],["reya-perps","Reya Perps","Derivatives","Reya Network",9800082,-1.3282,823,1687384,"FARM"],["bima-cdp","BIMA CDP","CDP","Bitcoin",9657334,-6.4116,535,1684738,"FARM"],["bucket-cdp","Bucket CDP","CDP","Sui",12689880,-8.7832,1227,1674515,"FARM"],["set-protocol","Set Protocol","Indexes","Ethereum",10110428,-12.6978,null,1672884,"SKIP"],["bend","BEND","Lending","Berachain",9018862,-4.9551,388,1657478,"FARM"],["valantis-sthype-restaking","Valantis stHYPE Restaking","Restaking","Hyperliquid L1",8193911,-1.3102,15,1622361,"FARM"],["icarus-cl","Icarus CL","Dexs","RISE",8023861,-0.0588,85,1616087,"FARM"],["byreal","Byreal","Dexs","Solana",8878040,-6.9178,502,1612891,"FARM"],["pangolins","Pangolins","Risk Curators","Base",8184353,-3.0776,71,1608164,"FARM"],["antarctic","Antarctic","Derivatives","Arbitrum",8365056,-4.5952,359,1599587,"FARM"],["binaryx-platform","Binaryx Platform","RWA","Polygon",8993770,0.0032,1017,1582205,"FARM"],["abstract","Abstract","Chain","Ethereum",9383801,-16.0928,null,1579811,"SKIP"],["bulk","BULK","Derivatives","Solana",7473241,0.4638,159,1560216,"FARM"],["stellar-amm","Stellar AMM","Dexs","Stellar",7656553,-4.4823,180,1540408,"FARM"],["fluxion-network","Fluxion Network","Dexs","Mantle",7128833,2.0802,315,1525625,"FARM"],["vesu","Vesu","Lending","Starknet",8910633,-10.4678,855,1525440,"FARM"],["defa-by-invoicemate","Defa By InvoiceMate","RWA","Stellar",7188149,-0.0025,262,1520381,"FARM"],["subfrost","SUBFROST","Decentralized BTC","Bitcoin",7781298,-9.3921,108,1516072,"FARM"],["mev-capital","MEV Capital","Risk Curators","Ethereum",8320641,-11.6085,543,1515651,"FARM"],["vault-street","Vault Street","RWA","Ethereum",7001824,-0.5323,127,1501224,"FARM"],["hertzflow","HertzFlow","Derivatives","Binance",6937718,0.0088,75,1498340,"FARM"],["mezzanine","Mezzanine","Yield","Ethereum",5851280,18.5975,18,1497163,"FARM"],["block-analitica","Block Analitica","Risk Curators","Base",7739360,-10.154,543,1470664,"FARM"],["anthias-labs","Anthias Labs","Risk Curators","Base",7340723,-9.861,193,1464946,"FARM"],["turboflow-perps","TurboFlow Perps","Derivatives","Binance",6664850,-0.9998,374,1445339,"FARM"],["aftermath-aflp","Aftermath afLP","Yield","Sui",6451190,-1.7294,233,1426115,"FARM"],["fstswap","FstSwap","Dexs","Binance",11751516,-7.0751,1516,1409112,"FARM"],["loopscale-curation","Loopscale Curation","Risk Curators","Solana",6374060,-3.5755,45,1407435,"FARM"],["swan-dao","Swan DAO","CDP","Ethereum",6142072,null,2,1404399,"SKIP"],["stablehodl","StableHodl","Yield","Polygon",6358544,0.0056,509,1402586,"FARM"],["boros","Boros","Interest Rate Derivatives","Arbitrum",6838100,-10.3792,464,1386539,"FARM"],["temple","Temple","Dexs","Canton",6296885,-5.3161,95,1386496,"FARM"],["granite","Granite","Lending","Stacks",6183687,-4.2845,528,1350339,"FARM"],["flying-tulip-ftusd","Flying Tulip ftUSD","Yield Aggregator","Ethereum",5694315,-1.6033,201,1338389,"FARM"],["damm-capital","DAMM Capital","Risk Curators","Ethereum",5816640,-10.5582,65,1294306,"FARM"],["alphagrowth","alphagrowth","Risk Curators","Base",5798353,-9.0719,407,1286496,"FARM"],["goonfi","GoonFi","Dexs","Solana",5227088,-2.2019,75,1278107,"FARM"],["btcfi-cdp","BTCFi CDP","CDP","Bifrost Network",6039993,-10.494,936,1231546,"FARM"],["syncswap","SyncSwap","Dexs","zkSync Era",7266961,-8.4085,1328,1192582,"FARM"],["monarq","Monarq","Risk Curators","Flare",5132234,-18.5227,67,1161438,"FARM"],["metalx-swap","MetalX Swap","Dexs","Proton",7194753,4.5779,1685,1068425,"FARM"],["nucleus","Nucleus","Yield Aggregator","Plume Mainnet",5007171,-24.2361,703,1066598,"FARM"],["katana-dex","Katana DEX","Dexs","Ronin",7469630,-10.0969,1833,945739,"FARM"]];
const TRADED=[[90919562,1723499485],[13897958,30644040],[10529600,158430],[20855587,34514051],[13125243,159606035],[11776271,35031165],[37172687,10897579],[14189397,42943403],[7933344,1518557],[53957600,17089636],[2790066912,48746633],[473943961,210972043],[10650997,5104554],[88242646,4446468],[11828381,471137],[95008001,12244356],[89837790,581751],[8116884,101615],[37937448,2351618],[1219276691,33120071],[33419734,1208793873],[9556892,19130162],[42545788,5951929],[159772077,166714858],[11042622,16860215],[40658464,83774453],[61654134,79509],[1097985819,20992334],[461947766,148210942],[17033550,6246345],[128252575,10516958],[4903633832,155971221],[22628585,7748814],[79509819,4089825],[8396549,8872092],[7022402,7210372],[11075107,456289],[13050097,889485],[1557707205,318146200],[10045588,190621074],[10077743,51699732],[49977940,8431344],[7085071,7003273],[79817906,2523453],[5999311,8257733],[5458552782,919670267],[19646374,3312621],[6040499,48331],[1105503667,6477692],[5258119,634108],[14464506,3638254],[8160658,12359368],[9655113,3712184],[369103931,13257716],[20870492,36596424],[65978518,15570424],[10414124,1537936],[11409175,391774],[27257098,6704911],[34656970,14364555],[7291374,60672],[25055189,286940],[10265592,209941],[18721539391,251037363],[8390942,3547973],[5045118,5042491],[5502874,5538701],[19883796,22390680],[91611319,1332654362],[350240199,43782431],[7296111,159377],[27341274,8876695],[455231965,1823351],[3847796100,129118224],[7577571,6729517],[10168509,705918665],[1146359386,717446],[26324198228,1969858392],[7960647,24209676],[138597079,18098374],[2561365424,901671433],[1285806408,66593224],[23447007,37592530],[41723251,2086559],[107702928,104378062],[6612528,2646363290],[487561390,39968695],[85927581,29651025],[43278603,89351713],[91691917,728976],[6085254,6786418],[42980278,1434821],[930898234,30147126],[37353080,37389910],[14959585,1519676],[8727712,5711574],[201014549,8870078],[10193945903,29460958],[154377360,7359993],[213051107,286418424],[20854866,30102154],[8841188,1236716],[47373718,9707096],[5131538,1142803],[31730814,48362138],[724872836,131787774],[7930429,1549406],[7139951,25847462],[10785829,15467736],[51190122,3337137],[13421078,1776879],[56421343,179551766],[662508266,22508774],[52470276,4710002],[10406697,9051242],[157258085,63408224],[79306636,21791881],[28264700,1147339],[10839155,31945934],[5926765,1100868],[54446633,9205988],[223431568,56296],[12995829,12974827],[81947316,14132031],[11725362,367627],[90279448,147586329],[60029438,18611233],[8281620,2660574]];
const MODEL={"a":6.964566512435219,"b":0.5222655485140031,"r2":0.1939173605722122,"nTraded":128,"heldFitted":2.104851600502152,"heldFlat":2.2444688520425413,"llFit":0.6535785815948029,"llAssumed":0.7989334496755535,"llBase":0.6883742295155886,"ageFill":513,"watchlist":40,"rows":198,"asOf":"2026-11-14"};
const WATCH=["armitage-by-wintermute","axis","b14g","bittensor-dtao","clearstar","curvance","doppler-finance","ember","firelight","galaxy-curation","gami-labs","gauntlet","hive-protocol","hyperithm","infinifi","k3-capital","keyrock","lagoon","lightning-network","lofty","mezo-earn","noble","nonce-capital","onre","opentrade","plume-vaults","r25","reti-pooling","rockawayx","saturn","steakhouse-financial","symbiotic","tori-finance","tulipa-capital","tydro","upshift","usdd","valos","veda","yuzu-money"];
const GAS={"Ethereum":8,"Bitcoin":5,"Solana":0.01,"Binance":0.3,"Base":0.1,"Arbitrum":0.5,"Optimism":0.2,"Polygon":0.05,"zkSync Era":0.2,"Starknet":0.2,"Avalanche":0.3,"Sui":0.02,"Aptos":0.02,"Tron":0.5,"Hyperliquid L1":0.5,"Monad":0.05,"Stellar":0.01,"Ripple":0.01,"Algorand":0.01,"Mantle":0.1,"Linea":0.1,"Scroll":0.1,"Mode":0.05,"Fraxtal":0.05,"Blast":0.1,"Manta":0.1,"ZetaChain":0.1,"Kava":0.1,"Cronos":0.05,"Fantom":0.05,"Celo":0.01,"Near":0.01,"Sei":0.05,"Berachain":0.05,"Sonic":0.05,"Story":0.05,"Unichain":0.1,"World Chain":0.1,"Plume Mainnet":0.1,"Plume":0.1,"Katana":0.05,"Stable":0.05,"Tempo":0.1};
// ROWS, TRADED, MODEL, WATCH and GAS are injected at build time (main.ts
// writes out/app-data.js; the build copies it into this file). This page
// refits the size curve and recomputes every row from the raw inputs.

function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }
function median(ns) { const s = [...ns].sort((a, b) => a - b); const m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; }
function ols(xs, ys) {
  const n = xs.length;
  const mx = xs.reduce((s, x) => s + x, 0) / n;
  const my = ys.reduce((s, y) => s + y, 0) / n;
  let sxy = 0, sxx = 0, sst = 0;
  for (let i = 0; i < n; i++) { sxy += (xs[i] - mx) * (ys[i] - my); sxx += (xs[i] - mx) * (xs[i] - mx); sst += (ys[i] - my) * (ys[i] - my); }
  const b = sxy / sxx, a = my - b * mx;
  let ssr = 0;
  for (let i = 0; i < n; i++) ssr += (ys[i] - (a + b * xs[i])) ** 2;
  return { a, b, r2: 1 - ssr / sst };
}
function logRmse(pred, act) { let s = 0; for (let i = 0; i < pred.length; i++) s += (act[i] - pred[i]) ** 2; return Math.sqrt(s / pred.length); }
function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
function fmtUsd(n) {
  if (n >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M';
  return '$' + Math.round(n).toLocaleString('en-US');
}
function fmtPct(x) { return (x > 0 ? '+' : '') + x.toFixed(2) + '%'; }

const CAT_ACTION = {
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
  'Decentralized BTC': 'Deposit a small amount of BTC'
};
const CAT_ACTION_DEFAULT = "Use the protocol's main feature with a small amount";

function gasFor(chain) { return GAS[chain] !== undefined ? GAS[chain] : 0.10; }
function depositFor(tvl) { if (tvl < 1e7) return 50; if (tvl < 1e8) return 100; if (tvl < 1e9) return 150; return 250; }
function holdDays(age) { if (age < 180) return 30; if (age < 730) return 45; return 60; }
function growthOf(chg) { const c = chg === null ? 0 : chg; return 1 + clamp(c, -60, 120) / 100 * 0.5; }
function maturityOf(age) { return 0.6 + 0.4 * Math.min(age, 1095) / 1095; }
function oddsOf(age) { return 0.55 * Math.exp(-age / 1500) + 0.08; }

function farmSteps(r) {
  const action = CAT_ACTION[r.category] || CAT_ACTION_DEFAULT;
  return [
    'Move ' + money(r.dep) + ' USDC to a wallet on ' + r.chain + ' for ' + r.name + '; network gas is about ' + money(r.gas) + '.',
    'Deposit the ' + money(r.dep) + ' USDC into ' + r.name + ' (' + r.category + ') on ' + r.chain + ' and confirm the position shows in the app.',
    'Hold the position for ' + r.hold + ' days; check it weekly and add funds only if the pool TVL drops sharply.',
    action + ' at least once a week so the activity counts toward any future distribution.',
    'If ' + r.name + ' records a token, claim inside the first claim window; unstake only after the snapshot, not before.',
    'Exit by withdrawing the ' + money(r.dep) + ' USDC plus rewards (gas about ' + money(r.gas) + '); all-in plan cost is about ' + money(r.cost) + ' plus ' + r.hold + ' days of time.'
  ];
}

// --- Refit the size curve in the page from the traded protocols. ---
const TXS = TRADED.map(r => Math.log(r[0]));
const TYS = TRADED.map(r => Math.log(r[1]));
const FIT = ols(TXS, TYS);
const RATIOS = TRADED.map(r => r[1] / r[0]).sort((a, b) => a - b);
const FLAT = RATIOS[Math.floor(RATIOS.length / 2)];
let heldFitted = 0, heldFlat = 0;
for (let k = 0; k < 5; k++) {
  const te = [], tr = [];
  for (let i = 0; i < TRADED.length; i++) (i % 5 === k ? te : tr).push(i);
  const f = ols(tr.map(i => TXS[i]), tr.map(i => TYS[i]));
  heldFitted += logRmse(te.map(i => f.a + f.b * TXS[i]), te.map(i => TYS[i])) / 5;
  heldFlat += logRmse(te.map(i => Math.log(FLAT * TRADED[i][0])), te.map(i => TYS[i])) / 5;
}

// --- Recompute every row from the raw inputs. ---
const WATCH_SET = new Set(WATCH);
const ROWS2 = ROWS.map(r => {
  const slug = r[0], name = r[1], category = r[2], chain = r[3], tvl = r[4], chg = r[5], ageOrNull = r[6], implied0 = r[7];
  const age = ageOrNull === null ? MODEL.ageFill : ageOrNull;
  const growth = growthOf(chg);
  const maturity = maturityOf(age);
  const odds = oddsOf(age);
  const base = Math.exp(FIT.a + FIT.b * Math.log(tvl));
  const implied = Math.max(1, Math.round(base * growth * maturity * odds));
  const gas = gasFor(chain);
  const dep = depositFor(tvl);
  const cost = dep + gas;
  const ev = implied * odds - cost;
  let verdict;
  if (ageOrNull === null || chg === null) verdict = 'SKIP';
  else if (ev > 2 * cost) verdict = 'FARM';
  else if (ev > 0) verdict = 'THIN';
  else verdict = 'SKIP';
  const row = { slug, name, category, chain, tvl, chg, age, ageReported: ageOrNull !== null, growth, maturity, odds, base, implied, implied0, verdict, cost, dep, gas, ev, hold: holdDays(age), watch: WATCH_SET.has(slug) };
  row.steps = farmSteps(row);
  return row;
});
ROWS2.sort((a, b) => (b.implied - a.implied) || (a.slug < b.slug ? -1 : 1));
ROWS2.forEach((r, i) => { r.rank = i + 1; });
const recomputed = ROWS2.filter(r => r.implied === r.implied0).length;
const verdictCounts = { FARM: 0, THIN: 0, SKIP: 0 };
ROWS2.forEach(r => { verdictCounts[r.verdict]++; });

// --- Render. ---
const tbody = document.getElementById('rows');
const qEl = document.getElementById('q');
const verdictEl = document.getElementById('verdict');
const chainEl = document.getElementById('chain');
const watchEl = document.getElementById('watchonly');
const countEl = document.getElementById('count');
const dlg = document.getElementById('detail');
const dlgBody = document.getElementById('detail-body');
let sortKey = 'implied', sortDir = -1;

[...new Set(ROWS2.map(r => r.chain))].sort().forEach(c => {
  const o = document.createElement('option'); o.value = c; o.textContent = c; chainEl.appendChild(o);
});

function filtered() {
  const q = qEl.value.trim().toLowerCase();
  const v = verdictEl.value, c = chainEl.value, w = watchEl.checked;
  return ROWS2.filter(r =>
    (!q || r.slug.includes(q) || r.name.toLowerCase().includes(q)) &&
    (!v || r.verdict === v) && (!c || r.chain === c) && (!w || r.watch));
}

function sortRows(list) {
  const dir = sortDir;
  const val = r => {
    switch (sortKey) {
      case 'rank': return r.rank;
      case 'name': return r.name.toLowerCase();
      case 'chain': return r.chain;
      case 'tvl': return r.tvl;
      case 'chg': return r.chg === null ? -Infinity : r.chg;
      case 'age': return r.age;
      case 'implied': return r.implied;
      case 'odds': return r.odds;
      case 'verdict': return r.verdict;
      case 'cost': return r.cost;
      default: return r.implied;
    }
  };
  return [...list].sort((a, b) => {
    const va = val(a), vb = val(b);
    if (va < vb) return -1 * dir;
    if (va > vb) return 1 * dir;
    return (b.implied - a.implied) || (a.slug < b.slug ? -1 : 1);
  });
}

function render() {
  const list = sortRows(filtered());
  countEl.textContent = 'Showing ' + list.length + ' of ' + ROWS2.length;
  tbody.innerHTML = '';
  for (const r of list) {
    const tr = document.createElement('tr');
    tr.dataset.slug = r.slug;
    tr.innerHTML =
      '<td class="num">' + r.rank + '</td>' +
      '<td class="name">' + esc(r.name) + (r.watch ? ' <span class="star" title="Watchlist">★</span>' : '') + '</td>' +
      '<td>' + esc(r.chain) + '</td>' +
      '<td class="num">' + fmtUsd(r.tvl) + '</td>' +
      '<td class="num">' + (r.chg === null ? '—' : fmtPct(r.chg)) + '</td>' +
      '<td class="num">' + r.age + 'd' + (r.ageReported ? '' : '*') + '</td>' +
      '<td class="num">' + money(r.implied) + '</td>' +
      '<td class="num">' + (r.odds * 100).toFixed(1) + '%</td>' +
      '<td><span class="pill ' + r.verdict + '">' + r.verdict + '</span></td>' +
      '<td class="num">' + money(r.cost) + '</td>';
    tbody.appendChild(tr);
  }
}

function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function showDetail(slug) {
  const r = ROWS2.find(x => x.slug === slug);
  if (!r) return;
  const skipNote = r.verdict === 'SKIP'
    ? '<p class="note">Verdict SKIP: ' + (r.ageReported ? '' : 'the listing date is unreported, so the age — and the odds — are assumed, not observed. ') + (r.chg === null ? 'The 7-day change is unreported. ' : '') + 'The row is still ranked, but the farm plan is not recommended on this evidence.</p>'
    : '';
  dlgBody.innerHTML =
    '<h3>' + esc(r.name) + (r.watch ? ' <span class="star">★</span>' : '') + '</h3>' +
    '<p class="meta">Rank #' + r.rank + ' · ' + esc(r.category) + ' · ' + esc(r.chain) + ' · TVL ' + fmtUsd(r.tvl) + '</p>' +
    '<table><tbody>' +
    '<tr><td>Size term exp(a + b·ln TVL)</td><td class="num">' + money(r.base) + '</td></tr>' +
    '<tr><td>Growth × (7d ' + (r.chg === null ? 'unreported' : fmtPct(r.chg)) + ')</td><td class="num">' + r.growth.toFixed(3) + '</td></tr>' +
    '<tr><td>Maturity × (age ' + r.age + 'd' + (r.ageReported ? '' : ', assumed median') + ')</td><td class="num">' + r.maturity.toFixed(3) + '</td></tr>' +
    '<tr><td>Odds (smooth, assumed)</td><td class="num">' + (r.odds * 100).toFixed(1) + '%</td></tr>' +
    '<tr><td><b>Implied value</b></td><td class="num"><b>' + money(r.implied) + '</b></td></tr>' +
    '<tr><td>Expected value (implied × odds − cost)</td><td class="num">' + money(r.ev) + '</td></tr>' +
    '<tr><td>Farm cost (deposit ' + money(r.dep) + ' + gas ' + money(r.gas) + ')</td><td class="num">' + money(r.cost) + '</td></tr>' +
    '<tr><td>Verdict</td><td class="num"><span class="pill ' + r.verdict + '">' + r.verdict + '</span></td></tr>' +
    '</tbody></table>' +
    skipNote +
    '<h4>Farm plan</h4><ol>' + r.steps.map(s => '<li>' + esc(s) + '</li>').join('') + '</ol>';
  dlg.showModal();
}

tbody.addEventListener('click', e => {
  const tr = e.target.closest('tr');
  if (tr) showDetail(tr.dataset.slug);
});
document.querySelectorAll('#board thead th').forEach(th => {
  th.addEventListener('click', () => {
    const k = th.dataset.k;
    if (sortKey === k) sortDir = -sortDir; else { sortKey = k; sortDir = k === 'name' || k === 'chain' || k === 'verdict' ? 1 : -1; }
    render();
  });
});
[qEl, verdictEl, chainEl, watchEl].forEach(el => el.addEventListener('input', render));

// --- Strips and notes (all numbers computed live in this page). ---
document.getElementById('strip').innerHTML =
  '<b>' + MODEL.watchlist + '/' + MODEL.watchlist + ' watchlist</b> · ' + ROWS2.length + ' rows · ' +
  '<b>' + recomputed + '/' + ROWS2.length + ' rows recomputed in-page</b> · comps a=' + FIT.a.toFixed(3) +
  ' b=' + FIT.b.toFixed(3) + ' R²=' + FIT.r2.toFixed(3) + ' · held-out fitted ' + heldFitted.toFixed(2) +
  ' vs flat ' + heldFlat.toFixed(2) + ' · verdicts FARM ' + verdictCounts.FARM + ' · THIN ' + verdictCounts.THIN + ' · SKIP ' + verdictCounts.SKIP;
document.getElementById('m-n').textContent = MODEL.nTraded;
document.getElementById('m-a').textContent = FIT.a.toFixed(4);
document.getElementById('m-b').textContent = FIT.b.toFixed(4);
document.getElementById('m-r2').textContent = FIT.r2.toFixed(4);
document.getElementById('m-held-f').textContent = heldFitted.toFixed(3);
document.getElementById('m-held-l').textContent = heldFlat.toFixed(3);
document.getElementById('m-recomputed').textContent = recomputed + '/' + ROWS2.length;
document.getElementById('h-fit').textContent = MODEL.llFit.toFixed(3);
document.getElementById('h-assumed').textContent = MODEL.llAssumed.toFixed(3);
document.getElementById('h-base').textContent = MODEL.llBase.toFixed(3);
document.getElementById('asof').textContent = MODEL.asOf;

render();

// Verification hook for the build (not part of the UI): the computed board.
window.TOKEN_RADAR_CHECK = {
  fit: { a: FIT.a, b: FIT.b, r2: FIT.r2, heldFitted, heldFlat },
  recomputed,
  rows: ROWS2.map(r => ({ slug: r.slug, implied: r.implied, verdict: r.verdict, steps: r.steps }))
};
