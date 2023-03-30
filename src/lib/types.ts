import type { Database } from './supabase';

export type ProfilesInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfilesRow = Database['public']['Tables']['profiles']['Row'];
