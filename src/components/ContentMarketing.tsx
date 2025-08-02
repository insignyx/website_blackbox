import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, BookOpen, Download, Eye, Calendar, User, Tag, Clock, TrendingUp, Award, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishDate: string
  author: string
  image: string
  tags: string[]
  featured: boolean
  type: 'blog' | 'case-study' | 'whitepaper' | 'ebook'
}

interface ContentMarketingProps {
  showFeatured?: boolean
  category?: string
  limit?: number
}

const ContentMarketing = ({ showFeatured = false, category, limit }: ContentMarketingProps) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Enterprise AI Implementation: A Complete Guide for Fortune 500 Companies',
      excerpt: 'Comprehensive roadmap for implementing AI at scale in large enterprises, covering strategy, technology selection, and change management.',
      category: 'AI Strategy',
      readTime: '12 min read',
      publishDate: '2024-01-15',
      author: 'Dr. Rajesh Kumar',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20corporate%20boardroom%20with%20AI%20technology%20displays%20and%20executives%20discussing%20digital%20transformation%20strategy&image_size=landscape_16_9',
      tags: ['AI Strategy', 'Enterprise', 'Digital Transformation'],
      featured: true,
      type: 'blog'
    },
    {
      id: '2',
      title: 'Case Study: 300% ROI with AI-Powered Supply Chain Optimization',
      excerpt: 'How a global manufacturing company achieved unprecedented efficiency gains through our AI-driven supply chain solution.',
      category: 'Case Studies',
      readTime: '8 min read',
      publishDate: '2024-01-10',
      author: 'Sarah Chen',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20warehouse%20with%20AI%20robots%20and%20automated%20systems%20managing%20supply%20chain%20operations&image_size=landscape_16_9',
      tags: ['Case Study', 'Supply Chain', 'ROI'],
      featured: true,
      type: 'case-study'
    },
    {
      id: '3',
      title: 'The Future of Cloud Migration: AWS vs Azure vs Google Cloud in 2024',
      excerpt: 'Expert analysis of leading cloud platforms and strategic recommendations for enterprise migration decisions.',
      category: 'Cloud Migration',
      readTime: '15 min read',
      publishDate: '2024-01-08',
      author: 'Michael Rodriguez',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=futuristic%20cloud%20computing%20infrastructure%20with%20multiple%20cloud%20platforms%20AWS%20Azure%20Google%20Cloud&image_size=landscape_16_9',
      tags: ['Cloud Migration', 'AWS', 'Azure', 'Comparison'],
      featured: false,
      type: 'blog'
    },
    {
      id: '4',
      title: 'Big Data Analytics Whitepaper: Transforming Healthcare with AI',
      excerpt: 'Comprehensive 50-page whitepaper on leveraging big data and AI to revolutionize patient care and operational efficiency.',
      category: 'Healthcare',
      readTime: '45 min read',
      publishDate: '2024-01-05',
      author: 'Dr. Priya Sharma',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20hospital%20with%20AI%20technology%20healthcare%20data%20analytics%20and%20patient%20monitoring%20systems&image_size=landscape_16_9',
      tags: ['Healthcare', 'Big Data', 'AI', 'Whitepaper'],
      featured: true,
      type: 'whitepaper'
    },
    {
      id: '5',
      title: 'Machine Learning in Financial Services: Risk Management Revolution',
      excerpt: 'How ML algorithms are transforming risk assessment, fraud detection, and regulatory compliance in banking.',
      category: 'Financial Services',
      readTime: '10 min read',
      publishDate: '2024-01-03',
      author: 'David Kim',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20financial%20trading%20floor%20with%20AI%20powered%20risk%20management%20systems%20and%20data%20visualization&image_size=landscape_16_9',
      tags: ['Machine Learning', 'Finance', 'Risk Management'],
      featured: false,
      type: 'blog'
    }
  ]

  const whitepapers = [
    {
      title: 'The Complete Guide to AI Transformation',
      description: '80-page comprehensive guide covering AI strategy, implementation, and ROI measurement',
      downloads: '2,500+',
      pages: '80 pages',
      type: 'PDF Guide'
    },
    {
      title: 'Cloud Migration Best Practices 2024',
      description: 'Strategic framework for successful enterprise cloud migration with real-world case studies',
      downloads: '1,800+',
      pages: '65 pages',
      type: 'Whitepaper'
    },
    {
      title: 'Big Data Analytics ROI Calculator',
      description: 'Interactive tool and methodology for calculating big data project returns and business impact',
      downloads: '3,200+',
      pages: '45 pages',
      type: 'Interactive Tool'
    }
  ]

  const videoContent = [
    {
      title: 'AI Implementation Masterclass',
      description: 'Step-by-step guide to implementing AI in enterprise environments',
      duration: '45 min',
      views: '15K+',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20video%20thumbnail%20AI%20masterclass%20with%20instructor%20and%20technology%20graphics&image_size=landscape_16_9'
    },
    {
      title: 'Cloud Migration Success Stories',
      description: 'Real client testimonials and migration journey case studies',
      duration: '30 min',
      views: '12K+',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20video%20thumbnail%20cloud%20migration%20success%20stories%20with%20client%20testimonials&image_size=landscape_16_9'
    },
    {
      title: 'Big Data Architecture Deep Dive',
      description: 'Technical walkthrough of scalable big data solutions',
      duration: '60 min',
      views: '8K+',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20video%20thumbnail%20big%20data%20architecture%20technical%20deep%20dive&image_size=landscape_16_9'
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    if (showFeatured && !post.featured) return false
    if (category && post.category !== category) return false
    return true
  }).slice(0, limit)

  const categories = ['All', 'AI Strategy', 'Case Studies', 'Cloud Migration', 'Healthcare', 'Financial Services']

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Thought Leadership & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, case studies, and comprehensive guides on AI, cloud migration, and big data solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                category === cat || (!category && cat === 'All')
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Featured Content */}
        <div ref={ref} className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Featured Article */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            {filteredPosts[0] && (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      filteredPosts[0].type === 'case-study' ? 'bg-green-100 text-green-800' :
                      filteredPosts[0].type === 'whitepaper' ? 'bg-purple-100 text-purple-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {filteredPosts[0].type === 'case-study' ? 'Case Study' :
                       filteredPosts[0].type === 'whitepaper' ? 'Whitepaper' : 'Article'}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {filteredPosts[0].author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(filteredPosts[0].publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {filteredPosts[0].readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredPosts[0].tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${filteredPosts[0].id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            )}
          </motion.div>

          {/* Sidebar Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Recent Posts */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="mr-2 text-blue-600" size={20} />
                Trending Articles
              </h4>
              <div className="space-y-4">
                {filteredPosts.slice(1, 4).map((post, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <h5 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h5>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-blue-600 text-sm font-medium hover:text-blue-700"
                    >
                      Read More →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
              <p className="text-blue-100 mb-4">
                Get the latest insights on AI, cloud migration, and big data delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Whitepapers & Resources */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Free Resources & Whitepapers
            </h3>
            <p className="text-xl text-gray-600">
              Download our comprehensive guides and tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Download className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <span className="text-sm font-semibold text-blue-600">{paper.type}</span>
                    <div className="text-sm text-gray-500">{paper.pages}</div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{paper.title}</h4>
                <p className="text-gray-600 mb-4">{paper.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Eye size={14} className="mr-1" />
                    {paper.downloads} downloads
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                    <Download size={16} className="mr-2" />
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Video Content & Webinars
            </h3>
            <p className="text-xl text-gray-600">
              Watch our expert-led sessions and technical deep dives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoContent.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-8 border-l-blue-600 border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{video.title}</h4>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      {video.views} views
                    </span>
                    <span className="text-blue-600 font-semibold">Watch Now →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Want to Contribute or Collaborate?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Share your expertise with our global audience or partner with us on thought leadership content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                <BookOpen className="mr-2" size={18} />
                Contribute Content
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center"
              >
                <Globe className="mr-2" size={18} />
                Partnership Opportunities
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContentMarketing