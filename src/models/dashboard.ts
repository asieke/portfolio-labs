import type { SupabaseClient } from '@supabase/supabase-js';
import type { Portfolio, Balance } from '$types/dashboard';

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

	return data as Portfolio[];
};

/**
 * *******************************************************************
 * Function: getDashboardBalances
 * Input: Supabase client and a user_id string
 * Output: Returns an array of Balance objects or an object with an empty balances array
 * This function fetches balance data for the 'Total' portfolio of the provided user
 * from a Supabase database. If an error occurs or no data is found, it returns an object
 * with an empty balances array.
 * *******************************************************************
 */
export const getDashboardBalances = async (supabase: SupabaseClient, user_id: string) => {
	const { data: portfolios, error: portfoliosError } = await supabase
		.from('portfolios')
		.select('*')
		.eq('user_id', user_id);

	if (portfoliosError || portfolios.length === 0) return [];

	const { data: balances, error: balancesError } = await supabase
		.from('balances_weekly')
		.select('*')
		.in(
			'portfolio_id',
			portfolios.map((p) => p.id)
		);

	if (balancesError || balances.length === 0) return { balances: [] };

	return balances as Balance[];
};
