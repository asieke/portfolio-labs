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

	const { data, error } = await supabase
		.from('accounts')
		.select('*, portfolios(id, name, description, market_value, cost_basis)')
		.eq('user_id', session.user.id);

	const accounts = error ? [] : data;

	return {
		user: session.user,
		accounts: accounts
	};
};
