import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export const handleLogin = async (email: string) => {
	const redir = `${window.location.origin}/landing`;
	try {
		const { error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				// set emailRedirectTo environment variable for app URL
				emailRedirectTo: redir
			}
		});
		if (error) throw error;
	} catch (error) {
		console.error(error);
	}
};
