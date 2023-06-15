import { createClient, SupabaseClient } from '@supabase/supabase-js';
const PUBLIC_SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL || '';
const PUBLIC_SUPABASE_ANON_KEY = process.env.PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export default supabase;
