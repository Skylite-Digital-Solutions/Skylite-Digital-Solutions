import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Mainstyles/Header.css'; // Updated CSS file

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [blogDropdownVisible, setBlogDropdownVisible] = useState(false);
  const [loginDropdownVisible, setLoginDropdownVisible] = useState(false);

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
  const toggleLoginDropdown = () => setLoginDropdownVisible(!loginDropdownVisible);

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown') && dropdownVisible) {
      setDropdownVisible(false);
    }
    if (!event.target.closest('.dropdown') && blogDropdownVisible) {
      setBlogDropdownVisible(false);
    }
    if (!event.target.closest('.dropdown') && loginDropdownVisible) {
      setLoginDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownVisible, blogDropdownVisible, loginDropdownVisible]);

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/logo.svg" alt="Company Logo" className="logo-image" />
      </Link>
      <Link to="/" className="logo-title">
        <h3>Skylite Digital</h3>
        <h4>INPIRED BY YOU, CRAFTING BY US</h4>
      </Link>
      <nav className="nav">
        
        {/* Services Dropdown */}
        <div className="nav-item" onClick={toggleDropdown}>
          Services
          {dropdownVisible && (
            <div className="dropdown">
              {services.map(({ name, id, url }) => (
                <div className='dropdown-items' key={id}>
                  <Link to={url} className='dropdown-item'>{name}</Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link to="/blogs/all-categories" className="nav-item">Blogs</Link>
        <Link to="/about-us" className="nav-item">About Us</Link>
        <Link to="/contact-us" className="nav-item">Contact Us</Link>

        {/* Blogs Dropdown */}
        {/* <div className="nav-item" onClick={toggleBlogDropdown}>
          Blogs
          {blogDropdownVisible && (
            <div className="dropdown">
              {Blogs.map(({ name, id, url }) => (
                <div className='dropdown-items' key={id}>
                  <Link to={url} className='dropdown-item'>{name}</Link>
                </div>
              ))}
            </div>
          )}
        </div> */}

        {/* Login Dropdown
        <div className="nav-item" onClick={toggleLoginDropdown}>
          Login
          {loginDropdownVisible && (
            <div className="dropdown">
              {Login.map(({ name, id, url }) => (
                <div className='dropdown-items' key={id}>
                  <Link to={url} className='dropdown-item'>{name}</Link>
                </div>
              ))}
            </div>
          )}
        </div> */}
      </nav>
    </header>
  );
}

export default Header;
