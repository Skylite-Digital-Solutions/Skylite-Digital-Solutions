import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCode, FaMobileAlt, FaPlug, FaShieldAlt, FaShoppingCart } from 'react-icons/fa'; // Import relevant icons

const SoftwareDev = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">
          Our Software Development Services
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          At <strong>Skylite Digital Solutions</strong>, we empower businesses with expert Web Development services designed to deliver impactful digital experiences. We specialize in creating fast, responsive, and scalable websites and applications that cater to your unique goals. Leveraging the latest technologies like React, Angular, Vue.js for frontend, and Node.js, Express, and Python for backend, we ensure a seamless, robust, and user-friendly interface across all devices.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-6">Key Features and Expertise in Development</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-blue-600 mb-4">
              <FaCode size={30} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Custom Development</h4>
            <p className="text-gray-600">
              We create web solutions uniquely crafted to reflect your brand identity and meet your specific requirements. From user experience to backend functionality, every detail is designed to enhance your business.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-blue-600 mb-4">
              <FaMobileAlt size={30} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Responsive Design</h4>
            <p className="text-gray-600">
              Our websites are optimized to provide a seamless experience across all device types, ensuring accessibility for all users. This approach improves user engagement and helps retain visitors across platforms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-blue-600 mb-4">
              <FaPlug size={30} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">API Integration</h4>
            <p className="text-gray-600">
              We integrate third-party APIs to add essential features and boost your site's capabilities. This allows your website to interact seamlessly with external services, providing a more dynamic user experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-blue-600 mb-4">
              <FaShoppingCart size={30} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">E-commerce Solutions</h4>
            <p className="text-gray-600">
              Our e-commerce platforms are built to deliver a secure and efficient shopping experience, supporting large transaction volumes with high performance. We design each aspect of the online store for intuitive navigation, simplifying the shopping process from product browsing to final purchase.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="text-blue-600 mb-4">
              <FaShieldAlt size={30} />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Security and Compliance</h4>
            <p className="text-gray-600">
              We implement robust security protocols to safeguard your data and maintain user trust. Our solutions also adhere to industry standards and compliance regulations, ensuring full legal alignment.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-600 mb-8">
            With our extensive experience, dedication to quality, and cutting-edge technology stack, we bring your digital vision to life. Let us help you create an online presence that drives engagement, supports growth, and elevates your business.
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={handleGetInTouch}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDev;
