import { direct, global, retirement, crypto } from './sampleTransactions.js';

export const sampleAccounts = [
	{
		name: 'Total - All Accounts',
		description: 'All Accounts',
		type: 'Total',
		portfolios: [
			{
				name: 'Total',
				description: 'Total',
				type: 'Total',
				transactions: [...direct, ...global, ...retirement, ...crypto]
			}
		]
	},
	{
		name: 'Schwab Account',
		description: 'Schwab Investing and Retirement Accounts',
		type: 'Brokerage',
		portfolios: [
			{
				name: 'Fidelity - Direct Index',
				description: 'Direct Indexing S&P Account',
				type: 'Taxable Investment',
				transactions: direct
			},
			{
				name: 'Schwab - Global Investing',
				description: 'Global ETF Investing',
				type: 'Taxable Investment',
				transactions: global
			},
			{
				name: 'Fidelity - 401k',
				description: '401k Retirement Account',
				type: 'Retirement',
				transactions: retirement
			}
		]
	},
	{
		name: 'Coinbase Account',
		description: 'Coinbaser Crypto Account',
		type: 'Crypto',
		portfolios: [
			{
				name: 'Coinbase Crypto Account',
				description: 'Diamond Handing Bitcoin and Ethereum',
				type: 'Taxable Investment',
				transactions: crypto
			}
		]
	}
];
