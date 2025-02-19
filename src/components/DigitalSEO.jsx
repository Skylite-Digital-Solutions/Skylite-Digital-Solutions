import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaPenNib, 
  FaShareAlt, 
  FaChartBar, 
  FaSearch, 
  FaLink, 
  FaCogs,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

const DigitalSEO = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState(null);

  const handleGetInTouch = () => {
    navigate('/contact-us');
  };

  const ServiceCard = ({ icon: Icon, title, description, index }) => (
    <div
      className="relative bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setHoveredService(index)}
      onMouseLeave={() => setHoveredService(null)}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Icon className={`text-4xl ${hoveredService === index ? 'text-blue-600' : 'text-blue-500'} transition-colors duration-300`} />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-gray-800">{title}</h4>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            Digital Marketing & SEO Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Empower your business with <span className="text-blue-600 font-semibold">Skylite Digital Solutions</span>. 
            We drive growth through strategic digital marketing and advanced SEO techniques.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { label: 'Successful Projects', value: '500+' },
            { label: 'Client Satisfaction', value: '98%' },
            { label: 'ROI Increase', value: '150%' }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Digital Marketing Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Digital Marketing Excellence
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Transform your online presence with our comprehensive digital marketing solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={FaPenNib}
              title="Content Marketing"
              description="Create engaging, value-driven content that establishes your brand as an industry authority."
              index={0}
            />
            <ServiceCard
              icon={FaShareAlt}
              title="Social Media Marketing"
              description="Build strong community engagement and brand loyalty across social platforms."
              index={1}
            />
            <ServiceCard
              icon={FaChartBar}
              title="Analytics & Reporting"
              description="Make data-driven decisions with advanced analytics and actionable insights."
              index={2}
            />
          </div>
        </section>

        {/* SEO Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            SEO Strategies
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Boost your search engine rankings with our proven SEO techniques
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={FaSearch}
              title="Search Engine Optimization"
              description="Elevate your site's rankings through thorough keyword research and optimization."
              index={3}
            />
            <ServiceCard
              icon={FaLink}
              title="Link Building"
              description="Acquire high-quality backlinks to enhance your website's authority."
              index={4}
            />
            <ServiceCard
              icon={FaCogs}
              title="Technical & Local SEO"
              description="Optimize your site's technical aspects and local presence for maximum visibility."
              index={5}
            />
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Grow Your Digital Presence?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with us to transform your digital marketing and SEO initiatives.
            Let's create meaningful results together.
          </p>
          <button
            onClick={handleGetInTouch}
            className="inline-flex items-center gap-2 bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-all duration-300 group"
          >
            Get Started Today
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalSEO;