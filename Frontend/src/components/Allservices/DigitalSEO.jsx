import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServicesStyles/DigitalSEO.css';

const DigitalSEO = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
  };

  return (
    <div className="DigitalSEO">
      <h2>Our services for Digital Marketing and SEO</h2>
      <p>
        At <strong>Skylite Digital Solitions</strong>, At our IT company, we specialize in empowering businesses to thrive in the digital landscape
        through our comprehensive Digital Marketing and SEO services. Our approach is designed to enhance your online presence, drive targeted traffic,
        and ultimately boost conversions. We leverage powerful tools like Google Analytics, SEMrush, Moz, and Ahrefs 
        to analyze performance, optimize strategies, and ensure your brand stands out in a crowded marketplace.
      </p>
      <ul className="keyfeature-list">
        <h3>Key Features and Expertise in Digital Marketing</h3>
          <li>
          <strong>Content Marketing </strong>: We create engaging, high-quality content that resonates with your audience and establishes your brand as an authority in your industry. 
          Our content marketing strategies focus on storytelling and value-driven approaches to enhance user engagement and drive conversions.
        </li>
        <li>
          <strong>Social Media Marketing</strong>: Harnessing the power of social media platforms, we develop tailored campaigns that foster community engagement and brand loyalty. 
          We utilize tools like Hootsuite and Buffer for effective social media management, ensuring consistent brand messaging across all channels.
        </li>
        <li>
          <strong>Analytics and Reporting</strong>: We believe in data-driven decision-making. Our team uses advanced analytics tools to track performance metrics, 
          analyze user behavior, and provide actionable insights to continuously refine your marketing strategies for optimal results.
        </li>
        </ul>

        <ul className="keyfeature-list">
        <h3>Expertise in Search Engine Optimization</h3>
          <li>
          <strong>Search Engine Optimization (SEO)</strong>: Our expert team conducts thorough keyword research, on-page optimization, and backlink 
          strategies to elevate your site’s rankings. We focus on optimizing content and website structure to ensure search engines recognize your site as a valuable resource.
        </li>
        <li>
          <strong>Link Building</strong>: Our link-building strategies focus on acquiring high-quality backlinks from reputable sources, enhancing your website’s authority and 
          improving its search rankings. We employ ethical practices to ensure sustainable results.
        </li>
        <li>
          <strong>Technical and Local SEO</strong>: We perform comprehensive technical audits to ensure your website is search engine friendly, optimizing site speed, 
          improving mobile responsiveness, and ensuring proper indexing for a seamless user experience. Additionally, for businesses targeting local customers, our local SEO strategies 
          enhance visibility in local search results by optimizing your Google My Business profile and implementing local keywords to effectively attract nearby customers.
        </li>
        </ul>

    <div className="footer-container">
      <p>
        Partner with us to boost your digital marketing and SEO initiatives, enabling your business to flourish in an ever-changing online world. Together, we can enhance your online presence and drive meaningful results.
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

export default DigitalSEO;
