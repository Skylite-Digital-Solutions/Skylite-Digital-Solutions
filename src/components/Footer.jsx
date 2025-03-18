import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, Clock, ChevronRight, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [animateWave, setAnimateWave] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      
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
    
    setTimeout(() => {
      setSubscribeSuccess(true);
      setEmail('');
      setTimeout(() => setSubscribeSuccess(false), 3000);
    }, 500);
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#4c6eb1] via-[#2b4c88] to-[#0a2a48] text-white sticky top-0 z-50 shadow-lg border-b border-[#0b86a5] transition-all">
      <div className="w-full overflow-hidden relative h-20">
        <svg 
          className={`w-full h-full fill-current text-white/10 transition-all duration-1000 ${animateWave ? 'opacity-100' : 'opacity-40'}`}
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
          {/* Company Info Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg">
                <div className="relative overflow-hidden rounded-md">
                  <img src="/logo.svg" alt="Skylite Digital Solutions" className="h-12 w-auto relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Skylite Digital Solutions</h3>
                <p className="text-sm font-medium text-white/80">
                  INSPIRED BY YOU, CRAFTED BY US
                </p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering businesses with innovative digital solutions for a connected future. We transform ideas into powerful digital experiences through creativity, technology, and strategic thinking.
            </p>
            <div className="pt-2">
              <Link 
                to="/about-us" 
                className="inline-flex items-center text-white hover:text-white/90 text-sm font-medium transition-all duration-300 relative group"
              >
                <span className="relative z-10">Learn more about us</span>
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/30 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:ml-8">
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center border-b border-white/20 pb-2">
              <ExternalLink className="w-5 h-5 mr-2 text-white/80" />
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
                    className="text-white/80 hover:text-white transition-all duration-300 flex items-center group py-1"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="w-0 h-0.5 bg-white/60 mr-2 group-hover:w-4 transition-all duration-300 ease-in-out"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center border-b border-white/20 pb-2">
              <Phone className="w-5 h-5 mr-2 text-white/80" />
              Contact Us
            </h4>
            <ul className="space-y-5">
              {[
                { icon: MapPin, content: 'B2 Pune, Pune, India', type: 'text' },
                { icon: Clock, content: 'Mon - Fri: 9:00 AM - 6:00 PM', type: 'text' },
                { icon: Phone, content: '+91 (812) 036-3091', type: 'tel', href: 'tel:+918120363091' },
                { icon: Mail, content: 'skylitedigitalsolutions@gmail.com', type: 'email', href: 'mailto:skylitedigitalsolutions@gmail.com' }
              ].map((item, index) => (
                <li key={index} className="group hover:bg-white/10 p-2 rounded-md transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                    {item.type === 'text' ? (
                      <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                        {item.content}
                      </span>
                    ) : (
                      <a
                        href={item.href}
                        className="text-white/80 hover:text-white transition-colors duration-300"
                      >
                        {item.content}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-white/20 pb-2 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-white/80" />
              Connect With Us
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/profile.php?id=61568246071759' },
                { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
                { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/skylite-digital-solutions/' },
                { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm p-3 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">{social.name}</span>
                </a>
              ))}
            </div>
            
            {/* Newsletter Section */}
            <div className="mt-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h5 className="text-white font-medium text-sm mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2 text-white/80" />
                Subscribe to Newsletter
              </h5>
              {subscribeSuccess ? (
                <div className="bg-white/20 text-white p-2 rounded text-sm flex items-center justify-center">
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
                      className="w-full text-sm pl-9 pr-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/50"
                    />
                    <Mail className="w-4 h-4 text-white/50 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                  
                  {emailError && (
                    <p className="text-red-300 text-xs">{emailError}</p>
                  )}
                  
                  <button 
                    type="submit" 
                    className="bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 rounded-md transition-all duration-300 flex items-center justify-center group"
                  >
                    <span>Subscribe</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/80">
              &copy; {currentYear} Skylite Digital Solutions. All rights reserved.
              <span className="inline-block ml-2">
                <span className="inline-block text-red-300 transform hover:scale-125 transition-transform duration-300 cursor-pointer">♥</span>
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
                <Link 
                  key={link}
                  to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-white/80 hover:text-white transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed right-6 bottom-6 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 group z-50 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        <span className="absolute -top-10 right-0 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Back to top
        </span>
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
