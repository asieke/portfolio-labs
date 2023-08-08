import type { SupabaseClient } from '@supabase/supabase-js';
import { getCache, putCache } from '$lib/utils/cache';
import type { Price } from '$types/prices';

export const getPrices = async (supabase: SupabaseClient, symbol: string) => {
	const cachedData = await getCache('prices', symbol);
	if (cachedData) {
		return cachedData.data as Price[];
	}

	const { data, error } = await supabase.from('prices').select('date, price').order('date', { ascending: true }).eq('symbol', symbol);
	if (error || data.length === 0) return [] as Price[];

	putCache('prices', symbol, data);

	return data as Price[];
};
