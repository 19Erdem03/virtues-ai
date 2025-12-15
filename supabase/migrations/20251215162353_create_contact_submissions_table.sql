/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's name
      - `email` (text) - Contact's email address
      - `business_name` (text, nullable) - Optional business name
      - `bottleneck` (text) - Description of the biggest bottleneck
      - `created_at` (timestamptz) - Timestamp of submission
      - `status` (text) - Status of the submission (default: 'new')
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert their own submissions
    - Add policy for authenticated admin users to view all submissions

  3. Important Notes
    - Form submissions are public (no auth required) to allow visitors to contact
    - Status field helps track which submissions have been reviewed
    - Email validation should be handled on the client side
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  business_name text,
  bottleneck text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to view all submissions (for admins)
CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update submission status (for admins)
CREATE POLICY "Authenticated users can update submission status"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index on created_at for efficient queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON contact_submissions(status);