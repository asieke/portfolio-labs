import type { Profile } from '$types/profiles';
import type { SupabaseClient } from '@supabase/supabase-js';

export const updateProfile = async (supabase: SupabaseClient, profile: Profile | null) => {
	if (!profile) return {};

	//check and see if the profile has accepted_tos = true then set is_active = true
	if (profile.accepted_tos) {
		profile.is_active = true;
	}

	const { data, error } = await supabase.from('profiles').update(profile).eq('id', profile.id);
	return { data, error };
};

export const getProfile = async (supabase: SupabaseClient, user_id: string | null) => {
	const { data, error } = await supabase.from('profiles').select('*').eq('id', user_id);
	if (!data || error) {
		return {} as Profile;
	}

	return data[0] as Profile;
};
