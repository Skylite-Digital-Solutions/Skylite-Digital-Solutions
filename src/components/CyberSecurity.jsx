import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaLock, FaDatabase, FaNetworkWired, FaVirus, FaExclamationCircle } from 'react-icons/fa'; // Importing cybersecurity icons

const CyberSecurity = () => {
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    navigate('/contact-us');
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Our Cybersecurity Services</h2>
        <p className="text-lg text-gray-700 mb-8">
          At <strong>Skylite Digital Solutions</strong>, we prioritize your security in the ever-evolving cyber landscape. Our Cybersecurity services are designed to protect your business from potential cyber threats, ensuring the confidentiality, integrity, and availability of your data and systems. We use cutting-edge technologies and best practices to safeguard your organization from breaches, attacks, and vulnerabilities. Our expert team leverages solutions like firewalls, encryption, intrusion detection systems, and security audits to provide robust protection for your IT infrastructure.
        </p>

        {/* Cybersecurity Key Features */}
        <ul className="space-y-6 mb-10">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-4">Key Features and Expertise in Cybersecurity</h3>
          <li className="flex items-start space-x-4">
            <FaShieldAlt className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Network Security</strong>
              <p className="text-gray-600">
                Our network security solutions ensure that your internal and external communications are secure, protecting your systems from potential attacks. We use firewalls, intrusion detection/prevention systems, and secure VPNs to safeguard your network infrastructure.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaLock className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Data Encryption</strong>
              <p className="text-gray-600">
                We implement advanced encryption protocols to protect sensitive data from unauthorized access. Whether it's data in transit or at rest, we ensure that your information remains private and secure.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaDatabase className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Data Protection & Backup</strong>
              <p className="text-gray-600">
                Our data protection services include secure backups, disaster recovery, and data loss prevention strategies to ensure that your critical business information is always safe and recoverable in case of an incident.
              </p>
            </div>
          </li>
        </ul>

        {/* Additional Cybersecurity Services */}
        <ul className="space-y-6">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-4">Additional Cybersecurity Expertise</h3>
          <li className="flex items-start space-x-4">
            <FaNetworkWired className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Infrastructure Security</strong>
              <p className="text-gray-600">
                Our infrastructure security services focus on securing your servers, databases, and cloud environments. We perform thorough vulnerability assessments, patch management, and ensure your systems are always up to date and protected from exploits.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaVirus className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Malware Protection</strong>
              <p className="text-gray-600">
                Our proactive approach to malware protection includes real-time scanning, threat intelligence, and endpoint protection to detect and eliminate viruses, ransomware, and other malicious threats before they can damage your systems.
              </p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FaExclamationCircle className="text-4xl text-blue-500" />
            <div>
              <strong className="text-xl text-gray-800">Security Audits & Compliance</strong>
              <p className="text-gray-600">
                We conduct regular security audits to identify weaknesses in your system and ensure compliance with industry standards and regulations, such as GDPR, HIPAA, and PCI-DSS. Our goal is to reduce risks and ensure that your business meets the highest security standards.
              </p>
            </div>
          </li>
        </ul>

        <p className="text-lg text-gray-700 mb-10">
          Our Cybersecurity expertise ensures that your digital infrastructure remains secure and resilient. From data encryption and malware protection to network security and compliance audits, we provide comprehensive protection against all forms of cyber threats. Let us safeguard your systems so you can focus on growing your business with peace of mind.
        </p>

        {/* Button container for centering */}
        <div className="flex justify-center">
          <button onClick={handleGetInTouchClick} className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
