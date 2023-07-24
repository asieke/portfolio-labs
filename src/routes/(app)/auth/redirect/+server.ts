import { redirect } from '@sveltejs/kit';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { URL } from 'url';
import type { Profile } from '$types/profiles';

interface Params {
	url: URL;
	locals: {
		supabase: SupabaseClient;
	};
}

export const GET = async ({ url, locals: { supabase } }: Params) => {
	const code = url.searchParams.get('code');

	if (code) {
		const session = await supabase.auth.exchangeCodeForSession(code);
		const user = session.data.user;

		if (user) {
			const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id);
			const profile = data?.[0] as Profile;

			// If there is no error and the user is active
			if (!error && profile.is_active) {
				throw redirect(303, '/dashboard');
			}
		}
	}

	throw redirect(303, '/auth/setup');
};
