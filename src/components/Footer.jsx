import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, Clock, ChevronRight, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [animateWave, setAnimateWave] = useState(false);

  // Handle scroll behavior for back-to-top button and wave animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      
      // Trigger wave animation when user scrolls to footer
      const footer = document.getElementById('main-footer');
      if (footer) {
        const footerPosition = footer.getBoundingClientRect();
        if (footerPosition.top < window.innerHeight) {
          setAnimateWave(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Form submission with validation
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmailError('');
    
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setSubscribeSuccess(true);
      setEmail('');
      // Reset success message after 3 seconds
      setTimeout(() => setSubscribeSuccess(false), 3000);
    }, 500);
  };

  return (
    <footer id="main-footer" className="relative bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Enhanced Wave Separator with smoother animation */}
      <div className="w-full overflow-hidden relative h-16">
        <svg 
          className={`w-full h-full fill-current text-slate-50 dark:text-slate-900 transition-all duration-1000 ${animateWave ? 'opacity-100' : 'opacity-40'}`}
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={`${animateWave ? 'animate-[wave_15s_ease-in-out_infinite]' : ''}`}
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section with improved branding animation */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group relative">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-md transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:rotate-3 z-10">
                <div className="relative overflow-hidden rounded-md">
                  <img src="/logo.svg" alt="Skylite Digital Solutions" className="h-12 w-auto relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-0"></div>
                </div>
              </div>
              <div>
                <h3 className="text-slate-800 dark:text-white font-bold text-lg">Skylite Digital Solutions</h3>
                <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent animate-gradient-shift">
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
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-all duration-300 relative group"
              >
                <span className="relative z-10">Learn more about us</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600/30 dark:bg-blue-400/30 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </div>
          </div>

          {/* Quick Links Section with enhanced hover effects */}
          <div className="lg:ml-8">
            <h4 className="text-slate-800 dark:text-white font-semibold text-lg mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-2">
              <ExternalLink className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about-us' },
                { name: 'Services', path: '/services' },
                { name: 'Blogs', path: '/blogs' },
                { name: 'Contact Us', path: '/contact-us' },
              ].map((link, index) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center group py-1"
                    aria-label={`Navigate to ${link.name}`}
                    style={{ 
                      transitionDelay: `${index * 50}ms` 
                    }}
                  >
                    <span className="w-0 h-0.5 bg-blue-600 dark:bg-blue-400 mr-2 group-hover:w-4 transition-all duration-300 ease-in-out"></span>
                    {link.name}
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">•</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section with improved visual cues and microinteractions */}
          <div>
            <h4 className="text-slate-800 dark:text-white font-semibold text-lg mb-6 flex items-center border-b border-slate-200 dark:border-slate-700 pb-2">
              <Phone className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 group hover:bg-slate-100 dark:hover:bg-slate-800/60 p-2 rounded-md transition-colors duration-300">
                <div className="relative">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute top-0 left-0 h-full w-full bg-blue-600/20 dark:bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
                </div>
                <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
                  B2 Pune, Pune, India
                </span>
              </li>
              <li className="flex items-center space-x-3 group hover:bg-slate-100 dark:hover:bg-slate-800/60 p-2 rounded-md transition-colors duration-300">
                <div className="relative">
                  <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute top-0 left-0 h-full w-full bg-blue-600/20 dark:bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
                </div>
                <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
              <li className="flex items-center space-x-3 group hover:bg-slate-100 dark:hover:bg-slate-800/60 p-2 rounded-md transition-colors duration-300">
                <div className="relative">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute top-0 left-0 h-full w-full bg-blue-600/20 dark:bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
                </div>
                <a 
                  href="tel:+918120363091"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group-hover:pl-1"
                  aria-label="Call our office"
                >
                  +91 (812) 036-3091
                </a>
              </li>
              <li className="flex items-center space-x-3 group hover:bg-slate-100 dark:hover:bg-slate-800/60 p-2 rounded-md transition-colors duration-300">
                <div className="relative">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="absolute top-0 left-0 h-full w-full bg-blue-600/20 dark:bg-blue-400/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
                </div>
                <a 
                  href="mailto:skylitedigitalsolutions@gmail.com"
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 truncate group-hover:pl-1"
                  aria-label="Email us"
                >
                  skylitedigitalsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section with enhanced interactive cards and feedback */}
          <div>
            <h4 className="text-slate-800 dark:text-white font-semibold text-lg mb-6 border-b border-slate-200 dark:border-slate-700 pb-2 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Connect With Us
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Facebook', icon: Facebook, color: 'text-[#1877F2]', bgHover: 'hover:bg-[#1877F2]/10', url: 'https://www.facebook.com/profile.php?id=61568246071759' },
                { name: 'Twitter', icon: Twitter, color: 'text-[#1DA1F2]', bgHover: 'hover:bg-[#1DA1F2]/10', url: 'https://twitter.com' },
                { name: 'LinkedIn', icon: Linkedin, color: 'text-[#0A66C2]', bgHover: 'hover:bg-[#0A66C2]/10', url: 'https://www.linkedin.com/company/skylite-digital-solutions/' },
                { name: 'Instagram', icon: Instagram, color: 'text-[#E4405F]', bgHover: 'hover:bg-[#E4405F]/10', url: 'https://instagram.com' },
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  className={`flex items-center space-x-2 bg-white dark:bg-slate-700 p-3 rounded-lg hover:shadow-md transition-all duration-300 group hover:-translate-y-1 ${social.bgHover} relative overflow-hidden`}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                  <social.icon className={`w-5 h-5 ${social.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-slate-600 dark:text-slate-300 text-sm group-hover:font-medium transition-all duration-300">{social.name}</span>
                </a>
              ))}
            </div>
            
            {/* Enhanced Newsletter signup with better feedback */}
            <div className="mt-6 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h5 className="text-slate-800 dark:text-white font-medium text-sm mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                Subscribe to Newsletter
              </h5>
              {subscribeSuccess ? (
                <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-2 rounded text-sm flex items-center justify-center animate-fade-in">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Successfully subscribed!
                </div>
              ) : (
                <form className="flex flex-col space-y-2" onSubmit={handleSubscribe}>
                  <div className="relative">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email" 
                      aria-label="Email for newsletter"
                      className={`w-full text-sm pl-9 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:text-white dark:border-slate-600 transition-all duration-300 ${
                        emailError ? 'border-red-500 focus:ring-red-500 dark:border-red-400' : 'border-slate-300 dark:border-slate-600'
                      }`}
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                  
                  {emailError && (
                    <p className="text-red-500 dark:text-red-400 text-xs animate-fade-in">{emailError}</p>
                  )}
                  
                  <button 
                    type="submit" 
                    aria-label="Subscribe"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Subscribe
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 to-indigo-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Divider with enhanced styling */}
        <div className="border-t border-slate-200 dark:border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 group">
              &copy; {currentYear} Skylite Digital Solutions. All rights reserved.
              <span className="inline-block relative ml-2">
                <span className="inline-block text-red-500 transform hover:scale-125 transition-transform duration-300 cursor-pointer">♥</span>
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' },
                { name: 'Sitemap', path: '/sitemap' },
              ].map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 relative group"
                >
                  <span className="relative">{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600/30 dark:bg-blue-400/30 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Back to top button with animation */}
      <button 
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed right-6 bottom-6 bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-slate-600 group z-50 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        <span className="absolute -top-10 right-0 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Back to top</span>
      </button>
      
      {/* Accessible skip to main content link - visible only when focused */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
    </footer>
  );
};

export default Footer;
