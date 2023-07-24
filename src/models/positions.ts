import type { SupabaseClient } from '@supabase/supabase-js';
import type { Position } from '$types/positions';

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

	return (positionsError || !positions ? [] : positions) as Position[];
};
