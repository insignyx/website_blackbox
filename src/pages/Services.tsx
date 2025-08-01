import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Brain, Cloud, Database, ArrowRight, CheckCircle, Star, Zap, Shield, TrendingUp, Code, Server, BarChart3, Search, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeTab, setActiveTab] = useState('ai')

  const services = {
    ai: {
      icon: Brain,
      title: 'AI Implementation & Consultation',
      subtitle: 'Transform your business with intelligent automation',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation across your organization.',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=artificial%20intelligence%20neural%20network%20visualization%20futuristic%20blue%20digital%20brain&image_size=landscape_16_9',
      features: [
        'Machine Learning Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Chatbot Development',
        'AI Strategy Consulting'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'AWS SageMaker', 'Azure ML'],
      caseStudies: [
        {
          title: 'E-commerce Recommendation Engine',
          result: '300% increase in conversion rates',
          description: 'Built AI-powered product recommendation system for major retailer'
        },
        {
          title: 'Healthcare Diagnostic AI',
          result: '95% accuracy in early detection',
          description: 'Developed medical imaging AI for early disease detection'
        }
      ]
    },
    cloud: {
      icon: Cloud,
      title: 'Cloud Migration & Architecture',
      subtitle: 'Seamless transition to scalable cloud infrastructure',
      description: 'Expert cloud migration services for AWS and Azure, ensuring security, scalability, and cost optimization.',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=cloud%20computing%20infrastructure%20servers%20data%20center%20modern%20technology%20blue%20theme&image_size=landscape_16_9',
      features: [
        'AWS & Azure Migration',
        'Cloud Architecture Design',
        'DevOps Implementation',
        'Security & Compliance',
        'Cost Optimization',
        'Multi-Cloud Strategy'
      ],
      technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
      caseStudies: [
        {
          title: 'Enterprise Cloud Migration',
          result: '40% cost reduction, zero downtime',
          description: 'Migrated Fortune 500 company to AWS with full automation'
        },
        {
          title: 'Multi-Cloud Architecture',
          result: '99.99% uptime achieved',
          description: 'Designed resilient multi-cloud infrastructure for fintech startup'
        }
      ]
    },
    bigdata: {
      icon: Database,
      title: 'Big Data & Analytics Solutions',
      subtitle: 'Unlock insights from your data at scale',
      description: 'Comprehensive big data solutions including data warehousing, real-time processing, and business intelligence.',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=big%20data%20analytics%20visualization%20charts%20graphs%20data%20processing%20modern%20dashboard&image_size=landscape_16_9',
      features: [
        'Data Warehousing',
        'Real-time Data Processing',
        'Business Intelligence',
        'Data Pipeline Development',
        'Analytics Dashboard',
        'Data Governance'
      ],
      technologies: ['Apache Spark', 'Hadoop', 'Snowflake', 'Tableau', 'Power BI', 'Kafka'],
      caseStudies: [
        {
          title: 'Real-time Analytics Platform',
          result: 'Process 1TB+ data daily',
          description: 'Built streaming analytics platform for IoT company'
        },
        {
          title: 'Data Warehouse Modernization',
          result: '10x faster query performance',
          description: 'Migrated legacy data warehouse to cloud-native solution'
        }
      ]
    }
  }

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current infrastructure, identify opportunities, and define project scope.',
      icon: Search
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop comprehensive roadmap with timelines, milestones, and success metrics.',
      icon: Target
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the solution with agile methodology, ensuring quality and timely delivery.',
      icon: Code
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and performance optimization to ensure optimal results.',
      icon: Zap
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Smooth deployment with ongoing support and maintenance services.',
      icon: Shield
    }
  ]

  const whyChooseUs = [
    {
      icon: Star,
      title: 'Proven Expertise',
      description: '8+ years of experience with 500+ successful projects across industries.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'Average 300% ROI improvement and 40% cost reduction for our clients.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security standards with compliance certifications.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Agile methodology ensures faster time-to-market and quick wins.'
    }
  ]

  const currentService = services[activeTab]
  const ServiceIcon = currentService.icon

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 px-4 leading-tight">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 px-4">
              Comprehensive technology solutions that drive digital transformation 
              and accelerate business growth.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center min-h-[48px] touch-manipulation"
            >
              Get Started Today
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row justify-center mb-12 space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 px-4">
            {Object.entries(services).map(([key, service]) => {
              const Icon = service.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-4 sm:px-6 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 text-sm sm:text-base min-h-[48px] touch-manipulation ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="mr-2 sm:mr-3" size={20} />
                  <span className="hidden sm:inline">{service.title.split(' ')[0]} {service.title.split(' ')[1]}</span>
                  <span className="sm:hidden">{service.title.split(' ')[0]}</span>
                </button>
              )
            })}
          </div>

          {/* Service Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 px-4 lg:px-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                  <ServiceIcon className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{currentService.title}</h2>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">{currentService.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 px-4 lg:px-0">{currentService.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 lg:px-0">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0" size={16} />
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mb-6 sm:mb-8 px-4 lg:px-0">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Technologies We Use:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl shadow-lg mx-4 lg:mx-0"
              />
            </div>
          </motion.div>

          {/* Case Studies */}
          <div className="mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-4">Success Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {currentService.caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{study.title}</h4>
                  <p className="text-blue-600 font-semibold mb-3 text-sm sm:text-base">{study.result}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{study.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4">
              Our Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center relative px-4 sm:px-0"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transform translate-x-4" />
                  )}
                  
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold text-sm sm:text-lg">{step.step}</span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4">
              Why Choose Insignyx?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We combine deep technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 px-4 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 px-4">
              Let's discuss how our services can transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center min-h-[48px] touch-manipulation"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/testimonials"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 min-h-[48px] touch-manipulation"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services