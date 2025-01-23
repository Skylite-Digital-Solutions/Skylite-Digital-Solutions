// SoftwareDev.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SoftwareDev.css';
import '../styles/color.css';
import { FaCode, FaMobileAlt, FaPlug, FaShieldAlt, FaShoppingCart } from 'react-icons/fa'; // Import relevant icons

const SoftwareDev = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
  };

  return (
    <div className="Background-container-softwaredev">
      <div className="SoftwareDev-container">
        <h2>Our Software Development Services</h2>
        <p>
          At <strong>Skylite Digital Solutions</strong>, we empower businesses with expert Web Development services designed to deliver impactful digital experiences. We specialize in creating fast, responsive, and scalable websites and applications that cater to your unique goals. Leveraging the latest technologies like React, Angular, Vue.js for frontend, and Node.js, Express, and Python for backend, we ensure a seamless, robust, and user-friendly interface across all devices.
        </p>
        <h3>Key Features and Expertise in Development</h3>
        <div className="keyfeature-list">
          <ul>
            <li>
              <div className="feature-icon"><FaCode /></div>
              <strong>Custom Development</strong>: We create web solutions uniquely crafted to reflect your brand identity and meet your specific requirements. From user experience to backend functionality, every detail is designed to enhance your business.
            </li>
            <li>
              <div className="feature-icon"><FaMobileAlt /></div>
              <strong>Responsive Design</strong>: Our websites are optimized to provide a seamless experience across all device types, ensuring accessibility for all users. This approach improves user engagement and helps retain visitors across platforms.
            </li>
            <li>
              <div className="feature-icon"><FaPlug /></div>
              <strong>API Integration</strong>: We integrate third-party APIs to add essential features and boost your site's capabilities. This allows your website to interact seamlessly with external services, providing a more dynamic user experience.
            </li>
            <li>
              <div className="feature-icon"><FaShoppingCart /></div>
              <strong>E-commerce Solutions</strong>: Our e-commerce platforms are built to deliver a secure and efficient shopping experience, supporting large transaction volumes with high performance. We design each aspect of the online store for intuitive navigation, simplifying the shopping process from product browsing to final purchase.
            </li>
            <li>
              <div className="feature-icon"><FaShieldAlt /></div>
              <strong>Security and Compliance</strong>: We implement robust security protocols to safeguard your data and maintain user trust. Our solutions also adhere to industry standards and compliance regulations, ensuring full legal alignment.
            </li>
          </ul>
        </div>

        <div className="footer-container">
          <p>
            With our extensive experience, dedication to quality, and cutting-edge technology stack, we bring your digital vision to life. Let us help you create an online presence that drives engagement, supports growth, and elevates your business.
          </p>
        </div>

        <div className="button-container">
          <button onClick={handleGetInTouch} className="get-in-touch-button">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDev;
