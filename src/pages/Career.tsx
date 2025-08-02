import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { MapPin, Clock, DollarSign, Users, Heart, Coffee, Zap, Award, ChevronRight, Search, Filter, Briefcase, GraduationCap, Star } from 'lucide-react'
import { toast } from 'sonner'
import SEOHead from '../components/SEOHead'

const Career = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Insignyx Technologies",
      "sameAs": "https://insignyx.com",
      "logo": "https://insignyx.com/logo.png"
    },
    "jobLocation": [
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        }
      }
    ],
    "employmentType": "FULL_TIME",
    "industry": "Technology",
    "description": "Join Insignyx Technologies and work on cutting-edge AI, cloud, and big data solutions. We offer competitive salaries, comprehensive benefits, and opportunities for professional growth.",
    "benefits": "Health insurance, dental, vision, 401k matching, flexible work arrangements, professional development, equity options"
  }

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$150,000 - $200,000',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure)',
        'Strong problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and implement AI/ML algorithms',
        'Collaborate with cross-functional teams',
        'Mentor junior developers',
        'Stay updated with latest AI trends'
      ]
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$140,000 - $180,000',
      experience: '4+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of cloud architecture experience',
        'AWS/Azure certifications preferred',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of DevOps practices'
      ],
      responsibilities: [
        'Design cloud architecture solutions',
        'Lead cloud migration projects',
        'Optimize cloud infrastructure costs',
        'Provide technical guidance to clients'
      ]
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      experience: '3+ years',
      description: 'Analyze complex datasets to derive actionable insights for business decision-making.',
      requirements: [
        'Master\'s degree in Statistics, Mathematics, or related field',
        '3+ years of data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with big data tools (Spark, Hadoop)',
        'Strong statistical analysis skills'
      ],
      responsibilities: [
        'Develop predictive models',
        'Perform statistical analysis',
        'Create data visualizations',
        'Present findings to stakeholders'
      ]
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      experience: '3+ years',
      description: 'Create intuitive and engaging user experiences for our digital products.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years of UX/UI design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio demonstrating design skills',
        'Understanding of user-centered design principles'
      ],
      responsibilities: [
        'Design user interfaces and experiences',
        'Conduct user research and testing',
        'Create wireframes and prototypes',
        'Collaborate with development teams'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      experience: '4+ years',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Experience with CI/CD tools (Jenkins, GitLab)',
        'Proficiency in containerization and orchestration',
        'Strong scripting skills (Bash, Python)'
      ],
      responsibilities: [
        'Maintain CI/CD pipelines',
        'Automate infrastructure deployment',
        'Monitor system performance',
        'Ensure security best practices'
      ]
    },
    {
      id: 6,
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$110,000 - $150,000',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our technology solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years of product management experience',
        'Experience with agile methodologies',
        'Strong analytical and communication skills',
        'Technical background preferred'
      ],
      responsibilities: [
        'Define product strategy and roadmap',
        'Gather and prioritize requirements',
        'Work with engineering and design teams',
        'Analyze product metrics and user feedback'
      ]
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance with wellness programs',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and unlimited PTO',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and skill development programs',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: DollarSign,
      title: 'Financial Benefits',
      description: 'Competitive salary, equity options, 401(k) matching, and performance bonuses',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment, team building events, and inclusive culture',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Zap,
      title: 'Innovation Time',
      description: '20% time for personal projects and innovation initiatives',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&crop=center'
    }
  ]

  const departments = ['all', 'Engineering', 'Data & Analytics', 'Design', 'Product']
  const locations = ['all', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Remote']

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation
    
    return matchesSearch && matchesDepartment && matchesLocation
  })

  const handleApply = (jobId: number) => {
    toast.success('Application submitted successfully! We\'ll be in touch soon.')
    console.log(`Applied for job ${jobId}`)
  }

  return (
    <div className="pt-16">
      <SEOHead
        title="Careers at Insignyx Technologies | AI, Cloud & Data Science Jobs"
        description="Join our team of technology experts! Explore career opportunities in AI engineering, cloud architecture, data science, and more. Competitive salaries, great benefits, and innovative projects."
        keywords="careers Insignyx Technologies, AI engineer jobs, cloud architect jobs, data scientist careers, technology jobs, software engineer positions, remote tech jobs, IT careers India US"
        canonicalUrl="https://insignyx.com/career"
        structuredData={structuredData}
        hreflang={[
          { lang: 'en-us', url: 'https://insignyx.com/career' },
          { lang: 'en-in', url: 'https://insignyx.com/career' }
        ]}
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=center"
            alt="Modern Office Environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90" />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto mb-8">
              Build the future of technology with us. We're looking for passionate 
              individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm">Open Positions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">Employee Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-sm">Glassdoor Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Search & Filters */}
      <section ref={ref} className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-6 mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
              
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                <Filter className="mr-2" size={20} />
                Filter
              </button>
            </div>
          </motion.div>

          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {filteredJobs.length} of {jobOpenings.length} positions
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job List */}
            <div className="lg:col-span-2 space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                    selectedJob === job.id ? 'border-blue-500' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedJob(job.id)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase className="mr-1" size={16} />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="mr-1" size={16} />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="mr-1" size={16} />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`text-gray-400 transition-transform duration-200 ${
                      selectedJob === job.id ? 'rotate-90' : ''
                    }`} size={20} />
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm">
                      <span className="text-green-600 font-medium">{job.salary}</span>
                      <span className="text-gray-500">{job.experience}</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleApply(job.id)
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                    >
                      Apply Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Job Details */}
            <div className="lg:col-span-1">
              {selectedJob && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-50 rounded-2xl p-6 sticky top-24"
                >
                  {(() => {
                    const job = jobOpenings.find(j => j.id === selectedJob)
                    if (!job) return null
                    
                    return (
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h3>
                        
                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                            <ul className="space-y-1">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Responsibilities</h4>
                            <ul className="space-y-1">
                              {job.responsibilities.map((resp, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => handleApply(job.id)}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                        >
                          Apply for this Position
                        </button>
                      </div>
                    )
                  })()
                  }
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive, 
              innovate, and make a meaningful impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={benefit.image} 
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Icon className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Insignyx Technologies, we foster a culture of innovation, collaboration, 
                and continuous learning. Our team is our greatest asset, and we're committed 
                to creating an inclusive environment where everyone can succeed.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="text-yellow-500 mr-3" size={24} />
                  <span className="text-gray-700">Innovation-driven mindset</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-blue-500 mr-3" size={24} />
                  <span className="text-gray-700">Collaborative team environment</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-purple-500 mr-3" size={24} />
                  <span className="text-gray-700">Recognition and growth opportunities</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-red-500 mr-3" size={24} />
                  <span className="text-gray-700">Work-life balance priority</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center"
                  alt="Team Collaboration"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-purple-900/70" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-4">Employee Testimonial</h3>
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    "Working at Insignyx has been an incredible journey. The company truly 
                    values innovation and provides the resources and support needed to grow 
                    both personally and professionally."
                  </blockquote>
                  <div className="flex items-center">
                    <img 
                       src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
                       alt="Sarah Johnson"
                       className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/30"
                     />
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-blue-100">Senior AI Engineer</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and let's talk!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all duration-200">
                Send Resume
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Career