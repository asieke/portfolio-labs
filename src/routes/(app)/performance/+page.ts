// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getPortfolios } from '$models/portfolios';
import { getYearlyBalances, getWeeklyBalances } from '$models/balances';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/signin');
	}

	// Fetch portfolios and balances for the current user
	const portfolios = await getPortfolios(supabase, session.user.id);
	const balancesYearly = await getYearlyBalances(supabase, session.user.id);
	const balancesWeekly = await getWeeklyBalances(supabase, session.user.id);

	return {
		portfolios,
		balancesWeekly,
		balancesYearly
	};
};
