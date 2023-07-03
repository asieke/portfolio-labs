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

	const { data, error } = await supabase.from('balances').select('*').eq('portfolio_id', 92);
	const { data: txn, error: error2 } = await supabase
		.from('transactions')
		.select('*')
		.eq('portfolio_id', 92);

	return {
		user: session.user,
		balaces: !data || error ? [] : data,
		transactions: !txn || error2 ? [] : txn
	};
};
