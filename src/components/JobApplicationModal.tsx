import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDropzone } from 'react-dropzone'
import { X, Upload, FileText, User, Mail, Phone, Building, MessageSquare, Send, AlertCircle, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'
import { uploadResume, saveJobApplication, validateFile } from '../config/supabase'
import emailjs from '@emailjs/browser'
import { emailjsConfig, isEmailJSConfigured, getEmailJSStatus } from '../config/emailjs'

interface JobApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
  jobId: number
  department: string
  location: string
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  coverLetter: string
  linkedinUrl: string
  portfolioUrl: string
  expectedSalary: string
  availabilityDate: string
  workArrangement: 'onsite' | 'remote' | 'hybrid'
}

const JobApplicationModal = ({ isOpen, onClose, jobTitle, jobId, department, location }: JobApplicationModalProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [uploadError, setUploadError] = useState<string>('')
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    coverLetter: '',
    linkedinUrl: '',
    portfolioUrl: '',
    expectedSalary: '',
    availabilityDate: '',
    workArrangement: 'hybrid'
  })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false,
    onDrop: (acceptedFiles, rejectedFiles) => {
      setUploadError('')
      
      if (rejectedFiles.length > 0) {
        const error = rejectedFiles[0].errors[0]
        if (error.code === 'file-too-large') {
          setUploadError('File size must be less than 5MB')
        } else if (error.code === 'file-invalid-type') {
          setUploadError('Only PDF, DOC, and DOCX files are allowed')
        } else {
          setUploadError('Invalid file')
        }
        return
      }

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        const validation = validateFile(file)
        
        if (!validation.isValid) {
          setUploadError(validation.errors.join(', '))
          return
        }
        
        setUploadedFile(file)
        toast.success('Resume uploaded successfully!')
      }
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('🚀 Starting job application submission...')
    console.log('📋 Form data:', formData)
    console.log('📄 Uploaded file:', uploadedFile?.name, uploadedFile?.size)
    
    if (!uploadedFile) {
      console.error('❌ No resume file uploaded')
      toast.error('Please upload your resume')
      return
    }

    setIsSubmitting(true)

    try {
      // Check Supabase client initialization
      console.log('🔍 Checking Supabase client...')
      const { supabase } = await import('../config/supabase')
      if (!supabase) {
        console.error('❌ Supabase client not initialized')
        throw new Error('Supabase is not configured. Please check your environment variables.')
      }
      console.log('✅ Supabase client is ready')
      
      // Generate candidate ID
      const candidateId = `candidate_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      console.log('🆔 Generated candidate ID:', candidateId)
      
      // Upload resume file
      console.log('📤 Starting resume upload...')
      const resumeData = await uploadResume(uploadedFile, candidateId)
      console.log('✅ Resume uploaded successfully:', resumeData)
      
      // Prepare application data
      const applicationData = {
        candidate_id: candidateId,
        job_id: jobId,
        job_title: jobTitle,
        department,
        location,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        cover_letter: formData.coverLetter,
        linkedin_url: formData.linkedinUrl,
        portfolio_url: formData.portfolioUrl,
        expected_salary: formData.expectedSalary,
        availability_date: formData.availabilityDate,
        work_arrangement: formData.workArrangement,
        resume_url: resumeData.url,
        resume_filename: resumeData.fileName,
        resume_path: resumeData.path,
        application_date: new Date().toISOString(),
        status: 'pending' as const
      }
      console.log('📊 Application data prepared:', applicationData)

      // Save to Supabase
      console.log('💾 Saving to database...')
      await saveJobApplication(applicationData)
      console.log('✅ Application saved to database successfully')

      // Send email notification via EmailJS (if configured)
      console.log('📧 Checking EmailJS configuration...')
      const emailStatus = getEmailJSStatus()
      console.log('📧 EmailJS status:', emailStatus)
      
      if (isEmailJSConfigured()) {
        console.log('📧 EmailJS is configured, sending notification...')
        const emailData = {
          to_email: 'connect@insignyx.com',
          candidate_name: `${formData.firstName} ${formData.lastName}`,
          candidate_email: formData.email,
          candidate_phone: formData.phone,
          job_title: jobTitle,
          department,
          location,
          cover_letter: formData.coverLetter,
          linkedin_url: formData.linkedinUrl,
          portfolio_url: formData.portfolioUrl,
          expected_salary: formData.expectedSalary,
          availability_date: formData.availabilityDate,
          work_arrangement: formData.workArrangement,
          resume_filename: resumeData.fileName,
          application_date: new Date().toLocaleDateString()
        }
        
        try {
          await emailjs.send(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            emailData,
            emailjsConfig.publicKey
          )
          console.log('✅ Email notification sent successfully')
        } catch (emailError) {
          console.warn('⚠️ Email notification failed, but application was saved:', emailError)
          // Don't fail the entire process if email fails - application is already saved
        }
      } else {
        console.log('📧 EmailJS not configured, skipping email notification')
        console.log('📧 Configuration errors:', emailStatus.errors)
        // Application is still successful even without email notification
      }

      console.log('🎉 Application submission completed successfully!')
      toast.success('Application submitted successfully! We\'ll be in touch soon.')
      onClose()
      resetForm()
    } catch (error) {
      console.error('❌ Application submission failed:', error)
      
      // Provide more specific error messages
      let errorMessage = 'Failed to submit application. Please try again.'
      
      if (error instanceof Error) {
        if (error.message.includes('Supabase is not configured')) {
          errorMessage = 'Configuration error. Please contact support.'
        } else if (error.message.includes('Upload failed')) {
          errorMessage = 'Failed to upload resume. Please try again.'
        } else if (error.message.includes('Database save failed')) {
          errorMessage = 'Failed to save application. Please try again.'
        } else if (error.message.includes('File size')) {
          errorMessage = 'File size too large. Please use a smaller file.'
        } else if (error.message.includes('file type') || error.message.includes('extension')) {
          errorMessage = 'Invalid file type. Please upload PDF, DOC, or DOCX files only.'
        }
      }
      
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      coverLetter: '',
      linkedinUrl: '',
      portfolioUrl: '',
      expectedSalary: '',
      availabilityDate: '',
      workArrangement: 'hybrid'
    })
    setUploadedFile(null)
    setUploadError('')
    setCurrentStep(1)
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone
      case 2:
        return uploadedFile && !uploadError
      case 3:
        return formData.coverLetter.length > 50
      default:
        return false
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Apply for Position</h2>
                  <p className="text-gray-600">{jobTitle} • {department} • {location}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>
              
              {/* Progress Steps */}
              <div className="flex items-center mt-4 space-x-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step}
                    </div>
                    {step < 3 && (
                      <div className={`w-16 h-1 mx-2 ${
                        currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>Personal Info</span>
                <span>Resume Upload</span>
                <span>Cover Letter</span>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline mr-2" size={16} />
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline mr-2" size={16} />
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline mr-2" size={16} />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline mr-2" size={16} />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="inline mr-2" size={16} />
                      Current Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your current company (optional)"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        name="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Portfolio URL
                      </label>
                      <input
                        type="url"
                        name="portfolioUrl"
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Salary
                      </label>
                      <input
                        type="text"
                        name="expectedSalary"
                        value={formData.expectedSalary}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., $80,000 - $100,000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Availability Date
                      </label>
                      <input
                        type="date"
                        name="availabilityDate"
                        value={formData.availabilityDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Work Arrangement
                    </label>
                    <select
                      name="workArrangement"
                      value={formData.workArrangement}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="onsite">On-site</option>
                      <option value="remote">Remote</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Resume Upload */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      <FileText className="inline mr-2" size={16} />
                      Upload Your Resume *
                    </label>
                    
                    <div
                      {...getRootProps()}
                      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                        isDragActive 
                          ? 'border-blue-500 bg-blue-50' 
                          : uploadedFile 
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                      }`}
                    >
                      <input {...getInputProps()} />
                      
                      {uploadedFile ? (
                        <div className="space-y-2">
                          <CheckCircle className="mx-auto text-green-500" size={48} />
                          <p className="text-lg font-medium text-green-700">
                            {uploadedFile.name}
                          </p>
                          <p className="text-sm text-green-600">
                            File uploaded successfully! Click to replace.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="mx-auto text-gray-400" size={48} />
                          <p className="text-lg font-medium text-gray-700">
                            {isDragActive ? 'Drop your resume here' : 'Drag & drop your resume here'}
                          </p>
                          <p className="text-sm text-gray-500">
                            or click to browse files
                          </p>
                          <p className="text-xs text-gray-400">
                            Supported formats: PDF, DOC, DOCX (Max 5MB)
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {uploadError && (
                      <div className="mt-2 flex items-center text-red-600">
                        <AlertCircle size={16} className="mr-2" />
                        <span className="text-sm">{uploadError}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Cover Letter */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="inline mr-2" size={16} />
                      Cover Letter *
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      required
                      rows={8}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit for our team. Please include relevant experience and skills that align with the job requirements."
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      {formData.coverLetter.length}/500 characters (minimum 50 required)
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Previous
                </button>
                
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      isStepValid()
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid() || isSubmitting}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center ${
                      isStepValid() && !isSubmitting
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={16} />
                        Submit Application
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default JobApplicationModal