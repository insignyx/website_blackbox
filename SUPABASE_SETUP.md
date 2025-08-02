# Supabase Setup Guide for Job Application System

This guide will help you set up Supabase for the job application system with resume upload functionality.

## Prerequisites

- A Supabase account (free tier is sufficient)
- Basic understanding of SQL and database concepts

## Step 1: Create Supabase Project

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `insignyx-careers` (or your preferred name)
   - **Database Password**: Create a strong password
   - **Region**: Choose closest to your users
5. Click "Create new project"
6. Wait for the project to be ready (2-3 minutes)

## Step 2: Get Project Credentials

### Method 1: Project Settings (Recommended)
1. In your Supabase dashboard, click on your project
2. In the left sidebar, look for **Settings** (gear icon at the bottom)
3. Click on **API** from the settings menu
4. Look for the **Project Configuration** section
5. Copy the following values:
   - **Project URL** (e.g., `https://your-project.supabase.co`)
   - **anon public** key (starts with `eyJ...`)

**Visual Cues:**
- The anon key typically starts with `eyJ` and is quite long
- Look for a key labeled as "anon" or "public" (NOT "service_role")
- The API section should show multiple keys - use the **anon/public** one, not service_role

**Alternative Navigation:**
If you can't find "Settings → API", try:
- **Project Settings → API** (some dashboards use this path)
- Look for a **Configuration** or **Keys** section in the sidebar
- Check under **Database → Settings → API**

### Method 2: Project Dashboard
1. On your project's main dashboard page
2. Look for the **"Connect to your project"** section
3. Click on **"API Keys"** or **"Project API keys"
4. Copy the **URL** and **anon public** key

### Method 3: Alternative Navigation
1. Go to your project dashboard
2. Click the **Settings** icon (⚙️) in the left sidebar
3. Select **API** from the settings submenu
4. Find your **Project URL** and **anon public** key

**Troubleshooting:**

**Can't find the API section?**
- Make sure you're in the correct project (check project name at top)
- Try **Project Settings → API** instead of **Settings → API**
- Look for **Configuration**, **Keys**, or **Database Settings** in the sidebar
- The navigation might be slightly different based on your Supabase dashboard version
- Try refreshing the page if sections don't load properly

**Can't find the anon key?**
- Look for a key that starts with `eyJ` (this is typical for JWT tokens)
- The key should be labeled as "anon", "public", or "anonymous"
- **DO NOT use the "service_role" key** - this has admin privileges
- If you only see service_role, scroll down or look for a "Show API keys" button
- The anon key is usually the first one listed in the API keys section

**Still having trouble?**
- Try the Documentation method (Method 3) which often shows both keys clearly
- Contact Supabase support if the API section is completely missing
- Make sure your account has proper permissions for the project
- The API credentials are sometimes displayed on the main project dashboard

## Step 3: Update Configuration

1. Open `src/config/supabase.ts`
2. Replace the placeholder values:

```typescript
const supabaseUrl = 'https://your-project.supabase.co' // Your actual project URL
const supabaseAnonKey = 'your-anon-key-here' // Your actual anon key
```

## Step 4: Create Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy and paste the following SQL:

```sql
-- Create job_applications table
CREATE TABLE job_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  candidate_id TEXT NOT NULL,
  job_id INTEGER NOT NULL,
  job_title TEXT NOT NULL,
  department TEXT NOT NULL,
  location TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  cover_letter TEXT NOT NULL,
  linkedin_url TEXT,
  portfolio_url TEXT,
  expected_salary TEXT,
  availability_date TEXT,
  work_arrangement TEXT CHECK (work_arrangement IN ('onsite', 'remote', 'hybrid')) NOT NULL,
  resume_url TEXT NOT NULL,
  resume_filename TEXT NOT NULL,
  resume_path TEXT NOT NULL,
  application_date TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT CHECK (status IN ('pending', 'reviewing', 'interviewed', 'hired', 'rejected')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_job_applications_job_id ON job_applications(job_id);
CREATE INDEX idx_job_applications_status ON job_applications(status);
CREATE INDEX idx_job_applications_department ON job_applications(department);
CREATE INDEX idx_job_applications_email ON job_applications(email);
CREATE INDEX idx_job_applications_created_at ON job_applications(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert applications
CREATE POLICY "Anyone can submit job applications" 
ON job_applications FOR INSERT 
WITH CHECK (true);

-- Create policy for reading applications (admin only - you can modify this later)
CREATE POLICY "Service role can read all applications" 
ON job_applications FOR SELECT 
USING (auth.role() = 'service_role');
```

4. Click **Run** to execute the SQL

## Step 5: Set Up Storage for Resumes

1. In Supabase dashboard, go to **Storage**
2. Click **Create a new bucket**
3. Enter bucket details:
   - **Name**: `resumes`
   - **Public bucket**: ✅ (checked)
   - **File size limit**: `5MB`
   - **Allowed MIME types**: `application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document`
4. Click **Create bucket**

## Step 6: Configure Storage Policies

1. Go to **Storage** → **Policies**
2. Click **New Policy** for the `resumes` bucket
3. Create two policies:

### Policy 1: Allow Public Read
```sql
CREATE POLICY "Public can view resumes" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'resumes');
```

### Policy 2: Allow Public Upload
```sql
CREATE POLICY "Anyone can upload resumes" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'resumes');
```

## Step 7: Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the Career page
3. Click "Apply Now" on any job
4. Fill out the application form
5. Upload a test resume (PDF, DOC, or DOCX)
6. Submit the application

## Step 8: Verify Data Storage

1. In Supabase dashboard, go to **Table Editor**
2. Select `job_applications` table
3. You should see your test application data
4. Go to **Storage** → `resumes` bucket
5. You should see the uploaded resume file

## Optional: Set Up Email Template for EmailJS

If you haven't set up EmailJS yet, create a template with these variables:

```
Subject: New Job Application - {{job_title}}

New job application received:

Candidate: {{candidate_name}}
Email: {{candidate_email}}
Phone: {{candidate_phone}}
Position: {{job_title}}
Department: {{department}}
Location: {{location}}
Work Arrangement: {{work_arrangement}}
Expected Salary: {{expected_salary}}
Availability: {{availability_date}}

LinkedIn: {{linkedin_url}}
Portfolio: {{portfolio_url}}

Cover Letter:
{{cover_letter}}

Resume: {{resume_filename}}
Application Date: {{application_date}}
```

## Security Considerations

1. **Environment Variables**: Consider moving Supabase credentials to environment variables in production
2. **File Validation**: The system validates file types and sizes on the frontend
3. **Rate Limiting**: Consider implementing rate limiting for application submissions
4. **Data Privacy**: Ensure compliance with data protection regulations

## Troubleshooting

### Common Issues:

1. **"Invalid API key"**: Double-check your Supabase URL and anon key
2. **"Table doesn't exist"**: Ensure you ran the SQL commands in Step 4
3. **"Storage bucket not found"**: Verify the bucket name is exactly `resumes`
4. **File upload fails**: Check storage policies and bucket permissions
5. **RLS errors**: Ensure Row Level Security policies are correctly configured

### Debug Steps:

1. Check browser console for error messages
2. Verify Supabase dashboard for data insertion
3. Test API connections using Supabase client
4. Check storage bucket contents and policies

## Production Deployment

For production deployment:

1. Use environment variables for Supabase credentials
2. Set up proper authentication for admin access
3. Configure backup strategies
4. Monitor usage and performance
5. Set up proper error logging

## Support

If you encounter issues:

1. Check Supabase documentation: https://supabase.com/docs
2. Review error messages in browser console
3. Verify all configuration steps were completed
4. Test with different file types and sizes

---

**Estimated Setup Time**: 15-20 minutes

**Next Steps**: After setup, test the job application flow and verify data is being stored correctly in your Supabase dashboard.