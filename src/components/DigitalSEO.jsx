import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPenNib, FaShareAlt, FaChartBar, FaSearch, FaLink, FaCogs } from 'react-icons/fa'; // Importing icons

const DigitalSEO = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact-us');
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Our Services for Digital Marketing and SEO</h2>
        <p className="text-lg text-gray-700 mb-8">
          At <strong>Skylite Digital Solutions</strong>, we specialize in empowering businesses to thrive in the digital landscape through our comprehensive Digital Marketing and SEO services. Our approach is designed to enhance your online presence, drive targeted traffic, and ultimately boost conversions. We leverage powerful tools like Google Analytics, SEMrush, Moz, and Ahrefs to analyze performance, optimize strategies, and ensure your brand stands out in a crowded marketplace.
        </p>

        {/* Digital Marketing section */}
        <ul className="space-y-6 mb-10">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-4">Key Features and Expertise in Digital Marketing</h3>
          <li className="flex items-start space-x-4">
            <FaPenNib className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Content Marketing</strong>
              <p className="text-gray-600">
                We create engaging, high-quality content that resonates with your audience and establishes your brand as an authority in your industry. Our content marketing strategies focus on storytelling and value-driven approaches to enhance user engagement and drive conversions.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaShareAlt className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Social Media Marketing</strong>
              <p className="text-gray-600">
                Harnessing the power of social media platforms, we develop tailored campaigns that foster community engagement and brand loyalty. We utilize tools like Hootsuite and Buffer for effective social media management, ensuring consistent brand messaging across all channels.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaChartBar className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Analytics and Reporting</strong>
              <p className="text-gray-600">
                We believe in data-driven decision-making. Our team uses advanced analytics tools to track performance metrics, analyze user behavior, and provide actionable insights to continuously refine your marketing strategies for optimal results.
              </p>
            </div>
          </li>
        </ul>

        {/* SEO section */}
        <ul className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-4">Expertise in Search Engine Optimization</h3>
          <li className="flex items-start space-x-4">
            <FaSearch className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Search Engine Optimization (SEO)</strong>
              <p className="text-gray-600">
                Our expert team conducts thorough keyword research, on-page optimization, and backlink strategies to elevate your site’s rankings. We focus on optimizing content and website structure to ensure search engines recognize your site as a valuable resource.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaLink className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Link Building</strong>
              <p className="text-gray-600">
                Our link-building strategies focus on acquiring high-quality backlinks from reputable sources, enhancing your website’s authority and improving its search rankings. We employ ethical practices to ensure sustainable results.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaCogs className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Technical and Local SEO</strong>
              <p className="text-gray-600">
                We perform comprehensive technical audits to ensure your website is search engine friendly, optimizing site speed, improving mobile responsiveness, and ensuring proper indexing for a seamless user experience. Additionally, for businesses targeting local customers, our local SEO strategies enhance visibility in local search results by optimizing your Google My Business profile and implementing local keywords to effectively attract nearby customers.
              </p>
            </div>
          </li>
        </ul>

        <p className="text-lg text-gray-700 mb-10">
          Partner with us to boost your digital marketing and SEO initiatives, enabling your business to flourish in an ever-changing online world. Together, we can enhance your online presence and drive meaningful results.
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

export default DigitalSEO;
