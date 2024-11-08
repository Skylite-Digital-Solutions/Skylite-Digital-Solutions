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

  // Blog Drop Down
  const Blogs = [
    { id: 1, name: 'All Categories', url: '/blogs/all-categories' },
    { id: 2, name: 'Digital Marketing & SEO', url: '/blogs/digital-seo' },
    { id: 3, name: 'Expert Interviews', url: '/blogs/interviews' },
    { id: 4, name: 'Understanding Q&A', url: '/blogs/quality-assurance' },
    { id: 5, name: 'Technology Trends', url: '/blogs/technology' },
    { id: 6, name: 'Future of Web Development', url: '/blogs/web-dev' },
    { id: 7, name: 'IT Best Practices', url: '/blogs/it-best-practice' },
  ];

  const Login = [
    { id: 1, name: 'Sign In', url: '/blogfirebase/signin-container' },
    { id: 2, name: 'Sign Up', url: '/blogfirebase/signup-container' },
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const toggleBlogDropdown = () => setBlogDropdownVisible(!blogDropdownVisible);
  const toggleLoginDropdown = () => setLoginDropdownVisible(!loginDropdownVisible);

  // Close dropdown if clicked outside
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
      <Link to="/" className="logo">Logo</Link>
      <nav className="nav">
        <Link to="/create-blog" className="nav-item">Create Blog</Link>
        <Link to="/blog-page" className="nav-item">Blog Page</Link>
        <Link to="/about-us" className="nav-item">About Us</Link>
        
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

        <Link to="/contact-us" className="nav-item">Contact Us</Link>

        {/* Blogs Dropdown */}
        <div className="nav-item" onClick={toggleBlogDropdown}>
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
        </div>

        {/* Login Dropdown */}
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
