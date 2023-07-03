import { generateDates } from '../_lib/_utils.js';

const getHistoricalBalance = async (supabase, portfolio_id) => {
	// get the unique symbols from transactions table

	try {
		// 1. Fetch transactions from supabase
		const { data: transactions, error: error1 } = await supabase
			.from('transactions')
			.select('date, action, symbol, amount')
			.eq('portfolio_id', portfolio_id)
			.order('date', { ascending: true });
		if (error1) throw error1;

		// 2. Generate an array of dates starting with the earliest transaction
		const dates = generateDates(transactions[0].date);

		// 3. Create a symbol array that contains all of the unique / non null symbols + CASHX
		const symbols = [
			'CASHX',
			...new Set(
				transactions.map((transaction) => transaction.symbol).filter((symbol) => symbol != null)
			)
		];
		[];

		// 4. Fetch historical prices from supabase
		const { data: historicalPrices, error: error2 } = await supabase
			.from('prices')
			.select('symbol, date, pct')
			.in('symbol', symbols)
			.gte('date', dates[0])
			.order('date', { ascending: true });
		if (error2) throw error2;

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
			.in('symbol', ['VFIFX', 'VTSMX', 'VBMFX', 'BIAPX', 'BIGPX', 'CASHX', 'BTC'])
			.gte('date', dates[0])
			.order('date', { ascending: true });
		if (error3) throw error3;

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
		dates.forEach((date) => {
			if (txns[date]) {
				txns[date].forEach((txn) => {
					if (txn.action === 'deposit') {
						balances['CASHX'] += txn.amount;

						//add to benchmarks
						benchmarkVFIFX += txn.amount;
						benchmarkUSEquity += txn.amount;
						benchmarkFixedIncome += txn.amount;
						benchmark6040 += txn.amount;
						benchmark8020 += txn.amount;
						benchmarkCash += txn.amount;
						benchmarkCrypto += txn.amount;
					}
					if (txn.action === 'withdraw') {
						balances['CASHX'] -= txn.amount;

						//add to benchmarks
						benchmarkVFIFX -= txn.amount;
						benchmarkUSEquity -= txn.amount;
						benchmarkFixedIncome -= txn.amount;
						benchmark6040 -= txn.amount;
						benchmark8020 -= txn.amount;
						benchmarkCash -= txn.amount;
						benchmarkCrypto -= txn.amount;
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

			if (date >= '2012-01-01') {
				benchmarkCrypto =
					benchmarkCrypto * 0.05 * (1 + (benchmarkPcts['BTC'][date] || 0)) +
					benchmarkCrypto * 0.95 * (1 + (benchmarkPcts['VTSMX'][date] || 0));
			} else {
				benchmarkCrypto *= 1 + (benchmarkPcts['VTSMX'][date] || 0);
			}

			output.push({
				date,
				balance: total,
				portfolio_id,
				benchmark_total_allocation: benchmarkVFIFX,
				benchmark_us_equity: benchmarkUSEquity,
				benchmark_fixed_income: benchmarkFixedIncome,
				benchmark_60_40: benchmark6040,
				benchmark_80_20: benchmark8020,
				benchmark_cash: benchmarkCash,
				benchmark_crypto: benchmarkCrypto
			});
		});

		const positions = Object.entries(balances).map(([symbol, balance]) => ({
			symbol,
			portfolio_id,
			cost_basis: symbol === 'CASHX' ? null : basis[symbol],
			market_value: balance
		}));

		return { error: null, output: output, positions: positions };
	} catch (error) {
		return { error };
	}
};

/*

	try {
		//not equal null
		const { data: transactions, error: error1 } = await supabase
			.from('transactions')
			.select('date, action, symbol, amount')
			.order('date', { ascending: true });
		if (error1) throw error1;

		const dates = generateDates(transactions[0].date);

		//create a symbols array of the unique symbols
		const symbols = [
			'CASHX',
			...new Set(
				transactions.map((transaction) => transaction.symbol).filter((symbol) => symbol != null)
			)
		];

		//get historical prices where the symbol is in the symbols array
		const { data: historicalPrices, error: error2 } = await supabase
			.from('prices')
			.select('symbol, date, pct')
			.in('symbol', symbols)
			.gt('date', dates[0])
			.order('date', { ascending: true });

		if (error2) throw error2;

		const pcts = {};
		historicalPrices.forEach((row) => {
			if (!pcts[row.date]) pcts[row.date] = {};
			pcts[row.date][row.symbol] = row.pct;
		});

		const txns = {};
		transactions.forEach((row) => {
			txns[row.date] = txns[row.date] ? [...txns[row.date], row] : [row];
		});

		const balances = {};
		const costBasis = {};
		symbols.forEach((symbol) => {
			balances[symbol] = 0;
			costBasis[symbol] = 0;
		});

		let output = [];

		let benchmarkSPY = 0;
		let benchmarkVFIFX = 0;

		dates.forEach((date) => {
			//iterate through the txns for this date and update the balances
			if (txns[date]) {
				txns[date].forEach((txn) => {
					if (txn.action === 'buy') {
						balances[txn.symbol] += txn.amount;
						costBasis[txn.symbol] += txn.amount;
						balances['CASHX'] -= txn.amount;
					} else if (txn.action === 'sell') {
						let pct = 1 - txn.amount / balances[txn.symbol];
						balances[txn.symbol] -= txn.amount;
						balances['CASHX'] += txn.amount;
						costBasis[txn.symbol] *= pct;
					} else if (txn.action === 'deposit') {
						balances['CASHX'] += txn.amount;
					} else if (txn.action === 'withdraw') {
						balances['CASHX'] -= txn.amount;
					}
				});
			}

			let total = 0;
			symbols.forEach((symbol) => {
				balances[symbol] *= 1 + (pcts[date][symbol] || 0);
				total += balances[symbol];
			});

			output.push({
				date,
				balance: total,
				portfolio_id,
				benchmarkVFIFX: null,
				benchmarkSPY: null
			});
		});

		const positions = Object.entries(balances).map(([symbol, balance]) => ({
			symbol,
			portfolio_id,
			cost_basis: symbol === 'CASHX' ? null : costBasis[symbol],
			market_value: balance
		}));

    */

export { getHistoricalBalance };
