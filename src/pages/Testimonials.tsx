import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Play, Award, TrendingUp, Users, Building, ArrowRight } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const testimonials = [
    {
      id: 1,
      name: 'Michael Chen',
      position: 'CTO',
      company: 'TechFlow Solutions',
      category: 'AI Implementation',
      rating: 5,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20male%20CTO%20executive%20portrait%20corporate%20headshot%20business%20suit%20confident%20smile&image_size=square',
      testimonial: 'Insignyx Technologies transformed our business with their AI implementation. The machine learning models they developed increased our operational efficiency by 40% and reduced costs significantly. Their team\'s expertise and dedication are unmatched.',
      project: 'AI-Powered Analytics Platform',
      results: [
        '40% increase in operational efficiency',
        '25% reduction in operational costs',
        '60% faster data processing'
      ]
    },
    {
      id: 2,
      name: 'Sarah Williams',
      position: 'VP of Engineering',
      company: 'CloudFirst Inc.',
      category: 'Cloud Migration',
      rating: 5,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20VP%20engineering%20executive%20portrait%20corporate%20headshot%20business%20attire%20confident&image_size=square',
      testimonial: 'The cloud migration project with Insignyx was seamless and exceeded our expectations. They migrated our entire infrastructure to AWS with zero downtime and improved our system performance by 300%. Highly recommended!',
      project: 'AWS Cloud Migration',
      results: [
        'Zero downtime migration',
        '300% performance improvement',
        '50% reduction in infrastructure costs'
      ]
    },
    {
      id: 3,
      name: 'David Rodriguez',
      position: 'Data Director',
      company: 'Analytics Pro',
      category: 'Big Data Solutions',
      rating: 5,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20hispanic%20male%20data%20director%20executive%20portrait%20corporate%20headshot%20business%20suit&image_size=square',
      testimonial: 'Insignyx helped us build a robust big data platform that processes terabytes of data daily. Their solution enabled real-time analytics and gave us insights we never had before. The ROI was evident within the first quarter.',
      project: 'Real-time Big Data Platform',
      results: [
        'Processing 10TB+ data daily',
        'Real-time analytics capability',
        '200% faster decision making'
      ]
    },
    {
      id: 4,
      name: 'Emily Thompson',
      position: 'CEO',
      company: 'StartupX',
      category: 'Software Development',
      rating: 5,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20CEO%20executive%20portrait%20corporate%20headshot%20business%20blazer%20confident%20leader&image_size=square',
      testimonial: 'As a startup, we needed a reliable technology partner who could scale with us. Insignyx delivered a world-class application that helped us secure Series A funding. Their agile approach and technical excellence are outstanding.',
      project: 'MVP Development & Scaling',
      results: [
        'Successful Series A funding',
        '500% user growth in 6 months',
        '99.9% application uptime'
      ]
    },
    {
      id: 5,
      name: 'James Wilson',
      position: 'IT Director',
      company: 'Enterprise Corp',
      category: 'Digital Transformation',
      rating: 5,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20IT%20director%20executive%20portrait%20corporate%20headshot%20business%20suit%20glasses&image_size=square',
      testimonial: 'Insignyx led our digital transformation journey with expertise and professionalism. They modernized our legacy systems and implemented cutting-edge solutions that positioned us ahead of our competitors.',
      project: 'Legacy System Modernization',
      results: [
        'Complete system modernization',
        '80% improvement in user experience',
        '35% increase in productivity'
      ]
    },
    {
      id: 6,
      name: 'Lisa Park',
      position: 'Head of Operations',
      company: 'LogiTech Solutions',
      category: 'AI Implementation',
      rating: 5,
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20asian%20female%20head%20operations%20executive%20portrait%20corporate%20headshot%20business%20attire&image_size=square',
      testimonial: 'The AI automation solutions from Insignyx revolutionized our supply chain operations. We now have predictive analytics that help us optimize inventory and reduce waste by 45%. Exceptional work!',
      project: 'AI Supply Chain Optimization',
      results: [
        '45% reduction in waste',
        'Predictive inventory management',
        '30% cost savings'
      ]
    }
  ]

  const caseStudies = [
    {
      id: 1,
      title: 'Fortune 500 AI Transformation',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Manual quality control processes leading to high defect rates and production delays',
      solution: 'Implemented computer vision AI system for automated quality inspection',
      results: [
        '90% reduction in defect rates',
        '50% faster production cycles',
        '$2M annual cost savings'
      ],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20manufacturing%20facility%20AI%20computer%20vision%20quality%20control%20automated%20inspection%20industrial&image_size=landscape_16_9',
      duration: '8 months',
      team: '12 specialists'
    },
    {
      id: 2,
      title: 'Healthcare Data Analytics Platform',
      client: 'Regional Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data across multiple systems hindering care coordination',
      solution: 'Built unified data platform with real-time analytics and predictive modeling',
      results: [
        '40% improvement in patient outcomes',
        '60% faster diagnosis times',
        '25% reduction in readmission rates'
      ],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20healthcare%20data%20analytics%20dashboard%20medical%20technology%20patient%20care%20digital%20health&image_size=landscape_16_9',
      duration: '10 months',
      team: '15 specialists'
    },
    {
      id: 3,
      title: 'E-commerce Personalization Engine',
      client: 'Online Retail Giant',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and poor customer engagement on the platform',
      solution: 'Developed AI-powered recommendation engine with real-time personalization',
      results: [
        '150% increase in conversion rates',
        '80% improvement in customer engagement',
        '$5M additional revenue in first quarter'
      ],
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20e-commerce%20personalization%20AI%20recommendation%20engine%20online%20shopping%20digital%20commerce&image_size=landscape_16_9',
      duration: '6 months',
      team: '10 specialists'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '1000+', label: 'Projects Completed', icon: Award },
    { number: '50+', label: 'Industry Awards', icon: TrendingUp }
  ]

  const categories = ['all', 'AI Implementation', 'Cloud Migration', 'Big Data Solutions', 'Software Development', 'Digital Transformation']

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ))
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform their operations 
              and achieve remarkable results through innovative technology solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-blue-200" />
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who have experienced the 
              transformative power of our solutions.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentTestimonial(0)
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Quote className="text-blue-600 mb-6" size={48} />
                  <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
                    "{filteredTestimonials[currentTestimonial]?.testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center mb-6">
                    {renderStars(filteredTestimonials[currentTestimonial]?.rating || 5)}
                  </div>
                  
                  <div className="flex items-center">
                    <img
                      src={filteredTestimonials[currentTestimonial]?.image}
                      alt={filteredTestimonials[currentTestimonial]?.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {filteredTestimonials[currentTestimonial]?.name}
                      </div>
                      <div className="text-gray-600">
                        {filteredTestimonials[currentTestimonial]?.position}
                      </div>
                      <div className="text-blue-600 font-medium">
                        {filteredTestimonials[currentTestimonial]?.company}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Project: {filteredTestimonials[currentTestimonial]?.project}
                  </h3>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-700">Key Results:</h4>
                    {filteredTestimonials[currentTestimonial]?.results.map((result, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                        <span className="text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ChevronLeft className="text-gray-600" size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ChevronRight className="text-gray-600" size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Detailed Case Studies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into our most impactful projects and see how we 
              deliver measurable results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{study.industry}</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.client}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-600 mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-600 mb-4">{study.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center">
                          <TrendingUp className="text-green-500 mr-2" size={16} />
                          <span className="text-sm text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                    View Full Case Study
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our clients about their experience 
              working with Insignyx Technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <motion.div
                key={video}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video cursor-pointer group"
              >
                <img
                  src={`https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20executive%20video%20testimonial%20corporate%20office%20background%20${index + 1}&image_size=landscape_16_9`}
                  alt={`Video testimonial ${video}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-white ml-1" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-semibold">Client Testimonial {video}</div>
                  <div className="text-sm text-gray-200">2:30 minutes</div>
                </div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of satisfied clients who have transformed their 
              businesses with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-200">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials