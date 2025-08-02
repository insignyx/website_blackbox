import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cloud, ArrowRight, CheckCircle, Shield, Zap, TrendingUp, Server, Database, Lock, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

const AWSCloudMigration = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const awsServices = [
    {
      icon: Server,
      title: 'EC2 Migration',
      description: 'Seamless server migration to AWS EC2 with zero downtime and optimized performance.'
    },
    {
      icon: Database,
      title: 'RDS Database Migration',
      description: 'Secure database migration to AWS RDS with data integrity and performance optimization.'
    },
    {
      icon: Lock,
      title: 'S3 Storage Solutions',
      description: 'Scalable storage migration to AWS S3 with cost optimization and security compliance.'
    },
    {
      icon: Globe,
      title: 'CloudFront CDN',
      description: 'Global content delivery network setup for improved performance worldwide.'
    }
  ]

  const migrationProcess = [
    {
      step: '1',
      title: 'AWS Assessment',
      description: 'Comprehensive analysis of your current infrastructure and AWS readiness evaluation.'
    },
    {
      step: '2',
      title: 'Migration Strategy',
      description: 'Develop tailored AWS migration roadmap with timeline and resource planning.'
    },
    {
      step: '3',
      title: 'Pilot Migration',
      description: 'Execute pilot migration to validate approach and minimize risks.'
    },
    {
      step: '4',
      title: 'Full Migration',
      description: 'Complete infrastructure migration with monitoring and optimization.'
    },
    {
      step: '5',
      title: 'Post-Migration Support',
      description: 'Ongoing support, monitoring, and cost optimization services.'
    }
  ]

  const benefits = [
    { icon: TrendingUp, title: '40% Cost Reduction', description: 'Average cost savings through AWS optimization' },
    { icon: Zap, title: '99.99% Uptime', description: 'High availability with AWS infrastructure' },
    { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security with AWS compliance' },
    { icon: Globe, title: 'Global Scalability', description: 'Scale globally with AWS regions worldwide' }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AWS Cloud Migration Services",
    "description": "Professional AWS cloud migration services for enterprises. Expert AWS consulting, migration, and optimization with 40% cost reduction guarantee.",
    "provider": {
      "@type": "Organization",
      "name": "Insignyx Technologies",
      "url": "https://insignyx.com"
    },
    "serviceType": "Cloud Migration",
    "areaServed": ["India", "United States", "Europe", "Southeast Asia"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AWS Migration Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AWS EC2 Migration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AWS RDS Database Migration"
          }
        }
      ]
    }
  }

  return (
    <div className="pt-16">
      <SEOHead
        title="AWS Cloud Migration Services | Expert AWS Consulting India"
        description="Professional AWS cloud migration services for enterprises. Expert AWS consulting, migration, and optimization with 40% cost reduction. Get started today!"
        keywords="AWS cloud migration, AWS consulting India, AWS migration services, cloud migration AWS, AWS infrastructure migration, AWS database migration, AWS EC2 migration, AWS RDS migration, AWS S3 migration, cloud migration company India"
        canonicalUrl="https://insignyx.com/services/aws-cloud-migration"
        structuredData={structuredData}
        hreflang={[
          { lang: 'en-us', url: 'https://insignyx.com/services/aws-cloud-migration' },
          { lang: 'en-in', url: 'https://insignyx.com/services/aws-cloud-migration' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 overflow-hidden">
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
              AWS Cloud Migration Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-orange-100 max-w-4xl mx-auto mb-8">
              Seamlessly migrate to AWS with our expert cloud migration services. 
              Reduce costs by 40% while improving performance and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start AWS Migration
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Free AWS Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AWS Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AWS Migration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AWS cloud migration services tailored for enterprise needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awsServices.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
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
              AWS Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step AWS migration methodology ensures successful cloud transformation
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
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform translate-x-4" />
                )}
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
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
              AWS Migration Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with AWS cloud infrastructure
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
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Migrate to AWS?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get a free AWS migration assessment and discover how much you can save.
            </p>
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Get Free AWS Assessment
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AWSCloudMigration