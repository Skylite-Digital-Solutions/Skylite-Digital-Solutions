import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServicesStyles/ITConsultancy.css';

const ITConsulting = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
  };

  return (
    <div className="ITConsulting">
      <h2>Our IT Consultancy Services</h2>
      <p>
        At <strong>Skylite Digital Solitions</strong>, we empower businesses with expert Web Development services designed to deliver impactful digital experiences. We specialize in creating fast, responsive, and scalable websites and applications that cater to your unique goals. Leveraging the latest technologies like React, Angular, Vue.js for frontend, and Node.js, Express, and Python for backend, we ensure a seamless, robust, and user-friendly interface across all devices.
      </p>
      <ul className="keyfeature-list">
        <h3>Key Features and Expertise in Development</h3>
          <li>
          <strong>Custom Development</strong>: We create web solutions uniquely crafted to reflect your brand identity and meet your specific requirements. From user experience to backend functionality, every detail is designed to enhance your business.
        </li>
        <li>
          <strong>Responsive Design</strong>: Our websites are optimized to provide a seamless experience across all device types, ensuring accessibility for all users. This approach improves user engagement and helps retain visitors across platforms.
        </li>
        <li>
          <strong>API Integration</strong>: We integrate third-party APIs to add essential features and boost your site's capabilities. This allows your website to interact seamlessly with external services, providing a more dynamic user experience.
        </li>
        <li>
          <strong>E-commerce Solutions</strong>: Our e-commerce platforms are built to deliver a secure and efficient shopping experience, supporting large transaction volumes with high performance. We design each aspect of the online store for intuitive navigation, simplifying the shopping process from product browsing to final purchase.
        </li>
        <li>
          <strong>Security and Compliance</strong>: We implement robust security protocols to safeguard your data and maintain user trust. Our solutions also adhere to industry standards and compliance regulations, ensuring full legal alignment
        </li>
      </ul>

    <div className="footer">
      <p>
      With our extensive experience, dedication to quality, and cutting-edge technology stack, we bring your digital vision to life. Let us help you create an online presence that drives engagement, supports growth, and elevates your business.
      </p>
    </div>

      {/* Button container for centering */}
      <div className="button-container">
        <button onClick={handleGetInTouch} className="get-in-touch-button">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default ITConsulting;
