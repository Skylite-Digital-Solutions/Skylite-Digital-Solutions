import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Top Wave Separator */}
      <div className="w-full overflow-hidden">
        <svg className="w-full h-12 fill-current text-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <img src="/logo.svg" alt="Skylite Digital Solutions" className="h-12 w-auto" />
              </div>
              <div>
                <h3 className="text-slate-800 dark:text-white font-bold text-lg">Skylite Digital Solutions</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">INSPIRED BY YOU, CRAFTING BY US</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Empowering businesses with innovative digital solutions for a connected future. We transform ideas into powerful digital experiences.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="lg:ml-8">
            <h4 className="text-slate-800 dark:text-white font-semibold text-lg mb-6 flex items-center">
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
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-slate-800 dark:text-white font-semibold text-lg mb-6 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-blue-600" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 group-hover:animate-bounce" />
                <span className="text-slate-600 dark:text-slate-300">B2 Pune, Pune, India</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Clock className="w-5 h-5 text-blue-600 group-hover:animate-spin" />
                <span className="text-slate-600 dark:text-slate-300">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a 
                  href="tel:+918120363091"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  +91 (812) 036-3091
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a 
                  href="mailto:skylitedigitalsolutions@gmail.com"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 truncate"
                >
                  skylitedigitalsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-slate-800 dark:text-white font-semibold text-lg mb-6">Connect With Us</h4>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61568246071759" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white dark:bg-slate-700 p-3 rounded-lg hover:shadow-md transition-all duration-200 group"
              >
                <Facebook className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-slate-600 dark:text-slate-300 text-sm">Facebook</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white dark:bg-slate-700 p-3 rounded-lg hover:shadow-md transition-all duration-200 group"
              >
                <Twitter className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-slate-600 dark:text-slate-300 text-sm">Twitter</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/skylite-digital-solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white dark:bg-slate-700 p-3 rounded-lg hover:shadow-md transition-all duration-200 group"
              >
                <Linkedin className="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-slate-600 dark:text-slate-300 text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white dark:bg-slate-700 p-3 rounded-lg hover:shadow-md transition-all duration-200 group"
              >
                <Instagram className="w-5 h-5 text-pink-600 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-slate-600 dark:text-slate-300 text-sm">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              &copy; {currentYear} Skylite Digital Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;