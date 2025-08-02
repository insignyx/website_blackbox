import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cloud, ArrowRight, CheckCircle, Shield, Zap, TrendingUp, Server, Database, Lock, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const AzureCloudMigration = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const azureServices = [
    {
      icon: Server,
      title: 'Azure VM Migration',
      description: 'Seamless virtual machine migration to Azure with optimized performance and cost efficiency.'
    },
    {
      icon: Database,
      title: 'Azure SQL Migration',
      description: 'Secure database migration to Azure SQL with high availability and disaster recovery.'
    },
    {
      icon: Lock,
      title: 'Azure Storage Solutions',
      description: 'Scalable storage migration to Azure Blob Storage with enterprise-grade security.'
    },
    {
      icon: Globe,
      title: 'Azure CDN Setup',
      description: 'Global content delivery network implementation for worldwide performance optimization.'
    }
  ]

  const migrationProcess = [
    {
      step: '1',
      title: 'Azure Readiness Assessment',
      description: 'Comprehensive evaluation of your infrastructure for Azure migration readiness.'
    },
    {
      step: '2',
      title: 'Migration Planning',
      description: 'Develop detailed Azure migration strategy with timeline and resource allocation.'
    },
    {
      step: '3',
      title: 'Proof of Concept',
      description: 'Execute pilot migration to validate approach and identify optimization opportunities.'
    },
    {
      step: '4',
      title: 'Production Migration',
      description: 'Complete infrastructure migration with minimal downtime and risk mitigation.'
    },
    {
      step: '5',
      title: 'Optimization & Support',
      description: 'Ongoing monitoring, optimization, and 24/7 support services.'
    }
  ]

  const benefits = [
    { icon: TrendingUp, title: '35% Cost Savings', description: 'Average cost reduction through Azure optimization' },
    { icon: Zap, title: '99.95% SLA', description: 'High availability with Azure enterprise SLA' },
    { icon: Shield, title: 'Hybrid Cloud Ready', description: 'Seamless hybrid cloud integration capabilities' },
    { icon: Globe, title: 'Global Presence', description: 'Access to 60+ Azure regions worldwide' }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Azure Cloud Migration Services",
    "description": "Professional Microsoft Azure cloud migration services for enterprises. Expert Azure consulting, migration, and optimization with 35% cost reduction guarantee.",
    "provider": {
      "@type": "Organization",
      "name": "Insignyx Technologies",
      "url": "https://insignyx.com"
    },
    "serviceType": "Cloud Migration",
    "areaServed": ["India", "United States", "Europe", "Southeast Asia"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Azure Migration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Azure VM Migration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Azure SQL Database Migration"
          }
        }
      ]
    }
  }

  return (
    <div className="pt-16">
      <SEOHead
        title="Azure Cloud Migration Services | Microsoft Azure Consulting India"
        description="Professional Microsoft Azure cloud migration services for enterprises. Expert Azure consulting, migration, and optimization with 35% cost reduction. Get started today!"
        keywords="Azure cloud migration, Microsoft Azure consulting India, Azure migration services, cloud migration Azure, Azure infrastructure migration, Azure SQL migration, Azure VM migration, Azure storage migration, cloud migration company India, Azure hybrid cloud"
        canonicalUrl="https://insignyx.com/services/azure-cloud-migration"
        structuredData={structuredData}
        hreflang={[
          { lang: 'en-us', url: 'https://insignyx.com/services/azure-cloud-migration' },
          { lang: 'en-in', url: 'https://insignyx.com/services/azure-cloud-migration' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Cloud className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Microsoft Azure Cloud Migration
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Migrate to Microsoft Azure with confidence. Our expert Azure migration services 
              deliver 35% cost savings and enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Azure Migration
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Free Azure Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Azure Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Azure Migration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Microsoft Azure cloud migration services for enterprise transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {azureServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Azure Migration Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-phase Azure migration approach ensures successful cloud transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {migrationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center relative"
              >
                {index < migrationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transform translate-x-4" />
                )}
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Azure Migration Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with Microsoft Azure cloud infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Industry-Specific Azure Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored Azure migration strategies for different industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Healthcare', description: 'HIPAA-compliant Azure solutions for healthcare organizations' },
              { title: 'Finance', description: 'Secure Azure migration for banking and financial services' },
              { title: 'E-commerce', description: 'Scalable Azure infrastructure for online retail platforms' },
              { title: 'Manufacturing', description: 'IoT-enabled Azure solutions for smart manufacturing' }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Migrate to Azure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free Azure migration assessment and discover your cloud transformation potential.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Get Free Azure Assessment
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AzureCloudMigration