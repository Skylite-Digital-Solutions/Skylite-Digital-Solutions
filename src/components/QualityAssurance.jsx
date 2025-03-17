import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaLaptopCode, FaShieldAlt, FaServer } from 'react-icons/fa';
import Constacts from './Contacts';
import { ArrowRight, Eye, Target, Users } from 'lucide-react';
import Contacts from './Contacts';

const QualityAssurance = () => {
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    navigate('/contact-us');
  };

  const features = [
    {
      icon: <FaLaptopCode className="text-4xl text-blue-500 group-hover:text-blue-600" />,
      title: "Automated Testing",
      description: "Our automated testing ensures efficiency and reliability by running tests continuously throughout the development cycle. We leverage Selenium, JUnit, and Appium to quickly validate complex functionalities across browsers and devices, reducing the time to market and minimizing human error."
    },
    {
      icon: <FaServer className="text-4xl text-blue-500 group-hover:text-blue-600" />,
      title: "Performance Testing",
      description: "We conduct performance testing to ensure your application handles varying loads without compromising speed or stability. Leveraging JMeter and LoadRunner, we simulate real-world traffic conditions to identify bottlenecks and optimize scalability."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-blue-500 group-hover:text-blue-600" />,
      title: "API Testing",
      description: "Our API testing guarantees that each service endpoint performs as intended, supporting seamless interaction across your application. Using tools like Postman and SoapUI, we validate API responses, performance, and security."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500 group-hover:text-blue-600" />,
      title: "Manual Testing",
      description: "For features requiring nuanced attention, our team performs comprehensive manual testing to verify user interactions and pinpoint edge cases. We utilize tools like TestRail for detailed test management and tracking."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500 group-hover:text-blue-600" />,
      title: "Security Testing",
      description: "Our security testing protocols identify potential vulnerabilities and reinforce your software's defenses. We use tools like OWASP ZAP, Burp Suite, and Nessus to conduct in-depth assessments."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Quality Assurance Services
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              At <span className="font-semibold text-blue-600">Skylite Digital Solutions</span>, 
              we ensure your software meets the highest standards of reliability, performance, and security.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center mb-12">
            We specialize in both manual and automated testing to provide thorough validation of each feature, 
            delivering a seamless experience for end-users. Our team utilizes industry-leading tools and 
            technologies to conduct rigorous testing for web, mobile, and API interfaces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">
            Ready to Build Your Next Digital Solution?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            With our extensive experience, dedication to quality, and cutting-edge technology stack, 
            we bring your digital vision to life. Let us help you create an online presence that drives 
            engagement, supports growth, and elevates your business.
          </p>
          <button
            onClick={handleGetInTouchClick}
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-200 shadow-lg"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;