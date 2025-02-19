import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaLaptopCode, FaShieldAlt, FaServer } from 'react-icons/fa';

const QualityAssurance = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact-us');
  };

  return (
    <div className="px-4 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Quality Assurance Services</h2>
        <p className="text-lg text-gray-700 mb-8">
          At <strong>Skylite Digital Solutions</strong>, Our Quality Assurance (QA) services ensure that your software meets the highest standards of reliability,
          performance, and security. We specialize in both manual and automated testing to provide a thorough validation of each feature, delivering a seamless 
          experience for end-users. Our team utilizes industry-leading tools and technologies like Selenium, JUnit, Postman, Appium, and JMeter to conduct rigorous
          testing for web, mobile, and API interfaces. Additionally, we focus on security testing to protect data integrity and regulatory compliance.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Features and Expertise in Quality Assurance</h3>

        <ul className="space-y-6 text-left">
          <li className="flex items-start space-x-4">
            <FaLaptopCode className="text-3xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Automated Testing</strong>: Our automated testing ensures efficiency and reliability by running tests continuously throughout the development cycle. We leverage Selenium, JUnit, and Appium to quickly validate complex functionalities across browsers and devices, reducing the time to market and minimizing human error.
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaServer className="text-3xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Performance Testing</strong>: We conduct performance testing to ensure your application handles varying loads without compromising speed or stability. Leveraging JMeter and LoadRunner, we simulate real-world traffic conditions to identify bottlenecks and optimize scalability.
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaCheckCircle className="text-3xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">API Testing</strong>: Our API testing guarantees that each service endpoint performs as intended, supporting seamless interaction across your application. Using tools like Postman and SoapUI, we validate API responses, performance, and security.
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaShieldAlt className="text-3xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Manual Testing</strong>: For features requiring nuanced attention, our team performs comprehensive manual testing to verify user interactions and pinpoint edge cases. We utilize tools like TestRail for detailed test management and tracking.
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaShieldAlt className="text-3xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Security Testing</strong>: Our security testing protocols identify potential vulnerabilities and reinforce your software’s defenses. We use tools like OWASP ZAP, Burp Suite, and Nessus to conduct in-depth assessments.
            </div>
          </li>
        </ul>

        <div className="mt-8">
          <button 
            onClick={handleGetInTouch} 
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;
