// import { formatCurrency, formatPercent, color } from '$lib/utils/format';

export const formatCurrency = (num: number | null | undefined | string, digits = 2) => {
	if (num !== 0 && (!num || num === Infinity || typeof num !== 'number')) num = 0;

	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	}).format(num);
};

export const formatPercent = (num: number | null | undefined | string, digits = 2) => {
	if (num !== 0 && (!num || num === Infinity || typeof num !== 'number')) num = 0;

	return new Intl.NumberFormat('en-US', {
		style: 'percent',
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	}).format(num);
};

export const formatNumber = (num: number | null | undefined | string, digits = 2) => {
	if (num !== 0 && (!num || num === Infinity || typeof num !== 'number')) num = 0;
	return new Intl.NumberFormat('en-US', {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	}).format(num);
};

export const color = (num: number | string | undefined) => {
	//if typeof num is not number then return 'text-slate-500 dark:text-slate-400'
	if (typeof num !== 'number') return 'text-slate-500 dark:text-slate-400';

	if (num > 0) return 'text-green-500 dark:text-green-400';
	if (num < 0) return 'text-red-500 dark:text-red-400';
	return 'text-slate-500 dark:text-slate-400';
};
