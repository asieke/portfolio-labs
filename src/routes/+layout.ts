// src/routes/+layout.ts
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import type { LayoutLoad } from './$types';
import type { Profile } from '$types/profiles';
import { getInstitutions } from '$models/plaid';

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createSupabaseLoadClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		serverSession: data.session
	});

	const {
		data: { session }
	} = await supabase.auth.getSession();

	//select from profiles where profile.email = session.user.email

	let profile: Profile | null = null;
	if (session && session.user.email) {
		const { data } = await supabase.from('profiles').select('*').eq('email', session.user.email);
		if (data && data[0]) {
			profile = data[0];
		}
	}

	const institutions = await getInstitutions(supabase, session?.user.id || null);

	return { supabase, session, profile, institutions };
};
