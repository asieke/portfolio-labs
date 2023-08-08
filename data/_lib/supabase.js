import dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.PUBLIC_SUPABASE_SERVICE_ROLE_KEY;

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, { auth: { persistSession: false } });
