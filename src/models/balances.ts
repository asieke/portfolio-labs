import { getCache, putCache } from '$lib/utils/cache';

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Balance } from '$types/balances';
import colors from 'tailwindcss/colors';
import { getDisplayMonth } from '$lib/utils/dates';

/*********************************************************************
 * Function: getDailyBalances
 * Input: Supabase client and a user_id string
 * Output: Returns an array of daily Balance objects or null if error or no data found
 * This function fetches daily balance data for the provided user from a Supabase database or cache.
 ********************************************************************/
export const getDailyBalances = async (supabase: SupabaseClient, user_id: string) => {
	const cachedData = await getCache(user_id, 'Daily Balances');
	if (cachedData) {
		return cachedData.data as Balance[];
	}

	const { data: balances, error: balancesError } = await supabase.from('balances_daily').select('*, portfolios(id, name)').eq('user_id', user_id);
	if (balancesError || balances.length === 0) return null;

	await putCache(user_id, 'Daily Balances', balances);

	return balances as Balance[];
};

/*********************************************************************
 * Function: getWeeklyBalances
 * Input: Supabase client and a user_id string
 * Output: Returns an array of weekly Balance objects or null if error or no data found
 * This function fetches weekly balance data for the provided user from a Supabase database.
 ********************************************************************/
export const getWeeklyBalances = async (supabase: SupabaseClient, user_id: string) => {
	const { data: balances, error: balancesError } = await supabase.from('balances_weekly').select('*').eq('user_id', user_id);
	if (balancesError || balances.length === 0) return null;
	return balances as Balance[];
};

/*********************************************************************
 * Function: getMonthlyBalances
 * Input: Supabase client and a user_id string
 * Output: Returns an array of monthly Balance objects or null if error or no data found
 * This function fetches monthly balance data for the provided user from a Supabase database.
 ********************************************************************/
export const getMonthlyBalances = async (supabase: SupabaseClient, user_id: string) => {
	const { data: balances, error: balancesError } = await supabase.from('balances_monthly').select('*').eq('user_id', user_id);

	if (balancesError || balances.length === 0) return null;

	return balances as Balance[];
};

/*********************************************************************
 * Function: getYearlyBalances
 * Input: Supabase client and a user_id string
 * Output: Returns an array of yearly Balance objects or null if error or no data found
 * This function fetches yearly balance data for the provided user from a Supabase database.
 ********************************************************************/
export const getYearlyBalances = async (supabase: SupabaseClient, user_id: string) => {
	const { data: balances, error: balancesError } = await supabase.from('balances_yearly').select('*').eq('user_id', user_id);

	if (balancesError || balances.length === 0) return null;

	return balances as Balance[];
};

/*********************************************************************
 * Function: getReturn
 * Input: An array of balances
 * Output: Returns the geometric mean of the balances
 * This function calculates the geometric mean of the provided array of balances.
 ********************************************************************/
export const getReturn = (balances: number[]) => {
	const geomean = balances.reduce((acc, val) => acc * (1 + val), 1) - 1;

	return geomean;
};

/*********************************************************************
 * Function: Aggregate Balances
 * Input: An array of balances
 * Output: Returns the geometric mean of the balances
 * This function calculates the geometric mean of the provided array of balances.
 ********************************************************************/

export const aggregateBalances = (balances: Balance[]) => {
	const output: {
		date: string;
		start_balance: number;
		end_balance: number;
		total_flows: number;
		pct: number;
		days: number;
	}[] = [];

	const yearly = balances.length >= 1000;

	let index = 0;
	balances.forEach((b, i) => {
		if (i > 1 && !yearly && b.date.split('-')[1] !== balances[i - 1].date.split('-')[1]) {
			index++;
		}
		if (i > 1 && yearly && b.date.split('-')[0] !== balances[i - 1].date.split('-')[0]) {
			index++;
		}

		if (!output[index]) {
			//if yearly is true then date is a 4 digit year, else it is the text month e.g. January + year

			const date = yearly ? b.date.split('-')[0] : getDisplayMonth(b.date);

			output[index] = { days: 1, pct: 1 + b.pct, date, start_balance: b.start_balance, end_balance: b.end_balance, total_flows: 0 };
		} else {
			output[index].end_balance = b.end_balance;
			output[index].total_flows += b.total_flows;
			output[index].days++;
			output[index].pct *= 1 + b.pct;
		}
		//if i > 1 and the month of the current balance is not the same as the previous balance, increment the index
	});
	return output.map((o) => ({
		...o,
		pct: o.pct - 1
	}));
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
	},
	{
		name: 'Global Equity',
		color: colors['pink']['600']
	},
	{
		name: 'Developed Markets',
		color: colors['cyan']['600']
	},
	{
		name: 'Emerging Markets',
		color: colors['indigo']['600']
	}
];
