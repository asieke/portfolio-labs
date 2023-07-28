// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getPortfolios } from '$models/portfolios';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/signin');
	}

	const portfolios = getPortfolios(supabase, session.user.id);

	return {
		portfolios
	};
};
