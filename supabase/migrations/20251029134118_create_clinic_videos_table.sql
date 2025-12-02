/*
  # Create clinic videos table

  1. New Tables
    - `clinic_videos`
      - `id` (uuid, primary key) - Unique identifier for each video
      - `title` (text, required) - Title of the clinic video
      - `video_url` (text, required) - Public URL to the video file
      - `file_path` (text, required) - Storage path for the video file
      - `is_active` (boolean, default true) - Whether the video should be displayed
      - `created_at` (timestamptz, default now()) - When the video was uploaded
      - `updated_at` (timestamptz, default now()) - When the video was last updated

  2. Security
    - Enable RLS on `clinic_videos` table
    - Add policy for public read access to active videos
    - Add policy for authenticated users to insert videos
*/

CREATE TABLE IF NOT EXISTS clinic_videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  video_url text NOT NULL,
  file_path text NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE clinic_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active clinic videos"
  ON clinic_videos
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert clinic videos"
  ON clinic_videos
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update clinic videos"
  ON clinic_videos
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete clinic videos"
  ON clinic_videos
  FOR DELETE
  TO authenticated
  USING (true);