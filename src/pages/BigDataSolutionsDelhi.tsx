import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Database, MapPin, Phone, Mail, CheckCircle, Star, Building2, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import Breadcrumb from '../components/Breadcrumb'

const BigDataSolutionsDelhi = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Big Data Solutions Delhi', url: '/big-data-solutions-delhi' }
  ]

  const faqData = [
    {
      question: 'Why choose big data solutions in Delhi NCR?',
      answer: 'Delhi NCR is home to numerous government agencies, enterprises, and startups generating massive data volumes. Our Delhi team specializes in scalable big data solutions with government compliance and enterprise-grade security.'
    },
    {
      question: 'What big data technologies do you implement in Delhi?',
      answer: 'We implement Apache Spark, Hadoop, Kafka, Elasticsearch, Tableau, Power BI, and cloud-native big data solutions on AWS and Azure, tailored for Delhi-based organizations.'
    },
    {
      question: 'Do you provide on-site big data consulting in Delhi NCR?',
      answer: 'Yes, we offer on-site big data consulting and implementation support across Delhi, Gurgaon, Noida, and Faridabad with dedicated project teams.'
    },
    {
      question: 'What industries in Delhi do you serve?',
      answer: 'We serve government agencies, healthcare, education, e-commerce, logistics, and manufacturing companies across Delhi NCR with specialized big data and analytics solutions.'
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Insignyx Technologies - Big Data Solutions Delhi",
    "description": "Leading big data analytics and data science consulting services in Delhi NCR. Expert data solutions for government, healthcare, and enterprise sectors in India's capital.",
    "url": "https://insignyx.com/big-data-solutions-delhi",
    "telephone": "+91-11-4567-8900",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Connaught Place",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6139,
      "longitude": 77.2090
    },
    "areaServed": [
      "Delhi", "New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad", "Delhi NCR"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 28.6139,
        "longitude": 77.2090
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Big Data Solutions Delhi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Analytics Consulting Delhi",
            "description": "Advanced data analytics and business intelligence solutions for Delhi NCR organizations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Data Warehouse Solutions Delhi",
            "description": "Enterprise data warehousing and ETL solutions for Delhi-based companies"
          }
        }
      ]
    }
  }

  const localServices = [
    {
      title: 'Government Data Analytics',
      description: 'Specialized big data solutions for Delhi\'s government agencies with compliance and security focus.',
      features: ['Policy Analytics', 'Citizen Data Insights', 'Performance Dashboards', 'Compliance Reporting']
    },
    {
      title: 'Enterprise Data Warehousing',
      description: 'Scalable data warehouse solutions for Delhi NCR enterprises with real-time analytics capabilities.',
      features: ['ETL Pipelines', 'Data Modeling', 'Real-time Processing', 'Business Intelligence']
    },
    {
      title: 'Healthcare Data Solutions',
      description: 'HIPAA-compliant healthcare analytics for Delhi\'s medical institutions and hospitals.',
      features: ['Patient Analytics', 'Clinical Intelligence', 'Operational Insights', 'Predictive Modeling']
    }
  ]

  const delhiStats = [
    { number: '300+', label: 'Delhi Projects' },
    { number: '100+', label: 'Government Clients' },
    { number: '10TB+', label: 'Data Processed Daily' }
  ]

  const testimonials = [
    {
      name: 'Dr. Rajesh Gupta',
      company: 'Delhi Health Department',
      role: 'Director IT',
      content: 'Insignyx transformed our healthcare data management. Their Delhi team delivered a comprehensive analytics platform that improved patient outcomes significantly.',
      rating: 5
    },
    {
      name: 'Anita Sharma',
      company: 'NCR Logistics Corp',
      role: 'Head of Analytics',
      content: 'The big data solution revolutionized our supply chain operations across Delhi NCR. Real-time insights helped us optimize routes and reduce costs by 30%.',
      rating: 5
    }
  ]

  const dataTypes = [
    { title: 'Structured Data', desc: 'Databases, CRM, ERP Systems', icon: '📊' },
    { title: 'Unstructured Data', desc: 'Documents, Images, Videos', icon: '📄' },
    { title: 'Streaming Data', desc: 'IoT, Social Media, Logs', icon: '🌊' },
    { title: 'Geospatial Data', desc: 'Location, Maps, GPS Data', icon: '🗺️' }
  ]

  return (
    <div className="pt-16">
      <SEOHead
        title="Big Data Solutions Delhi | Data Analytics Consulting | Insignyx Technologies"
        description="Leading big data analytics and data science consulting services in Delhi NCR. Expert data solutions for government, healthcare, and enterprise sectors in India's capital region."
        keywords="big data solutions Delhi, data analytics Delhi, data science consulting Delhi, business intelligence Delhi, data warehouse Delhi, hadoop consulting Delhi, spark analytics Delhi, data visualization Delhi"
        canonicalUrl="https://insignyx.com/big-data-solutions-delhi"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
        faqData={faqData}
        hreflang={[
          { lang: 'en-in', url: 'https://insignyx.com/big-data-solutions-delhi' },
          { lang: 'en-us', url: 'https://insignyx.com/big-data-solutions-delhi' }
        ]}
      />
      
      <Breadcrumb items={breadcrumbs} />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center mb-6">
              <MapPin className="text-teal-400 mr-2" size={24} />
              <span className="text-teal-400 font-semibold">Delhi NCR, India</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Big Data Solutions in
              <span className="block bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                Delhi NCR
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your Delhi-based organization with advanced big data analytics and data science solutions. 
              Government-compliant, enterprise-grade data processing and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                Get Free Data Assessment
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="tel:+91-11-4567-8900"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-900 transition-all duration-200 flex items-center justify-center"
              >
                <Phone className="mr-2" size={18} />
                Call Delhi Office
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Types We Handle */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Data Types We Process
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive big data solutions for all data formats
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {dataTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </motion.div>
            ))}
          </div>
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
              Big Data Solutions for Delhi Organizations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized data analytics services for Delhi NCR's diverse sectors
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                  <Database className="text-white" size={32} />
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

      {/* Delhi Stats */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Delhi Impact</h2>
            <p className="text-xl text-green-200">Delivering data excellence in India's capital region</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {delhiStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl text-teal-200">{stat.label}</div>
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
              What Delhi Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from government and enterprise clients
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
                  <p className="text-green-600 font-semibold">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Big Data Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and platforms for Delhi enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-6">
            {[
              'Apache Spark', 'Hadoop', 'Kafka', 'Elasticsearch', 'Tableau', 'Power BI',
              'AWS EMR', 'Azure HDInsight', 'Snowflake', 'MongoDB', 'Cassandra', 'Redis'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Zap className="text-white" size={24} />
                </div>
                <p className="text-sm font-semibold text-gray-800">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential in Delhi?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free data assessment and discover how our big data solutions can transform your Delhi organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <a
                href="mailto:delhi@insignyx.com"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-200 flex items-center justify-center"
              >
                <Mail className="mr-2" size={18} />
                Email Delhi Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BigDataSolutionsDelhi