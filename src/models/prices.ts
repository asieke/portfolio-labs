import type { SupabaseClient } from '@supabase/supabase-js';
import { getCache, putCache } from '$lib/utils/cache';

export const getPrices = async (supabase: SupabaseClient, symbol: string) => {
	const cachedData = await getCache('prices', symbol);
	if (cachedData) {
		console.log('getting it from the cache');
		return cachedData.data;
	}

	const { data, error } = await supabase.from('prices').select('date, price').eq('symbol', symbol);
	if (error || data.length === 0) return null;

	putCache('prices', symbol, data);

	console.log('getting it from the database');

	return data;
};
