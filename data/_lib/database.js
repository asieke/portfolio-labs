import { supabase } from './supabase.js';

export const getDistinctSymbols = async () => {
	const { data } = await supabase.from('transactions').select('symbol').neq('symbol', null);
	const symbols = {};
	data.forEach((t) => (symbols[t.symbol] = true));
	return ['CASHX', ...Object.keys(symbols)];
};

export const benchmarkSymbols = ['CASHX', 'VFIFX', 'VTSMX', 'VBMFX', 'BIAPX', 'BIGPX', 'BTC-USD.CC', 'IOO', 'VEA', 'VWO'];

//update so that the actual benchmarks flow thru8gh to the database
//update the balances tables
