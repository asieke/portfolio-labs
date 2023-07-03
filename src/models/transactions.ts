import type { SupabaseClient } from '@supabase/supabase-js';
import { sampleTransactions } from '$data/sample';

export const addTransactions = async (supabase: SupabaseClient, csv: string, id: number) => {
	try {
		const txn = sampleTransactions.map((t) => ({ ...t, portfolio_id: id }));
		await supabase.from('transactions').delete().match({ portfolio_id: id });
		const { data, error } = await supabase.from('transactions').insert(txn);
		console.log(data, error);
	} catch (e) {
		console.log(e);
	}
};
