/*
  # Update bookings table structure

  1. Changes
    - Drop old date and time columns
    - Add new columns for the updated form:
      - service (text) - selected service type
      - preferred_datetime (text) - free text date/time preference
      - message (text, optional) - additional message from user
  
  2. Notes
    - Using IF EXISTS/NOT EXISTS to prevent errors
    - Preserving existing data where possible
*/

DO $$
BEGIN
  -- Add new columns if they don't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'service'
  ) THEN
    ALTER TABLE bookings ADD COLUMN service text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'preferred_datetime'
  ) THEN
    ALTER TABLE bookings ADD COLUMN preferred_datetime text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'message'
  ) THEN
    ALTER TABLE bookings ADD COLUMN message text;
  END IF;

  -- Drop old columns if they exist
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'date'
  ) THEN
    ALTER TABLE bookings DROP COLUMN date;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'time'
  ) THEN
    ALTER TABLE bookings DROP COLUMN time;
  END IF;
END $$;