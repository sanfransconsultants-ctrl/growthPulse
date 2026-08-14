import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Loud console warning instead of a silent blank page -- this is the
  // Supabase equivalent of the old "VITE_BASE44_APP_ID not set" problem.
  console.error(
    '[supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. ' +
    'Create a .env.local file (see .env.example) with your Supabase project values.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);