//import the env variables with dotenv
import dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, { auth: { persistSession: false } });

export { supabase };
