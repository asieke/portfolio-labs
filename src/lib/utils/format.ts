// import { formatCurrency, formatPercent, color } from '$lib/utils/format';

export const formatCurrency = (num: number | null | undefined | string) => {
	if (!num || num === Infinity || typeof num !== 'number') return '';

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(num);
};

export const formatPercent = (num: number | null | undefined | string) => {
	if (!num || num === Infinity || typeof num !== 'number') return '';

	return new Intl.NumberFormat('en-US', {
		style: 'percent',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(num);
};

export const formatNumber = (num: number | null | undefined | string) => {
	if (!num || num === Infinity || typeof num !== 'number') return '';
	return new Intl.NumberFormat('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(num);
};

export const color = (num: number | string | undefined) => {
	//if typeof num is not number then return 'text-slate-500 dark:text-slate-400'
	if (typeof num !== 'number') return 'text-slate-500 dark:text-slate-400';

	if (num > 0) return 'text-green-500 dark:text-green-400';
	if (num < 0) return 'text-red-500 dark:text-red-400';
	return 'text-slate-500 dark:text-slate-400';
};
