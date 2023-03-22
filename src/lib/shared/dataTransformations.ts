import type { DataType } from '$data/types';

/**
 * Calculates the totals for each column of the given data.
 *
 * param data The data for which to calculate the totals.
 * returns An array of the same length as each row of the data, where each element is the total for the corresponding column.
 */

export const getDataTotals = (data: DataType): Array<number | ''> => {
	// Ensure that the data is not empty
	if (data.data.length === 0) {
		throw new Error('Data cannot be empty');
	}

	// Initialize an array to store the totals for each column
	const totals = new Array(data.data[0].length).fill(0);

	// Loop through each row of the data
	for (const row of data.data) {
		// Ensure that the row has the same number of columns as the previous rows
		if (row.length !== totals.length) {
			throw new Error('All rows must have the same number of columns');
		}

		// Loop through each value in the row
		for (let i = 0; i < row.length; i++) {
			const value = row[i];

			// If the value is a number, add it to the corresponding total
			if (typeof value === 'number') {
				totals[i] += value;
			}
			// Otherwise, set the corresponding total to an empty string
			else {
				totals[i] = '';
			}
		}
	}

	return totals;
};
