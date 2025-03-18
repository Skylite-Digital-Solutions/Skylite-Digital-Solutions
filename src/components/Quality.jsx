import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBusinessTime, FaCogs, FaMobileAlt, FaCloud, FaDatabase, FaMicrochip, 
  FaChartBar, FaRobot, FaCheckCircle, FaShieldAlt, FaUniversalAccess,
  FaArrowRight, FaLightbulb, FaChartLine
} from 'react-icons/fa';

const Quality = () => {
  const testingStrategies = [
    'Latest Testing Strategies: Our QA team utilizes cutting-edge testing methodologies to maintain top-tier software standards.',
    'Advanced Technologies: We leverage the latest tools and technologies to deliver superior testing outcomes.',
    'Reliability: Every product undergoes rigorous testing to ensure consistent and dependable performance.',
    'Functionality: We validate all software features to ensure they work flawlessly across various environments.',
    'Seamless User Experience: Our QA process focuses on delivering intuitive and enjoyable user interactions.',
  ];

  const sections = [
    {
      title: 'Transforming Business Outcomes with QA',
      icon: <FaChartLine className="text-blue-600 text-4xl mb-4" />,
      description:
        'Our quality assurance services go beyond ensuring app functionality. We focus on aligning entire business processes with desired outcomes, creating a comprehensive transformation strategy that guarantees optimal performance across the board.',
      items: [
        { icon: <FaCogs />, label: 'Business Process Testing' },
        { icon: <FaCheckCircle />, label: 'User Acceptance Testing' },
        { icon: <FaBusinessTime />, label: 'Package Testing' },
      ],
      background: 'bg-blue-50',
    },
    {
      title: 'Harnessing Advanced Technologies for Success',
      icon: <FaMicrochip className="text-purple-600 text-4xl mb-4" />,
      description:
        'In an era of rapid technological evolution, staying ahead requires the best tools and systems. We combine traditional and emerging technologies to create seamless solutions that keep your business competitive and agile in a fast-paced market.',
      items: [
        { icon: <FaMobileAlt />, label: 'Mobility Testing' },
        { icon: <FaCloud />, label: 'Cloud and Infrastructure Testing' },
        { icon: <FaDatabase />, label: 'Big Data Testing' },
        { icon: <FaMicrochip />, label: 'API/ Service/ Microservices Testing' },
      ],
      background: 'bg-purple-50',
    },
    {
      title: 'Intelligent Assurance for a Smarter Future',
      icon: <FaLightbulb className="text-amber-500 text-4xl mb-4" />,
      description:
        'We integrate intelligence and analytics into our QA processes, fostering innovation and driving continuous improvement. This approach ensures your business remains dynamic, efficient, and ready to tackle future challenges.',
      items: [
        { icon: <FaChartBar />, label: 'Quality Insights' },
        { icon: <FaCheckCircle />, label: 'Automated Business Process Testing' },
        { icon: <FaRobot />, label: 'DevOps/ Agile Testing' },
        { icon: <FaRobot />, label: 'BOT Assisted Testing' },
      ],
      background: 'bg-amber-50',
    },
    {
      title: 'Enhancing Customer Experience with QA',
      icon: <FaUniversalAccess className="text-green-600 text-4xl mb-4" />,
      description:
        'We prioritize enhancing customer satisfaction by focusing on performance, accessibility, usability, and security. Our QA solutions are designed to deliver exceptional user experiences that foster trust and loyalty.',
      items: [
        { icon: <FaChartBar />, label: 'Performance Testing' },
        { icon: <FaUniversalAccess />, label: 'Accessibility Testing' },
        { icon: <FaShieldAlt />, label: 'Security Testing' },
      ],
      background: 'bg-green-50',
    },
    {
      title: 'Strategic and Consistent Assurance',
      icon: <FaBusinessTime className="text-indigo-600 text-4xl mb-4" />,
      description:
        'By implementing advanced strategies, we proactively address both current and potential challenges. This forward-thinking approach ensures predictability, scalability, and transparency, empowering your business to remain robust, cost-efficient, and future-ready.',
      items: [
        { icon: <FaCogs />, label: 'Flexible Pricing Models' },
        { icon: <FaCheckCircle />, label: 'Transparency' },
        { icon: <FaChartBar />, label: 'Better Reporting' },
      ],
      background: 'bg-indigo-50',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quality Assurance Excellence</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Elevating your business with strategic quality assurance solutions that drive growth, efficiency, and innovation.
          </p>
        </div>
      </div>

      {/* Testing Strategies Card */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center">
                <FaCheckCircle className="mr-3" /> Latest Testing Strategies
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testingStrategies.map((strategy, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{strategy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {sections.map((section, index) => (
              <div key={index} className={`quality-section rounded-xl overflow-hidden shadow-lg ${section.background} transition-all duration-300 hover:shadow-xl`}>
                <div className="p-8">
                  <div className="flex flex-col items-center text-center mb-8">
                    {section.icon}
                    <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                    <p className="text-lg text-gray-700 max-w-3xl">{section.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="bg-white p-6 rounded-lg shadow flex items-center space-x-4 transition-all duration-300 hover:shadow-md hover:translate-y-1"
                      >
                        <span className="text-2xl text-blue-600">{item.icon}</span>
                        <span className="font-medium text-gray-800">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Quality Assurance?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Partner with us to elevate your business with strategic quality assurance solutions that drive growth, efficiency, and innovation.
          </p>
          <Link 
            to="/contact-us" 
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Contact Our Experts <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quality;