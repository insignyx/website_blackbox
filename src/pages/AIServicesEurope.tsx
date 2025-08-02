import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Brain, Globe, Phone, Mail, CheckCircle, Star, Building, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import Breadcrumb from '../components/Breadcrumb'

const AIServicesEurope = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'AI Services Europe', url: '/ai-services-europe' }
  ]

  const faqData = [
    {
      question: 'Why choose Insignyx for AI implementation in Europe?',
      answer: 'We offer GDPR-compliant AI solutions with deep understanding of European regulations, multi-language support, and cost-effective delivery with 24/7 European time zone coverage.'
    },
    {
      question: 'Do you provide on-site AI consulting across Europe?',
      answer: 'Yes, we offer on-site AI consulting across major European cities including London, Berlin, Paris, Amsterdam, and Zurich with dedicated European project managers and local partnerships.'
    },
    {
      question: 'What European compliance standards do you follow?',
      answer: 'We ensure full compliance with GDPR, AI Act, ISO 27001, and country-specific regulations while implementing AI solutions for European enterprises across all EU member states.'
    },
    {
      question: 'What languages do you support for European clients?',
      answer: 'We provide AI consulting and support in English, German, French, Spanish, Italian, Dutch, and other European languages with native-speaking consultants and localized solutions.'
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Insignyx Technologies - AI Services Europe",
    "description": "Leading GDPR-compliant AI implementation and machine learning consulting services for European enterprises. Expert AI solutions with European market expertise and multi-language support.",
    "url": "https://insignyx.com/ai-services-europe",
    "telephone": "+44-20-1234-5678",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EU",
      "addressRegion": "European Union"
    },
    "areaServed": [
      "Europe", "United Kingdom", "Germany", "France", "Netherlands", "Switzerland", "Italy", "Spain", "Belgium", "Austria"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services Europe",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "GDPR-Compliant AI Solutions",
            "description": "AI implementations fully compliant with European data protection regulations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-Language AI Consulting",
            "description": "AI consulting services in multiple European languages with local expertise"
          }
        }
      ]
    }
  }

  const europeServices = [
    {
      title: 'GDPR-Compliant AI',
      description: 'AI solutions designed from ground-up for European data protection regulations with privacy-by-design principles.',
      features: ['Data Minimization', 'Right to Explanation', 'Privacy Impact Assessment', 'Cross-border Data Handling']
    },
    {
      title: 'Multi-Language AI',
      description: 'AI systems supporting multiple European languages with cultural nuances and local market understanding.',
      features: ['NLP in 15+ Languages', 'Cultural Adaptation', 'Local Market Insights', 'Regional Customization']
    },
    {
      title: 'EU AI Act Compliance',
      description: 'Future-ready AI solutions aligned with upcoming EU AI Act requirements and ethical AI principles.',
      features: ['Risk Assessment', 'Algorithmic Transparency', 'Human Oversight', 'Bias Mitigation']
    }
  ]

  const europeStats = [
    { number: '100+', label: 'European Clients' },
    { number: '15+', label: 'EU Countries Served' },
    { number: '100%', label: 'GDPR Compliance Rate' }
  ]

  const testimonials = [
    {
      name: 'Dr. Klaus Mueller',
      company: 'TechInnovate GmbH',
      role: 'Chief Data Officer',
      content: 'Insignyx delivered outstanding AI solutions while ensuring full GDPR compliance. Their understanding of European regulations and multi-cultural approach was exceptional.',
      rating: 5
    },
    {
      name: 'Marie Dubois',
      company: 'FinanceEurope SA',
      role: 'Head of Digital Innovation',
      content: 'Working with Insignyx was seamless across multiple European markets. They provided world-class AI expertise with the regulatory knowledge essential for European financial services.',
      rating: 5
    }
  ]

  const europeanCities = [
    { name: 'London', desc: 'Financial Services AI', flag: '🇬🇧' },
    { name: 'Berlin', desc: 'Industrial AI Solutions', flag: '🇩🇪' },
    { name: 'Paris', desc: 'Luxury & Retail AI', flag: '🇫🇷' },
    { name: 'Amsterdam', desc: 'Logistics & Supply Chain', flag: '🇳🇱' },
    { name: 'Zurich', desc: 'Banking & Insurance AI', flag: '🇨🇭' },
    { name: 'Milan', desc: 'Fashion & Design AI', flag: '🇮🇹' }
  ]

  const languages = [
    'English', 'German', 'French', 'Spanish', 'Italian', 'Dutch', 'Portuguese', 'Swedish', 'Danish', 'Finnish'
  ]

  return (
    <div className="pt-16">
      <SEOHead
        title="AI Services Europe | GDPR-Compliant Machine Learning Consulting | Insignyx"
        description="Leading GDPR-compliant AI implementation and machine learning consulting services for European enterprises. Expert AI solutions with European market expertise and multi-language support."
        keywords="AI services Europe, GDPR compliant AI, machine learning consulting EU, AI implementation Europe, artificial intelligence consulting European Union, AI strategy Europe, EU AI Act compliance"
        canonicalUrl="https://insignyx.com/ai-services-europe"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
        faqData={faqData}
        hreflang={[
          { lang: 'en-gb', url: 'https://insignyx.com/ai-services-europe' },
          { lang: 'de', url: 'https://insignyx.com/ai-services-europe' },
          { lang: 'fr', url: 'https://insignyx.com/ai-services-europe' },
          { lang: 'es', url: 'https://insignyx.com/ai-services-europe' },
          { lang: 'it', url: 'https://insignyx.com/ai-services-europe' },
          { lang: 'nl', url: 'https://insignyx.com/ai-services-europe' }
        ]}
      />
      
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
              <span className="text-blue-400 font-semibold">European Union</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services in
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Europe
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your European enterprise with GDPR-compliant AI solutions. 
              Global expertise, local understanding, and multi-language support across the EU.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                Get Free GDPR-Compliant AI Assessment
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="tel:+44-20-1234-5678"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2" size={18} />
                Call European Office
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* European Cities We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Major European Cities We Serve
            </h2>
            <p className="text-xl text-gray-600">
              On-site AI consulting across Europe's business capitals
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {europeanCities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{city.flag}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{city.name}</h3>
                <p className="text-gray-600 text-sm">{city.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Multi-Language AI Support
            </h2>
            <p className="text-xl text-gray-600">
              AI consulting and solutions in your preferred European language
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-colors"
              >
                <span className="font-semibold text-gray-800">{language}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* European Services */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Solutions for European Enterprises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI services designed for European business environment and regulatory requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {europeServices.map((service, index) => (
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

      {/* European Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our European Market Success</h2>
            <p className="text-xl text-blue-200">Delivering AI excellence across Europe</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {europeStats.map((stat, index) => (
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

      {/* European Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What European Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from across the European Union
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

      {/* GDPR & Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              European Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600">
              AI solutions built for European regulatory environment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'GDPR', desc: 'Data Protection Compliance', icon: '🔒' },
              { title: 'EU AI Act', desc: 'Future-Ready AI Solutions', icon: '⚖️' },
              { title: 'ISO 27001', desc: 'Information Security', icon: '🛡️' },
              { title: 'Privacy by Design', desc: 'Built-in Data Protection', icon: '🔐' }
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
              Ready to Transform Your European Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free GDPR-compliant AI assessment and discover how our solutions can drive your success across Europe.
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
                href="mailto:europe@insignyx.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                <Mail className="mr-2" size={18} />
                Email European Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AIServicesEurope