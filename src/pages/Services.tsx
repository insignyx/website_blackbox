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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions that drive digital transformation 
              and accelerate business growth.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row justify-center mb-12 space-y-4 md:space-y-0 md:space-x-8">
            {Object.entries(services).map(([key, service]) => {
              const Icon = service.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="mr-3" size={24} />
                  <span className="hidden md:inline">{service.title.split(' ')[0]} {service.title.split(' ')[1]}</span>
                  <span className="md:hidden">{service.title.split(' ')[0]}</span>
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                  <ServiceIcon className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{currentService.title}</h2>
                  <p className="text-blue-600 font-semibold">{currentService.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-lg mb-8">{currentService.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies We Use:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
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
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentService.caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h4>
                  <p className="text-blue-600 font-semibold mb-3">{study.result}</p>
                  <p className="text-gray-600">{study.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transform translate-x-4" />
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Insignyx?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our services can transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/testimonials"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
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