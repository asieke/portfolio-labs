// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { getBenchmarkPrices } from '$models/benchmarks';
import { getDashboardPortfolios } from '$models/dashboard';

export const load: PageLoad = async ({ parent }) => {
	const { session, supabase } = await parent();

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/signin');
	}

	const portfolios = await getDashboardPortfolios(supabase, session.user.id);
	const benchmarkPrices = await getBenchmarkPrices(supabase);

	const returns: Record<string, number[]> = {};

	benchmarkPrices.forEach((b) => {
		const assetClass = b.asset_class;
		if (!returns[assetClass]) returns[assetClass] = [];
		returns[assetClass].push(b.pct);
	});

	if (!portfolios || !benchmarkPrices) {
		throw redirect(303, '/signin');
	}

	return {
		portfolios,
		returns
	};
};
