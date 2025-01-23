import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaLaptopCode, FaShieldAlt, FaServer } from 'react-icons/fa'; // Importing icons
import '../styles/QualityAssurance.css';
import '../styles/color.css';

const QualityAssurance = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact-us');
  };

  return (
    <div className="QualityAssurance">
      <h2>Our Quality Assurance Services</h2>
      <p>
        At <strong>Skylite Digital Solutions</strong>, Our Quality Assurance (QA) services ensure that your software meets the highest standards of reliability,
        performance, and security. We specialize in both manual and automated testing to provide a thorough validation of each feature, delivering a seamless 
        experience for end-users. Our team utilizes industry-leading tools and technologies like Selenium, JUnit, Postman, Appium, and JMeter to conduct rigorous
        testing for web, mobile, and API interfaces. Additionally, we focus on security testing to protect data integrity and regulatory compliance.
      </p>
      <ul className="keyfeature-list">
        <h3>Key Features and Expertise in Quality Assurance</h3>
        <li>
          <FaLaptopCode className="feature-icon" />
          <strong>Automated Testing</strong>: Our automated testing ensures efficiency and reliability by running tests continuously throughout the development cycle. We leverage Selenium, JUnit, and Appium to quickly validate complex functionalities across browsers and devices, reducing the time to market and minimizing human error.
        </li>
        <li>
          <FaServer className="feature-icon" />
          <strong>Performance Testing</strong>: We conduct performance testing to ensure your application handles varying loads without compromising speed or stability. Leveraging JMeter and LoadRunner, we simulate real-world traffic conditions to identify bottlenecks and optimize scalability.
        </li>
        <li>
          <FaCheckCircle className="feature-icon" />
          <strong>API Testing</strong>: Our API testing guarantees that each service endpoint performs as intended, supporting seamless interaction across your application. Using tools like Postman and SoapUI, we validate API responses, performance, and security.
        </li>
        <li>
          <FaShieldAlt className="feature-icon" />
          <strong>Manual Testing</strong>: For features requiring nuanced attention, our team performs comprehensive manual testing to verify user interactions and pinpoint edge cases. We utilize tools like TestRail for detailed test management and tracking.
        </li>
        <li>
          <FaShieldAlt className="feature-icon" />
          <strong>Security Testing</strong>: Our security testing protocols identify potential vulnerabilities and reinforce your software’s defenses. We use tools like OWASP ZAP, Burp Suite, and Nessus to conduct in-depth assessments.
        </li>
      </ul>

      {/* <div className="footer-container">
        <p>
          Our Quality Assurance expertise ensures secure, reliable, and high-performance software that aligns seamlessly with your business needs. From automated and 
          manual testing to API validation and security assessments, we utilize top-tier technologies like Selenium, Appium, and Burp Suite to safeguard every aspect 
          of your application. By focusing on performance, security, and precision, we help you deliver exceptional software experiences to your users. Let’s build 
          quality together.
        </p>
      </div> */}

      <div className="button-container">
        <button onClick={handleGetInTouch} className="get-in-touch-button">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default QualityAssurance;
