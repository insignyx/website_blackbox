import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Search, Calendar, User, Clock, ArrowRight, Tag, TrendingUp, BookOpen, Share2, Heart, MessageCircle, Eye } from 'lucide-react'

const Blog = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTag, setSelectedTag] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in artificial intelligence and how they will reshape enterprise operations in the coming year.',
      content: 'Artificial Intelligence continues to evolve at an unprecedented pace, transforming how enterprises operate and compete in the global market...',
      author: 'Dr. Sarah Chen',
      authorRole: 'AI Research Director',
      authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Enterprise', 'Trends', 'Predictions'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop&crop=center',
      featured: true,
      views: 2450,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide for CTOs',
      excerpt: 'Learn the essential strategies and best practices for successful cloud migration projects.',
      content: 'Cloud migration has become a critical initiative for organizations looking to modernize their infrastructure...',
      author: 'Michael Rodriguez',
      authorRole: 'Cloud Solutions Architect',
      authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Migration', 'AWS', 'Azure', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop&crop=center',
      featured: false,
      views: 1890,
      likes: 67,
      comments: 15
    },
    {
      id: 3,
      title: 'Big Data Analytics: Turning Information into Actionable Insights',
      excerpt: 'Discover how modern big data analytics can transform raw data into valuable business intelligence.',
      content: 'In today\'s data-driven world, organizations are generating massive amounts of information every second...',
      author: 'Emily Watson',
      authorRole: 'Data Science Lead',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Data Analytics',
      tags: ['Big Data', 'Analytics', 'Business Intelligence', 'Insights'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop&crop=center',
      featured: true,
      views: 3120,
      likes: 124,
      comments: 31
    },
    {
      id: 4,
      title: 'DevOps Automation: Streamlining Your Development Pipeline',
      excerpt: 'Learn how to implement effective DevOps automation strategies to accelerate your development process.',
      content: 'DevOps automation has become essential for organizations looking to deliver software faster and more reliably...',
      author: 'David Kim',
      authorRole: 'DevOps Engineer',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'DevOps',
      tags: ['DevOps', 'Automation', 'CI/CD', 'Development'],
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=450&fit=crop&crop=center',
      featured: false,
      views: 1650,
      likes: 45,
      comments: 12
    },
    {
      id: 5,
      title: 'Cybersecurity in the Age of Remote Work: Protecting Your Digital Assets',
      excerpt: 'Essential cybersecurity strategies for protecting your organization in the remote work era.',
      content: 'The shift to remote work has fundamentally changed the cybersecurity landscape for organizations worldwide...',
      author: 'Lisa Thompson',
      authorRole: 'Security Consultant',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'Remote Work', 'Protection', 'Digital Assets'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop&crop=center',
      featured: false,
      views: 2280,
      likes: 78,
      comments: 19
    },
    {
      id: 6,
      title: 'The Rise of Low-Code/No-Code Platforms: Democratizing Software Development',
      excerpt: 'Explore how low-code and no-code platforms are changing the software development landscape.',
      content: 'Low-code and no-code platforms are revolutionizing how organizations approach software development...',
      author: 'James Wilson',
      authorRole: 'Software Development Manager',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Software Development',
      tags: ['Low-Code', 'No-Code', 'Development', 'Platforms'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop&crop=center',
      featured: false,
      views: 1420,
      likes: 52,
      comments: 8
    }
  ]

  const categories = [
    'all',
    'AI & Machine Learning',
    'Cloud Computing',
    'Data Analytics',
    'DevOps',
    'Cybersecurity',
    'Software Development'
  ]

  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag)
    
    return matchesSearch && matchesCategory && matchesTag
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Tech Insights & Trends
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert insights, industry trends, 
              and practical guides from our technology leaders.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search articles, topics, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-2xl text-lg border-0 focus:ring-4 focus:ring-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-gray-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful articles, handpicked by our editorial team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm flex items-center">
                      <Eye className="mr-1" size={14} />
                      {post.views.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="mr-1" size={14} />
                      {formatDate(post.date)}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{post.author}</div>
                        <div className="text-sm text-gray-500">{post.authorRole}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center">
                        <Heart className="mr-1" size={16} />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="mr-1" size={16} />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1" size={16} />
                        <span className="text-sm">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Filter by Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {category === 'all' ? 'All Categories' : category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Tag Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Filter by Tag</label>
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {allTags.map(tag => (
                      <option key={tag} value={tag}>
                        {tag === 'all' ? 'All Tags' : tag}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
                <p className="text-gray-600">
                  Showing {filteredPosts.length} of {blogPosts.length} articles
                </p>
              </div>

              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="relative overflow-hidden h-48 md:h-full">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {post.featured && (
                            <div className="absolute top-4 left-4">
                              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                                Featured
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="mr-1" size={14} />
                            {formatDate(post.date)}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="w-8 h-8 rounded-full object-cover mr-2"
                            />
                            <div>
                              <div className="font-medium text-gray-900 text-sm">{post.author}</div>
                              <div className="text-xs text-gray-500">{post.readTime}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3 text-gray-500">
                            <div className="flex items-center">
                              <Eye className="mr-1" size={14} />
                              <span className="text-xs">{post.views.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center">
                              <Heart className="mr-1" size={14} />
                              <span className="text-xs">{post.likes}</span>
                            </div>
                            <ArrowRight className="text-blue-600 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Recent Posts */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <TrendingUp className="mr-2 text-blue-600" size={24} />
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="flex items-start space-x-3 group cursor-pointer">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center text-gray-500 text-sm mt-1">
                            <Calendar className="mr-1" size={12} />
                            {formatDate(post.date)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Tag className="mr-2 text-blue-600" size={24} />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.slice(1, 15).map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                          selectedTag === tag
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BookOpen className="mr-2" size={24} />
                    Stay Updated
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Get the latest tech insights and trends delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/20"
                    />
                    <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Social Share */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <Share2 className="mr-2 text-blue-600" size={24} />
                    Follow Us
                  </h3>
                  <div className="flex space-x-3">
                    {['Twitter', 'LinkedIn', 'Facebook', 'YouTube'].map((platform) => (
                      <button
                        key={platform}
                        className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our expertise can help you achieve your technology goals.
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

export default Blog