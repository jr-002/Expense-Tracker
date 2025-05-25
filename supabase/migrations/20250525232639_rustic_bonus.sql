/*
  # Initial Schema Setup for Expense Tracker

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `description` (text)
      - `created_at` (timestamp)
      - `user_id` (uuid, foreign key to auth.users)
      - `is_default` (boolean) - to distinguish between system defaults and user-created categories
    
    - `expenses`
      - `id` (uuid, primary key)
      - `amount` (decimal)
      - `date` (date)
      - `description` (text)
      - `category_id` (uuid, foreign key to categories)
      - `user_id` (uuid, foreign key to auth.users)
      - `payment_method` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to:
      - Read their own data
      - Create new records
      - Update their own records
      - Delete their own records
    - Add policy for reading default categories
*/

-- Create categories table
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES auth.users(id),
  is_default boolean DEFAULT false,
  UNIQUE(name, user_id)
);

-- Create expenses table
CREATE TABLE expenses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  amount decimal NOT NULL CHECK (amount > 0),
  date date NOT NULL DEFAULT CURRENT_DATE,
  description text,
  category_id uuid REFERENCES categories(id) NOT NULL,
  user_id uuid REFERENCES auth.users(id) NOT NULL,
  payment_method text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;

-- Policies for categories
CREATE POLICY "Users can view their own categories and default categories"
  ON categories
  FOR SELECT
  USING (user_id = auth.uid() OR is_default = true);

CREATE POLICY "Users can create their own categories"
  ON categories
  FOR INSERT
  WITH CHECK (user_id = auth.uid() AND NOT is_default);

CREATE POLICY "Users can update their own categories"
  ON categories
  FOR UPDATE
  USING (user_id = auth.uid() AND NOT is_default);

CREATE POLICY "Users can delete their own categories"
  ON categories
  FOR DELETE
  USING (user_id = auth.uid() AND NOT is_default);

-- Policies for expenses
CREATE POLICY "Users can view their own expenses"
  ON expenses
  FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can create their own expenses"
  ON expenses
  FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own expenses"
  ON expenses
  FOR UPDATE
  USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own expenses"
  ON expenses
  FOR DELETE
  USING (user_id = auth.uid());

-- Insert default categories
INSERT INTO categories (name, description, is_default) VALUES
  ('Food & Dining', 'Restaurants, groceries, and food delivery', true),
  ('Transportation', 'Public transit, fuel, car maintenance', true),
  ('Housing', 'Rent, mortgage, utilities, maintenance', true),
  ('Entertainment', 'Movies, games, hobbies, streaming services', true),
  ('Shopping', 'Clothing, electronics, household items', true),
  ('Healthcare', 'Medical expenses, medications, insurance', true),
  ('Education', 'Tuition, books, courses, training', true),
  ('Personal Care', 'Haircuts, gym, beauty products', true),
  ('Travel', 'Vacations, business trips, accommodations', true),
  ('Bills & Utilities', 'Phone, internet, electricity, water', true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for expenses table
CREATE TRIGGER update_expenses_updated_at
  BEFORE UPDATE ON expenses
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();