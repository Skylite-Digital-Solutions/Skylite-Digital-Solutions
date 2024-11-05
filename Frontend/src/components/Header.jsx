import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Updated CSS file
import Blogs from './Blogs';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [blogDropdownVisible, setBlogDropdownVisible] = useState(false); // Separate state for Blog dropdown

  // Dropdown services
  const services = [
    { id: 1, name: 'All Services', url: '/services/all-services' },
    { id: 2, name: 'Web Development', url: '/services/web-development' },
    { id: 3, name: 'Quality Assurance', url: '/services/quality-assurance' },
    { id: 4, name: 'IT Consultancy', url: '/services/it-consultancy' },
    { id: 5, name: 'Digital Marketing & SEO', url: '/services/digital-seo' },
  ];

  // Blog Drop Down
  const Blogs = [
    { id: 1, name: 'All Categories', url: '/blogs/all-categories' }, // Updated URL to match
    { id: 2, name: 'Digital Marketing & SEO', url: '/blogs/digital-seo' },
    { id: 3, name: 'Expert Interviews', url: '/blogs/interviews' },
    { id: 4, name: 'Understanding Q&A', url: '/blogs/qulaity-qssurance' },
    { id: 5, name: 'Technology Trends', url: '/blogs/technology' },
    { id: 6, name: 'Future of Web Development', url: '/blogs/web-dev' },
    { id: 7, name: 'IT Best Practices', url: '/blogs/it-best-practice' },
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleBlogDropdown = () => {
    setBlogDropdownVisible(!blogDropdownVisible);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownVisible && !event.target.closest('.dropdown')) {
      setDropdownVisible(false);
    }
    if (blogDropdownVisible && !event.target.closest('.dropdown')) {
      setBlogDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownVisible, blogDropdownVisible]);

  return (
    <header className="header">
      <Link to="/" className="logo">Logo</Link>
      <nav className="nav">
        <Link to="/about-us" className="nav-item">About Us</Link>
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
        <div className="nav-item-blog" onClick={toggleBlogDropdown}>
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
      </nav>
    </header>
  );
};

export default Header;
