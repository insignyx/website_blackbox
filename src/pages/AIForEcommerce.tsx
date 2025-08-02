import React from 'react'
import SEOHead from '../components/SEOHead'
import Breadcrumb, { BreadcrumbItem } from '../components/Breadcrumb'
import { ShoppingCart, Target, Search, TrendingUp, Users, Zap } from 'lucide-react'

const AIForEcommerce: React.FC = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Services', url: '/services' },
    { name: 'AI for E-commerce', url: '/ai-ecommerce', isActive: true }
  ]

  const faqData = [
    {
      question: 'How can AI improve e-commerce conversion rates?',
      answer: 'AI enhances conversion rates through personalized product recommendations, dynamic pricing, intelligent search, chatbots for customer support, and predictive analytics to optimize the customer journey and reduce cart abandonment.'
    },
    {
      question: 'What AI solutions work best for inventory management?',
      answer: 'AI-powered demand forecasting, automated reordering systems, seasonal trend analysis, and supply chain optimization help maintain optimal inventory levels while reducing costs and preventing stockouts.'
    },
    {
      question: 'How does AI personalization work in e-commerce?',
      answer: 'AI analyzes customer behavior, purchase history, browsing patterns, and preferences to deliver personalized product recommendations, customized content, targeted marketing campaigns, and individualized shopping experiences.'
    }
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'AI for E-commerce Solutions',
    'description': 'Comprehensive AI solutions for e-commerce businesses including personalization, recommendation engines, inventory management, and customer analytics to boost sales and improve user experience.',
    'provider': {
      '@type': 'Organization',
      'name': 'Insignyx Technologies'
    },
    'areaServed': ['India', 'United States', 'Europe', 'Southeast Asia'],
    'serviceType': 'E-commerce AI Solutions',
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
        title="AI for E-commerce - Personalization & Recommendation Engines"
        description="Boost e-commerce sales with AI solutions for personalization, product recommendations, inventory management, and customer analytics. Transform your online store with intelligent automation."
        keywords="AI for e-commerce, e-commerce personalization, product recommendation engine, AI inventory management, e-commerce analytics, online store AI, retail AI solutions"
        canonicalUrl="https://insignyx.com/ai-ecommerce"
        breadcrumbs={breadcrumbs}
        faqData={faqData}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbs} className="mb-8 text-purple-200" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  AI for <span className="text-purple-300">E-commerce</span>
                </h1>
                <p className="text-xl mb-8 text-purple-100">
                  Supercharge your online store with intelligent AI solutions. From personalized recommendations to inventory optimization, we help e-commerce businesses increase sales and customer satisfaction.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                  <button className="border border-purple-300 hover:bg-purple-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20e-commerce%20AI%20technology%20online%20shopping%20interface%20product%20recommendations%20analytics%20dashboard%20colorful%20professional&image_size=landscape_4_3"
                  alt="AI E-commerce Technology"
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
                Intelligent E-commerce Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions help e-commerce businesses increase conversion rates, improve customer experience, and optimize operations for maximum profitability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalization Engine</h3>
                <p className="text-gray-600">
                  AI-powered personalization that delivers customized product recommendations, content, and shopping experiences based on individual customer behavior.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Intelligent Search</h3>
                <p className="text-gray-600">
                  Advanced search functionality with natural language processing, visual search, and smart filters to help customers find products quickly.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Dynamic Pricing</h3>
                <p className="text-gray-600">
                  AI-driven pricing optimization that adjusts prices in real-time based on demand, competition, inventory levels, and market conditions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <ShoppingCart className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cart Abandonment Recovery</h3>
                <p className="text-gray-600">
                  Intelligent systems to predict and prevent cart abandonment with personalized incentives, reminders, and optimized checkout processes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer Analytics</h3>
                <p className="text-gray-600">
                  Deep customer insights through behavioral analysis, segmentation, lifetime value prediction, and churn prevention strategies.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Inventory Optimization</h3>
                <p className="text-gray-600">
                  AI-powered demand forecasting and inventory management to optimize stock levels, reduce costs, and prevent stockouts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Powerful E-commerce AI Features
              </h2>
              <p className="text-xl text-gray-600">
                Advanced capabilities to transform your online business
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Recommendation Engine
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Collaborative Filtering</h4>
                      <p className="text-gray-600">Recommend products based on similar customer preferences and behaviors.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Content-Based Filtering</h4>
                      <p className="text-gray-600">Suggest products based on item attributes and customer preferences.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Real-time Personalization</h4>
                      <p className="text-gray-600">Dynamic recommendations that adapt to customer behavior in real-time.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=e-commerce%20product%20recommendation%20interface%20personalized%20shopping%20AI%20dashboard%20modern%20clean%20design&image_size=square_hd"
                  alt="E-commerce Recommendation Engine"
                  className="rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
              <div className="relative order-2 lg:order-1">
                <img 
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=e-commerce%20analytics%20dashboard%20customer%20insights%20data%20visualization%20charts%20graphs%20modern%20interface&image_size=square_hd"
                  alt="E-commerce Analytics Dashboard"
                  className="rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Customer Analytics & Insights
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Behavioral Analysis</h4>
                      <p className="text-gray-600">Track and analyze customer journey, preferences, and purchase patterns.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Customer Segmentation</h4>
                      <p className="text-gray-600">Automatically segment customers for targeted marketing and personalization.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Predictive Analytics</h4>
                      <p className="text-gray-600">Predict customer lifetime value, churn risk, and future purchase behavior.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about AI implementation in e-commerce
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
        <section className="py-20 bg-purple-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Boost Your E-commerce Sales?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Let's discuss how AI can transform your online store and increase customer satisfaction and revenue.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-purple-300 hover:bg-purple-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download E-commerce AI Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIForEcommerce