import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Cloud, MapPin, Phone, Mail, CheckCircle, Star, Building, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import Breadcrumb from '../components/Breadcrumb'

const CloudMigrationMumbai = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Cloud Migration Mumbai', url: '/cloud-migration-mumbai' }
  ]

  const faqData = [
    {
      question: 'Why choose cloud migration services in Mumbai?',
      answer: 'Mumbai is India\'s financial capital with stringent compliance requirements. Our Mumbai team specializes in secure cloud migrations for financial services, ensuring regulatory compliance and zero downtime.'
    },
    {
      question: 'Which cloud platforms do you support in Mumbai?',
      answer: 'We provide expert AWS and Microsoft Azure cloud migration services in Mumbai, with specialized expertise in financial services compliance and security requirements.'
    },
    {
      question: 'Do you provide on-site cloud migration support in Mumbai?',
      answer: 'Yes, we offer on-site cloud migration consulting and support across Mumbai, including BKC, Lower Parel, Andheri, and other business districts.'
    },
    {
      question: 'What industries in Mumbai do you serve?',
      answer: 'We specialize in serving financial services, banking, insurance, media, entertainment, and manufacturing companies across Mumbai with secure cloud migration solutions.'
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Insignyx Technologies - Cloud Migration Mumbai",
    "description": "Leading cloud migration and AWS/Azure consulting services in Mumbai. Expert cloud solutions for financial services and enterprises in India's commercial capital.",
    "url": "https://insignyx.com/cloud-migration-mumbai",
    "telephone": "+91-22-4567-8900",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bandra Kurla Complex",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400051",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0760,
      "longitude": 72.8777
    },
    "areaServed": [
      "Mumbai", "BKC", "Lower Parel", "Andheri", "Powai", "Navi Mumbai", "Thane"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 19.0760,
        "longitude": 72.8777
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cloud Migration Services Mumbai",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AWS Cloud Migration Mumbai",
            "description": "Secure AWS cloud migration services for Mumbai financial services and enterprises"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Azure Cloud Migration Mumbai",
            "description": "Microsoft Azure migration and optimization for Mumbai-based organizations"
          }
        }
      ]
    }
  }

  const localServices = [
    {
      title: 'Financial Services Cloud Migration',
      description: 'Specialized cloud migration for Mumbai\'s banking and financial sector with regulatory compliance.',
      features: ['RBI Compliance', 'Data Sovereignty', 'Zero Downtime Migration', 'Security Auditing']
    },
    {
      title: 'Enterprise Cloud Strategy',
      description: 'Comprehensive cloud adoption strategies tailored for Mumbai\'s diverse business landscape.',
      features: ['Cloud Assessment', 'Cost Optimization', 'Multi-Cloud Strategy', 'Disaster Recovery']
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Flexible hybrid cloud architectures for Mumbai enterprises with complex infrastructure needs.',
      features: ['On-Premise Integration', 'Cloud Bursting', 'Data Synchronization', 'Performance Monitoring']
    }
  ]

  const mumbaiStats = [
    { number: '200+', label: 'Mumbai Migrations' },
    { number: '75+', label: 'Financial Clients' },
    { number: '99.9%', label: 'Uptime Achieved' }
  ]

  const testimonials = [
    {
      name: 'Amit Patel',
      company: 'Mumbai Financial Corp',
      role: 'IT Director',
      content: 'Insignyx handled our complex cloud migration with zero downtime. Their understanding of Mumbai\'s financial regulations was exceptional.',
      rating: 5
    },
    {
      name: 'Sneha Desai',
      company: 'Media House Mumbai',
      role: 'CTO',
      content: 'The cloud migration transformed our operations. Insignyx\'s Mumbai team delivered beyond expectations with 24/7 support.',
      rating: 5
    }
  ]

  return (
    <div className="pt-16">
      <SEOHead
        title="Cloud Migration Mumbai | AWS Azure Consulting | Insignyx Technologies"
        description="Leading cloud migration and AWS/Azure consulting services in Mumbai. Expert cloud solutions for financial services and enterprises in India's commercial capital. Secure, compliant migrations."
        keywords="cloud migration Mumbai, AWS consulting Mumbai, Azure migration Mumbai, cloud services Mumbai, cloud migration financial services Mumbai, AWS migration Mumbai, Azure consulting Mumbai, cloud strategy Mumbai"
        canonicalUrl="https://insignyx.com/cloud-migration-mumbai"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
        faqData={faqData}
        hreflang={[
          { lang: 'en-in', url: 'https://insignyx.com/cloud-migration-mumbai' },
          { lang: 'en-us', url: 'https://insignyx.com/cloud-migration-mumbai' }
        ]}
      />
      
      <Breadcrumb items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center mb-6">
              <MapPin className="text-purple-400 mr-2" size={24} />
              <span className="text-purple-400 font-semibold">Mumbai, Maharashtra</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud Migration in
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mumbai
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Secure cloud migration services for Mumbai's financial and enterprise sectors. 
              Expert AWS and Azure migrations with regulatory compliance and zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                Get Free Cloud Assessment
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="tel:+91-22-4567-8900"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2" size={18} />
                Call Mumbai Office
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
              Cloud Solutions for Mumbai Enterprises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized cloud migration services for Mumbai's financial and commercial sectors
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <Cloud className="text-white" size={32} />
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

      {/* Mumbai Stats */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Mumbai Success</h2>
            <p className="text-xl text-purple-200">Delivering secure cloud migrations in India's financial capital</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {mumbaiStats.map((stat, index) => (
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

      {/* Local Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Mumbai Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from financial and enterprise clients
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
                  <p className="text-purple-600 font-semibold">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mumbai Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized cloud solutions for Mumbai's key sectors
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Building, title: 'Financial Services', desc: 'Banks, NBFCs, Insurance' },
              { icon: Shield, title: 'Compliance', desc: 'RBI, SEBI Regulations' },
              { icon: Cloud, title: 'Media & Entertainment', desc: 'Studios, Production Houses' },
              { icon: Building, title: 'Manufacturing', desc: 'Textiles, Pharmaceuticals' }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <industry.icon className="mx-auto mb-4 text-purple-600" size={48} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Migrate to Cloud in Mumbai?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get a free cloud assessment and discover how our secure migration services can transform your Mumbai business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="mailto:mumbai@insignyx.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center"
              >
                <Mail className="mr-2" size={18} />
                Email Mumbai Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CloudMigrationMumbai