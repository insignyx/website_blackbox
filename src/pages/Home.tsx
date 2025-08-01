import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Brain, Cloud, Database, Users, Award, TrendingUp, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Home = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 })
  // Animated counters
  useEffect(() => {
    if (statsInView) {
      const targets = { projects: 500, clients: 150, years: 8 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setCounters({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          years: Math.floor(targets.years * progress)
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [statsInView])

  const services = [
    {
      icon: Brain,
      title: 'AI Implementation',
      description: 'Transform your business with cutting-edge AI solutions, machine learning models, and intelligent automation.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate to AWS and Azure with our expert cloud architecture and optimization services.',
      features: ['AWS Migration', 'Azure Solutions', 'Cloud Security', 'Cost Optimization']
    },
    {
      icon: Database,
      title: 'Big Data Solutions',
      description: 'Unlock insights from your data with advanced analytics, data warehousing, and real-time processing.',
      features: ['Data Analytics', 'Data Warehousing', 'Real-time Processing', 'Business Intelligence']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Insignyx transformed our data infrastructure completely. Their AI solutions increased our efficiency by 300%.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The cloud migration was flawless. Zero downtime and 40% cost reduction. Exceptional service!',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20man%20headshot%20corporate%20style%20confident%20smile&image_size=square'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Head of Operations',
      content: 'Their big data solutions gave us insights we never knew existed. ROI was immediate and substantial.',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20woman%20headshot%20corporate%20style%20confident%20smile&image_size=square'
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/2278095/2278095-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/6963944/6963944-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            {/* Fallback image for browsers that don't support video */}
            <img 
              src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1920&h=1080&fit=crop&crop=center"
              alt="Technology Background"
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        
        {/* Main gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-cyan-900/80 z-10" />
        <div className="absolute inset-0 bg-black/30 z-20" />

        {/* Hero Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI &amp; Cloud Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto px-4">
              Leading software development and IT consulting company specializing in AI implementation, 
              cloud migration, and big data solutions for enterprise success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center min-h-[48px] touch-manipulation"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 min-h-[48px] touch-manipulation"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
              Our Core Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We specialize in cutting-edge technologies that drive digital transformation and business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 mx-4 sm:mx-0"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/services"
                    className="inline-flex items-center mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{counters.projects}+</div>
              <div className="text-base sm:text-lg md:text-xl text-cyan-200">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{counters.clients}+</div>
              <div className="text-base sm:text-lg md:text-xl text-cyan-200">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">{counters.years}+</div>
              <div className="text-base sm:text-lg md:text-xl text-cyan-200">Years of Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 mx-4 sm:mx-0"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4 flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 font-semibold text-xs sm:text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center min-h-[48px] touch-manipulation"
            >
              View All Testimonials
              <ArrowRight className="ml-2" size={18} />
            </Link>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 px-4">
              Let's discuss how our AI, cloud, and big data solutions can drive your success.
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
                to="/about"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 min-h-[48px] touch-manipulation"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home