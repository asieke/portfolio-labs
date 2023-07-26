import type { SupabaseClient } from '@supabase/supabase-js';
import type { Balance } from '$types/balances';
import colors from 'tailwindcss/colors';

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
export const getDailyBalances = async (supabase: SupabaseClient, user_id: string) => {
	const { data: balances, error: balancesError } = await supabase.from('balances').select('*, portfolios!inner(id, name)').eq('user_id', user_id).eq('portfolios.name', 'Total');

	if (balancesError || balances.length === 0) return null;

	// return balances as Balance[];

	return balances.map((b) => ({
		...b,
		end_balance: b.balance,
		end_benchmarks: b.benchmarks
	})) as Balance[];
};

export const getWeeklyBalances = async (supabase: SupabaseClient, user_id: string) => {
	const { data: balances, error: balancesError } = await supabase.from('balances_weekly').select('*, portfolios!inner(id, name)').eq('user_id', user_id).eq('portfolios.name', 'Total');

	if (balancesError || balances.length === 0) return null;

	return balances as Balance[];
};

export const balanceDisplayData = [
	{
		name: 'Your Performance',
		color: colors['sky']['600']
	},
	{
		name: 'Cash',
		color: colors['violet']['600']
	},
	{
		name: 'Bitcoin',
		color: colors['green']['600']
	},
	{
		name: 'Fixed Income',
		color: colors['rose']['600']
	},
	{
		name: '60/40 Allocation',
		color: colors['amber']['600']
	},
	{
		name: '80/20 Allocation',
		color: colors['fuchsia']['600']
	},
	{
		name: 'Vanguard 2050 Fund',
		color: colors['orange']['600']
	},
	{
		name: 'US Equity Total Market',
		color: colors['lime']['600']
	}
];
