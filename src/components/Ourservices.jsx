import React from 'react';
import { FaCode, FaMobileAlt, FaShieldAlt, FaChartLine, FaPlug, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Custom Development',
    description:
      'We craft tailored software solutions to meet your unique business requirements, ensuring scalability and innovation.',
    icon: <FaCode />,
    color: 'blue',
    features: ['Scalable Architecture', 'Custom Business Logic', 'Enterprise Solutions']
  },
  {
    title: 'Responsive Design',
    description:
      'Delivering seamless user experiences across devices with modern, adaptive designs that enhance engagement.',
    icon: <FaMobileAlt />,
    color: 'purple',
    features: ['Mobile-First Approach', 'Cross-Device Compatibility', 'Intuitive Interfaces']
  },
  {
    title: 'Quality Assurance',
    description:
      'Ensuring flawless functionality and reliability with rigorous testing methodologies for your software solutions.',
    icon: <FaShieldAlt />,
    color: 'green',
    features: ['Automated Testing', 'Performance Optimization', 'Security Validation']
  },
  {
    title: 'Digital Marketing & SEO',
    description:
      'Boost your online presence with our strategic marketing and SEO services to drive growth and visibility.',
    icon: <FaChartLine />,
    color: 'orange',
    features: ['SEO Optimization', 'Content Strategy', 'Analytics & Reporting']
  },
  {
    title: 'API Integration',
    description:
      'Streamline your operations with efficient API integrations that connect your systems and applications.',
    icon: <FaPlug />,
    color: 'indigo',
    features: ['Third-party Integrations', 'Custom API Development', 'Data Synchronization']
  },
];

const Ourservices = () => {
  // Helper function to get color classes
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        hover: 'hover:bg-blue-100',
        gradient: 'from-blue-400 to-blue-600'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        hover: 'hover:bg-purple-100',
        gradient: 'from-purple-400 to-purple-600'
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-600',
        hover: 'hover:bg-green-100',
        gradient: 'from-green-400 to-green-600'
      },
      orange: {
        bg: 'bg-orange-50',
        text: 'text-orange-600',
        hover: 'hover:bg-orange-100',
        gradient: 'from-orange-400 to-orange-600'
      },
      indigo: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-600',
        hover: 'hover:bg-indigo-100',
        gradient: 'from-indigo-400 to-indigo-600'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovative Solutions for Digital Success</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Empowering businesses with cutting-edge technology services tailored to drive growth and transformation.
          </p>
          <Link 
            to="/contact-us" 
            className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-md text-blue-800 bg-white hover:bg-blue-50 shadow-lg transition-all duration-300"
          >
            Explore Our Solutions <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Know More About Our Services</h2>
            <p className="text-lg text-gray-700">
              Our services are designed to empower your business in the digital era. From development to deployment, 
              we ensure excellence at every step, leveraging the latest technologies to deliver innovative and tailored solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              
              return (
                <div
                  key={index}
                  className={`${colorClasses.bg} rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group`}
                >
                  <div className={`h-2 bg-gradient-to-r ${colorClasses.gradient}`}></div>
                  
                  <div className="p-8">
                    <div className={`${colorClasses.text} text-5xl mb-6 transform transition-all duration-300 group-hover:scale-110`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <FaCheckCircle className={`${colorClasses.text} mt-1 mr-2 flex-shrink-0`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`inline-flex items-center font-medium ${colorClasses.text} transition-all duration-300 group-hover:translate-x-2`}
                    >
                      Learn more <FaArrowRight className="ml-2 text-sm" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Testimonial/Stats Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our Services?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white/20 rounded-lg p-3 mr-4">
                      <div className="text-2xl font-bold">95%</div>
                      <div className="text-sm">Client Satisfaction</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3 mr-4">
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-sm">Projects Completed</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm">Industry Experts</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What Our Clients Say</h3>
                <blockquote className="italic text-gray-600 border-l-4 border-blue-500 pl-4 mb-6">
                  "Their team delivered exceptional results that exceeded our expectations. The custom solution they built has transformed our business operations and significantly improved our efficiency."
                </blockquote>
                <div className="font-medium text-gray-800">Sarah Johnson</div>
                <div className="text-sm text-gray-500">CTO, TechInnovate Inc.</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl text-white p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Partner with us to leverage our expertise and innovative solutions that will help you achieve your business goals.
            </p>
            <Link 
              to="/contact-us" 
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg transition-all duration-300"
            >
              Get in Touch Today <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;