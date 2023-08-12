// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getBenchmarkPrices } from '$models/benchmarks';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/signin');
	}

	const benchmarkPrices = await getBenchmarkPrices(supabase);

	return {
		benchmarkPrices
	};
};
