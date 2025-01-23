import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Quality.css';
import '../styles/color.css';
import { 
  FaBusinessTime, FaCogs, FaMobileAlt, FaCloud, FaDatabase, FaMicrochip, 
  FaChartBar, FaRobot, FaCheckCircle, FaShieldAlt, FaUniversalAccess 
} from 'react-icons/fa'; // Example icons

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
      description:
        'Our quality assurance services go beyond ensuring app functionality. We focus on aligning entire business processes with desired outcomes, creating a comprehensive transformation strategy that guarantees optimal performance across the board.',
      items: [
        { icon: <FaCogs />, label: 'Business Process Testing' },
        { icon: <FaCheckCircle />, label: 'User Acceptance Testing' },
        { icon: <FaBusinessTime />, label: 'Package Testing' },
      ],
    },
    {
      title: 'Harnessing Advanced Technologies for Success',
      description:
        'In an era of rapid technological evolution, staying ahead requires the best tools and systems. We combine traditional and emerging technologies to create seamless solutions that keep your business competitive and agile in a fast-paced market.',
      items: [
        { icon: <FaMobileAlt />, label: 'Mobility Testing' },
        { icon: <FaCloud />, label: 'Cloud and Infrastructure Testing' },
        { icon: <FaDatabase />, label: 'Big Data Testing' },
        { icon: <FaMicrochip />, label: 'API/ Service/ Microservices Testing' },
      ],
    },
    {
      title: 'Intelligent Assurance for a Smarter Future',
      description:
        'We integrate intelligence and analytics into our QA processes, fostering innovation and driving continuous improvement. This approach ensures your business remains dynamic, efficient, and ready to tackle future challenges.',
      items: [
        { icon: <FaChartBar />, label: 'Quality Insights' },
        { icon: <FaCheckCircle />, label: 'Automated Business Process Testing' },
        { icon: <FaRobot />, label: 'DevOps/ Agile Testing' },
        { icon: <FaRobot />, label: 'BOT Assisted Testing' },
      ],
    },
    {
      title: 'Enhancing Customer Experience with QA',
      description:
        'We prioritize enhancing customer satisfaction by focusing on performance, accessibility, usability, and security. Our QA solutions are designed to deliver exceptional user experiences that foster trust and loyalty.',
      items: [
        { icon: <FaChartBar />, label: 'Performance Testing' },
        { icon: <FaUniversalAccess />, label: 'Accessibility Testing' },
        { icon: <FaShieldAlt />, label: 'Security Testing' },
      ],
    },
    {
      title: 'Strategic and Consistent Assurance',
      description:
        'By implementing advanced strategies, we proactively address both current and potential challenges. This forward-thinking approach ensures predictability, scalability, and transparency, empowering your business to remain robust, cost-efficient, and future-ready.',
      items: [
        { icon: <FaCogs />, label: 'Flexible Pricing Models' },
        { icon: <FaCheckCircle />, label: 'Transparency' },
        { icon: <FaChartBar />, label: 'Better Reporting' },
      ],
    },
  ];

  return (
    <div>
    <div className="quality-page">
      <div className="testing-strategies">
        <h1>Latest Testing Strategies</h1>
        <ul>
          {testingStrategies.map((strategy, index) => (
            <li key={index}>{strategy}</li>
          ))}
        </ul>
      </div>
      {sections.map((section, index) => (
        <div key={index} className="quality-section">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <ul className="quality-list">
            {section.items.map((item, idx) => (
              <li key={idx} className="quality-item">
                <span className="quality-icon">{item.icon}</span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <p>
              Partner with us to transform your business and achieve your goals.{' '}
              <Link to="/contact-us">Contact Us</Link>
              {' '}
              today for more information!
            </p>
            </div>
  );
};

export default Quality;
