// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getDashboardPortfolios } from '$models/dashboard';
import { getDailyBalances } from '$models/balances';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase, profile } = await parent();

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/signin');
	}

	if (!profile.is_active) {
		throw redirect(303, '/subscribe');
	}

	// Fetch portfolios and balances for the current user
	const portfolios = await getDashboardPortfolios(supabase, session.user.id);
	const balances = await getDailyBalances(supabase, session.user.id);

	return {
		portfolios,
		balances: balances?.filter((b) => b.portfolios?.name === 'Total') || []
	};
};
