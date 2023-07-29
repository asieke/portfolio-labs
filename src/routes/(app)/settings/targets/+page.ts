// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { defaultAssetTargets } from '$lib/data/default';

export const load: PageLoad = async ({ parent }) => {
	const { session, profile } = await parent();

	if (profile && !profile.allocation_targets) {
		profile.allocation_targets = [...defaultAssetTargets];
	}

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/signin');
	}

	return {
		profile
	};
};
