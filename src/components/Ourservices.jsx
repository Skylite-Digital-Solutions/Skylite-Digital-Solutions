import React from 'react';
import { FaCode, FaMobileAlt, FaShieldAlt, FaChartLine, FaPlug } from 'react-icons/fa'; // Example icons
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Custom Development',
    description:
      'We craft tailored software solutions to meet your unique business requirements, ensuring scalability and innovation.',
    icon: <FaCode />,
  },
  {
    title: 'Responsive Design',
    description:
      'Delivering seamless user experiences across devices with modern, adaptive designs that enhance engagement.',
    icon: <FaMobileAlt />,
  },
  {
    title: 'Quality Assurance',
    description:
      'Ensuring flawless functionality and reliability with rigorous testing methodologies for your software solutions.',
    icon: <FaShieldAlt />,
  },
  {
    title: 'Digital Marketing & SEO',
    description:
      'Boost your online presence with our strategic marketing and SEO services to drive growth and visibility.',
    icon: <FaChartLine />,
  },
  {
    title: 'API Integration',
    description:
      'Streamline your operations with efficient API integrations that connect your systems and applications.',
    icon: <FaPlug />,
  },
];

const Ourservices = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Know More About Our Services</h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Our services are designed to empower your business in the digital era. From development to deployment, we ensure excellence at every step, leveraging the latest technologies to deliver innovative and tailored solutions.
        </p>
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Our Key Areas of Expertise</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-gray-700 mt-8">
          Partner with us to transform your business and achieve your goals.{' '}
          <Link to="/contact-us" className="text-blue-600 hover:text-blue-800 font-semibold">
            Contact Us
          </Link>{' '}
          today for more information!
        </p>
      </div>
    </div>
  );
};

export default Ourservices;
