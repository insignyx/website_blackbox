import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Brain, Globe, Phone, Mail, CheckCircle, Star, Building, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import Breadcrumb from '../components/Breadcrumb'

const AIServicesUS = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'AI Services United States', url: '/ai-services-us' }
  ]

  const faqData = [
    {
      question: 'Why choose Insignyx for AI implementation in the US?',
      answer: 'We combine global AI expertise with deep understanding of US market regulations, offering cost-effective solutions with 24/7 support and proven track record with Fortune 500 companies.'
    },
    {
      question: 'Do you provide on-site AI consulting in the United States?',
      answer: 'Yes, we offer on-site AI consulting across major US cities including New York, San Francisco, Los Angeles, Chicago, and Boston with dedicated US-based project managers.'
    },
    {
      question: 'What AI compliance standards do you follow in the US?',
      answer: 'We ensure compliance with US regulations including GDPR, CCPA, HIPAA, SOX, and industry-specific standards while implementing AI solutions for American enterprises.'
    },
    {
      question: 'What industries do you serve in the United States?',
      answer: 'We serve healthcare, financial services, retail, manufacturing, technology, and government sectors across the US with specialized AI solutions tailored to American market needs.'
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Insignyx Technologies - AI Services United States",
    "description": "Leading AI implementation and machine learning consulting services for US enterprises. Expert AI solutions with American market expertise and global delivery capabilities.",
    "url": "https://insignyx.com/ai-services-us",
    "telephone": "+1-555-123-4567",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Multiple States"
    },
    "areaServed": [
      "United States", "New York", "California", "Texas", "Florida", "Illinois", "Washington"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services United States",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise AI Implementation US",
            "description": "Custom AI solutions for Fortune 500 companies and US enterprises"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machine Learning Consulting US",
            "description": "Advanced ML model development and deployment for American businesses"
          }
        }
      ]
    }
  }

  const usServices = [
    {
      title: 'Enterprise AI Strategy',
      description: 'Comprehensive AI roadmaps for Fortune 500 companies with ROI-focused implementation and scalable architecture.',
      features: ['AI Maturity Assessment', 'Technology Roadmap', 'Change Management', 'Executive Training']
    },
    {
      title: 'Regulatory Compliant AI',
      description: 'AI solutions designed for US regulatory environment including healthcare, finance, and government sectors.',
      features: ['HIPAA Compliance', 'SOX Compliance', 'GDPR/CCPA Ready', 'Audit Trail Systems']
    },
    {
      title: 'Advanced Machine Learning',
      description: 'Cutting-edge ML solutions leveraging latest algorithms and cloud-native architectures for US market.',
      features: ['Deep Learning Models', 'MLOps Pipelines', 'Real-time Inference', 'Model Monitoring']
    }
  ]

  const usStats = [
    { number: '50+', label: 'US Fortune 500 Clients' },
    { number: '200+', label: 'US AI Projects' },
    { number: '99.5%', label: 'Client Retention Rate' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp America',
      role: 'Chief Technology Officer',
      content: 'Insignyx delivered exceptional AI solutions that transformed our operations. Their understanding of US market dynamics and regulatory requirements was outstanding.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'HealthTech Solutions',
      role: 'VP of Innovation',
      content: 'Working with Insignyx was seamless. They provided world-class AI expertise with the cultural understanding and compliance knowledge essential for US healthcare.',
      rating: 5
    }
  ]

  const usCities = [
    { name: 'New York', desc: 'Financial Services AI' },
    { name: 'San Francisco', desc: 'Tech Startup Solutions' },
    { name: 'Los Angeles', desc: 'Entertainment & Media AI' },
    { name: 'Chicago', desc: 'Manufacturing Intelligence' },
    { name: 'Boston', desc: 'Healthcare & Biotech AI' },
    { name: 'Seattle', desc: 'Cloud-Native AI Solutions' }
  ]

  return (
    <div className="pt-16">
      <SEOHead
        title="AI Services United States | Enterprise Machine Learning Consulting | Insignyx"
        description="Leading AI implementation and machine learning consulting services for US enterprises. Expert AI solutions for Fortune 500 companies with American market expertise and global delivery capabilities."
        keywords="AI services United States, machine learning consulting US, AI implementation USA, enterprise AI solutions US, artificial intelligence consulting America, AI strategy US, deep learning services USA"
        canonicalUrl="https://insignyx.com/ai-services-us"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
        faqData={faqData}
        hreflang={[
          { lang: 'en-us', url: 'https://insignyx.com/ai-services-us' },
          { lang: 'en', url: 'https://insignyx.com/ai-services-us' }
        ]}
      />
      
      <Breadcrumb items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center mb-6">
              <Globe className="text-blue-400 mr-2" size={24} />
              <span className="text-blue-400 font-semibold">United States</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services in the
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                United States
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your American enterprise with cutting-edge AI solutions. 
              Global expertise, local understanding, and proven success with Fortune 500 companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                Get Free AI Strategy Session
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="tel:+1-555-123-4567"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2" size={18} />
                Call US Office
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* US Cities We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Major US Cities We Serve
            </h2>
            <p className="text-xl text-gray-600">
              On-site AI consulting across America's business hubs
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {usCities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Building className="mx-auto mb-4 text-blue-600" size={32} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{city.name}</h3>
                <p className="text-gray-600 text-sm">{city.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* US Services */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Solutions for US Enterprises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI services designed for American business environment and regulatory requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {usServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* US Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our US Market Success</h2>
            <p className="text-xl text-blue-200">Delivering AI excellence across America</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {usStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl text-purple-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* US Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What US Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from American enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-blue-600 font-semibold">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              US Compliance & Security Standards
            </h2>
            <p className="text-xl text-gray-600">
              AI solutions built for American regulatory environment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'HIPAA', desc: 'Healthcare AI Compliance', icon: '🏥' },
              { title: 'SOX', desc: 'Financial Reporting AI', icon: '📊' },
              { title: 'GDPR/CCPA', desc: 'Data Privacy Protection', icon: '🔒' },
              { title: 'FedRAMP', desc: 'Government AI Solutions', icon: '🏛️' }
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-4">{standard.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{standard.title}</h3>
                <p className="text-gray-600 text-sm">{standard.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your US Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free AI strategy session and discover how our solutions can drive your success in the American market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                Schedule Free Strategy Session
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="mailto:us@insignyx.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                <Mail className="mr-2" size={18} />
                Email US Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AIServicesUS