import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="px-4 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-blue-600 mb-4">
          Empowering Your Vision with Our Services
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Skylite Digital Solutions empowers digital transformation and streamlines business operations with cutting-edge AI and Data Engineering solutions, delivered effortlessly through a seamless "as a service" model.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Web Development</h2>
            <p className="text-gray-600 mb-4">
              We create responsive and user-friendly websites that drive engagement and growth. Our team uses the latest technologies to deliver high-quality web solutions.
            </p>
            <button
              onClick={() => navigate('/web-development')}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Explore
            </button>
          </div>

          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quality Assurance</h2>
            <p className="text-gray-600 mb-4">
              Our QA services ensure that your products are bug-free and meet the highest quality standards. We provide comprehensive testing solutions tailored to your needs.
            </p>
            <button
              onClick={() => navigate('/quality-assurance')}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Explore
            </button>
          </div>

          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Digital Marketing & SEO</h2>
            <p className="text-gray-600 mb-4">
              Our digital marketing and SEO services are designed to increase your online visibility and drive traffic to your website. Let us help you reach your target audience effectively.
            </p>
            <button
              onClick={() => navigate('/digital-seo')}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Explore
            </button>
          </div>

          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cyber Security</h2>
            <p className="text-gray-600 mb-4">
              We provide comprehensive cyber security solutions that protect your digital assets and safeguard your business from potential threats and vulnerabilities.
            </p>
            <button
              onClick={() => navigate('/cyber-security')}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Explore
            </button>
          </div>

          <div className="service-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Blogs</h2>
            <p className="text-gray-600 mb-4">
              Explore our insights and expertise through our blog. From tech trends to practical tips, we share knowledge to help you stay informed and make strategic technology decisions.
            </p>
            <button
              onClick={() => navigate('/blogs')}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
