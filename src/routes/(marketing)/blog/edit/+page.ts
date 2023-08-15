// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ parent }) => {
	const { profile } = await parent();

	//if !session then redirect to login
	if (!profile || !profile.is_admin) {
		throw redirect(303, '/blog');
	}
};
