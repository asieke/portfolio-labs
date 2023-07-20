import { redirect } from '@sveltejs/kit';
import type { SupabaseClient } from '@supabase/supabase-js';

export const GET = async ({ locals: { supabase } }: { locals: { supabase: SupabaseClient } }) => {
	await supabase.auth.signOut();

	throw redirect(303, '/');
};
