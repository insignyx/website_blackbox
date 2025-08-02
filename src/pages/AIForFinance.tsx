import React from 'react'
import SEOHead from '../components/SEOHead'
import Breadcrumb, { BreadcrumbItem } from '../components/Breadcrumb'
import { DollarSign, Shield, TrendingUp, AlertTriangle, BarChart3, Lock } from 'lucide-react'

const AIForFinance: React.FC = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Services', url: '/services' },
    { name: 'AI for Finance', url: '/ai-finance', isActive: true }
  ]

  const faqData = [
    {
      question: 'How does AI help in fraud detection for financial institutions?',
      answer: 'AI analyzes transaction patterns, user behavior, and historical data in real-time to identify suspicious activities. Machine learning models can detect anomalies and flag potential fraud with high accuracy, reducing false positives and improving security.'
    },
    {
      question: 'What compliance standards do AI finance solutions need to meet?',
      answer: 'Financial AI solutions must comply with regulations like PCI DSS, SOX, GDPR, PSD2, and local banking regulations. We ensure all implementations meet regulatory requirements including data privacy, audit trails, and risk management standards.'
    },
    {
      question: 'Can AI improve investment decision-making?',
      answer: 'Yes, AI enhances investment decisions through predictive analytics, market sentiment analysis, risk assessment, and algorithmic trading. Our solutions provide data-driven insights for portfolio optimization and risk management.'
    }
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'AI for Finance Solutions',
    'description': 'Advanced AI solutions for financial services including fraud detection, risk management, algorithmic trading, and regulatory compliance for banks and financial institutions.',
    'provider': {
      '@type': 'Organization',
      'name': 'Insignyx Technologies'
    },
    'areaServed': ['India', 'United States', 'Europe', 'Southeast Asia'],
    'serviceType': 'Financial AI Solutions',
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
        title="AI for Finance - Financial AI Solutions & Fintech Analytics"
        description="Transform financial services with AI solutions for fraud detection, risk management, algorithmic trading, and regulatory compliance. Secure AI implementation for banks and financial institutions."
        keywords="AI for finance, financial AI solutions, fraud detection AI, risk management AI, algorithmic trading, fintech analytics, banking AI, financial compliance AI"
        canonicalUrl="https://insignyx.com/ai-finance"
        breadcrumbs={breadcrumbs}
        faqData={faqData}
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbs} className="mb-8 text-green-200" />
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                  AI for <span className="text-green-300">Finance</span>
                </h1>
                <p className="text-xl mb-8 text-green-100">
                  Revolutionize financial services with intelligent AI solutions. From fraud detection to algorithmic trading, we help financial institutions enhance security, compliance, and profitability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Get Started
                  </button>
                  <button className="border border-green-300 hover:bg-green-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20financial%20AI%20technology%20banking%20digital%20interface%20trading%20screens%20data%20analytics%20professional%20clean&image_size=landscape_4_3"
                  alt="AI Finance Technology"
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
                Intelligent Financial Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI solutions help financial institutions reduce risk, improve compliance, and enhance customer experience while maintaining the highest security standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Fraud Detection</h3>
                <p className="text-gray-600">
                  Real-time fraud detection using machine learning to analyze transaction patterns, user behavior, and identify suspicious activities with high accuracy.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
                <p className="text-gray-600">
                  Advanced risk assessment models for credit scoring, portfolio management, and regulatory compliance with predictive analytics.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Algorithmic Trading</h3>
                <p className="text-gray-600">
                  AI-powered trading algorithms for market analysis, automated trading strategies, and portfolio optimization with real-time decision making.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
                <p className="text-gray-600">
                  Automated compliance monitoring and reporting systems that ensure adherence to financial regulations and audit requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Credit Scoring</h3>
                <p className="text-gray-600">
                  Advanced credit risk assessment using alternative data sources and machine learning for more accurate lending decisions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Security</h3>
                <p className="text-gray-600">
                  Enterprise-grade security with encryption, access controls, and privacy protection for sensitive financial data and transactions.
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
                Financial AI Use Cases
              </h2>
              <p className="text-xl text-gray-600">
                Real-world applications of AI in financial services
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Investment Banking</h3>
                    <p className="text-gray-600">
                      AI-powered market analysis, automated research, and intelligent trading strategies for investment banks and asset management firms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Retail Banking</h3>
                    <p className="text-gray-600">
                      Customer service chatbots, personalized financial advice, and automated loan processing for retail banking operations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Insurance</h3>
                    <p className="text-gray-600">
                      Claims processing automation, risk assessment, and fraud detection for insurance companies and underwriters.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Fintech Startups</h3>
                    <p className="text-gray-600">
                      Digital payment solutions, peer-to-peer lending platforms, and robo-advisors for emerging fintech companies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold">05</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Wealth Management</h3>
                    <p className="text-gray-600">
                      Portfolio optimization, risk profiling, and automated investment advice for wealth management and private banking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">06</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Cryptocurrency</h3>
                    <p className="text-gray-600">
                      Blockchain analytics, crypto trading algorithms, and DeFi protocol optimization for digital asset management.
                    </p>
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
                Common questions about AI implementation in finance
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
        <section className="py-20 bg-green-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Financial Services?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Let's discuss how AI can enhance security, compliance, and profitability in your financial institution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-green-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-green-300 hover:bg-green-800 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Finance AI Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIForFinance