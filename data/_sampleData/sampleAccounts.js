import { direct, global, retirement, crypto } from './sampleTransactions.js';

export const sampleAccounts = [
	{
		name: 'Schwab Account',
		description: 'Schwab Investing and Retirement Accounts',
		type: 'Brokerage',
		portfolios: [
			{
				name: 'Schwab - Direct Index',
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
				name: 'Schwab - 401k',
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