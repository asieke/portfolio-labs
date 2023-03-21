import type { DataType } from './types';

export const fakePortfolio: DataType = {
	headers: ['Asset Class', 'Dollar Amount', 'Number of Positions', 'Percentage', 'Cost Basis'],
	colors: ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5'],
	types: ['string', 'number', 'number', 'number', 'number'],
	formats: ['string', 'currency', 'number', 'percent', 'currency'],
	data: [
		['Equities', 120000, 1000, 0.485, 100000],
		['Fixed Income', 60000, 50000, 0.235, 55000],
		['Real Estate', 40000, 3, 0.16, 35000],
		['Commodities', 20000, 2, 0.08, 18000],
		['Cash and Cash Equivalents', 10000, 1, 0.04, 10000]
	]
};
