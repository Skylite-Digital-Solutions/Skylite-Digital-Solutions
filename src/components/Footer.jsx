import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, Clock, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Enhanced Wave Separator with animation */}
      <div className="w-full overflow-hidden relative">
        <svg 
          className="w-full h-16 fill-current text-slate-50 dark:text-slate-900 transform-gpu animate-pulse" 
          style={{ animationDuration: '10s' }}
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section with enhanced branding */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="bg-white p-3 rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <img src="/logo.svg" alt="Skylite Digital Solutions" className="h-12 w-auto" />
              </div>
              <div>
                <h3 className="text-slate-800 dark:text-white font-bold text-lg">Skylite Digital Solutions</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  INSPIRED BY YOU, CRAFTED BY US
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Empowering businesses with innovative digital solutions for a connected future. We transform ideas into powerful digital experiences through creativity, technology, and strategic thinking.
            </p>
            <div className="pt-2">
              <Link 
                to="/about-us" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-all duration-200 group"
              >
                Learn more about us
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Quick Links Section with improved hover effects */}
          <div className="lg:ml-8">
            <h4 className="text-slate-800 dark:text-white font-semibold text-lg mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-2">
              <ExternalLink className="w-5 h-5 mr-2 text-blue-600" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about-us' },
                { name: 'Services', path: '/services' },
                { name: 'Blogs', path: '/blogs' },
                { name: 'Contact Us', path: '/contact-us' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <span className="w-0 h-0.5 bg-blue-600 dark:bg-blue-400 mr-2 group-hover:w-4 transition-all duration-300 ease-in-out"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section with improved visual cues */}
          <div>
            <h4 className="text-slate-800 dark:text-white font-semibold text-lg mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-2">
              <Phone className="w-5 h-5 mr-2 text-blue-600" />
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200" />
                <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-200">
                  B2 Pune, Pune, India
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Clock className="w-5 h-5 text-blue-600 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200" />
                <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-200">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-blue-600 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200" />
                <a 
                  href="tel:+918120363091"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  aria-label="Call our office"
                >
                  +91 (812) 036-3091
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-blue-600 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-200" />
                <a 
                  href="mailto:skylitedigitalsolutions@gmail.com"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 truncate"
                  aria-label="Email us"
                >
                  skylitedigitalsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section with enhanced interactive cards */}
          <div>
            <h4 className="text-slate-800 dark:text-white font-semibold text-lg mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">Connect With Us</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Facebook', icon: Facebook, color: 'text-[#1877F2]', url: 'https://www.facebook.com/profile.php?id=61568246071759' },
                { name: 'Twitter', icon: Twitter, color: 'text-[#1DA1F2]', url: 'https://twitter.com' },
                { name: 'LinkedIn', icon: Linkedin, color: 'text-[#0A66C2]', url: 'https://www.linkedin.com/company/skylite-digital-solutions/' },
                { name: 'Instagram', icon: Instagram, color: 'text-[#E4405F]', url: 'https://instagram.com' },
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  className="flex items-center space-x-2 bg-white dark:bg-slate-700 p-3 rounded-lg hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                >
                  <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform duration-200`} />
                  <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:font-medium transition-all duration-200">{social.name}</span>
                </a>
              ))}
            </div>
            
            {/* Newsletter signup - New addition */}
            <div className="mt-6 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
              <h5 className="text-slate-800 dark:text-white font-medium text-sm mb-2">Subscribe to Newsletter</h5>
              <form className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  aria-label="Email for newsletter"
                  className="flex-1 text-sm px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white" 
                />
                <button 
                  type="submit" 
                  aria-label="Subscribe"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-md transition-colors duration-200"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider with enhanced styling */}
        <div className="border-t border-slate-200 dark:border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              &copy; {currentYear} Skylite Digital Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 underline-offset-4 hover:underline">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 underline-offset-4 hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
          
          {/* Back to top button - New addition */}
          <div className="flex justify-center mt-6">
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              aria-label="Back to top"
              className="inline-flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
            >
              <svg 
                className="w-4 h-4 mr-1 transform rotate-180 group-hover:-translate-y-1 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;