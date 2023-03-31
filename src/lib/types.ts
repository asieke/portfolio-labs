import type { Database } from './database';

export interface ErrorMessage {
	message?: string;
	errors?: string[];
	// Add null as a possible type
}

export type ProfilesInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfilesRow = Database['public']['Tables']['profiles']['Row'];
