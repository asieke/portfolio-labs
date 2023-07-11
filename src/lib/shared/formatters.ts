import type { Format } from '$data/types';

/**
 * Formats a number as a string with commas separating the thousands places.
 * param num The number to format.
 * returns A string representation of the number with commas separating the thousands places.
 */
export const formatNumber = (num: number, places = 0): string => {
	//if num is NaN then return 0
	if (isNaN(num) || typeof num === 'string') return '';
	num = Math.round(num * Math.pow(10, places)) / Math.pow(10, places);
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Formats a number as a currency string with a dollar sign and commas separating the thousands places.
 * param num The number to format.
 * returns A string representation of the number as a currency value.
 */
export const formatCurrency = (num: number, places = 0): string => {
	if (isNaN(num) || typeof num === 'string') return '';
	return `$${formatNumber(num, places)}`;
};

/**
 * Formats a phone number as a string with dashes separating the area code, prefix, and suffix.
 * param num The phone number to format.
 * returns A string representation of the phone number with dashes separating the area code, prefix, and suffix.
 */
export const formatPhone = (num: string): string => {
	// strip all non-numeric characters
	const temp = num.replace(/\D/g, '');

	// return the string formatted as (703) 244-3494
	// if the input number is incomplete, partially format e.g. (703)
	let output = '';
	if (temp.length >= 1) {
		output += '(';
	}
	output += temp.slice(0, 3);

	if (temp.length > 3) {
		output += ')';
	}
	output += temp.slice(3, 6);
	if (temp.length > 6) {
		output += '-';
	}
	output += temp.slice(6, 10);

	console.log('formatting ', temp, output);

	return output;
};

/**
 * Formats a number as a percentage string with one decimal place.
 * param num The number to format as a percentage.
 * returns A string representation of the number as a percentage value.
 */
export const formatPercent = (num: number): string => {
	//if its not a number then return 0%
	if (isNaN(num) || typeof num !== 'number' || num === Infinity) return '';
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

export const timeAgo = (timestamp: number) => {
	const currentTime = new Date().getTime();
	const timeDifference = currentTime - timestamp;

	const secondsInMilli = 1000;
	const minutesInMilli = secondsInMilli * 60;
	const hoursInMilli = minutesInMilli * 60;
	const daysInMilli = hoursInMilli * 24;

	const days = Math.floor(timeDifference / daysInMilli);
	const hours = Math.floor((timeDifference % daysInMilli) / hoursInMilli);
	const minutes = Math.floor((timeDifference % hoursInMilli) / minutesInMilli);
	const seconds = Math.floor((timeDifference % minutesInMilli) / secondsInMilli);

	if (days > 0) {
		return `${days}d ago`;
	} else if (hours > 0) {
		return `${hours}h ago`;
	} else if (minutes > 0) {
		return `${minutes}m ago`;
	} else {
		return `${seconds}s ago`;
	}
};
