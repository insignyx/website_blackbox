import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, Building, User, MessageSquare } from 'lucide-react'
import { toast } from 'sonner'

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: '',
    email: '',
    company: '',
    phone: '',
    // Step 2: Project Details
    service: '',
    budget: '',
    timeline: '',
    // Step 3: Message
    message: '',
    // Additional
    newsletter: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    toast.success('Thank you! We\'ll get back to you within 24 hours.')
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'connect@insignyx.com',
      subDetails: 'info@insignyx.com',
      action: 'mailto:connect@insignyx.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 9520531149 (India)',
      subDetails: '+1 908-315-2604 (US)',
      action: 'tel:+919520531149'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Dr. Vikram Sarabhai Road, Genda Cir',
      subDetails: 'Vadiwadi, Vadodara, Gujarat 390007',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
      subDetails: 'Sat: 10:00 AM - 4:00 PM',
      action: '#'
    }
  ]

  const offices = [
    {
      city: 'Vadodara (Headquarters)',
      address: 'Dr. Vikram Sarabhai Road, Genda Cir, Vadiwadi, Vadodara, Gujarat 390007',
      phone: '+91 9520531149',
      email: 'connect@insignyx.com'
    },
    {
      city: 'United States',
      address: 'Remote Operations Center',
      phone: '+1 908-315-2604',
      email: 'connect@insignyx.com'
    }
  ]

  const services = [
    'AI Implementation',
    'Cloud Migration',
    'Big Data Solutions',
    'Software Development',
    'IT Consulting',
    'Digital Transformation',
    'Other'
  ]

  const budgetRanges = [
    'Under $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K - $500K',
    '$500K+',
    'Not Sure'
  ]

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Just exploring'
  ]

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell us about yourself</h3>
              <p className="text-gray-600">Let's start with some basic information</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@company.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </motion.div>
        )
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Project Details</h3>
              <p className="text-gray-600">Help us understand your project requirements</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tell us more</h3>
              <p className="text-gray-600">Provide additional details about your project</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Please describe your project, goals, challenges, and any specific requirements..."
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Subscribe to our newsletter for tech insights and updates
              </label>
            </div>
          </motion.div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and 
              explore how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">Step {currentStep} of 3</span>
                  <span className="text-sm font-medium text-gray-600">{Math.round((currentStep / 3) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {renderStep()}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      currentStep === 1
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
                    >
                      Next
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center"
                    >
                      Send Message
                      <Send className="ml-2" size={20} />
                    </button>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 text-lg mb-8">
                  We're here to help! Reach out to us through any of the following channels, 
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={index}
                      href={info.action}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-gray-600 mb-1">{info.details}</p>
                      <p className="text-gray-500 text-sm">{info.subDetails}</p>
                    </motion.a>
                  )
                })}
              </div>

              {/* Quick Response Promise */}
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-lg font-bold text-blue-900">Quick Response Guarantee</h3>
                </div>
                <p className="text-blue-800">
                  We respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have offices across major tech hubs to serve you better.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mr-3 mt-1" size={20} />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-600 mr-3" size={20} />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-blue-600 mr-3" size={20} />
                    <span className="text-gray-600">{office.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our main office in Silicon Valley</p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Interactive Map</p>
              <p className="text-sm text-gray-500">123 Tech Street, Silicon Valley, CA 94000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact