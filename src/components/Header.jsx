import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    { id: 1, name: 'All Services', url: '/services' },
    { id: 2, name: 'Web Development', url: '/web-development' },
    { id: 3, name: 'Quality Assurance', url: '/quality-assurance' },
    { id: 4, name: 'Digital Marketing & SEO', url: '/digital-seo' },
    { id: 5, name: 'Cyber Security', url: '/cyber-security' },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownVisible(!dropdownVisible);
    if (!dropdownVisible) setProfileDropdownVisible(false);
  };
  
  const toggleProfileDropdown = (e) => {
    e.stopPropagation();
    setProfileDropdownVisible(!profileDropdownVisible);
    if (!profileDropdownVisible) setDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-container')) {
      setDropdownVisible(false);
      setProfileDropdownVisible(false);
    }
    if (!event.target.closest('.mobile-menu-container') && !event.target.closest('.mobile-menu-button')) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownVisible, profileDropdownVisible, mobileMenuOpen]);

  const handleLoginClick = () => {
    navigate('/LoginPage');
    setMobileMenuOpen(false);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    navigate(window.location.pathname);
    setMobileMenuOpen(false);
  };

  const closeDropdowns = () => {
    setDropdownVisible(false);
    setProfileDropdownVisible(false);
    setMobileMenuOpen(false);
  };

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-[#0d98ba] text-white sticky top-0 z-50 shadow-lg border-b border-[#0b86a5] transition-all">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link to="/" className="cursor-pointer" onClick={closeDropdowns}>
              <img src="/logo.svg" alt="Company Logo" className="h-8 md:h-10 object-contain transition-transform hover:scale-105" />
            </Link>
            <div className="text-white">
              <h3 className="text-lg md:text-xl font-bold">Tudip Digital</h3>
              <h5 className="italic text-xs md:text-sm hidden sm:block">INSPIRED BY YOU, CRAFTING BY US</h5>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4">
            {/* Services Dropdown */}
            <div className="relative dropdown-container">
              <button 
                className={`text-white text-base lg:text-lg py-2 px-3 rounded-md transition-colors flex items-center gap-1 ${
                  services.some(service => isCurrentPath(service.url)) ? 'bg-[#0a85a3]' : 'hover:bg-[#0a85a3]'
                }`}
                onClick={toggleDropdown}
                aria-expanded={dropdownVisible}
              >
                Services
                <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownVisible ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownVisible && (
                <div className="absolute top-full left-0 bg-white text-[#0d98ba] shadow-lg rounded-lg w-48 mt-1 py-2 z-10 dropdown">
                  {services.map(({ name, id, url }) => (
                    <div key={id}>
                      <Link
                        to={url}
                        className={`block px-4 py-2 text-sm hover:bg-[#0d98ba] hover:text-white rounded transition-colors ${
                          isCurrentPath(url) ? 'bg-[#0d98ba] text-white' : ''
                        }`}
                        onClick={closeDropdowns}
                      >
                        {name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            <Link 
              to="/blogs" 
              onClick={closeDropdowns} 
              className={`text-white text-base lg:text-lg py-2 px-3 rounded-md transition-colors ${
                isCurrentPath('/blogs') ? 'bg-[#0a85a3]' : 'hover:bg-[#0a85a3]'
              }`}
            >
              Blogs
            </Link>
            <Link 
              to="/about-us" 
              onClick={closeDropdowns} 
              className={`text-white text-base lg:text-lg py-2 px-3 rounded-md transition-colors ${
                isCurrentPath('/about-us') ? 'bg-[#0a85a3]' : 'hover:bg-[#0a85a3]'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/contact-us" 
              onClick={closeDropdowns} 
              className={`text-white text-base lg:text-lg py-2 px-3 rounded-md transition-colors ${
                isCurrentPath('/contact-us') ? 'bg-[#0a85a3]' : 'hover:bg-[#0a85a3]'
              }`}
            >
              Contact Us
            </Link>

            {/* Profile Dropdown */}
            <div className="relative dropdown-container">
              <button 
                className={`text-white text-base lg:text-lg py-2 px-3 rounded-md transition-colors flex items-center gap-1 ${
                  isCurrentPath('/LoginPage') || isCurrentPath('/profile') ? 'bg-[#0a85a3]' : 'hover:bg-[#0a85a3]'
                }`}
                onClick={toggleProfileDropdown}
                aria-expanded={profileDropdownVisible}
              >
                {isLoggedIn ? (
                  <>
                    <span>Profile</span>
                    <svg className="w-5 h-5 rounded-full bg-[#7acbe2] text-[#0d98ba]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </>
                ) : (
                  'Login'
                )}
              </button>
              {profileDropdownVisible && (
                <div className="absolute top-full right-0 bg-white text-[#0d98ba] shadow-lg rounded-lg w-48 mt-1 py-2 z-10 dropdown">
                  {isLoggedIn ? (
                    <>
                      <Link
                        to="/profile"
                        className={`block px-4 py-2 text-sm hover:bg-[#0d98ba] hover:text-white rounded transition-colors ${
                          isCurrentPath('/profile') ? 'bg-[#0d98ba] text-white' : ''
                        }`}
                        onClick={closeDropdowns}
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/settings"
                        className={`block px-4 py-2 text-sm hover:bg-[#0d98ba] hover:text-white rounded transition-colors ${
                          isCurrentPath('/settings') ? 'bg-[#0d98ba] text-white' : ''
                        }`}
                        onClick={closeDropdowns}
                      >
                        Settings
                      </Link>
                      <div className="border-t border-gray-200 my-1"></div>
                      <button
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-600 hover:text-white rounded transition-colors"
                        onClick={handleLogoutClick}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/LoginPage"
                        className={`block px-4 py-2 text-sm hover:bg-[#0d98ba] hover:text-white rounded transition-colors ${
                          isCurrentPath('/LoginPage') ? 'bg-[#0d98ba] text-white' : ''
                        }`}
                        onClick={handleLoginClick}
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className={`block px-4 py-2 text-sm hover:bg-[#0d98ba] hover:text-white rounded transition-colors ${
                          isCurrentPath('/register') ? 'bg-[#0d98ba] text-white' : ''
                        }`}
                        onClick={closeDropdowns}
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-[#0a85a3] mobile-menu-container">
            <nav className="flex flex-col space-y-2 pb-3">
              {/* Services Accordion for Mobile */}
              <div className="relative">
                <button 
                  className={`w-full text-left text-white text-base py-2 px-3 rounded-md transition-colors flex items-center justify-between ${
                    services.some(service => isCurrentPath(service.url)) ? 'bg-[#0a85a3]' : 'hover:bg-[#0a85a3]'
                  }`}
                  onClick={toggleDropdown}
                  aria-expanded={dropdownVisible}
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform duration-200 ${dropdownVisible ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownVisible && (
                  <div className="bg-[#0a85a3] rounded-md mt-1 py-1">
                    {services.map(({ name, id, url }) => (
                      <div key={id}>
                        <Link
                          to={url}
                          className={`block px-6 py-2 text-sm transition-colors ${
                            isCurrentPath(url) ? 'bg-[#097992] text-white' : 'hover:bg-[#097992]'
                          }`}
                          onClick={closeDropdowns}
                        >
                          {name}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Mobile Navigation Links */}
              <Link 
                to="/blogs" 
                onClick={closeDropdowns} 
                className={`text-white text-base py-2 px-3 rounded-md transition-colors ${
                  isCurrentPath('/blogs') ? 'bg-[#0a85a3]' : 'hover:bg-[#0a85a3]'
                }`}
              >
                Blogs
              </Link>
              <Link 
                to="/about-us" 
                onClick={closeDropdowns} 
                className={`text-white text-base py-2 px-3 rounded-md transition-colors ${
                  isCurrentPath('/about-us') ? 'bg-[#0a85a3]' : 'hover:bg-[#0a85a3]'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/contact-us" 
                onClick={closeDropdowns} 
                className={`text-white text-base py-2 px-3 rounded-md transition-colors ${
                  isCurrentPath('/contact-us') ? 'bg-[#0a85a3]' : 'hover:bg-[#0a85a3]'
                }`}
              >
                Contact Us
              </Link>

              {/* Mobile Login/Profile */}
              {isLoggedIn ? (
                <div className="space-y-1 bg-[#0a85a3] rounded-md p-2 mt-1">
                  <div className="flex items-center gap-2 px-2 py-1">
                    <svg className="w-6 h-6 rounded-full bg-[#7acbe2] text-[#0d98ba] p-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Your Profile</span>
                  </div>
                  <Link
                    to="/profile"
                    className={`block px-4 py-2 text-sm rounded transition-colors ${
                      isCurrentPath('/profile') ? 'bg-[#097992]' : 'hover:bg-[#097992]'
                    }`}
                    onClick={closeDropdowns}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/settings"
                    className={`block px-4 py-2 text-sm rounded transition-colors ${
                      isCurrentPath('/settings') ? 'bg-[#097992]' : 'hover:bg-[#097992]'
                    }`}
                    onClick={closeDropdowns}
                  >
                    Settings
                  </Link>
                  <div className="border-t border-[#097992] my-1"></div>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-red-300 hover:bg-red-700 hover:text-white rounded transition-colors"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 mt-2">
                  <Link
                    to="/LoginPage"
                    className="flex-1 bg-white text-[#0d98ba] text-center py-2 px-3 rounded-md hover:bg-[#e6f7fb] transition-colors font-medium"
                    onClick={handleLoginClick}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="flex-1 bg-[#0a85a3] border border-white text-white text-center py-2 px-3 rounded-md hover:bg-[#097992] transition-colors font-medium"
                    onClick={closeDropdowns}
                  >
                    Register
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;