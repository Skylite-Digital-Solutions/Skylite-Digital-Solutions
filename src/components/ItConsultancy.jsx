import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaCode, 
  FaMobile, 
  FaLock, 
  FaShoppingCart, 
  FaPlug,
  FaChevronRight,
  FaRocket,
  FaCog,
  FaUserTie
} from 'react-icons/fa';

const ITConsulting = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('development');

  const services = {
    development: [
      {
        icon: <FaCode />,
        title: "Custom Development",
        description: "Uniquely crafted web solutions that reflect your brand identity and meet specific requirements.",
        features: ["Tailored Solutions", "Scalable Architecture", "Modern Tech Stack"]
      },
      {
        icon: <FaMobile />,
        title: "Responsive Design",
        description: "Seamless experience across all device types, ensuring accessibility and user engagement.",
        features: ["Mobile-First Design", "Cross-Platform Compatibility", "Intuitive Navigation"]
      },
      {
        icon: <FaPlug />,
        title: "API Integration",
        description: "Seamless integration with third-party APIs to enhance your site's capabilities.",
        features: ["RESTful APIs", "Real-time Updates", "External Service Integration"]
      }
    ],
    ecommerce: [
      {
        icon: <FaShoppingCart />,
        title: "E-commerce Solutions",
        description: "Secure and efficient shopping platforms built for high-volume transactions.",
        features: ["Payment Gateway Integration", "Inventory Management", "Order Processing"]
      },
      {
        icon: <FaLock />,
        title: "Security & Compliance",
        description: "Robust security protocols and compliance measures to protect your business.",
        features: ["SSL Implementation", "Data Encryption", "GDPR Compliance"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert IT Consultancy Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Empowering businesses with cutting-edge technology solutions
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => navigate('/contact-us')} 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                Get Started
              </button>
              <button 
                onClick={() => navigate('/portfolio')}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <FaRocket className="text-3xl text-blue-500" />, stat: "10+", label: "Years Experience" },
            { icon: <FaCog className="text-3xl text-blue-500" />, stat: "200+", label: "Projects Completed" },
            { icon: <FaUserTie className="text-3xl text-blue-500" />, stat: "95%", label: "Client Satisfaction" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              {item.icon}
              <div className="text-3xl font-bold text-gray-800 mt-2">{item.stat}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Services Tabs */}
        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('development')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'development' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Development Services
            </button>
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'ecommerce' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              E-commerce Solutions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services[activeTab].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FaChevronRight className="text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Let's discuss how our IT consulting services can help you achieve your business goals.
          </p>
          <button
            onClick={() => navigate('/contact-us')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ITConsulting;