import { supabase } from './supabase.js';

export const getDistinctSymbols = async () => {
	const { data } = await supabase.from('transactions').select('symbol').neq('symbol', null);
	const symbols = {};
	data.forEach((t) => (symbols[t.symbol] = true));
	return ['CASHX', ...Object.keys(symbols)];
};

export const benchmarkSymbols = ['VFIFX', 'VTSMX', 'VBMFX', 'BIAPX', 'BIGPX', 'BTC-USD.CC'];
