import type { DataType } from '$data/types';

export const getDataTotals = (data: DataType) => {
	const totals = Array(data.data.length).fill(0);

	data.data.forEach((row) => {
		row.forEach((value, i) => {
			if (typeof value === 'number') {
				// Type guard added here
				totals[i] += value;
			} else {
				totals[i] = '';
			}
		});
	});

	return totals;
};
