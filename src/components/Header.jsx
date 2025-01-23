// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/Header.css'; // Updated CSS file
// import '../styles/color.css';

// function Header() {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [blogDropdownVisible, setBlogDropdownVisible] = useState(false);
//   const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state
//   const navigate = useNavigate();

//   // Dropdown services
//   const services = [
//     { id: 1, name: 'All Services', url: '/services/all-services' },
//     { id: 2, name: 'Web Development', url: '/services/web-development' },
//     { id: 3, name: 'Quality Assurance', url: '/services/quality-assurance' },
//     { id: 4, name: 'Digital Marketing & SEO', url: '/services/digital-seo' },
//   ];

//   const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
//   const toggleBlogDropdown = () => setBlogDropdownVisible(!blogDropdownVisible);
//   const toggleProfileDropdown = () => setProfileDropdownVisible(!profileDropdownVisible);

//   const handleClickOutside = (event) => {
//     if (!event.target.closest('.dropdown') && dropdownVisible) {
//       setDropdownVisible(false);
//     }
//     if (!event.target.closest('.dropdown') && blogDropdownVisible) {
//       setBlogDropdownVisible(false);
//     }
//     if (!event.target.closest('.dropdown') && profileDropdownVisible) {
//       setProfileDropdownVisible(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [dropdownVisible, blogDropdownVisible, profileDropdownVisible]);

//   const handleLoginClick = () => {
//     navigate('/LoginPage'); // Navigate to the login page
//   };

//   const handleLogoutClick = () => {
//     setIsLoggedIn(false);
//     navigate(window.location.pathname); // Redirect to the same page after logout
//   };

//   return (
//     <header className="header">
//       <div>
//         <Link to="/" className="logo">
//           <img src="/logo.svg" alt="Company Logo" className="logo-image" />
//         </Link>
//         <Link to="/" className="logo-title">
//           <h3>Heading</h3>
//           <h4>INSPIRED BY YOU, CRAFTING BY US</h4>
//         </Link>
//       </div>
//       <nav className="nav">
//         {/* Services Dropdown */}
//         <div className="nav-item" onClick={toggleDropdown}>
//           Services
//           {dropdownVisible && (
//             <div className="dropdown">
//               {services.map(({ name, id, url }) => (
//                 <div className="dropdown-items" key={id}>
//                   <Link to={url} className="dropdown-item">{name}</Link>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <Link to="/blogs" className="nav-item">Blogs</Link>
//         <Link to="/about-us" className="nav-item">About Us</Link>
//         <Link to="/contact-us" className="nav-item">Contact Us</Link>

//         {/* Profile Dropdown
//         <div className="nav-item profile-container" onClick={toggleProfileDropdown}>
//           <img
//             src={isLoggedIn ? "/user.png" : "/user.png"}
//             alt="Profile Icon"
//             className="profile-icon"
//           />
//           {profileDropdownVisible && (
//             <div className="dropdown">
//               {isLoggedIn ? (
//                 <div className="dropdown-items">
//                   <Link to="#" className="dropdown-item" onClick={handleLogoutClick}>Logout</Link>
//                 </div>
//               ) : (
//                 <div className="dropdown-items">
//                   <Link to="/LoginPage" className="dropdown-item" onClick={handleLoginClick}>Login</Link>
//                 </div>
//               )}
//             </div>
//           )}
//         </div> */}
//       </nav>
//     </header>
//   );
// }

// export default Header;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css'; // Updated CSS file
import '../styles/color.css';

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
    <header className="header">
      <div className="header-logo-container">
        <Link to="/" className="logo-container">
          <img src="/logo.svg" alt="Company Logo" className="logo-image" />
        </Link>
        <div className="header-text">
          <h3 className="header-title">Skylite Digital Solutions</h3>
          <h5 className="header-slogan">INSPIRED BY YOU, CRAFTING BY US</h5>
        </div>
      </div>
      <nav className="nav">
        <div className="nav-item" onClick={toggleDropdown}>
          Services
          {dropdownVisible && (
            <div className="dropdown">
              {services.map(({ name, id, url }) => (
                <div className="dropdown-items" key={id}>
                  <Link
                    to={url}
                    className={id === 4 ? 'dropdown-item dropdown-item-special' : 'dropdown-item'}
                  >
                    {name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link to="/blogs" className="nav-item">
          Blogs
        </Link>
        <Link to="/about-us" className="nav-item">
          About Us
        </Link>
        <Link to="/contact-us" className="nav-item">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}

export default Header;
