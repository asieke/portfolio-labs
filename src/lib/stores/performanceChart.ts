import { writable } from 'svelte/store';
import colors from 'tailwindcss/colors';

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

export const chartDates = [
	{
		label: 'Max',
		value: '2000-01-01'
	},
	{
		label: '10Y',
		value: new Date(new Date().setFullYear(new Date().getFullYear() - 10)).toISOString().split('T')[0]
	},
	{
		label: '5Y',
		value: new Date(new Date().setFullYear(new Date().getFullYear() - 5)).toISOString().split('T')[0]
	},
	{
		label: '1Y',
		value: new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().split('T')[0]
	},
	{
		label: 'YTD',
		//value is January 1 of the current year
		value: new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0]
	},
	{
		label: '6M',
		value: new Date(new Date().setMonth(new Date().getMonth() - 6)).toISOString().split('T')[0]
	},
	{
		label: '1M',
		value: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().split('T')[0]
	}
];

export const chartSelectedDate = writable('2000-01-01');
export const chartSelectedBenchmarks = writable(balanceDisplayData.map(() => false));
