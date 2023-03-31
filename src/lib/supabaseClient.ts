import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export const getProfile = async (supabase: SupabaseClient, user_id: string) => {
	const { data: profiles, error: err } = await supabase
		.from('profiles')
		.select('*')
		.eq('id', user_id);

	if (err) console.error(err);

	return profiles && profiles[0] ? profiles[0] : null;
};
