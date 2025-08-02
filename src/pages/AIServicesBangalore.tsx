import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Brain, MapPin, Phone, Mail, CheckCircle, Star, Users, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import Breadcrumb from '../components/Breadcrumb'

const AIServicesBangalore = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'AI Services Bangalore', url: '/ai-services-bangalore' }
  ]

  const faqData = [
    {
      question: 'Why choose AI implementation services in Bangalore?',
      answer: 'Bangalore is India\'s Silicon Valley with access to top AI talent, advanced infrastructure, and proximity to leading tech companies. Our Bangalore team offers world-class AI solutions with local market understanding.'
    },
    {
      question: 'What AI technologies do you implement in Bangalore?',
      answer: 'We implement machine learning, deep learning, natural language processing, computer vision, predictive analytics, and intelligent automation solutions tailored for Bangalore-based enterprises.'
    },
    {
      question: 'Do you provide on-site AI consulting in Bangalore?',
      answer: 'Yes, we offer on-site AI consulting, workshops, and implementation support across Bangalore, including areas like Whitefield, Electronic City, and Koramangala.'
    },
    {
      question: 'What industries in Bangalore do you serve?',
      answer: 'We serve IT companies, startups, financial services, healthcare, e-commerce, and manufacturing companies across Bangalore with specialized AI solutions.'
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Insignyx Technologies - AI Services Bangalore",
    "description": "Leading AI implementation and machine learning consulting services in Bangalore. Expert AI solutions for enterprises in India's Silicon Valley.",
    "url": "https://insignyx.com/ai-services-bangalore",
    "telephone": "+91-80-4567-8900",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Whitefield Tech Park",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560066",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946
    },
    "areaServed": [
      "Bangalore", "Whitefield", "Electronic City", "Koramangala", "Indiranagar", "HSR Layout"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 12.9716,
        "longitude": 77.5946
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services Bangalore",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Machine Learning Consulting Bangalore",
            "description": "Custom ML model development and implementation for Bangalore enterprises"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Strategy Consulting Bangalore",
            "description": "AI roadmap and strategy development for Bangalore-based companies"
          }
        }
      ]
    }
  }

  const localServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for Bangalore enterprises with local data compliance and optimization.',
      features: ['Predictive Analytics', 'Recommendation Systems', 'Fraud Detection', 'Process Automation']
    },
    {
      title: 'AI Strategy Consulting',
      description: 'Comprehensive AI roadmaps tailored for Bangalore\'s competitive tech landscape.',
      features: ['AI Assessment', 'Technology Selection', 'Implementation Planning', 'ROI Analysis']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions supporting multiple Indian languages for local market reach.',
      features: ['Chatbots', 'Sentiment Analysis', 'Document Processing', 'Voice Recognition']
    }
  ]

  const bangaloreStats = [
    { number: '150+', label: 'Bangalore Projects' },
    { number: '50+', label: 'Local Enterprises' },
    { number: '95%', label: 'Client Satisfaction' }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStart Bangalore',
      role: 'CTO',
      content: 'Insignyx delivered exceptional AI solutions that transformed our Bangalore operations. Their local expertise made all the difference.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'FinTech Solutions',
      role: 'Head of Innovation',
      content: 'Working with Insignyx in Bangalore was seamless. They understand both global AI trends and local market needs perfectly.',
      rating: 5
    }
  ]

  return (
    <div className="pt-16">
      <SEOHead
        title="AI Services Bangalore | Machine Learning Consulting | Insignyx Technologies"
        description="Leading AI implementation and machine learning consulting services in Bangalore. Expert AI solutions for enterprises in India's Silicon Valley. Custom ML models, NLP, and AI strategy consulting."
        keywords="AI services Bangalore, machine learning consulting Bangalore, AI implementation Bangalore, ML solutions Bangalore, artificial intelligence Bangalore, AI consulting Bangalore, deep learning Bangalore, NLP services Bangalore"
        canonicalUrl="https://insignyx.com/ai-services-bangalore"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
        faqData={faqData}
        hreflang={[
          { lang: 'en-in', url: 'https://insignyx.com/ai-services-bangalore' },
          { lang: 'en-us', url: 'https://insignyx.com/ai-services-bangalore' }
        ]}
      />
      
      <Breadcrumb items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center mb-6">
              <MapPin className="text-cyan-400 mr-2" size={24} />
              <span className="text-cyan-400 font-semibold">Bangalore, Karnataka</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services in
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Bangalore
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your Bangalore-based enterprise with cutting-edge AI solutions. 
              Local expertise, global standards, and deep understanding of India's tech capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                Get Free AI Assessment
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="tel:+91-80-4567-8900"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2" size={18} />
                Call Bangalore Office
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Services */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Solutions for Bangalore Enterprises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI services designed for Bangalore's dynamic business environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {localServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
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

      {/* Bangalore Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Bangalore Impact</h2>
            <p className="text-xl text-blue-200">Delivering AI excellence in India's Silicon Valley</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {bangaloreStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl text-cyan-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Bangalore Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from local enterprises
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Bangalore Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free AI assessment and discover how our solutions can drive your success in Bangalore's competitive market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="mailto:bangalore@insignyx.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                <Mail className="mr-2" size={18} />
                Email Bangalore Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AIServicesBangalore