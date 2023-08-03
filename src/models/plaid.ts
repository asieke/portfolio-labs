import type { SupabaseClient } from '@supabase/supabase-js';
import type { PlaidInsitution } from '$types/plaid';

export const addInstitution = async (supabase: SupabaseClient, institution: PlaidInsitution) => {
	try {
		const { error } = await supabase.from('plaid_institutions').insert([institution]);
		if (error) throw error;
		return await getInstitutions(supabase, institution.user_id);
	} catch (err) {
		return [] as PlaidInsitution[];
	}
};

export const getInstitutions = async (supabase: SupabaseClient, user_id: string | null) => {
	try {
		const { data, error } = await supabase.from('plaid_institutions').select('*').eq('user_id', user_id);
		if (error || !data) throw error;
		return data as PlaidInsitution[];
	} catch (err) {
		return [] as PlaidInsitution[];
	}
};
