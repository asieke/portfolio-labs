// src/routes/profile/+page.ts
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ parent }) => {
	const { session, profile } = await parent();

	console.log(profile);

	//if !session then redirect to login
	if (!session) {
		throw redirect(303, '/signin');
	}
};
