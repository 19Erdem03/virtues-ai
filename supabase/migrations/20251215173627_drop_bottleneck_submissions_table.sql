/*
  # Drop bottleneck submissions table

  1. Changes
    - Drop `bottleneck_submissions` table and all associated objects
    - This table is no longer needed
  
  2. Security
    - Removes all RLS policies associated with the table
*/

DROP TABLE IF EXISTS bottleneck_submissions CASCADE;
