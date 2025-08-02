import React from 'react'
import SEOHead from '../components/SEOHead'
import Breadcrumb, { BreadcrumbItem } from '../components/Breadcrumb'
import { Store, Eye, Package, Users, BarChart3, Smartphone } from 'lucide-react'

const AIForRetail: React.FC = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Services', url: '/services' },
    { name: 'AI for Retail', url: '/ai-retail', isActive: true }
  ]

  const faqData = [
    {
      question: 'How can AI improve in-store customer experience?',
      answer: 'AI enhances in-store experience through smart mirrors, personalized recommendations, automated checkout, inventory visibility, customer behavior analysis, and intelligent store layouts that optimize customer flow and engagement.'
    },
    {
      question: 'What AI solutions help with inventory management in retail?',
      answer: 'AI-powered demand forecasting, automated replenishment, shelf monitoring, supply chain optimization, and predictive analytics help retailers maintain optimal inventory levels while reducing waste and stockouts.'
    },
    {
      question: 'How does AI help with omnichannel retail strategies?',
      answer: 'AI unifies customer data across all channels, enables consistent personalization, optimizes inventory allocation, provides unified customer service, and creates seamless experiences between online and offline touchpoints.'
    }
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'AI for Retail Solutions',
    'description': 'Advanced AI solutions for retail businesses including customer analytics, inventory optimization, personalized shopping experiences, and omnichannel integration for modern retail operations.',
    'provider': {
      '@type': 'Organization',
      'name': 'Insignyx Technologies'
    },
    'areaServed': ['India', 'United States', 'Europe', 'Southeast Asia'],
    'serviceType': 'Retail AI Solutions',
    'category': 'Artificial Intelligence',
    'offers': {
      '@type': 'Offer',
      'availability': 'https://schema.org/InStock',
      'price': 'Contact for pricing',
      'priceCurrency': 'USD'
    }
  }

  return (
    <>
      <SEOHead
        title="AI for Retail - Smart Store Solutions & Customer Analytics"
        description="Transform retail operations with AI solutions for customer analytics, inventory management, personalized shopping, and omnichannel experiences. Smart retail technology for modern stores."
        keywords="AI for retail, smart retail solutions, retail analytics, inventory optimization AI, customer experience AI, omnichannel retail, retail automation"
        canonicalUrl="https://insignyx.com/ai-retail"
        breadcrumbs={breadcrumbs}
        faqData={faqData}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  AI for <span className="text-orange-300">Retail</span>
                </h1>
                <p className="text-xl mb-8 text-orange-100">
                  Revolutionize retail operations with intelligent AI solutions. From smart stores to customer analytics, we help retailers create exceptional shopping experiences and optimize operations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                  <button className="border border-orange-300 hover:bg-orange-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20smart%20retail%20store%20AI%20technology%20digital%20displays%20customer%20analytics%20shopping%20experience%20futuristic%20clean&image_size=landscape_4_3"
                  alt="AI Retail Technology"
                  className="rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Smart Retail Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions help retailers enhance customer experience, optimize inventory, and create seamless omnichannel operations for increased profitability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer Behavior Analytics</h3>
                <p className="text-gray-600">
                  Advanced analytics to understand customer behavior, preferences, and shopping patterns for data-driven decision making and personalization.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Inventory Management</h3>
                <p className="text-gray-600">
                  AI-powered inventory optimization with demand forecasting, automated replenishment, and real-time stock monitoring across all locations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalized Shopping</h3>
                <p className="text-gray-600">
                  Deliver personalized product recommendations, targeted promotions, and customized shopping experiences across all touchpoints.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Store className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Store Operations</h3>
                <p className="text-gray-600">
                  Optimize store layouts, automate checkout processes, and enhance in-store experiences with AI-powered solutions and IoT integration.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Sales Forecasting</h3>
                <p className="text-gray-600">
                  Predictive analytics for accurate sales forecasting, trend analysis, and strategic planning to maximize revenue and minimize risks.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Omnichannel Integration</h3>
                <p className="text-gray-600">
                  Seamlessly connect online and offline experiences with unified customer data, inventory, and personalization across all channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Retail AI Applications
              </h2>
              <p className="text-xl text-gray-600">
                Real-world AI implementations across different retail sectors
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Fashion & Apparel</h3>
                    <p className="text-gray-600">
                      Virtual try-on experiences, style recommendations, trend forecasting, and size optimization for fashion retailers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Grocery & Supermarkets</h3>
                    <p className="text-gray-600">
                      Smart shelf monitoring, fresh produce optimization, automated checkout, and personalized meal planning solutions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Electronics & Tech</h3>
                    <p className="text-gray-600">
                      Product comparison tools, technical support chatbots, warranty management, and compatibility recommendations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Home & Furniture</h3>
                    <p className="text-gray-600">
                      AR visualization, space planning, style matching, and delivery optimization for home goods retailers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">05</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Beauty & Cosmetics</h3>
                    <p className="text-gray-600">
                      Virtual makeup try-on, skin analysis, personalized product recommendations, and beauty consultation AI.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">06</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Sports & Outdoor</h3>
                    <p className="text-gray-600">
                      Performance analytics, equipment recommendations, fitness tracking integration, and activity-based suggestions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Retail AI Technology Stack
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge technologies powering modern retail experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">ML</span>
                </div>
                <h3 className="font-semibold mb-2">Machine Learning</h3>
                <p className="text-gray-600 text-sm">Advanced algorithms for prediction and personalization</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">CV</span>
                </div>
                <h3 className="font-semibold mb-2">Computer Vision</h3>
                <p className="text-gray-600 text-sm">Image recognition and visual analytics</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">NLP</span>
                </div>
                <h3 className="font-semibold mb-2">Natural Language</h3>
                <p className="text-gray-600 text-sm">Chatbots and voice interfaces</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">IoT</span>
                </div>
                <h3 className="font-semibold mb-2">IoT Integration</h3>
                <p className="text-gray-600 text-sm">Connected devices and sensors</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI implementation in retail
              </p>
            </div>

            <div className="space-y-8">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-orange-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Let's discuss how AI can enhance your customer experience and optimize your retail operations for maximum growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-orange-300 hover:bg-orange-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Retail AI Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIForRetail