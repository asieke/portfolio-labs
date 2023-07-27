import colors from 'tailwindcss/colors';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Asset } from '$types/assets';
import { getCache, putCache } from '$lib/utils/cache';

/**
 * *******************************************************************
 * Function: getAsset
 * Input: Supabase client and a symbol string
 * Output: Returns a single Asset object or null if error or no data found
 * This function fetches data for the provided asset symbol from a Supabase database.
 * The asset_class of the fetched asset data is formatted before returning.
 * *******************************************************************
 */

export const getAsset = async (supabase: SupabaseClient, symbol: string) => {
	const { data, error } = await supabase.from('assets').select('*').eq('symbol', symbol);
	if (error || data.length === 0) return null;

	data[0].asset_class = formatAssetClass(data[0].asset_class);

	return data[0] as Asset;
};

/**
 * *******************************************************************
 * Function: getAssets
 * Input: Supabase client and a user_id string
 * Output: Returns an array of Asset objects or null if error or no data found
 * This function fetches all assets for the provided user from a Supabase database.
 * The data is first attempted to be fetched from the cache. If not in cache, a database
 * request is made. The asset_class of each fetched asset is formatted before returning.
 * *******************************************************************
 */

export const getAssets = async (supabase: SupabaseClient, user_id: string) => {
	const cachedData = await getCache(user_id, 'Assets');
	if (cachedData) {
		return cachedData.data as Asset[];
	}

	//get a list of the unique symbols owned by the user
	const { data: symbols, error: symbolsError } = await supabase.from('positions').select('symbol').eq('user_id', user_id);
	if (symbolsError || symbols.length === 0) return null;

	//get the unique symbols
	const uniqueSymbols = [...new Set(symbols.map((s) => s.symbol))];
	const { data: assets, error: assetsError } = await supabase.from('assets').select('*').in('symbol', uniqueSymbols);
	if (assetsError || assets.length === 0) return null;

	const assetData = assets.map((a) => ({
		...a,
		asset_class: formatAssetClass(a.asset_class)
	})) as Asset[];

	putCache(user_id, 'Assets', assetData);

	return assetData;
};

/**
 * *******************************************************************
 * Function: formatAssetClass
 * Input: An object with asset classes as keys and their amounts as values
 * Output: Returns an array of formatted asset class objects
 * This function formats the input object into an array of objects, each containing
 * detailed breakdown of each asset class including its total value and color for UI
 * rendering purposes.
 * *******************************************************************
 */

export const formatAssetClass = (obj: Record<string, number>) => {
	const output = [
		{
			name: 'Equities',
			total: obj['Equity US'] + obj['Equity Other'] + obj['Equity Emerging'] + obj['Equity Developed'],
			color: colors['sky']['600'],
			breakdown: [
				{
					name: 'US',
					total: obj['Equity US'],
					color: colors['sky']['500']
				},
				{
					name: 'Other',
					total: obj['Equity Other'],
					color: colors['sky']['200']
				},
				{
					name: 'Emerging',
					total: obj['Equity Emerging'],
					color: colors['sky']['300']
				},
				{
					name: 'Developed',
					total: obj['Equity Developed'],
					color: colors['sky']['400']
				}
			]
		},
		{
			name: 'Real Estate',
			total: obj['Real Estate US'] + obj['Real Estate Global'],
			color: colors['violet']['500'],
			breakdown: [
				{
					name: 'US',
					total: obj['Real Estate US'],
					color: colors['violet']['400']
				},
				{
					name: 'Global',
					total: obj['Real Estate Global'],
					color: colors['violet']['500']
				}
			]
		},
		{
			name: 'Fixed Income',
			total: obj['Fixed Income General'] + obj['Fixed Income US Munis'] + obj['Fixed Income US Corporates'] + obj['Fixed Income US Treasuries'],
			color: colors['emerald']['500'],
			breakdown: [
				{
					name: 'General',
					total: obj['Fixed Income General'],
					color: colors['emerald']['300']
				},
				{
					name: 'US Munis',
					total: obj['Fixed Income US Munis'],
					color: colors['emerald']['500']
				},
				{
					name: 'US Corporates',
					total: obj['Fixed Income US Corporates'],
					color: colors['emerald']['300']
				},
				{
					name: 'US Treasuries',
					total: obj['Fixed Income US Treasuries'],
					color: colors['emerald']['400']
				}
			]
		},
		{
			name: 'Other',
			total: obj['Cash'] + obj['Other'] + obj['Crypto'] + obj['Commodities'],
			color: colors['gray']['500'],
			breakdown: [
				{
					name: 'Cash',
					total: obj['Cash'],
					color: colors['gray']['100']
				},
				{
					name: 'Other',
					total: obj['Other'],
					color: colors['gray']['200']
				},
				{
					name: 'Crypto',
					total: obj['Crypto'],
					color: colors['gray']['300']
				},
				{
					name: 'Commodities',
					total: obj['Commodities'],
					color: colors['gray']['400']
				}
			]
		}
	];

	return output;
};
