import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'AI Implementation',
    'Cloud Migration',
    'Big Data Solutions',
    'Software Development',
    'IT Consulting',
    'Digital Transformation'
  ]

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Insignyx
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading software development and IT consulting company specializing in AI implementation, cloud migration, and big data solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">info@insignyx.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Tech Street<br />
                  Silicon Valley, CA 94000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Insignyx Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer