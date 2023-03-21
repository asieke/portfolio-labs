import type { Format } from '$data/types';

//write a function that takes a string and returns a comma separated number
//example: 1000000 -> 1,000,000
export const formatNumber = (num: number) => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatCurrency = (num: number) => {
	return `$${formatNumber(num)}`;
};

export const formatPercent = (num: number) => {
	return `${Math.round(num * 1000) / 10}%`;
};

export const format = (num: number | string, format: Format) => {
	if (typeof num === 'string' || format === 'string') {
		return num;
	} else {
		switch (format) {
			case 'number':
				return formatNumber(num);
			case 'percent':
				return formatPercent(num);
			case 'currency':
				return formatCurrency(num);
		}
	}
};
