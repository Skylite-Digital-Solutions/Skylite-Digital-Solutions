import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaLaptopCode, FaShieldAlt, FaServer } from 'react-icons/fa';
import Constacts from './Contacts';
import { ArrowRight, Eye, Target, Users } from 'lucide-react';
import Contacts from './Contacts';

const QualityAssurance = () => {
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    navigate('/contacts');
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
          {/* <button 
                className="inline-flex items-center bg-blue-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-blue-700 transition-all duration-200 group" 
                onClick={handleGetInTouchClick}
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button> */}
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

        {/* Contact Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 relative inline-block">
              Get In Touch
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 rounded-full"></div>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4">
              Have questions or ready to start your project? We're here to help.
            </p>
          </div>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;