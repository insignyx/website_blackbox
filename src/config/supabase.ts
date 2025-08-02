import { createClient } from '@supabase/supabase-js'

// Supabase Configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

// Validate configuration
let isConfigured = true

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase environment variables are missing!')
  console.warn('VITE_SUPABASE_URL:', supabaseUrl ? 'Present' : 'Missing')
  console.warn('VITE_SUPABASE_ANON_KEY:', supabaseAnonKey ? 'Present' : 'Missing')
  isConfigured = false
}

if (supabaseUrl === 'YOUR_SUPABASE_URL' || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') {
  console.warn('⚠️ Supabase environment variables contain placeholder values!')
  isConfigured = false
}

// Create Supabase client with fallback
export const supabase = isConfigured ? createClient(supabaseUrl, supabaseAnonKey) : null
export const isSupabaseConfigured = isConfigured

if (isConfigured) {
  console.log('✅ Supabase client initialized successfully')
} else {
  console.warn('⚠️ Supabase client not initialized - using fallback mode')
}

// Database Configuration
export const DATABASE_CONFIG = {
  tables: {
    jobApplications: 'job_applications',
    candidates: 'candidates'
  },
  storage: {
    resumesBucket: 'resumes'
  }
}

// File Upload Configuration
export const FILE_CONFIG = {
  maxSize: 5 * 1024 * 1024, // 5MB in bytes
  allowedTypes: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  allowedExtensions: ['.pdf', '.doc', '.docx']
}

// Types
export interface JobApplication {
  id?: string
  candidate_id: string
  job_id: number
  job_title: string
  department: string
  location: string
  first_name: string
  last_name: string
  email: string
  phone: string
  company?: string
  cover_letter: string
  linkedin_url?: string
  portfolio_url?: string
  expected_salary?: string
  availability_date?: string
  work_arrangement: 'onsite' | 'remote' | 'hybrid'
  resume_url: string
  resume_filename: string
  resume_path: string
  application_date: string
  status: 'pending' | 'reviewing' | 'interviewed' | 'hired' | 'rejected'
  created_at?: string
  updated_at?: string
}

export interface ResumeUploadResult {
  url: string
  fileName: string
  path: string
}

export interface FileValidationResult {
  isValid: boolean
  errors: string[]
}

// Helper Functions

/**
 * Validate uploaded file
 */
export const validateFile = (file: File): FileValidationResult => {
  const errors: string[] = []
  
  // Check file size
  if (file.size > FILE_CONFIG.maxSize) {
    errors.push(`File size must be less than ${FILE_CONFIG.maxSize / (1024 * 1024)}MB`)
  }
  
  // Check file type
  if (!FILE_CONFIG.allowedTypes.includes(file.type)) {
    errors.push('Only PDF, DOC, and DOCX files are allowed')
  }
  
  // Check file extension
  const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
  if (!FILE_CONFIG.allowedExtensions.includes(fileExtension)) {
    errors.push('Invalid file extension. Only .pdf, .doc, .docx are allowed')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Upload resume file to Supabase Storage
 */
export const uploadResume = async (file: File, candidateId: string): Promise<ResumeUploadResult> => {
  if (!supabase || !isSupabaseConfigured) {
    throw new Error('Supabase is not configured. Please check your configuration in src/config/supabase.ts')
  }
  
  try {
    // Validate file first
    const validation = validateFile(file)
    if (!validation.isValid) {
      throw new Error(validation.errors.join(', '))
    }
    
    // Generate unique filename
    const fileExtension = file.name.split('.').pop()
    const fileName = `${candidateId}_${Date.now()}.${fileExtension}`
    const filePath = `resumes/${fileName}`
    
    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(DATABASE_CONFIG.storage.resumesBucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })
    
    if (error) {
      throw new Error(`Upload failed: ${error.message}`)
    }
    
    // Get public URL
    const { data: urlData } = supabase.storage
      .from(DATABASE_CONFIG.storage.resumesBucket)
      .getPublicUrl(filePath)
    
    return {
      url: urlData.publicUrl,
      fileName: file.name,
      path: filePath
    }
  } catch (error) {
    console.error('Resume upload error:', error)
    throw error
  }
}

/**
 * Save job application to database
 */
export const saveJobApplication = async (applicationData: JobApplication): Promise<void> => {
  if (!supabase || !isSupabaseConfigured) {
    throw new Error('Supabase is not configured. Please check your configuration in src/config/supabase.ts')
  }
  
  try {
    const { error } = await supabase
      .from(DATABASE_CONFIG.tables.jobApplications)
      .insert([applicationData])
    
    if (error) {
      throw new Error(`Database save failed: ${error.message}`)
    }
  } catch (error) {
    console.error('Job application save error:', error)
    throw error
  }
}

/**
 * Get job applications (for admin use)
 */
export const getJobApplications = async (filters?: {
  jobId?: number
  status?: string
  department?: string
}): Promise<JobApplication[]> => {
  if (!supabase || !isSupabaseConfigured) {
    throw new Error('Supabase is not configured. Please check your configuration in src/config/supabase.ts')
  }
  
  try {
    let query = supabase
      .from(DATABASE_CONFIG.tables.jobApplications)
      .select('*')
      .order('created_at', { ascending: false })
    
    if (filters?.jobId) {
      query = query.eq('job_id', filters.jobId)
    }
    
    if (filters?.status) {
      query = query.eq('status', filters.status)
    }
    
    if (filters?.department) {
      query = query.eq('department', filters.department)
    }
    
    const { data, error } = await query
    
    if (error) {
      throw new Error(`Failed to fetch applications: ${error.message}`)
    }
    
    return data || []
  } catch (error) {
    console.error('Get job applications error:', error)
    throw error
  }
}

/**
 * Update application status (for admin use)
 */
export const updateApplicationStatus = async (
  applicationId: string, 
  status: JobApplication['status']
): Promise<void> => {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please check your configuration in src/config/supabase.ts')
  }
  
  try {
    const { error } = await supabase
      .from(DATABASE_CONFIG.tables.jobApplications)
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', applicationId)
    
    if (error) {
      throw new Error(`Failed to update status: ${error.message}`)
    }
  } catch (error) {
    console.error('Update application status error:', error)
    throw error
  }
}

/**
 * Delete resume file from storage
 */
export const deleteResume = async (filePath: string): Promise<void> => {
  if (!supabase) {
    throw new Error('Supabase is not configured. Please check your configuration in src/config/supabase.ts')
  }
  
  try {
    const { error } = await supabase.storage
      .from(DATABASE_CONFIG.storage.resumesBucket)
      .remove([filePath])
    
    if (error) {
      throw new Error(`Failed to delete resume: ${error.message}`)
    }
  } catch (error) {
    console.error('Delete resume error:', error)
    throw error
  }
}

// Database Schema (for reference)
/*
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

-- Create storage bucket for resumes
INSERT INTO storage.buckets (id, name, public) VALUES ('resumes', 'resumes', true);

-- Create storage policy for resumes (allow public read, authenticated upload)
CREATE POLICY "Public can view resumes" ON storage.objects FOR SELECT USING (bucket_id = 'resumes');
CREATE POLICY "Anyone can upload resumes" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'resumes');
*/