import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Refs for dropdown components
  const servicesDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  
  // Hover timeouts
  const servicesHoverTimeoutRef = useRef(null);
  const profileHoverTimeoutRef = useRef(null);

  const services = [
    { id: 1, name: 'All Services', url: '/services' },
    { id: 2, name: 'Web Development', url: '/web-development' },
    { id: 3, name: 'Quality Assurance', url: '/quality-assurance' },
    { id: 4, name: 'Digital Marketing & SEO', url: '/digital-seo' },
    { id: 5, name: 'Cyber Security', url: '/cyber-security' },
    { id: 6, name: 'Consultancy', url: '/it-consulting' }
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

  // Keyboard navigation for dropdowns
  const handleServiceKeyDown = (e) => {
    if (e.key === 'Escape') {
      setDropdownVisible(false);
    } else if (e.key === 'ArrowDown' && dropdownVisible) {
      e.preventDefault();
      const firstItem = servicesDropdownRef.current?.querySelector('a');
      firstItem?.focus();
    }
  };

  const handleProfileKeyDown = (e) => {
    if (e.key === 'Escape') {
      setProfileDropdownVisible(false);
    } else if (e.key === 'ArrowDown' && profileDropdownVisible) {
      e.preventDefault();
      const firstItem = profileDropdownRef.current?.querySelector('a');
      firstItem?.focus();
    }
  };

  // Enhanced dropdown item keyboard navigation
  const handleDropdownItemKeyDown = (e, items, index) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextItem = items[index + 1] || items[0];
      nextItem?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevItem = items[index - 1] || items[items.length - 1];
      prevItem?.focus();
    }
  };

  // Mouse enter/leave handlers with delay for better UX
  const handleServicesMouseEnter = () => {
    clearTimeout(servicesHoverTimeoutRef.current);
    setDropdownVisible(true);
    setProfileDropdownVisible(false);
  };

  const handleServicesMouseLeave = () => {
    servicesHoverTimeoutRef.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 300);
  };

  const handleProfileMouseEnter = () => {
    clearTimeout(profileHoverTimeoutRef.current);
    setProfileDropdownVisible(true);
    setDropdownVisible(false);
  };

  const handleProfileMouseLeave = () => {
    profileHoverTimeoutRef.current = setTimeout(() => {
      setProfileDropdownVisible(false);
    }, 300);
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (event) => {
    if (
      dropdownVisible && 
      servicesDropdownRef.current && 
      !servicesDropdownRef.current.contains(event.target)
    ) {
      setDropdownVisible(false);
    }
    
    if (
      profileDropdownVisible && 
      profileDropdownRef.current && 
      !profileDropdownRef.current.contains(event.target)
    ) {
      setProfileDropdownVisible(false);
    }
    
    if (
      mobileMenuOpen && 
      mobileMenuRef.current && 
      !mobileMenuRef.current.contains(event.target) &&
      !event.target.closest('.mobile-menu-button')
    ) {
      setMobileMenuOpen(false);
    }
  };

  // Close dropdowns when route changes
  useEffect(() => {
    setDropdownVisible(false);
    setProfileDropdownVisible(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(servicesHoverTimeoutRef.current);
      clearTimeout(profileHoverTimeoutRef.current);
    };
  }, [dropdownVisible, profileDropdownVisible, mobileMenuOpen]);

  // Add body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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

  // Animation classes for dropdowns
  const dropdownAnimationClasses = "transition-all duration-200 transform origin-top";
  const dropdownEnterClasses = "opacity-100 scale-100";
  const dropdownExitClasses = "opacity-0 scale-95";

  return (
    <header className="relative bg-gradient-to-r from-[#4c6eb1] via-[#2b4c88] to-[#0a2a48] text-white sticky top-0 z-50 shadow-lg border-b border-[#0b86a5] transition-all">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link to="/" className="cursor-pointer group" onClick={closeDropdowns}>
              <img 
                src="/logo.svg" 
                alt="Company Logo" 
                className="h-8 md:h-10 object-contain transition-transform duration-300 group-hover:scale-110" 
              />
            </Link>
            <div className="text-white">
              <h3 className="text-lg md:text-xl font-bold transition-colors hover:text-[#7acbe2]">
                <Link to="/" onClick={closeDropdowns}>Skylite Digital Solution</Link>
              </h3>
              <h5 className="italic text-xs md:text-sm hidden sm:block">INSPIRED BY YOU, CRAFTING BY US</h5>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none mobile-menu-button p-2 rounded-md hover:bg-[#0a85a3] transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Menu</span>
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
            <div 
              className="relative dropdown-container" 
              ref={servicesDropdownRef}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button 
                className={`text-white text-base lg:text-lg py-2 px-3 rounded-md transition-colors flex items-center gap-1 ${
                  services.some(service => isCurrentPath(service.url)) ? 'bg-[#0a85a3]' : 'hover:bg-[#0a85a3]'
                }`}
                onClick={toggleDropdown}
                onKeyDown={handleServiceKeyDown}
                aria-expanded={dropdownVisible}
                aria-haspopup="true"
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${dropdownVisible ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`absolute top-full left-0 bg-white text-[#0d98ba] shadow-lg rounded-lg w-56 mt-1 py-2 z-10 dropdown ${dropdownAnimationClasses} ${dropdownVisible ? dropdownEnterClasses : dropdownExitClasses} ${!dropdownVisible ? 'hidden' : ''}`}
                aria-label="Services menu"
                role="menu"
              >
                {services.map(({ name, id, url }, index) => (
                  <div key={id}>
                    <Link
                      to={url}
                      className={`block px-4 py-2 text-sm hover:bg-[#0d98ba] hover:text-white rounded transition-colors focus:outline-none focus:bg-[#0a85a3] focus:text-white ${
                        isCurrentPath(url) ? 'bg-[#0d98ba] text-white' : ''
                      }`}
                      onClick={closeDropdowns}
                      onKeyDown={(e) => handleDropdownItemKeyDown(e, servicesDropdownRef.current?.querySelectorAll('a'), index)}
                      role="menuitem"
                    >
                      {name}
                    </Link>
                  </div>
                ))}
              </div>
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
            <div 
              className="relative dropdown-container" 
              ref={profileDropdownRef}
              onMouseEnter={handleProfileMouseEnter}
              onMouseLeave={handleProfileMouseLeave}
            >
              <button 
                className={`text-white text-base lg:text-lg py-2 px-3 rounded-md transition-colors flex items-center gap-1 ${
                  isCurrentPath('/LoginPage') || isCurrentPath('/profile') ? 'bg-[#0a85a3]' : 'hover:bg-[#0a85a3]'
                }`}
                onClick={toggleProfileDropdown}
                onKeyDown={handleProfileKeyDown}
                aria-expanded={profileDropdownVisible}
                aria-haspopup="true"
              >
                {isLoggedIn ? (
                  <>
                    <span>Profile</span>
                    <svg className="w-5 h-5 rounded-full bg-[#7acbe2] text-[#0d98ba]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </>
                ) : (
                  <span className="flex items-center gap-1">
                    Login
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                )}
              </button>
              <div 
                className={`absolute top-full right-0 bg-white text-[#0d98ba] shadow-lg rounded-lg w-56 mt-1 py-2 z-10 dropdown ${dropdownAnimationClasses} ${profileDropdownVisible ? dropdownEnterClasses : dropdownExitClasses} ${!profileDropdownVisible ? 'hidden' : ''}`}
                aria-label="Profile menu"
                role="menu"
              >
                {isLoggedIn ? (
                  <>
                    <div className="px-4 py-2 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#0d98ba] flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700">User Name</div>
                          <div className="text-xs text-gray-500">user@example.com</div>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/profile"
                      className={`block px-4 py-2 text-sm hover:bg-[#0d98ba] hover:text-white rounded transition-colors focus:outline-none focus:bg-[#0a85a3] focus:text-white ${
                        isCurrentPath('/profile') ? 'bg-[#0d98ba] text-white' : ''
                      }`}
                      onClick={closeDropdowns}
                      role="menuitem"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        My Profile
                      </div>
                    </Link>
                    <Link
                      to="/settings"
                      className={`block px-4 py-2 text-sm hover:bg-[#0d98ba] hover:text-white rounded transition-colors focus:outline-none focus:bg-[#0a85a3] focus:text-white ${
                        isCurrentPath('/settings') ? 'bg-[#0d98ba] text-white' : ''
                      }`}
                      onClick={closeDropdowns}
                      role="menuitem"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Settings
                      </div>
                    </Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-600 hover:text-white rounded transition-colors focus:outline-none focus:bg-red-700 focus:text-white"
                      onClick={handleLogoutClick}
                      role="menuitem"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </div>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/LoginPage"
                      className={`block px-4 py-2 text-sm hover:bg-[#0d98ba] hover:text-white rounded transition-colors focus:outline-none focus:bg-[#0a85a3] focus:text-white ${
                        isCurrentPath('/LoginPage') ? 'bg-[#0d98ba] text-white' : ''
                      }`}
                      onClick={handleLoginClick}
                      role="menuitem"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Login
                      </div>
                    </Link>
                    <Link
                      to="/register"
                      className={`block px-4 py-2 text-sm hover:bg-[#0d98ba] hover:text-white rounded transition-colors focus:outline-none focus:bg-[#0a85a3] focus:text-white ${
                        isCurrentPath('/register') ? 'bg-[#0d98ba] text-white' : ''
                      }`}
                      onClick={closeDropdowns}
                      role="menuitem"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Register
                      </div>
                    </Link>
                  </>
                )}
              </div>
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