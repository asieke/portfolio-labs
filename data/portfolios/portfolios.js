import { supabase } from '../_lib/supabase.js';
import { generateDates } from '../_lib/utils.js';
import { getDistinctSymbols } from '../_lib/database.js';

export const initializePortfolios = async (USER_ID) => {
	const symbols = await getDistinctSymbols();

	//get the portfolios for the user
	const { data } = await supabase.from('portfolios').select().eq('user_id', USER_ID);

	//iterate through each portfolio and get the historical balance
	for (let i = 0; i < data.length; i++) {
		const portfolio = data[i];
		const { balances, positions } = await getHistoricalBalance(portfolio.id);

		await supabase.from('balances').delete().match({ portfolio_id: portfolio.id });
		await supabase.from('positions').delete().match({ portfolio_id: portfolio.id });

		await supabase.from('balances').insert(balances);
		await supabase.from('positions').insert(positions);

		console.log('....portfolio inserted: ', portfolio.name);

		//delete from balances
	}
};

const getHistoricalBalance = async (portfolio_id) => {
	// 1. Fetch transactions from supabase
	const { data: transactions, error: error1 } = await supabase
		.from('transactions')
		.select('date, action, symbol, amount')
		.eq('portfolio_id', portfolio_id)
		.order('date', { ascending: true });

	// 2. Generate an array of dates starting with the earliest transaction
	const dates = generateDates(transactions[0].date);

	// 3. Create a symbol array that contains all of the unique / non null symbols + CASHX
	const symbols = [
		'CASHX',
		...new Set(transactions.map((transaction) => transaction.symbol).filter((symbol) => symbol != null))
	];

	// 4. Fetch historical prices from supabase
	const { data: historicalPrices, error: error2 } = await supabase
		.from('prices')
		.select('symbol, date, pct')
		.in('symbol', symbols)
		.gte('date', dates[0])
		.order('date', { ascending: true });

	//generate percent maps
	const pcts = {};
	historicalPrices.forEach((row) => {
		if (!pcts[row.symbol]) pcts[row.symbol] = {};
		pcts[row.symbol][row.date] = row.pct;
	});

	// 4. Fetch historical prices from supabase
	const { data: benchmarkPrices, error: error3 } = await supabase
		.from('prices')
		.select('symbol, date, pct')
		.in('symbol', ['VFIFX', 'VTSMX', 'VBMFX', 'BIAPX', 'BIGPX', 'CASHX', 'BTC-USD.CC'])
		.gte('date', dates[0])
		.order('date', { ascending: true });

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

	let benchmarkVFIFX = 0;
	let benchmarkUSEquity = 0;
	let benchmarkFixedIncome = 0;
	let benchmark6040 = 0;
	let benchmark8020 = 0;
	let benchmarkCash = 0;
	let benchmarkCrypto = 0;

	const output = [];

	dates.forEach((date, i) => {
		let netFlows = 0;
		if (txns[date]) {
			txns[date].forEach((txn) => {
				if (txn.action === 'deposit' || txn.action === 'withdraw') {
					balances['CASHX'] += txn.amount;
					netFlows += txn.amount;
					//add to benchmarks
					benchmarkVFIFX += txn.amount;
					benchmarkUSEquity += txn.amount;
					benchmarkFixedIncome += txn.amount;
					benchmark6040 += txn.amount;
					benchmark8020 += txn.amount;
					benchmarkCash += txn.amount;
					benchmarkCrypto += txn.amount;
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
		benchmarkVFIFX *= 1 + (benchmarkPcts['VFIFX'][date] || 0);
		benchmarkUSEquity *= 1 + (benchmarkPcts['VTSMX'][date] || 0);
		benchmarkFixedIncome *= 1 + (benchmarkPcts['VBMFX'][date] || 0);
		benchmark6040 *= 1 + (benchmarkPcts['BIGPX'][date] || 0);
		benchmark8020 *= 1 + (benchmarkPcts['BIAPX'][date] || 0);
		benchmarkCash *= 1 + (benchmarkPcts['CASHX'][date] || 0);
		benchmarkCrypto *= 1 + (benchmarkPcts['BTC-USD.CC'][date] || 0);

		output.push({
			date,
			portfolio_id,
			balance: total,
			flows: i === 0 ? 0 : netFlows,
			benchmarks: {
				'Vanguard 2050 Fund': benchmarkVFIFX,
				'US Equity Total Market': benchmarkUSEquity,
				'Fixed Income': benchmarkFixedIncome,
				'60/40 Allocation': benchmark6040,
				'80/20 Allocation': benchmark8020,
				Cash: benchmarkCash,
				Bitcoin: benchmarkCrypto
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