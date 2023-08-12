import type { SupabaseClient } from '@supabase/supabase-js';
import type { BenchmarkPrice } from '$types/benchmarks';

export const getBenchmarkPrices = async (supabase: SupabaseClient) => {
	const { data, error } = await supabase.from('benchmark_prices').select('*');

	if (!data || error) {
		console.error(error);
		return [] as BenchmarkPrice[];
	}

	return data as BenchmarkPrice[];
};
