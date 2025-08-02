import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Career from './pages/Career'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import AWSCloudMigration from './pages/AWSCloudMigration'
import AzureCloudMigration from './pages/AzureCloudMigration'
import AIForHealthcare from './pages/AIForHealthcare'
import AIForFinance from './pages/AIForFinance'
import AIForEcommerce from './pages/AIForEcommerce'
import AIForRetail from './pages/AIForRetail'
// Location-specific pages
import AIServicesBangalore from './pages/AIServicesBangalore'
import CloudMigrationMumbai from './pages/CloudMigrationMumbai'
import BigDataSolutionsDelhi from './pages/BigDataSolutionsDelhi'
// Global market pages
import AIServicesUS from './pages/AIServicesUS'
import AIServicesEurope from './pages/AIServicesEurope'
// Marketing Dashboard
import MarketingDashboard from './pages/MarketingDashboard'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/career" element={<Career />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blog" element={<Blog />} />
              {/* Service Pages */}
              <Route path="/services/aws-cloud-migration" element={<AWSCloudMigration />} />
              <Route path="/services/azure-cloud-migration" element={<AzureCloudMigration />} />
              {/* Industry Pages */}
              <Route path="/industries/ai-for-healthcare" element={<AIForHealthcare />} />
              <Route path="/industries/ai-for-finance" element={<AIForFinance />} />
              <Route path="/industries/ai-for-ecommerce" element={<AIForEcommerce />} />
              <Route path="/industries/ai-for-retail" element={<AIForRetail />} />
              {/* Alternative routes for SEO */}
              <Route path="/ai-healthcare" element={<AIForHealthcare />} />
              <Route path="/ai-finance" element={<AIForFinance />} />
              <Route path="/ai-ecommerce" element={<AIForEcommerce />} />
              <Route path="/ai-retail" element={<AIForRetail />} />
              {/* Location-specific pages for Local SEO */}
              <Route path="/ai-services-bangalore" element={<AIServicesBangalore />} />
              <Route path="/cloud-migration-mumbai" element={<CloudMigrationMumbai />} />
              <Route path="/big-data-solutions-delhi" element={<BigDataSolutionsDelhi />} />
              {/* Global market pages */}
              <Route path="/ai-services-usa" element={<AIServicesUS />} />
              <Route path="/ai-services-europe" element={<AIServicesEurope />} />
              {/* Alternative location routes */}
              <Route path="/services/ai-bangalore" element={<AIServicesBangalore />} />
              <Route path="/services/cloud-mumbai" element={<CloudMigrationMumbai />} />
              <Route path="/services/bigdata-delhi" element={<BigDataSolutionsDelhi />} />
              <Route path="/global/usa" element={<AIServicesUS />} />
              <Route path="/global/europe" element={<AIServicesEurope />} />
              {/* Marketing Dashboard */}
              <Route path="/marketing/dashboard" element={<MarketingDashboard />} />
              <Route path="/marketing" element={<MarketingDashboard />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
