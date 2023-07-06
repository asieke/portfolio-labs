// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/');
	}

	// use supabase to get rows from accounts table where id = session.user.id
	// merge the portfolios that match the account_ids

	try {
		const { data: accounts, error: accountsError } = await supabase
			.from('accounts')
			.select('*, portfolios(id, name, description, market_value, cost_basis)')
			.eq('user_id', session.user.id);

		if (!accounts || accounts.length < 1) throw new Error('No accounts found');
		if (accountsError) throw accountsError;

		const account_ids = accounts.map((account) => account.id);
		const { data: portfolios, error: portfoliosError } = await supabase
			.from('portfolios')
			.select('*')
			.in('account_id', account_ids);

		if (!portfolios || portfolios.length < 1) throw new Error('No portfolios found');
		if (portfoliosError) throw portfoliosError;

		const portfolio_ids = portfolios.map((portfolio) => portfolio.id);
		const { data: positions, error: positionsError } = await supabase
			.from('positions')
			.select('*')
			.in('portfolio_id', portfolio_ids);
		if (!positions || positions.length < 1) throw new Error('No positions found');
		if (positionsError) throw positionsError;

		return {
			accounts: accounts,
			portfolios: portfolios,
			positions: positions
		};
	} catch (error) {
		console.log(error);

		return {
			accounts: [],
			portfolios: [],
			positions: []
		};
	}
};
