import React from 'react';
import { useNavigate } from 'react-router-dom';

const ITConsulting = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Our IT Consultancy Services</h2>
        <p className="text-lg text-gray-700 mb-8">
          At <strong>Skylite Digital Solutions</strong>, we empower businesses with expert Web Development services designed to deliver impactful digital experiences. We specialize in creating fast, responsive, and scalable websites and applications that cater to your unique goals. Leveraging the latest technologies like React, Angular, Vue.js for frontend, and Node.js, Express, and Python for backend, we ensure a seamless, robust, and user-friendly interface across all devices.
        </p>

        {/* IT Consultancy Key Features */}
        <ul className="space-y-6 mb-10">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-4">Key Features and Expertise in Development</h3>
          <li className="flex items-start space-x-4">
            <div>
              <strong className="text-xl text-gray-800">Custom Development</strong>
              <p className="text-gray-600">
                We create web solutions uniquely crafted to reflect your brand identity and meet your specific requirements. From user experience to backend functionality, every detail is designed to enhance your business.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div>
              <strong className="text-xl text-gray-800">Responsive Design</strong>
              <p className="text-gray-600">
                Our websites are optimized to provide a seamless experience across all device types, ensuring accessibility for all users. This approach improves user engagement and helps retain visitors across platforms.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div>
              <strong className="text-xl text-gray-800">API Integration</strong>
              <p className="text-gray-600">
                We integrate third-party APIs to add essential features and boost your site's capabilities. This allows your website to interact seamlessly with external services, providing a more dynamic user experience.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div>
              <strong className="text-xl text-gray-800">E-commerce Solutions</strong>
              <p className="text-gray-600">
                Our e-commerce platforms are built to deliver a secure and efficient shopping experience, supporting large transaction volumes with high performance. We design each aspect of the online store for intuitive navigation, simplifying the shopping process from product browsing to final purchase.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div>
              <strong className="text-xl text-gray-800">Security and Compliance</strong>
              <p className="text-gray-600">
                We implement robust security protocols to safeguard your data and maintain user trust. Our solutions also adhere to industry standards and compliance regulations, ensuring full legal alignment.
              </p>
            </div>
          </li>
        </ul>

        <p className="text-lg text-gray-700 mb-10">
          With our extensive experience, dedication to quality, and cutting-edge technology stack, we bring your digital vision to life. Let us help you create an online presence that drives engagement, supports growth, and elevates your business.
        </p>

        {/* Button container for centering */}
        <div className="flex justify-center">
          <button onClick={handleGetInTouch} className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ITConsulting;
