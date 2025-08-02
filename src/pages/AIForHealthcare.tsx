import React from 'react'
import SEOHead from '../components/SEOHead'
import Breadcrumb, { BreadcrumbItem } from '../components/Breadcrumb'
import { Heart, Shield, Brain, Activity, Users, TrendingUp } from 'lucide-react'

const AIForHealthcare: React.FC = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Services', url: '/services' },
    { name: 'AI for Healthcare', url: '/ai-healthcare', isActive: true }
  ]

  const faqData = [
    {
      question: 'How can AI improve patient care in healthcare?',
      answer: 'AI enhances patient care through predictive analytics, early disease detection, personalized treatment plans, automated diagnostics, and real-time monitoring systems that help healthcare providers make more informed decisions.'
    },
    {
      question: 'What are the compliance requirements for AI in healthcare?',
      answer: 'Healthcare AI solutions must comply with HIPAA, FDA regulations, GDPR for international patients, and other healthcare data protection standards. We ensure all our AI implementations meet these regulatory requirements.'
    },
    {
      question: 'How long does it take to implement AI solutions in healthcare?',
      answer: 'Implementation timelines vary based on complexity, but typically range from 3-12 months. This includes data preparation, model development, testing, compliance validation, and staff training.'
    }
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'AI for Healthcare Solutions',
    'description': 'Comprehensive AI implementation services for healthcare organizations including predictive analytics, diagnostic AI, patient monitoring, and healthcare data analytics.',
    'provider': {
      '@type': 'Organization',
      'name': 'Insignyx Technologies'
    },
    'areaServed': ['India', 'United States', 'Europe', 'Southeast Asia'],
    'serviceType': 'Healthcare AI Solutions',
    'category': 'Artificial Intelligence',
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'price': 'Contact for pricing',
      'priceCurrency': 'USD'
    }
  }

  return (
    <>
      <SEOHead
        title="AI for Healthcare - Medical AI Solutions & Healthcare Analytics"
        description="Transform healthcare with AI solutions for patient care, diagnostic AI, predictive analytics, and medical data analysis. HIPAA-compliant AI implementation for hospitals and healthcare providers."
        keywords="AI for healthcare, medical AI solutions, healthcare analytics, diagnostic AI, patient monitoring AI, healthcare data analysis, HIPAA compliant AI, predictive healthcare analytics"
        canonicalUrl="https://insignyx.com/ai-healthcare"
        breadcrumbs={breadcrumbs}
        faqData={faqData}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbs} className="mb-8 text-blue-200" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  AI for <span className="text-blue-300">Healthcare</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Transform patient care with cutting-edge AI solutions. From predictive analytics to diagnostic AI, we help healthcare organizations improve outcomes while ensuring HIPAA compliance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                  <button className="border border-blue-300 hover:bg-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20healthcare%20AI%20technology%20medical%20equipment%20digital%20interface%20hospital%20setting%20futuristic%20clean%20professional&image_size=landscape_4_3"
                  alt="AI Healthcare Technology"
                  className="rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Transform Healthcare with AI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions help healthcare organizations improve patient outcomes, reduce costs, and enhance operational efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Predictive Patient Care</h3>
                <p className="text-gray-600">
                  AI-powered predictive analytics to identify at-risk patients, prevent complications, and optimize treatment plans for better outcomes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Diagnostic AI</h3>
                <p className="text-gray-600">
                  Advanced machine learning models for medical imaging analysis, early disease detection, and automated diagnostic assistance.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-time Monitoring</h3>
                <p className="text-gray-600">
                  Continuous patient monitoring systems with AI-driven alerts and automated response protocols for critical care.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">HIPAA Compliance</h3>
                <p className="text-gray-600">
                  All our AI solutions are designed with healthcare compliance in mind, ensuring HIPAA, GDPR, and other regulatory requirements are met.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Population Health</h3>
                <p className="text-gray-600">
                  AI-driven population health management to identify trends, manage chronic diseases, and improve community health outcomes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Streamline healthcare operations with AI-powered scheduling, resource optimization, and workflow automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI implementation in healthcare
              </p>
            </div>

            <div className="space-y-8">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Healthcare Organization?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how AI can improve patient outcomes and operational efficiency in your healthcare facility.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-blue-300 hover:bg-blue-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Healthcare AI Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIForHealthcare