import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp, Users, Building, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Insignyx Technologies",
    "url": "https://insignyx.com",
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael Chen"
        },
        "reviewBody": "Insignyx Technologies transformed our business with their AI implementation. The machine learning models they developed increased our operational efficiency by 40% and reduced costs significantly.",
        "publisher": {
          "@type": "Organization",
          "name": "TechFlow Solutions"
        }
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Williams"
        },
        "reviewBody": "The cloud migration project with Insignyx was seamless and exceeded our expectations. They migrated our entire infrastructure to AWS with zero downtime and improved our system performance by 300%.",
        "publisher": {
          "@type": "Organization",
          "name": "CloudFirst Inc."
        }
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "David Rodriguez"
        },
        "reviewBody": "Insignyx helped us build a robust big data platform that processes terabytes of data daily. Their solution enabled real-time analytics and gave us insights we never had before.",
        "publisher": {
          "@type": "Organization",
          "name": "Analytics Pro"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5"
    }
  }
  const clientLogos = [
    {
      id: 1,
      name: 'TechCorp Industries',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=100&fit=crop&crop=center',
      industry: 'Technology'
    },
    {
      id: 2,
      name: 'Healthcare Solutions Inc',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center',
      industry: 'Healthcare'
    },
    {
      id: 3,
      name: 'Global Retail Group',
      logo: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=200&h=100&fit=crop&crop=center',
      industry: 'Retail'
    },
    {
      id: 4,
      name: 'Manufacturing Corp',
      logo: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&h=100&fit=crop&crop=center',
      industry: 'Manufacturing'
    },
    {
      id: 5,
      name: 'Financial Services Ltd',
      logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&h=100&fit=crop&crop=center',
      industry: 'Finance'
    },
    {
      id: 6,
      name: 'Energy Solutions Co',
      logo: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=200&h=100&fit=crop&crop=center',
      industry: 'Energy'
    }
  ];

  const successStories = [
    {
      id: 1,
      quote: "Insignyx Technologies delivered beyond our expectations. Their AI implementation increased our efficiency by 40% and transformed how we operate.",
      author: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechCorp Industries',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
      metrics: ['40% efficiency increase', '25% cost reduction', '60% faster processing']
    },
    {
      id: 2,
      quote: "The cloud migration was seamless with zero downtime. Our system performance improved by 300% and costs reduced by 50%.",
      author: 'Michael Chen',
      position: 'CTO',
      company: 'Healthcare Solutions Inc',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      metrics: ['Zero downtime', '300% performance boost', '50% cost savings']
    },
    {
      id: 3,
      quote: "Their e-commerce platform upgrade resulted in 150% increase in conversions and $5M additional revenue in the first quarter.",
      author: 'Emily Rodriguez',
      position: 'VP Marketing',
      company: 'Global Retail Group',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      metrics: ['150% conversion increase', '$5M additional revenue', '80% engagement boost']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Michael Chen',
      position: 'CTO',
      company: 'TechFlow Solutions',
      category: 'AI Implementation',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
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
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
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
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
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
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
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
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
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
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
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
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=450&fit=crop&crop=center',
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
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop&crop=center',
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
      <SEOHead
        title="Client Testimonials & Success Stories | Insignyx Technologies"
        description="Read authentic client testimonials and success stories from businesses transformed by Insignyx Technologies' AI implementation, cloud migration, and big data solutions."
        keywords="client testimonials, success stories, AI implementation reviews, cloud migration testimonials, big data solutions feedback, customer reviews Insignyx, technology transformation stories"
        canonicalUrl="https://insignyx.com/testimonials"
        structuredData={structuredData}
        hreflang={[
          { lang: 'en-US', url: 'https://insignyx.com/testimonials' },
          { lang: 'en-IN', url: 'https://insignyx.com/in/testimonials' },
          { lang: 'en-GB', url: 'https://insignyx.com/uk/testimonials' }
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 px-4 leading-tight">
              Client Success Stories
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 px-4">
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
      <section ref={ref} className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Real feedback from real clients who have experienced the 
              transformative power of our solutions.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentTestimonial(0)
                }}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-200 text-sm sm:text-base ${
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
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-6 sm:p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <Quote className="text-blue-600 mb-6" size={48} />
                  <blockquote className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-6 sm:mb-8 leading-relaxed">
                    "{filteredTestimonials[currentTestimonial]?.testimonial}"
                  </blockquote>
                  
                  <div className="flex items-center mb-6">
                    {renderStars(filteredTestimonials[currentTestimonial]?.rating || 5)}
                  </div>
                  
                  <div className="flex items-center">
                    <img
                      src={filteredTestimonials[currentTestimonial]?.image}
                      alt={filteredTestimonials[currentTestimonial]?.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-base sm:text-lg">
                        {filteredTestimonials[currentTestimonial]?.name}
                      </div>
                      <div className="text-gray-600 text-sm sm:text-base">
                        {filteredTestimonials[currentTestimonial]?.position}
                      </div>
                      <div className="text-blue-600 font-medium text-sm sm:text-base">
                        {filteredTestimonials[currentTestimonial]?.company}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                    Project: {filteredTestimonials[currentTestimonial]?.project}
                  </h3>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-700 text-sm sm:text-base">Key Results:</h4>
                    {filteredTestimonials[currentTestimonial]?.results.map((result, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                        <span className="text-gray-600 text-sm sm:text-base">{result}</span>
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
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4">
              Detailed Case Studies
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Dive deep into our most impactful projects and see how we 
              deliver measurable results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
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
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{study.client}</p>
                  
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
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm text-gray-500 mb-6 space-y-1 sm:space-y-0">
                    <span>Duration: {study.duration}</span>
                    <span>Team: {study.team}</span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 sm:py-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center text-sm sm:text-base min-h-[48px] touch-manipulation">
                    View Full Case Study
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4">
              Client Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Read what our clients say about their transformative 
              experience working with Insignyx Technologies.
            </p>
          </motion.div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20 px-4">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Quote className="text-blue-600 mb-4 sm:mb-6" size={28} />
                <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                  {story.quote}
                </p>
                
                <div className="flex items-center mb-6">
                  <img
                    src={story.avatar}
                    alt={story.author}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">{story.author}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{story.position}</div>
                    <div className="text-xs sm:text-sm text-blue-600">{story.company}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center">
                      <TrendingUp className="text-green-500 mr-2" size={16} />
                      <span className="text-sm text-gray-600">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trusted by Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 px-4">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 items-center px-4">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group-hover:scale-105 transform transition-transform">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-12 sm:h-14 md:h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="mt-3 text-center">
                      <div className="text-xs sm:text-sm font-medium text-gray-900">{client.name}</div>
                      <div className="text-xs text-gray-500">{client.industry}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 px-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 px-4">
              Join hundreds of satisfied clients who have transformed their 
              businesses with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-200 min-h-[48px] touch-manipulation">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-200 min-h-[48px] touch-manipulation">
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