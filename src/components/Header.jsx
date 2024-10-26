import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Updated CSS file

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Dropdown services
  const services = [
    'Web Development',
    'Quality Assurance',
    'IT Consultancy',
    'Digital Marketing & SEO',
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownVisible && !event.target.closest('.dropdown')) {
      setDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <header className="header">
      <Link to="/" className="logo">Logo</Link>
      <nav className="nav">
        <Link to="/about-us" className="nav-item">About Us</Link>
        <div className="nav-item" onClick={toggleDropdown}>
          Services
          {dropdownVisible && (
            <div className="dropdown">
              {services.map((service, index) => (
                <div className="dropdown-item" key={index}>
                  {service}
                </div>
              ))}
            </div>
          )}
        </div>
        <Link to="/contact-us" className="nav-item">Contact Us</Link>
        <Link to="/blogs" className="nav-item">Blogs</Link>
      </nav>
    </header>
  );
};

export default Header;
