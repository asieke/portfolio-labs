import { browser } from '$app/environment';

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Balance } from '$types/balances';
import colors from 'tailwindcss/colors';

const putCache = async () => {
	if (!browser) return null;
	const localForage = import('localforage');

	(await localForage).setItem('balances', 'hello there');
};

export const getDailyBalancesCached = async (supabase: SupabaseClient, user_id: string) => {
	const { data: balances, error: balancesError } = await supabase.from('balances_daily').select('*').eq('user_id', user_id);
	if (balancesError || balances.length === 0) return null;

	await putCache();

	return balances as Balance[];
};

// let db: IDBPDatabase<{ weeklyBalances: { balances: Balance[]; timestamp: number } }> | undefined;
// let cachedData: {
// 	balances: Balance[];
// 	timestamp: number;
// };

// if (browser) {
// 	db = await openDB('myDatabase', 1, {
// 		upgrade(db) {
// 			db.createObjectStore('weeklyBalances');
// 		}
// 	});

// 	cachedData = await db.get('weeklyBalances', user_id);
// 	if (cachedData && new Date().getTime() - cachedData.timestamp < 24 * 60 * 60 * 1000) {
// 		return cachedData.balances as Balance[];
// 	}
// }

// const { data: balances, error: balancesError } = await supabase.from('balances_daily').select('*').eq('user_id', user_id);
// if (balancesError || balances.length === 0) return null;

// if (browser && db) {
// 	console.log('stashing the balances in indexedDB');
// 	await db.put('weeklyBalances', { balances, timestamp: new Date().getTime() }, user_id);
// }

// return balances as Balance[];

export const getDailyBalances = async (supabase: SupabaseClient, user_id: string) => {
	const { data: balances, error: balancesError } = await supabase.from('balances_daily').select('*, portfolios!inner(id, name)').eq('user_id', user_id).eq('portfolios.name', 'Total');

	if (balancesError || balances.length === 0) return null;
	return balances as Balance[];
};

export const getWeeklyBalances = async (supabase: SupabaseClient, user_id: string) => {
	const { data: balances, error: balancesError } = await supabase.from('balances_weekly').select('*').eq('user_id', user_id);
	if (balancesError || balances.length === 0) return null;
	return balances as Balance[];
};

export const getMonthlyBalances = async (supabase: SupabaseClient, user_id: string) => {
	const { data: balances, error: balancesError } = await supabase.from('balances_monthly').select('*').eq('user_id', user_id);

	if (balancesError || balances.length === 0) return null;

	return balances as Balance[];
};

export const getYearlyBalances = async (supabase: SupabaseClient, user_id: string) => {
	const { data: balances, error: balancesError } = await supabase.from('balances_yearly').select('*').eq('user_id', user_id);

	if (balancesError || balances.length === 0) return null;

	return balances as Balance[];
};

export const getReturn = (balances: number[]) => {
	const geomean = balances.reduce((acc, val) => acc * (1 + val), 1) - 1;

	return geomean;
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
