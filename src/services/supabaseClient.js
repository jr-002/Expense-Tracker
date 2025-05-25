import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helper functions
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Database helper functions
export const fetchCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');
  return { data, error };
};

export const fetchExpenses = async () => {
  const { data, error } = await supabase
    .from('expenses')
    .select(`
      *,
      categories (
        name
      )
    `)
    .order('date', { ascending: false });
  return { data, error };
};

export const createExpense = async (expense) => {
  const { data, error } = await supabase
    .from('expenses')
    .insert([expense])
    .select()
    .single();
  return { data, error };
};

export const updateExpense = async (id, updates) => {
  const { data, error } = await supabase
    .from('expenses')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  return { data, error };
};

export const deleteExpense = async (id) => {
  const { error } = await supabase
    .from('expenses')
    .delete()
    .eq('id', id);
  return { error };
};

export const createCategory = async (category) => {
  const { data, error } = await supabase
    .from('categories')
    .insert([category])
    .select()
    .single();
  return { data, error };
};