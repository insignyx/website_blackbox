import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Eye, ThumbsUp, Share2, Clock, Calendar, User, Tag, TrendingUp, Youtube, ExternalLink, Download, Users } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface VideoContent {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  views: string
  likes: string
  publishDate: string
  category: string
  tags: string[]
  youtubeId?: string
  type: 'tutorial' | 'case-study' | 'webinar' | 'demo' | 'interview'
  featured: boolean
  seoScore: number
}

interface VideoSEOProps {
  showFeatured?: boolean
  category?: string
  limit?: number
}

const VideoSEO = ({ showFeatured = false, category, limit }: VideoSEOProps) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const videoContent: VideoContent[] = [
    {
      id: '1',
      title: 'Complete Guide to Enterprise AI Implementation | 2024 Masterclass',
      description: 'Learn how Fortune 500 companies successfully implement AI solutions. This comprehensive masterclass covers strategy, technology selection, change management, and ROI measurement.',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20video%20thumbnail%20AI%20implementation%20masterclass%20with%20corporate%20setting%20and%20technology%20graphics&image_size=landscape_16_9',
      duration: '45:32',
      views: '25.4K',
      likes: '1.2K',
      publishDate: '2024-01-15',
      category: 'AI Strategy',
      tags: ['AI Implementation', 'Enterprise AI', 'Digital Transformation', 'Strategy', 'ROI'],
      youtubeId: 'dQw4w9WgXcQ',
      type: 'tutorial',
      featured: true,
      seoScore: 95
    },
    {
      id: '2',
      title: 'AWS vs Azure vs Google Cloud: Migration Strategy Comparison 2024',
      description: 'Expert analysis comparing the three major cloud platforms for enterprise migration. Real-world case studies, cost analysis, and strategic recommendations.',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20video%20thumbnail%20cloud%20migration%20comparison%20AWS%20Azure%20Google%20Cloud%20platforms&image_size=landscape_16_9',
      duration: '38:15',
      views: '18.7K',
      likes: '892',
      publishDate: '2024-01-10',
      category: 'Cloud Migration',
      tags: ['Cloud Migration', 'AWS', 'Azure', 'Google Cloud', 'Comparison'],
      youtubeId: 'dQw4w9WgXcQ',
      type: 'tutorial',
      featured: true,
      seoScore: 92
    },
    {
      id: '3',
      title: 'Healthcare AI Success Story: 300% ROI in 6 Months',
      description: 'Detailed case study of how we helped a major healthcare provider implement AI-powered patient management system, resulting in significant cost savings and improved outcomes.',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20video%20thumbnail%20healthcare%20AI%20case%20study%20with%20hospital%20setting%20and%20medical%20technology&image_size=landscape_16_9',
      duration: '28:45',
      views: '12.3K',
      likes: '567',
      publishDate: '2024-01-08',
      category: 'Case Studies',
      tags: ['Healthcare AI', 'Case Study', 'ROI', 'Patient Management', 'Success Story'],
      youtubeId: 'dQw4w9WgXcQ',
      type: 'case-study',
      featured: false,
      seoScore: 88
    },
    {
      id: '4',
      title: 'Big Data Analytics Architecture: Scalable Solutions Deep Dive',
      description: 'Technical walkthrough of building scalable big data architectures. Covers data ingestion, processing, storage, and analytics with real-world examples.',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20video%20thumbnail%20big%20data%20architecture%20technical%20deep%20dive%20with%20data%20flow%20diagrams&image_size=landscape_16_9',
      duration: '52:18',
      views: '15.8K',
      likes: '743',
      publishDate: '2024-01-05',
      category: 'Big Data',
      tags: ['Big Data', 'Architecture', 'Scalability', 'Analytics', 'Technical'],
      youtubeId: 'dQw4w9WgXcQ',
      type: 'tutorial',
      featured: true,
      seoScore: 90
    },
    {
      id: '5',
      title: 'Live Demo: AI-Powered Customer Service Platform',
      description: 'Interactive demonstration of our AI customer service solution, showing real-time natural language processing, sentiment analysis, and automated response generation.',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20video%20thumbnail%20AI%20customer%20service%20platform%20demo%20with%20interface%20screenshots&image_size=landscape_16_9',
      duration: '22:30',
      views: '9.2K',
      likes: '421',
      publishDate: '2024-01-03',
      category: 'Product Demos',
      tags: ['AI Demo', 'Customer Service', 'NLP', 'Live Demo', 'Platform'],
      youtubeId: 'dQw4w9WgXcQ',
      type: 'demo',
      featured: false,
      seoScore: 85
    },
    {
      id: '6',
      title: 'CEO Interview: The Future of AI in Enterprise | Industry Insights',
      description: 'Exclusive interview with our CEO discussing AI trends, market predictions, and strategic insights for enterprise leaders planning their AI transformation journey.',
      thumbnail: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20video%20thumbnail%20CEO%20interview%20about%20AI%20future%20in%20corporate%20setting&image_size=landscape_16_9',
      duration: '35:42',
      views: '21.6K',
      likes: '1.1K',
      publishDate: '2024-01-01',
      category: 'Industry Insights',
      tags: ['CEO Interview', 'AI Future', 'Enterprise', 'Industry Insights', 'Leadership'],
      youtubeId: 'dQw4w9WgXcQ',
      type: 'interview',
      featured: true,
      seoScore: 93
    }
  ]

  const categories = ['all', 'AI Strategy', 'Cloud Migration', 'Case Studies', 'Big Data', 'Product Demos', 'Industry Insights']

  const filteredVideos = videoContent.filter(video => {
    if (showFeatured && !video.featured) return false
    if (category && video.category !== category) return false
    if (activeCategory !== 'all' && video.category !== activeCategory) return false
    return true
  }).slice(0, limit)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'tutorial': return '🎓'
      case 'case-study': return '📊'
      case 'webinar': return '🎤'
      case 'demo': return '💻'
      case 'interview': return '🎙️'
      default: return '🎥'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'tutorial': return 'bg-blue-100 text-blue-800'
      case 'case-study': return 'bg-green-100 text-green-800'
      case 'webinar': return 'bg-purple-100 text-purple-800'
      case 'demo': return 'bg-orange-100 text-orange-800'
      case 'interview': return 'bg-pink-100 text-pink-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getSEOScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-yellow-600'
    return 'text-red-600'
  }

  const handleVideoPlay = (videoId: string) => {
    setSelectedVideo(videoId)
    // Track video engagement for SEO analytics
    console.log(`Video played: ${videoId}`)
  }

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
            Video Content & Tutorials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert-led video content covering AI implementation, cloud migration, and big data solutions
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
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {cat === 'all' ? 'All Videos' : cat}
            </motion.button>
          ))}
        </div>

        {/* Featured Video */}
        {filteredVideos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video Player */}
                <div className="relative bg-black">
                  <img
                    src={filteredVideos[0].thumbnail}
                    alt={filteredVideos[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button
                      onClick={() => handleVideoPlay(filteredVideos[0].id)}
                      className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 transform hover:scale-110"
                    >
                      <Play className="text-blue-600 ml-1" size={32} />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {filteredVideos[0].duration}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(filteredVideos[0].type)}`}>
                      {getTypeIcon(filteredVideos[0].type)} {filteredVideos[0].type.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {new Date(filteredVideos[0].publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Eye size={16} className="mr-1" />
                      {filteredVideos[0].views} views
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp size={16} className="mr-1" />
                      {filteredVideos[0].likes} likes
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {filteredVideos[0].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredVideos[0].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {filteredVideos[0].tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center">
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Play size={16} className="mr-2" />
                        Watch Now
                      </button>
                      <a
                        href={`https://youtube.com/watch?v=${filteredVideos[0].youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Youtube size={16} className="mr-2 text-red-600" />
                        YouTube
                      </a>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">SEO Score</div>
                      <div className={`text-lg font-bold ${getSEOScoreColor(filteredVideos[0].seoScore)}`}>
                        {filteredVideos[0].seoScore}/100
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredVideos.slice(1).map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleVideoPlay(video.id)}
                    className="w-16 h-16 bg-white bg-opacity-0 group-hover:bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300 transform scale-0 group-hover:scale-100"
                  >
                    <Play className="text-blue-600 ml-1" size={24} />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(video.type)}`}>
                    {getTypeIcon(video.type)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-blue-600 font-semibold">{video.category}</span>
                  <div className={`text-sm font-bold ${getSEOScoreColor(video.seoScore)}`}>
                    SEO: {video.seoScore}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {video.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      {video.views}
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp size={14} className="mr-1" />
                      {video.likes}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {new Date(video.publishDate).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleVideoPlay(video.id)}
                    className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    <Play size={16} className="mr-2" />
                    Watch Video
                  </button>
                  <a
                    href={`https://youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <Youtube size={16} className="mr-1" />
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video SEO Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Video SEO Performance
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: 'Total Views', value: '125.8K', change: '+23.5%', icon: <Eye className="text-blue-500" size={24} /> },
              { metric: 'Engagement Rate', value: '8.7%', change: '+12.3%', icon: <ThumbsUp className="text-green-500" size={24} /> },
              { metric: 'Watch Time', value: '2.4M min', change: '+18.9%', icon: <Clock className="text-purple-500" size={24} /> },
              { metric: 'Avg SEO Score', value: '89.2', change: '+5.1%', icon: <TrendingUp className="text-orange-500" size={24} /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 mb-2">{stat.metric}</div>
                <div className="text-green-600 text-sm font-semibold">{stat.change}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* YouTube Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-12 text-white">
            <Youtube className="mx-auto mb-6 text-white" size={64} />
            <h3 className="text-3xl font-bold mb-4">
              Subscribe to Our YouTube Channel
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Get the latest AI, cloud migration, and big data tutorials delivered directly to your feed. 
              Join 50K+ subscribers learning from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/@insignyxtechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              >
                <Youtube className="mr-2" size={20} />
                Subscribe Now
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-200 flex items-center justify-center">
                <Download className="mr-2" size={18} />
                Download Video Resources
              </button>
            </div>
            <div className="flex items-center justify-center space-x-8 mt-8 text-red-100">
              <div className="flex items-center">
                <Users className="mr-2" size={16} />
                50K+ Subscribers
              </div>
              <div className="flex items-center">
                <Play className="mr-2" size={16} />
                200+ Videos
              </div>
              <div className="flex items-center">
                <TrendingUp className="mr-2" size={16} />
                Weekly Updates
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default VideoSEO