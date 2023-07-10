// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import type { Balance, BalanceYearly } from './types';

export const load: PageLoad = async (context) => {
	const { session, supabase } = await context.parent();

	// If no session or no user in the session, redirect to the home page
	if (!session || !session.user) {
		throw redirect(303, '/');
	}

	try {
		// Retrieve user's accounts
		const { data: userAccounts, error: accountsError } = await supabase
			.from('accounts')
			.select('id')
			.eq('user_id', session.user.id);

		// Throw error if it exists or if no accounts were found
		if (accountsError) throw accountsError;
		if (!userAccounts) throw new Error('No accounts found');

		// Get the user's account ID
		const { id: accountId } = userAccounts[0];

		// Retrieve the portfolios associated with the account ID
		const { data: portfolioData, error: portfolioError } = await supabase
			.from('portfolios')
			.select('*')
			.eq('account_id', accountId);

		// Throw error if it exists or if no portfolios were found
		if (portfolioError) throw portfolioError;
		if (!portfolioData) throw new Error('No portfolios found');

		//create a map of portfolio ids to portfolio data
		const portfolioMap = portfolioData.reduce((acc, portfolio) => {
			acc[portfolio.id] = portfolio;
			return acc;
		}, {});

		// Get an array of portfolio IDs
		const portfolioIds = portfolioData.map((portfolio) => portfolio.id);

		// Retrieve balances associated with the portfolio IDs
		const { data: balanceData, error: balancesError } = await supabase
			.from('balances')
			.select('date, balance, benchmarks, flows, portfolio_id')
			.in('portfolio_id', portfolioIds)
			.order('date', { ascending: true });

		// Throw error if it exists or if no balances were found
		if (balancesError) throw balancesError;
		if (!balanceData) throw new Error('No balances found');

		const balances: Record<string, Balance[]> = {};

		balanceData.forEach((balance) => {
			const id = balance.portfolio_id;
			balances[id] = balances[id] ? [...balances[id], balance] : [balance];
		});

		const { data: yearlyData, error: yearlyError } = await supabase
			.from('balances_yearly')
			.select('*')
			.in('portfolio_id', portfolioIds);

		if (yearlyError) throw yearlyError;
		if (!yearlyData) throw new Error('No yearly data found');

		const yearly: Record<string, BalanceYearly[]> = {};

		yearlyData.forEach((row) => {
			const id = row.portfolio_id;
			const temp = row as BalanceYearly;
			yearly[id] = yearly[id] ? [...yearly[id], temp] : [temp];
		});

		//labels
		const labels = Object.keys(balanceData[0].benchmarks);

		// If successful, return the relevant data
		return {
			user: session.user,
			balances: balances,
			portfolios: portfolioMap,
			balancesYearly: yearly,
			labels: labels
		};
	} catch (e) {
		console.log(e);
		// If any error occurs, return an object with empty arrays for balances, transactions and portfolios
		return {
			user: session.user,
			balances: [],
			portfolios: [],
			balancesYearly: [],
			labels: {}
		};
	}
};
