import { supabase } from '../_lib/supabase.js';
import { generateDates } from '../_lib/utils.js';
import { benchmarkSymbols } from '../_lib/database.js';

export const initializePortfolios = async (USER_ID) => {
	//get the portfolios for the user
	const { data } = await supabase.from('portfolios').select().eq('user_id', USER_ID);

	//iterate through each portfolio and get the historical balance
	for (let i = 0; i < data.length; i++) {
		const portfolio = data[i];
		const { balances, positions } = await getHistoricalBalance(portfolio.id);

		await supabase.from('balances').delete().match({ portfolio_id: portfolio.id });
		await supabase.from('positions').delete().match({ portfolio_id: portfolio.id });

		const balanceData = balances.map((b) => ({
			...b,
			portfolio_id: portfolio.id,
			user_id: portfolio.user_id,
			account_id: portfolio.account_id
		}));

		const positionData = positions.map((p) => ({
			...p,
			portfolio_id: portfolio.id,
			user_id: portfolio.user_id,
			account_id: portfolio.account_id
		}));

		await supabase.from('balances').insert(balanceData);
		await supabase.from('positions').insert(positionData);

		console.log('....portfolio inserted: ', portfolio.name);
	}
};

const getHistoricalBalance = async (portfolio_id) => {
	// 1. Fetch transactions from supabase
	const { data: transactions } = await supabase.from('transactions').select('date, action, symbol, amount').eq('portfolio_id', portfolio_id).order('date', { ascending: true });

	// 2. Generate an array of dates starting with the earliest transaction
	const dates = generateDates(transactions[0].date);

	// 3. Create a symbol array that contains all of the unique / non null symbols + CASHX
	const symbols = ['CASHX', ...new Set(transactions.map((transaction) => transaction.symbol).filter((symbol) => symbol != null))];

	// 4. Fetch historical prices from supabase
	const { data: historicalPrices } = await supabase.from('prices').select('symbol, date, pct').in('symbol', symbols).gte('date', dates[0]).order('date', { ascending: true });

	//generate percent maps
	const pcts = {};
	historicalPrices.forEach((row) => {
		if (!pcts[row.symbol]) pcts[row.symbol] = {};
		pcts[row.symbol][row.date] = row.pct;
	});

	// 4. Fetch historical prices from supabase
	const { data: benchmarkPrices } = await supabase.from('prices').select('symbol, date, pct').in('symbol', benchmarkSymbols).gte('date', dates[0]).order('date', { ascending: true });

	//generate percent maps
	const benchmarkPcts = {};
	benchmarkPrices.forEach((row) => {
		if (!benchmarkPcts[row.symbol]) benchmarkPcts[row.symbol] = {};
		benchmarkPcts[row.symbol][row.date] = row.pct;
	});

	const txns = {};
	transactions.forEach((row) => {
		txns[row.date] = txns[row.date] ? [...txns[row.date], row] : [row];
	});

	const balances = {};
	const basis = {};
	symbols.forEach((symbol) => {
		balances[symbol] = 0;
		basis[symbol] = 0;
	});

	//['FFFFX', 'VTSMX', 'VBMFX', 'BIAPX', 'BIGPX', 'BTC-USD.CC', 'IOO', 'VEA', 'VWO'];

	let benchmarkFFFFX = 0;
	let benchmarkUSEquity = 0;
	let benchmarkFixedIncome = 0;
	let benchmark6040 = 0;
	let benchmarkQQQ = 0;
	let benchmarkCash = 0;
	let benchmarkCrypto = 0;
	let benchmarkGlobal = 0;
	let benchmarkDeveloped = 0;
	let benchmarkEmerging = 0;

	const output = [];

	dates.forEach((date, i) => {
		let netFlows = 0;
		if (txns[date]) {
			txns[date].forEach((txn) => {
				if (txn.action === 'deposit' || txn.action === 'withdraw') {
					balances['CASHX'] += txn.amount;
					netFlows += txn.amount;
					//add to benchmarks
					benchmarkFFFFX += txn.amount;
					benchmarkUSEquity += txn.amount;
					benchmarkFixedIncome += txn.amount;
					benchmark6040 += txn.amount;
					benchmarkQQQ += txn.amount;
					benchmarkCash += txn.amount;
					benchmarkCrypto += txn.amount;
					benchmarkGlobal += txn.amount;
					benchmarkDeveloped += txn.amount;
					benchmarkEmerging += txn.amount;
				}
				if (txn.action === 'buy') {
					basis[txn.symbol] += txn.amount;
					balances['CASHX'] -= txn.amount;
					balances[txn.symbol] += txn.amount;
				}
				if (txn.action === 'sell') {
					basis[txn.symbol] *= 1 - txn.amount / balances[txn.symbol];
					balances['CASHX'] += txn.amount;
					balances[txn.symbol] -= txn.amount;
				}
			});
		}

		//update portfolio
		let total = 0;
		symbols.forEach((symbol) => {
			if (pcts[symbol][date]) {
				balances[symbol] *= 1 + (pcts[symbol][date] || 0);
			}
			total += balances[symbol];
		});

		//update benchmarks
		benchmarkFFFFX *= 1 + (benchmarkPcts['FFFFX'][date] || 0);
		benchmarkUSEquity *= 1 + (benchmarkPcts['VTSMX'][date] || 0);
		benchmarkFixedIncome *= 1 + (benchmarkPcts['VBMFX'][date] || 0);
		benchmark6040 *= 1 + (benchmarkPcts['BIGPX'][date] || 0);
		benchmarkQQQ *= 1 + (benchmarkPcts['QQQ'][date] || 0);
		benchmarkCash *= 1 + (benchmarkPcts['CASHX'][date] || 0);
		benchmarkCrypto *= 1 + (benchmarkPcts['BTC-USD.CC'][date] || 0);
		benchmarkGlobal *= 1 + (benchmarkPcts['IOO'][date] || 0);
		benchmarkDeveloped *= 1 + (benchmarkPcts['VEA'][date] || 0);
		benchmarkEmerging *= 1 + (benchmarkPcts['VWO'][date] || 0);

		output.push({
			date,
			portfolio_id,
			balance: total,
			flows: i === 0 ? 0 : netFlows,
			benchmarks: {
				'Fidelity 2050 Fund': benchmarkFFFFX,
				'US Equity Total Market': benchmarkUSEquity,
				'NASDAQ QQQ': benchmarkQQQ,
				'Fixed Income': benchmarkFixedIncome,
				'60/40 Allocation': benchmark6040,
				Cash: benchmarkCash,
				Bitcoin: benchmarkCrypto,
				'Global Equity': benchmarkGlobal,
				'Developed Markets': benchmarkDeveloped,
				'Emerging Markets': benchmarkEmerging
			}
		});
	});

	const positions = Object.entries(balances).map(([symbol, balance]) => ({
		symbol,
		portfolio_id,
		cost_basis: symbol === 'CASHX' ? null : basis[symbol],
		market_value: balance
	}));

	return { balances: output, positions: positions };
};
