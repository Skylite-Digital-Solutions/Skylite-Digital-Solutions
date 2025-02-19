import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [blogDropdownVisible, setBlogDropdownVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const services = [
    { id: 1, name: 'All Services', url: '/services' },
    { id: 2, name: 'Web Development', url: '/web-development' },
    { id: 3, name: 'Quality Assurance', url: '/quality-assurance' },
    { id: 4, name: 'Digital Marketing & SEO', url: '/digital-seo' },
    { id: 5, name: 'Cyber Security', url: '/cyber-security' },
  ];

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const toggleBlogDropdown = () => setBlogDropdownVisible(!blogDropdownVisible);
  const toggleProfileDropdown = () => setProfileDropdownVisible(!profileDropdownVisible);

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown') && dropdownVisible) {
      setDropdownVisible(false);
    }
    if (!event.target.closest('.dropdown') && blogDropdownVisible) {
      setBlogDropdownVisible(false);
    }
    if (!event.target.closest('.dropdown') && profileDropdownVisible) {
      setProfileDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownVisible, blogDropdownVisible, profileDropdownVisible]);

  const handleLoginClick = () => {
    navigate('/LoginPage');
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    navigate(window.location.pathname);
  };

  return (
    <header className="bg-blue-600 text-white p-5 flex justify-between items-center sticky top-0 z-50 shadow-lg border-b border-blue-800 transition-all">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <Link to="/" className="cursor-pointer">
          <img src="/logo.svg" alt="Company Logo" className="h-10 object-contain transition-transform hover:scale-105" />
        </Link>
        <div className="text-white">
          <h3 className="text-xl font-bold">Skylite Digital Solutions</h3>
          <h5 className="italic text-sm">INSPIRED BY YOU, CRAFTING BY US</h5>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center gap-6">
        {/* Services Dropdown */}
        <div className="relative" onClick={toggleDropdown}>
          <button className="text-white text-lg py-2 px-4 hover:bg-blue-700 rounded transition-colors">
            Services
          </button>
          {dropdownVisible && (
            <div className="absolute top-full left-0 bg-white text-blue-700 shadow-lg rounded-lg w-48 mt-2 py-2 z-10">
              {services.map(({ name, id, url }) => (
                <div key={id}>
                  <Link
                    to={url}
                    className={`block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white rounded transition-colors ${id === 4 ? 'bg-green-500 text-white' : ''}`}
                  >
                    {name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Blog Link */}
        <Link to="/blogs" className="text-white text-lg py-2 px-4 hover:bg-blue-700 rounded transition-colors">
          Blogs
        </Link>

        {/* About Us Link */}
        <Link to="/about-us" className="text-white text-lg py-2 px-4 hover:bg-blue-700 rounded transition-colors">
          About Us
        </Link>

        {/* Contact Us Link */}
        <Link to="/contact-us" className="text-white text-lg py-2 px-4 hover:bg-blue-700 rounded transition-colors">
          Contact Us
        </Link>

        {/* Profile Dropdown */}
        <div className="relative" onClick={toggleProfileDropdown}>
          <button className="text-white text-lg py-2 px-4 hover:bg-blue-700 rounded transition-colors">
            {isLoggedIn ? 'Profile' : 'Login'}
          </button>
          {profileDropdownVisible && (
            <div className="absolute top-full right-0 bg-white text-blue-700 shadow-lg rounded-lg w-48 mt-2 py-2 z-10">
              {isLoggedIn ? (
                <div>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white rounded transition-colors"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    to="/LoginPage"
                    className="block px-4 py-2 text-sm hover:bg-blue-600 hover:text-white rounded transition-colors"
                    onClick={handleLoginClick}
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
