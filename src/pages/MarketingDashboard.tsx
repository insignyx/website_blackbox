import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BarChart3, TrendingUp, Globe, Video, Users, Target, Search, Award, Zap, BookOpen } from 'lucide-react'
import { useState } from 'react'
import SEOHead from '../components/SEOHead'
import ContentMarketing from '../components/ContentMarketing'
import CROOptimization from '../components/CROOptimization'
import SEOAnalytics from '../components/SEOAnalytics'
import VideoSEO from '../components/VideoSEO'
import GlobalSEO from '../components/GlobalSEO'

const MarketingDashboard = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [activeTab, setActiveTab] = useState('overview')

  const breadcrumbData = [
    { name: 'Home', url: '/' },
    { name: 'Marketing', url: '/marketing' },
    { name: 'Dashboard', url: '/marketing/dashboard' }
  ]

  const faqData = [
    {
      question: 'What is included in our comprehensive SEO and marketing strategy?',
      answer: 'Our strategy includes content marketing, local and global SEO, conversion rate optimization, video SEO, analytics tracking, and international market targeting for AI, cloud migration, and big data services.'
    },
    {
      question: 'How do we measure the success of our global SEO efforts?',
      answer: 'We track organic traffic growth, keyword rankings across different regions, conversion rates, market share, and ROI metrics using advanced analytics tools and custom dashboards.'
    },
    {
      question: 'What makes our content marketing strategy unique?',
      answer: 'We focus on thought leadership in AI and cloud technologies, creating in-depth case studies, whitepapers, and video content that demonstrates our expertise and builds authority in the enterprise market.'
    }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 size={20} /> },
    { id: 'content', label: 'Content Marketing', icon: <BookOpen size={20} /> },
    { id: 'cro', label: 'CRO', icon: <Target size={20} /> },
    { id: 'analytics', label: 'Analytics', icon: <TrendingUp size={20} /> },
    { id: 'video', label: 'Video SEO', icon: <Video size={20} /> },
    { id: 'global', label: 'Global SEO', icon: <Globe size={20} /> }
  ]

  const overviewStats = [
    {
      category: 'Content Marketing',
      metrics: [
        { label: 'Blog Posts Published', value: '156', change: '+23%' },
        { label: 'Case Studies', value: '42', change: '+18%' },
        { label: 'Whitepapers', value: '28', change: '+35%' },
        { label: 'Thought Leadership Articles', value: '89', change: '+41%' }
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Local SEO Performance',
      metrics: [
        { label: 'Bangalore Rankings', value: '#3', change: '+2 positions' },
        { label: 'Mumbai Visibility', value: '78%', change: '+15%' },
        { label: 'Delhi Market Share', value: '12.5%', change: '+8.3%' },
        { label: 'Local Citations', value: '247', change: '+52' }
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'Global Reach',
      metrics: [
        { label: 'Countries Targeted', value: '25', change: '+5' },
        { label: 'International Traffic', value: '45.2K', change: '+67%' },
        { label: 'Global Keywords', value: '3,060', change: '+890' },
        { label: 'Market Penetration', value: '14.7%', change: '+4.2%' }
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      category: 'Video & Engagement',
      metrics: [
        { label: 'Video Views', value: '125.8K', change: '+43%' },
        { label: 'YouTube Subscribers', value: '50.2K', change: '+28%' },
        { label: 'Engagement Rate', value: '8.7%', change: '+12%' },
        { label: 'Video SEO Score', value: '89.2', change: '+5.1' }
      ],
      color: 'from-red-500 to-red-600'
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'content':
        return <ContentMarketing />
      case 'cro':
        return <CROOptimization />
      case 'analytics':
        return <SEOAnalytics />
      case 'video':
        return <VideoSEO />
      case 'global':
        return <GlobalSEO />
      default:
        return (
          <div className="space-y-16">
            {/* Overview Stats */}
            <div className="grid md:grid-cols-2 gap-8">
              {overviewStats.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {category.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-600 mb-1">
                            {metric.label}
                          </div>
                          <div className="text-xs text-green-600 font-semibold">
                            {metric.change}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Key Marketing Achievements
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    achievement: 'Global Market Expansion',
                    description: 'Successfully expanded to 25+ countries with localized SEO strategies',
                    icon: <Globe className="text-blue-500" size={32} />,
                    metrics: ['25 Countries', '67% Traffic Growth', '14.7% Market Share']
                  },
                  {
                    achievement: 'Content Authority',
                    description: 'Established thought leadership through comprehensive content marketing',
                    icon: <BookOpen className="text-green-500" size={32} />,
                    metrics: ['156 Blog Posts', '42 Case Studies', '28 Whitepapers']
                  },
                  {
                    achievement: 'Video Engagement',
                    description: 'Built strong video presence with optimized YouTube content',
                    icon: <Video className="text-red-500" size={32} />,
                    metrics: ['125K Views', '50K Subscribers', '8.7% Engagement']
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 bg-gray-50 rounded-xl"
                  >
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {item.achievement}
                    </h4>
                    <p className="text-gray-600 mb-4 text-sm">
                      {item.description}
                    </p>
                    <div className="space-y-1">
                      {item.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-sm font-semibold text-blue-600">
                          {metric}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Strategic Initiatives */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white text-center"
            >
              <Award className="mx-auto mb-6 text-white" size={64} />
              <h3 className="text-3xl font-bold mb-4">
                Comprehensive SEO & Marketing Excellence
              </h3>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Our integrated approach combines content marketing, local and global SEO, conversion optimization, 
                video marketing, and advanced analytics to drive enterprise growth in AI, cloud migration, and big data markets.
              </p>
              <div className="grid md:grid-cols-4 gap-6 mt-8">
                {[
                  { label: 'Content Pieces', value: '315+' },
                  { label: 'Global Markets', value: '25+' },
                  { label: 'Video Content', value: '200+' },
                  { label: 'SEO Score', value: '94.2' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-indigo-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Marketing Dashboard - Comprehensive SEO & Marketing Strategy | Insignyx Technologies"
        description="Advanced marketing dashboard showcasing our comprehensive SEO strategy, content marketing, CRO, video SEO, and global market expansion for AI, cloud migration, and big data services."
        keywords="marketing dashboard, SEO strategy, content marketing, global SEO, video SEO, conversion optimization, AI marketing, cloud migration marketing"
        canonicalUrl="https://insignyx.com/marketing/dashboard"
        ogImage="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20marketing%20dashboard%20with%20SEO%20analytics%20charts%20and%20global%20reach%20visualization&image_size=landscape_16_9"
        breadcrumbs={breadcrumbData}
        faqData={faqData}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Marketing Dashboard - Comprehensive SEO Strategy',
          description: 'Advanced marketing dashboard showcasing comprehensive SEO and marketing strategies for enterprise AI, cloud migration, and big data services.',
          provider: {
            '@type': 'Organization',
            name: 'Insignyx Technologies',
            url: 'https://insignyx.com'
          }
        }}
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <BarChart3 className="text-white mr-4" size={48} />
              <h1 className="text-4xl md:text-5xl font-bold">
                Marketing Dashboard
              </h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive SEO & Marketing Strategy for Global Enterprise Growth
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={ref} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  )
}

export default MarketingDashboard