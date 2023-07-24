// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getPositions } from '$models/positions';
import { getPortfolios } from '$models/portfolios';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/signin');
	}

	const positions = await getPositions(supabase, session.user.id);
	const portfolios = await getPortfolios(supabase, session.user.id);

	return {
		positions,
		portfolios
	};
};
