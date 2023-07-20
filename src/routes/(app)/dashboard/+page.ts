// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getDashboardPortfolios, getDashboardBalances } from '$models/dashboard';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/signin');
	}

	// Fetch portfolios and balances for the current user
	const portfolios = await getDashboardPortfolios(supabase, session.user.id);
	const balances = await getDashboardBalances(supabase, session.user.id);

	return {
		portfolios,
		balances
	};
};
