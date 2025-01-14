import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css'; // Updated CSS file
import '../styles/color.css';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [blogDropdownVisible, setBlogDropdownVisible] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state
  const navigate = useNavigate();

  // Dropdown services
  const services = [
    { id: 1, name: 'All Services', url: '/services/all-services' },
    { id: 2, name: 'Web Development', url: '/services/web-development' },
    { id: 3, name: 'Quality Assurance', url: '/services/quality-assurance' },
    { id: 4, name: 'Digital Marketing & SEO', url: '/services/digital-seo' },
  ];

  const Blogs = [
    { id: 1, name: 'All Categories', url: '/blogs/all-categories' },
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
    navigate('/LoginPage'); // Navigate to the login page
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    navigate(window.location.pathname); // Redirect to the same page after logout
  };

  return (
    <header className="header">
      <div>
        <Link to="/" className="logo">
          <img src="/logo.svg" alt="Company Logo" className="logo-image" />
        </Link>
        <Link to="/" className="logo-title">
          <h3>Heading</h3>
          <h4>INSPIRED BY YOU, CRAFTING BY US</h4>
        </Link>
      </div>
      <nav className="nav">
        {/* Services Dropdown */}
        <div className="nav-item" onClick={toggleDropdown}>
          Services
          {dropdownVisible && (
            <div className="dropdown">
              {services.map(({ name, id, url }) => (
                <div className="dropdown-items" key={id}>
                  <Link to={url} className="dropdown-item">{name}</Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link to="/blogs" className="nav-item">Blogs</Link>
        <Link to="/about-us" className="nav-item">About Us</Link>
        <Link to="/contact-us" className="nav-item">Contact Us</Link>

        {/* Profile Dropdown */}
        <div className="nav-item profile-container" onClick={toggleProfileDropdown}>
          <img
            src={isLoggedIn ? "/user.png" : "/default-icon.svg"}
            alt="Profile Icon"
            className="profile-icon"
          />
          {profileDropdownVisible && (
            <div className="dropdown">
              {isLoggedIn ? (
                <div className="dropdown-items">
                  <Link to="#" className="dropdown-item" onClick={handleLogoutClick}>Logout</Link>
                </div>
              ) : (
                <div className="dropdown-items">
                  <Link to="/LoginPage" className="dropdown-item" onClick={handleLoginClick}>Login</Link>
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
