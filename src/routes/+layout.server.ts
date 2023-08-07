// src/routes/+layout.server.ts
import type { LayoutServerLoad } from './$types';
import { supabase } from '$lib/clients/supabase';
import { getProfile } from '$models/profile';

export const load: LayoutServerLoad = async (data) => {
	const session = await data.locals.getSession();
	const profile = await getProfile(supabase, session?.user?.id || null);

	return {
		profile,
		session
	};
};
