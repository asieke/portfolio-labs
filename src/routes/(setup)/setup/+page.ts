// src/routes/profile/+page.ts
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { session, profile, supabase } = await parent();

	console.log('setup page loading', session, profile, supabase);

	return {};
};
