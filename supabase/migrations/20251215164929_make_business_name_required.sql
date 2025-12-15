/*
  # Update contact_submissions table to make business_name required

  1. Changes
    - Alter `business_name` column in `contact_submissions` table to be NOT NULL
    - This reflects the form requirement that business name is now mandatory
  
  2. Important Notes
    - This migration assumes the table exists and there are no existing NULL values
    - If there are existing NULL values, they will need to be handled before this migration
*/

-- Make business_name required (NOT NULL)
DO $$
BEGIN
  -- First, set a default value for any existing NULL entries (if any)
  UPDATE contact_submissions 
  SET business_name = 'Not provided' 
  WHERE business_name IS NULL;
  
  -- Then alter the column to be NOT NULL
  ALTER TABLE contact_submissions 
  ALTER COLUMN business_name SET NOT NULL;
END $$;