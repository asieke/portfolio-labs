import type { SupabaseClient } from '@supabase/supabase-js';
import type { Position } from '$types/positions';
import { formatAssetClass } from '$models/assets';

/**
 * ******************************************************************
 * Function: getPositions
 * Input: Supabase client and a user_id string
 * Output: Returns an array of Position objects or an empty array if error or no data found
 * This function fetches position data for the provided user from a Supabase database.
 * ******************************************************************
 */
export const getPositions = async (supabase: SupabaseClient, user_id: string) => {
	if (!supabase || !user_id) return [];

	const { data: positions, error: positionsError } = await supabase
		.from('positions')
		.select('*, portfolios!inner(id, name, accounts!inner(id, user_id))')
		.match({ 'portfolios.accounts.user_id': user_id });

	if (positionsError || !positions) return null;

	//sort positions so that Total is always last
	positions.sort((a, b) => {
		if (a.portfolio_name === 'Total') return 1;
		if (b.portfolio_name === 'Total') return -1;
		return 0;
	});

	return positions.map((p) => ({
		...p,
		asset_class: formatAssetClass(p.asset_class)
	})) as Position[];
};

export const getPositionBySymbol = async (supabase: SupabaseClient, user_id: string | undefined, symbol: string) => {
	if (!supabase || !user_id || !symbol) return null;

	const { data: positions, error: positionsError } = await supabase
		.from('positions')
		.select('*, portfolios!inner(id, name)')
		.eq('portfolios.name', 'Total')
		.eq('symbol', symbol)
		.eq('user_id', user_id);

	if (positionsError || !positions) return null;

	positions[0].asset_class = formatAssetClass(positions[0].asset_class);

	return positions[0] as Position;
};
