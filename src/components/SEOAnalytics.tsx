import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, Eye, Users, Clock, Search, Globe, BarChart3, Target, ArrowUp, ArrowDown, Minus } from 'lucide-react'
import { useEffect, useState } from 'react'

interface AnalyticsData {
  metric: string
  value: string | number
  change: number
  period: string
  trend: 'up' | 'down' | 'stable'
  icon: React.ReactNode
}

interface KeywordData {
  keyword: string
  position: number
  previousPosition: number
  clicks: number
  impressions: number
  ctr: number
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

interface PagePerformance {
  page: string
  title: string
  clicks: number
  impressions: number
  ctr: number
  position: number
  change: number
}

const SEOAnalytics = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedPeriod, setSelectedPeriod] = useState('30d')
  const [activeTab, setActiveTab] = useState('overview')

  // Mock analytics data - in real implementation, this would come from Google Analytics API
  const analyticsData: AnalyticsData[] = [
    {
      metric: 'Organic Traffic',
      value: '45,234',
      change: 23.5,
      period: 'vs last month',
      trend: 'up',
      icon: <Users className="text-blue-500" size={24} />
    },
    {
      metric: 'Keyword Rankings',
      value: '1,247',
      change: 12.3,
      period: 'keywords ranking',
      trend: 'up',
      icon: <Search className="text-green-500" size={24} />
    },
    {
      metric: 'Click-Through Rate',
      value: '3.8%',
      change: 0.7,
      period: 'average CTR',
      trend: 'up',
      icon: <Target className="text-purple-500" size={24} />
    },
    {
      metric: 'Page Load Speed',
      value: '2.1s',
      change: -15.2,
      period: 'average load time',
      trend: 'up',
      icon: <Clock className="text-orange-500" size={24} />
    },
    {
      metric: 'Bounce Rate',
      value: '32.4%',
      change: -8.1,
      period: 'vs last month',
      trend: 'up',
      icon: <TrendingUp className="text-red-500" size={24} />
    },
    {
      metric: 'Conversion Rate',
      value: '4.2%',
      change: 18.9,
      period: 'from organic traffic',
      trend: 'up',
      icon: <BarChart3 className="text-cyan-500" size={24} />
    }
  ]

  const keywordData: KeywordData[] = [
    {
      keyword: 'AI implementation services',
      position: 3,
      previousPosition: 7,
      clicks: 1247,
      impressions: 15680,
      ctr: 7.95,
      difficulty: 'Hard'
    },
    {
      keyword: 'cloud migration consulting',
      position: 1,
      previousPosition: 2,
      clicks: 2156,
      impressions: 18920,
      ctr: 11.39,
      difficulty: 'Medium'
    },
    {
      keyword: 'big data analytics solutions',
      position: 5,
      previousPosition: 8,
      clicks: 892,
      impressions: 12450,
      ctr: 7.17,
      difficulty: 'Hard'
    },
    {
      keyword: 'machine learning consulting',
      position: 2,
      previousPosition: 3,
      clicks: 1834,
      impressions: 16780,
      ctr: 10.93,
      difficulty: 'Medium'
    },
    {
      keyword: 'enterprise AI strategy',
      position: 4,
      previousPosition: 6,
      clicks: 1123,
      impressions: 14230,
      ctr: 7.89,
      difficulty: 'Hard'
    }
  ]

  const pagePerformance: PagePerformance[] = [
    {
      page: '/services/ai-implementation',
      title: 'AI Implementation Services',
      clicks: 3456,
      impressions: 28940,
      ctr: 11.94,
      position: 2.3,
      change: 23.5
    },
    {
      page: '/services/cloud-migration',
      title: 'Cloud Migration Services',
      clicks: 2890,
      impressions: 24560,
      ctr: 11.77,
      position: 1.8,
      change: 18.2
    },
    {
      page: '/services/big-data-analytics',
      title: 'Big Data Analytics',
      clicks: 2234,
      impressions: 19870,
      ctr: 11.24,
      position: 3.1,
      change: 15.7
    },
    {
      page: '/blog/ai-transformation-guide',
      title: 'Complete AI Transformation Guide',
      clicks: 1876,
      impressions: 16540,
      ctr: 11.34,
      position: 2.7,
      change: 31.2
    },
    {
      page: '/case-studies/healthcare-ai',
      title: 'Healthcare AI Case Study',
      clicks: 1567,
      impressions: 14230,
      ctr: 11.02,
      position: 3.4,
      change: 28.9
    }
  ]

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="text-green-500" size={16} />
      case 'down':
        return <ArrowDown className="text-red-500" size={16} />
      default:
        return <Minus className="text-gray-500" size={16} />
    }
  }

  const getPositionChange = (current: number, previous: number) => {
    const change = previous - current
    if (change > 0) return { value: `+${change}`, color: 'text-green-600', icon: <ArrowUp size={14} /> }
    if (change < 0) return { value: `${change}`, color: 'text-red-600', icon: <ArrowDown size={14} /> }
    return { value: '0', color: 'text-gray-600', icon: <Minus size={14} /> }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      // In real implementation, fetch fresh data from APIs
      console.log('Updating SEO analytics data...')
    }, 300000) // Update every 5 minutes

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SEO Analytics & Performance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time insights into your SEO performance, keyword rankings, and organic traffic growth
          </p>
        </motion.div>

        {/* Period Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {['7d', '30d', '90d', '1y'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-6 py-2 rounded-md font-semibold transition-all ${
                  selectedPeriod === period
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {period === '7d' ? 'Last 7 Days' :
                 period === '30d' ? 'Last 30 Days' :
                 period === '90d' ? 'Last 90 Days' : 'Last Year'}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {analyticsData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                  {data.icon}
                </div>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(data.trend)}
                  <span className={`text-sm font-semibold ${
                    data.change > 0 ? 'text-green-600' : data.change < 0 ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {data.change > 0 ? '+' : ''}{data.change}%
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{data.value}</h3>
              <p className="text-gray-600 text-sm">{data.metric}</p>
              <p className="text-gray-500 text-xs mt-2">{data.period}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'keywords', label: 'Keywords' },
              { id: 'pages', label: 'Pages' },
              { id: 'technical', label: 'Technical SEO' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'keywords' && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Keyword Performance</h3>
                <p className="text-gray-600">Track your most important keyword rankings and performance</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impressions</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTR</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {keywordData.map((keyword, index) => {
                      const positionChange = getPositionChange(keyword.position, keyword.previousPosition)
                      return (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{keyword.keyword}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 font-semibold">#{keyword.position}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className={`flex items-center text-sm font-semibold ${positionChange.color}`}>
                              {positionChange.icon}
                              <span className="ml-1">{positionChange.value}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {keyword.clicks.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {keyword.impressions.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {keyword.ctr}%
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(keyword.difficulty)}`}>
                              {keyword.difficulty}
                            </span>
                          </td>
                        </motion.tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'pages' && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Page Performance</h3>
                <p className="text-gray-600">Monitor your top-performing pages and their SEO metrics</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impressions</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTR</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pagePerformance.map((page, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{page.title}</div>
                            <div className="text-sm text-gray-500">{page.page}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {page.clicks.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {page.impressions.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {page.ctr}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {page.position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`flex items-center text-sm font-semibold ${
                            page.change > 0 ? 'text-green-600' : page.change < 0 ? 'text-red-600' : 'text-gray-600'
                          }`}>
                            {page.change > 0 ? <ArrowUp size={14} /> : page.change < 0 ? <ArrowDown size={14} /> : <Minus size={14} />}
                            <span className="ml-1">{page.change > 0 ? '+' : ''}{page.change}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Core Web Vitals */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Core Web Vitals</h3>
                <div className="space-y-4">
                  {[
                    { metric: 'Largest Contentful Paint', value: '2.1s', status: 'good', target: '< 2.5s' },
                    { metric: 'First Input Delay', value: '89ms', status: 'good', target: '< 100ms' },
                    { metric: 'Cumulative Layout Shift', value: '0.08', status: 'good', target: '< 0.1' },
                    { metric: 'First Contentful Paint', value: '1.4s', status: 'good', target: '< 1.8s' }
                  ].map((vital, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900">{vital.metric}</div>
                        <div className="text-sm text-gray-600">Target: {vital.target}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-gray-900">{vital.value}</div>
                        <div className={`text-sm font-semibold ${
                          vital.status === 'good' ? 'text-green-600' : vital.status === 'needs-improvement' ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {vital.status === 'good' ? 'Good' : vital.status === 'needs-improvement' ? 'Needs Improvement' : 'Poor'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Issues */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Issues</h3>
                <div className="space-y-4">
                  {[
                    { issue: 'Missing Alt Tags', count: 3, severity: 'medium' },
                    { issue: 'Duplicate Meta Descriptions', count: 1, severity: 'low' },
                    { issue: 'Large Image Files', count: 7, severity: 'medium' },
                    { issue: 'Missing Schema Markup', count: 2, severity: 'low' }
                  ].map((issue, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-gray-900">{issue.issue}</div>
                        <div className={`text-sm font-semibold ${
                          issue.severity === 'high' ? 'text-red-600' : issue.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                        }`}>
                          {issue.severity.charAt(0).toUpperCase() + issue.severity.slice(1)} Priority
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-gray-900">{issue.count}</div>
                        <div className="text-sm text-gray-600">issues</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Traffic Chart Placeholder */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Organic Traffic Trend</h3>
                <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="mx-auto mb-4 text-blue-500" size={48} />
                    <p className="text-gray-600">Traffic trending upward</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">+23.5% growth</p>
                  </div>
                </div>
              </div>

              {/* Top Performing Content */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performing Content</h3>
                <div className="space-y-4">
                  {pagePerformance.slice(0, 5).map((page, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm">{page.title}</div>
                        <div className="text-xs text-gray-600">{page.page}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{page.clicks.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">clicks</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Action Items */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">SEO Optimization Recommendations</h3>
            <p className="text-blue-100">Based on your current performance data</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Improve Page Speed',
                description: 'Optimize 7 pages with large image files to improve Core Web Vitals',
                priority: 'High',
                impact: '+15% traffic'
              },
              {
                title: 'Target New Keywords',
                description: 'Expand content for 12 high-opportunity keywords in your niche',
                priority: 'Medium',
                impact: '+25% visibility'
              },
              {
                title: 'Fix Technical Issues',
                description: 'Address 13 technical SEO issues affecting crawlability',
                priority: 'Medium',
                impact: '+10% rankings'
              }
            ].map((recommendation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-lg">{recommendation.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    recommendation.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {recommendation.priority}
                  </span>
                </div>
                <p className="text-blue-100 mb-4">{recommendation.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-300">{recommendation.impact}</span>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SEOAnalytics