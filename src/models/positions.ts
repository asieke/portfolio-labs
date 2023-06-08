import Papa from 'papaparse';
import type { PositionsInsert } from '$lib/types';
import type { SchwabPositionCSV } from '$lib/types';

export const getPositionsJSONfromCSV = (csv: string, portfolio_id: number) => {
	//remove the first and last lines from csv
	const text = csv.split('\n').slice(2, -2).join('\n');

	const results = Papa.parse<SchwabPositionCSV>(text, {
		header: true,
		skipEmptyLines: false,
		dynamicTyping: true
	});

	const data: PositionsInsert[] = [];

	results.data.forEach((row) => {
		// If dynamicTyping is set to true, these are already numbers

		const quantity =
			typeof row['Quantity'] === 'string'
				? parseFloat(row['Quantity'].replace(',', ''))
				: row['Quantity'];

		data.push({
			cost_basis: row['Cost Basis'] ? parseFloat(row['Cost Basis'].replace(/[$,]/g, '')) : 0,
			created_at: new Date().toISOString(),
			market_value: row['Market Value'] ? parseFloat(row['Market Value'].replace(/[$,]/g, '')) : 0,
			name: row.Description,
			portfolio_id: portfolio_id,
			price: row['Price'] ? parseFloat(row['Price'].replace(/[$,]/g, '')) : 0,
			quantity: quantity,
			symbol: row.Symbol
		});
	});

	return data;
};
