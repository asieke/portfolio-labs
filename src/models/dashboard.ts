import type { SupabaseClient } from '@supabase/supabase-js';
import type { Portfolio } from '$types/portfolios';
import { formatAssetClass } from '$models/assets';

/**
 * *******************************************************************
 * Function: getDashboardPortfolios
 * Input: Supabase client and a user_id string
 * Output: Returns a sorted array of Portfolio objects or null if error or no data found
 * This function fetches dashboard data for the provided user from a Supabase database.
 * It sorts the portfolio data so that 'Total' always appears last in the array.
 * *******************************************************************
 */
export const getDashboardPortfolios = async (supabase: SupabaseClient, user_id: string) => {
	const { data, error } = await supabase.from('views_dashboard').select('*').eq('user_id', user_id);
	if (error || data.length === 0) return null;

	// sort portfolios so that Total is always last
	data.sort((a, b) => {
		if (a.name === 'Total') return 1;
		if (b.name === 'Total') return -1;
		return 0;
	});

	return data.map((p) => ({ ...p, asset_class: formatAssetClass(p.asset_class) })) as Portfolio[];
};
