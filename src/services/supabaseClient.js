import { createClient } from '@supabase/supabase-js';

// IMPORTANT: Replace with your actual Supabase URL and Anon Key
// You should store these in environment variables (.env.local)
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

if (supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') {
  console.warn('Supabase URL or Anon Key is not set. Please configure them in your .env.local file.');
  // Optionally, you could throw an error here in a production build
  // throw new Error('Supabase environment variables are not set.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

