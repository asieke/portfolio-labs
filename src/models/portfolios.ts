import type { SupabaseClient } from '@supabase/supabase-js';
import type { Portfolio } from '$types/portfolios';
import { formatAssetClass } from '$models/assets';

/**
 * ******************************************************************
 * Function: getPositions
 * Input: Supabase client and a user_id string
 * Output: Returns an array of Position objects or an empty array if error or no data found
 * This function fetches position data for the provided user from a Supabase database.
 * ******************************************************************
 */
export const getPortfolios = async (supabase: SupabaseClient, user_id: string) => {
	if (!supabase || !user_id) return [];

	const { data, error } = await supabase.from('portfolios').select('*').eq('user_id', user_id);

	if (error || !data) return null;

	//sort positions so that Total is always last
	data.sort((a, b) => {
		if (a.portfolio_name === 'Total') return 1;
		if (b.portfolio_name === 'Total') return -1;
		return 0;
	});

	return data.map((p) => ({
		...p,
		asset_class: formatAssetClass(p.asset_class)
	})) as Portfolio[];
};
