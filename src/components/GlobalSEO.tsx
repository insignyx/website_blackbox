import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, MapPin, Users, TrendingUp, Target, Languages, Flag, Search, BarChart3, Zap, Award, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface GlobalMarket {
  region: string
  country: string
  flag: string
  language: string
  marketSize: string
  opportunity: string
  keyServices: string[]
  localKeywords: string[]
  culturalNotes: string
  competition: 'Low' | 'Medium' | 'High'
  priority: 'High' | 'Medium' | 'Low'
  status: 'Active' | 'Planning' | 'Research'
}

interface SEOMetric {
  region: string
  organicTraffic: string
  keywordRankings: number
  conversionRate: string
  marketShare: string
  growth: string
}

const GlobalSEO = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedRegion, setSelectedRegion] = useState('all')

  const globalMarkets: GlobalMarket[] = [
    {
      region: 'North America',
      country: 'United States',
      flag: '🇺🇸',
      language: 'English (US)',
      marketSize: '$2.8T',
      opportunity: 'Enterprise AI & Cloud Migration',
      keyServices: ['AI Implementation', 'AWS Migration', 'Big Data Analytics', 'Digital Transformation'],
      localKeywords: ['enterprise AI solutions USA', 'cloud migration services America', 'big data consulting US', 'AI implementation companies'],
      culturalNotes: 'Focus on ROI, compliance (SOX, HIPAA), and scalability. Emphasize innovation and competitive advantage.',
      competition: 'High',
      priority: 'High',
      status: 'Active'
    },
    {
      region: 'Europe',
      country: 'United Kingdom',
      flag: '🇬🇧',
      language: 'English (UK)',
      marketSize: '£180B',
      opportunity: 'GDPR-Compliant AI Solutions',
      keyServices: ['GDPR-Compliant AI', 'Azure Migration', 'Data Privacy Solutions', 'Regulatory Compliance'],
      localKeywords: ['AI solutions UK', 'GDPR compliant cloud migration', 'data analytics London', 'enterprise AI Britain'],
      culturalNotes: 'Emphasize data privacy, GDPR compliance, and regulatory adherence. Professional, formal tone.',
      competition: 'High',
      priority: 'High',
      status: 'Active'
    },
    {
      region: 'Europe',
      country: 'Germany',
      flag: '🇩🇪',
      language: 'German',
      marketSize: '€165B',
      opportunity: 'Industry 4.0 & Manufacturing AI',
      keyServices: ['Industry 4.0 Solutions', 'Manufacturing AI', 'IoT Integration', 'Process Automation'],
      localKeywords: ['KI-Lösungen Deutschland', 'Cloud-Migration Unternehmen', 'Big Data Beratung', 'Industrie 4.0 KI'],
      culturalNotes: 'Focus on engineering excellence, precision, and long-term partnerships. Emphasize technical depth.',
      competition: 'Medium',
      priority: 'High',
      status: 'Planning'
    },
    {
      region: 'Asia Pacific',
      country: 'Singapore',
      flag: '🇸🇬',
      language: 'English (SG)',
      marketSize: 'S$45B',
      opportunity: 'Smart Nation & Fintech AI',
      keyServices: ['Fintech AI', 'Smart City Solutions', 'Government AI', 'Banking Analytics'],
      localKeywords: ['AI solutions Singapore', 'fintech cloud migration', 'smart nation AI', 'banking AI Southeast Asia'],
      culturalNotes: 'Emphasize government partnerships, smart city initiatives, and regional expansion capabilities.',
      competition: 'Medium',
      priority: 'High',
      status: 'Active'
    },
    {
      region: 'Asia Pacific',
      country: 'Australia',
      flag: '🇦🇺',
      language: 'English (AU)',
      marketSize: 'A$85B',
      opportunity: 'Mining & Agriculture AI',
      keyServices: ['Mining AI', 'AgTech Solutions', 'Resource Optimization', 'Environmental AI'],
      localKeywords: ['AI solutions Australia', 'mining technology AI', 'agriculture cloud solutions', 'resource optimization'],
      culturalNotes: 'Focus on sustainability, resource efficiency, and practical applications. Casual, direct communication.',
      competition: 'Low',
      priority: 'Medium',
      status: 'Research'
    },
    {
      region: 'Middle East',
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      language: 'English/Arabic',
      marketSize: 'AED 125B',
      opportunity: 'Smart Cities & Oil & Gas AI',
      keyServices: ['Smart City AI', 'Oil & Gas Analytics', 'Tourism AI', 'Government Solutions'],
      localKeywords: ['AI solutions UAE', 'smart city Dubai', 'oil gas AI Middle East', 'government AI solutions'],
      culturalNotes: 'Emphasize innovation, luxury, and cutting-edge technology. Respect for hierarchy and relationships.',
      competition: 'Low',
      priority: 'Medium',
      status: 'Planning'
    }
  ]

  const seoMetrics: SEOMetric[] = [
    { region: 'North America', organicTraffic: '45.2K', keywordRankings: 1247, conversionRate: '3.8%', marketShare: '12.5%', growth: '+28.3%' },
    { region: 'Europe', organicTraffic: '32.1K', keywordRankings: 892, conversionRate: '4.2%', marketShare: '8.7%', growth: '+35.1%' },
    { region: 'Asia Pacific', organicTraffic: '18.7K', keywordRankings: 634, conversionRate: '5.1%', marketShare: '15.3%', growth: '+42.8%' },
    { region: 'Middle East', organicTraffic: '8.3K', keywordRankings: 287, conversionRate: '6.2%', marketShare: '22.1%', growth: '+67.4%' }
  ]

  const filteredMarkets = selectedRegion === 'all' 
    ? globalMarkets 
    : globalMarkets.filter(market => market.region === selectedRegion)

  const regions = ['all', ...Array.from(new Set(globalMarkets.map(market => market.region)))]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Planning': return 'bg-yellow-100 text-yellow-800'
      case 'Research': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600'
      case 'Medium': return 'text-yellow-600'
      case 'Low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case 'High': return 'text-red-600'
      case 'Medium': return 'text-yellow-600'
      case 'Low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Globe className="text-blue-600 mr-4" size={48} />
            <h2 className="text-4xl font-bold text-gray-900">
              Global SEO Strategy
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            International market targeting with localized SEO strategies for AI, cloud migration, and big data services across key global markets
          </p>
        </motion.div>

        {/* Global Performance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Global SEO Performance Metrics
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { metric: 'Global Reach', value: '25+ Countries', icon: <Globe className="text-blue-500" size={24} /> },
              { metric: 'Total Keywords', value: '3,060', icon: <Search className="text-green-500" size={24} /> },
              { metric: 'Avg Growth Rate', value: '+43.4%', icon: <TrendingUp className="text-purple-500" size={24} /> },
              { metric: 'Market Coverage', value: '14.7%', icon: <Target className="text-orange-500" size={24} /> }
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
                <div className="text-gray-600">{stat.metric}</div>
              </motion.div>
            ))}
          </div>

          {/* Regional Performance */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100"
              >
                <h4 className="font-bold text-gray-900 mb-4">{metric.region}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Traffic:</span>
                    <span className="font-semibold">{metric.organicTraffic}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Keywords:</span>
                    <span className="font-semibold">{metric.keywordRankings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CVR:</span>
                    <span className="font-semibold">{metric.conversionRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth:</span>
                    <span className="font-semibold text-green-600">{metric.growth}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Region Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {regions.map((region, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedRegion(region)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedRegion === region
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {region === 'all' ? 'All Regions' : region}
            </motion.button>
          ))}
        </div>

        {/* Market Cards */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMarkets.map((market, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{market.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{market.country}</h3>
                      <p className="text-sm text-gray-600">{market.region}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(market.status)}`}>
                      {market.status}
                    </span>
                  </div>
                </div>

                {/* Market Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Language:</span>
                    <span className="font-semibold flex items-center">
                      <Languages size={16} className="mr-1" />
                      {market.language}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Market Size:</span>
                    <span className="font-semibold text-green-600">{market.marketSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Priority:</span>
                    <span className={`font-semibold ${getPriorityColor(market.priority)}`}>
                      {market.priority}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Competition:</span>
                    <span className={`font-semibold ${getCompetitionColor(market.competition)}`}>
                      {market.competition}
                    </span>
                  </div>
                </div>

                {/* Opportunity */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Target size={16} className="mr-2 text-blue-600" />
                    Key Opportunity
                  </h4>
                  <p className="text-gray-600 text-sm">{market.opportunity}</p>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {market.keyServices.map((service, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Local Keywords */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Search size={16} className="mr-2 text-green-600" />
                    Target Keywords
                  </h4>
                  <div className="space-y-1">
                    {market.localKeywords.slice(0, 3).map((keyword, idx) => (
                      <div key={idx} className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded">
                        "{keyword}"
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cultural Notes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Users size={16} className="mr-2 text-purple-600" />
                    Cultural Insights
                  </h4>
                  <p className="text-gray-600 text-sm">{market.culturalNotes}</p>
                </div>

                {/* Action Button */}
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <BarChart3 size={16} className="mr-2" />
                  View Market Analysis
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Strategy Framework */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Global SEO Implementation Framework
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: 'Research & Analysis',
                icon: <Search className="text-blue-500" size={32} />,
                tasks: [
                  'Market research & competitor analysis',
                  'Local keyword research',
                  'Cultural & linguistic analysis',
                  'Search behavior patterns'
                ]
              },
              {
                phase: 'Technical Setup',
                icon: <Zap className="text-green-500" size={32} />,
                tasks: [
                  'Hreflang implementation',
                  'International URL structure',
                  'CDN & hosting optimization',
                  'Mobile-first indexing'
                ]
              },
              {
                phase: 'Content Localization',
                icon: <Languages className="text-purple-500" size={32} />,
                tasks: [
                  'Translation & localization',
                  'Cultural adaptation',
                  'Local case studies',
                  'Region-specific content'
                ]
              },
              {
                phase: 'Performance Tracking',
                icon: <Award className="text-orange-500" size={32} />,
                tasks: [
                  'Multi-region analytics setup',
                  'Local ranking monitoring',
                  'Conversion tracking',
                  'ROI measurement'
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {phase.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">{phase.phase}</h4>
                <ul className="space-y-2 text-left">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <Globe className="mx-auto mb-6 text-white" size={64} />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Expand Globally?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our global SEO experts help you penetrate international markets with localized AI, cloud migration, and big data solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-200 flex items-center justify-center">
                <MapPin className="mr-2" size={20} />
                Get Global SEO Audit
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center">
                <TrendingUp className="mr-2" size={18} />
                View Market Analysis
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GlobalSEO