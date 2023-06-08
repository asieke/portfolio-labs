import Papa from 'papaparse';
import type { TransactionsInsert } from '$lib/types';
import type { SchwabTransactionCSV } from '$lib/types';

export const getTransactionJSONfromCSV = (csv: string, portfolio_id: number) => {
	//remove the first and last lines from csv
	const text = csv.split('\n').slice(1, -2).join('\n');

	const results = Papa.parse<SchwabTransactionCSV>(text, {
		header: true,
		skipEmptyLines: false,
		dynamicTyping: true
	});

	const data: TransactionsInsert[] = [];

	results.data.forEach((row) => {
		const dateParts = row['Date'] ? row['Date'].substring(0, 10).trim().split('/') : null;
		const date = dateParts ? `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}` : null;
		const quantity =
			typeof row['Quantity'] === 'string'
				? parseFloat(row['Quantity'].replace(',', ''))
				: row['Quantity'];

		data.push({
			action: row['Action'],
			amount: row['Amount'] ? parseFloat(row['Amount'].replace('$', '')) : 0,
			//reformat date to YYYY-MM-DD
			date: date,
			description: row['Description'],
			fees: row['Fees & Comm'] ? parseFloat(row['Fees & Comm'].replace('$', '')) : 0,
			price: row['Price'] ? parseFloat(row['Price'].replace('$', '')) : 0,
			quantity: quantity,
			symbol: row['Symbol'],
			portfolio_id: portfolio_id
		});
	});

	return data;
};
