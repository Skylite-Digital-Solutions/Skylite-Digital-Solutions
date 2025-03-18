import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaLock, 
  FaDatabase, 
  FaNetworkWired, 
  FaVirus, 
  FaExclamationCircle,
  FaArrowRight
} from 'react-icons/fa';

const CyberSecurity = () => {
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    navigate('/contact-us');
  };

  const securityFeatures = [
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500" />,
      title: "Network Security",
      description: "Our network security solutions ensure that your internal and external communications are secure, protecting your systems from potential attacks. We use firewalls, intrusion detection/prevention systems, and secure VPNs to safeguard your network infrastructure."
    },
    {
      icon: <FaLock className="text-4xl text-blue-500" />,
      title: "Data Encryption",
      description: "We implement advanced encryption protocols to protect sensitive data from unauthorized access. Whether it's data in transit or at rest, we ensure that your information remains private and secure."
    },
    {
      icon: <FaDatabase className="text-4xl text-blue-500" />,
      title: "Data Protection & Backup",
      description: "Our data protection services include secure backups, disaster recovery, and data loss prevention strategies to ensure that your critical business information is always safe and recoverable in case of an incident."
    }
  ];

  const additionalServices = [
    {
      icon: <FaNetworkWired className="text-4xl text-blue-500" />,
      title: "Infrastructure Security",
      description: "Our infrastructure security services focus on securing your servers, databases, and cloud environments. We perform thorough vulnerability assessments, patch management, and ensure your systems are always up to date and protected from exploits."
    },
    {
      icon: <FaVirus className="text-4xl text-blue-500" />,
      title: "Malware Protection",
      description: "Our proactive approach to malware protection includes real-time scanning, threat intelligence, and endpoint protection to detect and eliminate viruses, ransomware, and other malicious threats before they can damage your systems."
    },
    {
      icon: <FaExclamationCircle className="text-4xl text-blue-500" />,
      title: "Security Audits & Compliance",
      description: "We conduct regular security audits to identify weaknesses in your system and ensure compliance with industry standards and regulations, such as GDPR, HIPAA, and PCI-DSS. Our goal is to reduce risks and ensure that your business meets the highest security standards."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">
            Our Cybersecurity Services
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              At <span className="font-semibold text-blue-600">Skylite Digital Solutions</span>, 
              we prioritize your security in the ever-evolving cyber landscape. 
              Our comprehensive cybersecurity services protect your business from 
              today's most sophisticated threats.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-10">
            Key Features and Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h4 className="text-xl font-semibold text-gray-800 ml-4">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-gray-600 flex-grow">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-10">
            Additional Cybersecurity Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h4 className="text-xl font-semibold text-gray-800 ml-4">
                    {service.title}
                  </h4>
                </div>
                <p className="text-gray-600 flex-grow">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="bg-blue-50 rounded-xl p-8 mb-12 shadow-md">
          <p className="text-lg text-gray-700 leading-relaxed">
            Our Cybersecurity expertise ensures that your digital infrastructure remains secure and resilient. 
            From data encryption and malware protection to network security and compliance audits, 
            we provide comprehensive protection against all forms of cyber threats. 
            Let us safeguard your systems so you can focus on growing your business with peace of mind.
          </p>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center">
          <button 
            onClick={handleGetInTouchClick} 
            className="bg-blue-600 text-white py-4 px-8 rounded-lg shadow-md hover:bg-blue-700 
                      flex items-center space-x-2 transition duration-300 transform hover:scale-105"
          >
            <span className="font-medium text-lg">Schedule Consultation</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;