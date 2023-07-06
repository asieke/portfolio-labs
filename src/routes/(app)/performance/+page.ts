// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import type { Balances } from '$lib/types';

export const load: PageLoad = async (context) => {
	const { session, supabase } = await context.parent();

	//if !session then redirect to login
	if (!session || !session.user) {
		throw redirect(303, '/');
	}

	//set the portfolio id from the id slug - should be http://example.com/performance/:id

	// use supabase to get rows from accounts table where id = session.user.id
	// merge the portfolios that match the account_ids

	try {
		const { data: accounts, error: error0 } = await supabase
			.from('accounts')
			.select('id')
			.eq('user_id', session.user.id);
		if (error0) throw error0;
		if (!accounts) throw new Error('No accounts found');

		const { id } = accounts[0];

		const { data: portfolios, error: error3 } = await supabase
			.from('portfolios')
			.select('*')
			.eq('account_id', id);
		if (error3) throw error3;
		if (!portfolios) throw new Error('No portfolios found');

		const portfolio_id = context.url.searchParams.get('id') || portfolios[0].id;
		const portfolioMetaData = portfolios.reduce((acc, cur) => {
			acc[cur.id] = { name: cur.name, description: cur.description };
			return acc;
		}, {});

		const { data: balances, error: error1 } = await supabase
			.from('balances')
			.select('*')
			.eq('portfolio_id', portfolio_id)
			.order('date', { ascending: true });
		if (error1) throw error1;
		if (!balances) throw new Error('No balances found');
		const { data: transactions, error: error2 } = await supabase
			.from('transactions')
			.select('*')
			.eq('portfolio_id', portfolio_id);
		if (error2) throw error2;

		return {
			user: session.user,
			balances: balances as Balances[],
			transactions: transactions,
			//convert portfolios to an object with key = id and value = {name, description}
			portfolios: portfolioMetaData,
			portfolio_id: portfolio_id
		};
	} catch (e) {
		console.log(e);
		return {
			user: session.user,
			balances: [],
			transactions: [],
			portfolios: {},
			portfolio_id: null
		};
	}
};
