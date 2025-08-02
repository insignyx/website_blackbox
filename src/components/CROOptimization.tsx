import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Phone, Mail, Calendar, CheckCircle, Star, Users, TrendingUp, Award, Globe, Clock, Shield } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface CTAVariant {
  id: string
  text: string
  style: string
  icon?: React.ReactNode
  description?: string
}

interface FormField {
  name: string
  label: string
  type: string
  required: boolean
  placeholder: string
  options?: string[]
}

interface CROOptimizationProps {
  variant?: 'default' | 'enterprise' | 'startup' | 'global'
  showTestimonials?: boolean
  showTrustSignals?: boolean
  formType?: 'consultation' | 'assessment' | 'demo' | 'contact'
}

const CROOptimization = ({ 
  variant = 'default', 
  showTestimonials = true, 
  showTrustSignals = true,
  formType = 'consultation'
}: CROOptimizationProps) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({})
  const [currentCTAVariant, setCurrentCTAVariant] = useState(0)

  // A/B Testing CTA Variants
  const ctaVariants: CTAVariant[] = [
    {
      id: 'urgency',
      text: 'Get Free AI Strategy Session Today',
      style: 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600',
      icon: <Clock size={18} />,
      description: 'Limited slots available this month'
    },
    {
      id: 'value',
      text: 'Unlock $2M+ in AI ROI Potential',
      style: 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600',
      icon: <TrendingUp size={18} />,
      description: 'See how much your business could save'
    },
    {
      id: 'authority',
      text: 'Join 500+ Enterprise Leaders',
      style: 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600',
      icon: <Award size={18} />,
      description: 'Trusted by Fortune 500 companies'
    },
    {
      id: 'risk-free',
      text: 'Risk-Free AI Assessment',
      style: 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
      icon: <Shield size={18} />,
      description: '100% money-back guarantee'
    }
  ]

  const formFields: Record<string, FormField[]> = {
    consultation: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'John Smith' },
      { name: 'email', label: 'Business Email', type: 'email', required: true, placeholder: 'john@company.com' },
      { name: 'company', label: 'Company Name', type: 'text', required: true, placeholder: 'Your Company' },
      { name: 'role', label: 'Your Role', type: 'select', required: true, placeholder: 'Select your role', 
        options: ['CEO/Founder', 'CTO/VP Engineering', 'Head of AI/Data', 'IT Director', 'Business Development', 'Other'] },
      { name: 'employees', label: 'Company Size', type: 'select', required: true, placeholder: 'Select company size',
        options: ['1-50', '51-200', '201-1000', '1000-5000', '5000+'] },
      { name: 'service', label: 'Primary Interest', type: 'select', required: true, placeholder: 'Select service',
        options: ['AI Implementation', 'Cloud Migration', 'Big Data Analytics', 'Machine Learning', 'Data Strategy', 'Multiple Services'] },
      { name: 'timeline', label: 'Project Timeline', type: 'select', required: false, placeholder: 'When do you want to start?',
        options: ['Immediately', 'Within 3 months', '3-6 months', '6-12 months', 'Just exploring'] },
      { name: 'budget', label: 'Budget Range', type: 'select', required: false, placeholder: 'Select budget range',
        options: ['Under $50K', '$50K-$200K', '$200K-$500K', '$500K-$1M', '$1M+', 'Not sure yet'] },
      { name: 'challenges', label: 'Current Challenges', type: 'textarea', required: false, placeholder: 'Tell us about your current challenges and goals...' }
    ],
    assessment: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'John Smith' },
      { name: 'email', label: 'Business Email', type: 'email', required: true, placeholder: 'john@company.com' },
      { name: 'company', label: 'Company Name', type: 'text', required: true, placeholder: 'Your Company' },
      { name: 'industry', label: 'Industry', type: 'select', required: true, placeholder: 'Select industry',
        options: ['Technology', 'Healthcare', 'Financial Services', 'Manufacturing', 'Retail', 'Government', 'Other'] },
      { name: 'dataVolume', label: 'Monthly Data Volume', type: 'select', required: true, placeholder: 'Select data volume',
        options: ['< 1TB', '1-10TB', '10-100TB', '100TB-1PB', '> 1PB'] },
      { name: 'currentTools', label: 'Current AI/ML Tools', type: 'text', required: false, placeholder: 'e.g., TensorFlow, AWS SageMaker, etc.' },
      { name: 'goals', label: 'AI Goals', type: 'textarea', required: true, placeholder: 'What do you want to achieve with AI?' }
    ],
    demo: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'John Smith' },
      { name: 'email', label: 'Business Email', type: 'email', required: true, placeholder: 'john@company.com' },
      { name: 'company', label: 'Company Name', type: 'text', required: true, placeholder: 'Your Company' },
      { name: 'role', label: 'Your Role', type: 'text', required: true, placeholder: 'Your job title' },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: false, placeholder: '+1 (555) 123-4567' },
      { name: 'demoType', label: 'Demo Interest', type: 'select', required: true, placeholder: 'What would you like to see?',
        options: ['AI Platform Demo', 'Cloud Migration Tools', 'Big Data Analytics', 'Custom Solution', 'All Solutions'] },
      { name: 'preferredTime', label: 'Preferred Time', type: 'select', required: false, placeholder: 'Best time for demo',
        options: ['Morning (9-12 EST)', 'Afternoon (12-5 EST)', 'Evening (5-8 EST)', 'Flexible'] }
    ]
  }

  const trustSignals = [
    { icon: <Users size={20} />, text: '500+ Enterprise Clients', subtext: 'Fortune 500 companies trust us' },
    { icon: <Award size={20} />, text: '99.5% Client Satisfaction', subtext: 'Consistently rated 5 stars' },
    { icon: <TrendingUp size={20} />, text: '$2B+ in Client ROI', subtext: 'Proven business impact' },
    { icon: <Globe size={20} />, text: '50+ Countries Served', subtext: 'Global delivery expertise' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      company: 'TechCorp Global',
      content: 'Insignyx transformed our data strategy and delivered 300% ROI within 6 months. Their expertise is unmatched.',
      rating: 5,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20woman%20executive%20headshot%20corporate%20portrait&image_size=square'
    },
    {
      name: 'Michael Chen',
      role: 'VP of Innovation',
      company: 'FinanceFirst Bank',
      content: 'The AI solutions from Insignyx revolutionized our risk management. Exceptional team and results.',
      rating: 5,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20man%20executive%20headshot%20corporate%20portrait&image_size=square'
    }
  ]

  const currentCTA = ctaVariants[currentCTAVariant]
  const fields = formFields[formType] || formFields.consultation

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Track conversion event
    console.log('Form submitted:', formData)
    // Implement form submission logic
  }

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {variant === 'enterprise' ? 'Transform Your Enterprise with AI' :
             variant === 'startup' ? 'Scale Your Startup with AI' :
             variant === 'global' ? 'Global AI Solutions for Every Market' :
             'Ready to Accelerate Your AI Journey?'}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {variant === 'enterprise' ? 'Join Fortune 500 companies leveraging our AI expertise to drive unprecedented growth and efficiency.' :
             variant === 'startup' ? 'Get enterprise-grade AI solutions at startup-friendly pricing with flexible engagement models.' :
             variant === 'global' ? 'Serving clients across 50+ countries with localized expertise and 24/7 global support.' :
             'Get expert guidance, proven strategies, and measurable results from AI leaders trusted by global enterprises.'}
          </p>

          {/* Dynamic CTA Button */}
          <motion.div
            key={currentCTA.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <button
              onClick={() => document.getElementById('cro-form')?.scrollIntoView({ behavior: 'smooth' })}
              className={`${currentCTA.style} text-white px-12 py-6 rounded-full font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto group`}
            >
              {currentCTA.icon && <span className="mr-3">{currentCTA.icon}</span>}
              {currentCTA.text}
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            {currentCTA.description && (
              <p className="text-sm text-gray-600 mt-3 font-medium">
                {currentCTA.description}
              </p>
            )}
          </motion.div>

          {/* CTA Variant Selector (for testing) */}
          <div className="flex justify-center gap-2 mb-8">
            {ctaVariants.map((variant, index) => (
              <button
                key={variant.id}
                onClick={() => setCurrentCTAVariant(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentCTAVariant ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Trust Signals */}
        {showTrustSignals && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {signal.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{signal.text}</h3>
                <p className="text-sm text-gray-600">{signal.subtext}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Main Form Section */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
            id="cro-form"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {formType === 'consultation' ? 'Schedule Your Free Strategy Session' :
                 formType === 'assessment' ? 'Get Your Free AI Readiness Assessment' :
                 formType === 'demo' ? 'Book Your Personalized Demo' :
                 'Get Started Today'}
              </h3>
              <p className="text-gray-600">
                {formType === 'consultation' ? 'Get expert insights tailored to your business needs' :
                 formType === 'assessment' ? 'Discover your AI potential and roadmap' :
                 formType === 'demo' ? 'See our solutions in action with your use case' :
                 'Let\'s discuss how we can help you succeed'}
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              {fields.map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  
                  {field.type === 'select' ? (
                    <select
                      required={field.required}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((option, idx) => (
                        <option key={idx} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      required={field.required}
                      placeholder={field.placeholder}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                {formType === 'consultation' ? 'Schedule Free Session' :
                 formType === 'assessment' ? 'Get Free Assessment' :
                 formType === 'demo' ? 'Book Demo Now' :
                 'Get Started'}
                <ArrowRight className="ml-2" size={18} />
              </motion.button>
            </form>

            {/* Trust Elements */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Shield className="mr-2 text-green-500" size={16} />
                  100% Secure
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 text-blue-500" size={16} />
                  Quick Response
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 text-purple-500" size={16} />
                  No Commitment
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Benefits */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get:</h4>
              <div className="space-y-4">
                {[
                  'Personalized AI strategy roadmap',
                  'ROI projections and business case',
                  'Technology recommendations',
                  'Implementation timeline',
                  'Risk assessment and mitigation',
                  'Next steps and action plan'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            {showTestimonials && (
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    className="bg-white rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Alternative Contact Methods */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Prefer to Talk Directly?</h4>
              <div className="space-y-3">
                <a
                  href="tel:+1-555-123-4567"
                  className="flex items-center p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                >
                  <Phone className="mr-3" size={20} />
                  <div>
                    <div className="font-semibold">Call Us Now</div>
                    <div className="text-sm opacity-90">+1 (555) 123-4567</div>
                  </div>
                </a>
                <a
                  href="mailto:contact@insignyx.com"
                  className="flex items-center p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                >
                  <Mail className="mr-3" size={20} />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-sm opacity-90">contact@insignyx.com</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Urgency & Scarcity Elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl border border-orange-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            🔥 Limited Time: Free AI Strategy Sessions
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Only <span className="font-bold text-red-600">12 slots remaining</span> this month for our comprehensive AI strategy sessions.
            <br />Don't miss your chance to get expert guidance worth $5,000 - completely free.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="mr-2 text-orange-500" size={16} />
              Sessions filling fast
            </div>
            <div className="flex items-center">
              <Users className="mr-2 text-blue-500" size={16} />
              500+ companies served
            </div>
            <div className="flex items-center">
              <Award className="mr-2 text-purple-500" size={16} />
              98% satisfaction rate
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CROOptimization