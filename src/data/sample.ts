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

export const fakeNotifications = [
	{
		title: 'New Product Launch',
		description:
			"Check out our latest product and get it before it's gone. Limited stock available!",
		time: 1679516397000
	},
	{
		title: 'Important System Maintenance',
		description:
			"We'll be performing maintenance on our systems tonight from 9pm-11pm EST. Please plan accordingly.",
		time: 1679516397000 - 24 * 60 * 60 * 1000
	},
	{
		title: 'Upcoming Sale',
		description: "Don't miss our upcoming sale starting next week. Save up to 50% on select items!",
		time: 1679516397000 - 6 * 24 * 60 * 60 * 1000
	}
];
