import type { Format } from '$data/types';

/**
 * Formats a number as a string with commas separating the thousands places.
 * param num The number to format.
 * returns A string representation of the number with commas separating the thousands places.
 */
export const formatNumber = (num: number): string => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Formats a number as a currency string with a dollar sign and commas separating the thousands places.
 * param num The number to format.
 * returns A string representation of the number as a currency value.
 */
export const formatCurrency = (num: number): string => {
	return `$${formatNumber(num)}`;
};

/**
 * Formats a number as a percentage string with one decimal place.
 * param num The number to format as a percentage.
 * returns A string representation of the number as a percentage value.
 */
export const formatPercent = (num: number): string => {
	return `${(num * 100).toFixed(1)}%`;
};

/**
 * Formats a number or string according to the specified format.
 * param num The number or string to format.
 * param format The format to use when formatting the value.
 * returns A string representation of the value formatted according to the specified format.
 */
export const format = (num: number | string, format: Format): string => {
	// If the value is already a string or the format is 'string', return the value as is
	if (typeof num === 'string' || format === 'string') {
		return num.toString();
	}

	// If the format is not recognized, throw an error
	if (format !== 'number' && format !== 'percent' && format !== 'currency') {
		throw new Error(`Unrecognized format: ${format}`);
	}

	// Format the value according to the specified format
	switch (format) {
		case 'number':
			return formatNumber(num as number);
		case 'percent':
			return formatPercent(num as number);
		case 'currency':
			return formatCurrency(num as number);
		default:
			throw new Error(`Unrecognized format: ${format}`);
	}
};
