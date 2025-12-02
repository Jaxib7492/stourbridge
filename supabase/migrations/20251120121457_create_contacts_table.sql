/*
  # Create contacts table for form submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact submission
      - `name` (text) - Full name of the person submitting the form
      - `email` (text) - Email address
      - `phone` (text) - Phone number
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Timestamp of when the form was submitted
      - `status` (text) - Status of the contact (default: 'new')

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for authenticated users (admin) to read all contacts
    - Add policy for anyone to insert new contacts (public form submission)

  3. Indexes
    - Add index on created_at for efficient sorting
    - Add index on status for filtering
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policy for anyone to submit contact forms (insert only)
CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy for authenticated users to view all contacts
CREATE POLICY "Authenticated users can view all contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy for authenticated users to update contact status
CREATE POLICY "Authenticated users can update contacts"
  ON contacts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS contacts_status_idx ON contacts(status);