import dotenv from 'dotenv';
dotenv.config();

const redirectURL = process.env.PUBLIC_APP_URL + '/auth/redirect';

import { supabaseAdmin } from '$lib/clients/supabase';

export const POST = async ({ request }) => {
	const body = await request.json();

	const { email, name, supabase } = body;

	await supabase.auth.signInWithOtp({
		email: email,
		options: {
			emailRedirectTo: redirectURL
		}
	});

	if (name) {
		await supabaseAdmin.from('profiles').update({ full_name: name }).match({ email: email });
	}

	return new Response(JSON.stringify({ body }));
};
