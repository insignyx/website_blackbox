import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, Eye, Award, Lightbulb, Shield, Zap, Globe } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true })

  const timeline = [
    {
      year: '2016',
      title: 'Company Founded',
      description: 'Started with a vision to transform businesses through innovative technology solutions.'
    },
    {
      year: '2018',
      title: 'AI Specialization',
      description: 'Expanded into artificial intelligence and machine learning solutions.'
    },
    {
      year: '2020',
      title: 'Cloud Excellence',
      description: 'Became certified partners with AWS and Azure, leading cloud migration projects.'
    },
    {
      year: '2022',
      title: 'Big Data Mastery',
      description: 'Launched comprehensive big data and analytics practice.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading technology consulting firm with 500+ successful projects.'
    }
  ]

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      expertise: 'Strategic Leadership, AI Strategy',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20CEO%20headshot%20confident%20business%20leader%20suit%20corporate%20style&image_size=square',
      bio: '15+ years in technology leadership, former VP at Fortune 500 companies.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'AI/ML, Cloud Architecture',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20CTO%20headshot%20technology%20leader%20confident%20smile&image_size=square',
      bio: 'PhD in Computer Science, expert in machine learning and distributed systems.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Cloud Solutions',
      expertise: 'AWS, Azure, DevOps',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20cloud%20architect%20headshot%20technology%20expert%20confident&image_size=square',
      bio: 'AWS Solutions Architect Professional, 12+ years in cloud infrastructure.'
    },
    {
      name: 'Emily Watson',
      role: 'Data Science Director',
      expertise: 'Big Data, Analytics, BI',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20data%20scientist%20headshot%20analytics%20expert%20confident&image_size=square',
      bio: 'Former data scientist at Google, specializes in large-scale data processing.'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      expertise: 'Software Development, Team Leadership',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20male%20VP%20engineering%20headshot%20software%20development%20leader&image_size=square',
      bio: '20+ years in software engineering, expert in scalable system design.'
    },
    {
      name: 'Lisa Park',
      role: 'Head of Client Success',
      expertise: 'Project Management, Client Relations',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20client%20success%20manager%20headshot%20friendly%20confident&image_size=square',
      bio: 'PMP certified, ensures exceptional client experience and project delivery.'
    }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver breakthrough solutions.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices in every interaction.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering quality that exceeds expectations.'
    },
    {
      icon: Globe,
      title: 'Collaboration',
      description: 'We work as partners with our clients, fostering teamwork and shared success.'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '150+', label: 'Happy Clients' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '8+', label: 'Years of Excellence' }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 px-4 leading-tight">
              About Insignyx Technologies
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto px-4">
              Pioneering the future of technology with innovative AI, cloud, and big data solutions 
              that transform businesses and drive digital excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to an industry leader, our story is one of innovation, 
              dedication, and unwavering commitment to client success.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-500" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To empower businesses with transformative technology solutions that drive innovation, 
                efficiency, and growth. We are committed to delivering exceptional AI, cloud, and big data 
                services that help our clients achieve their strategic objectives and maintain competitive advantage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                To be the global leader in technology consulting, recognized for our expertise in AI, 
                cloud computing, and big data analytics. We envision a future where every business, 
                regardless of size, can harness the power of advanced technology to achieve extraordinary results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leaders bring decades of expertise in technology, business strategy, and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2 text-sm sm:text-base">{member.role}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">{member.expertise}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-200 text-lg">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About