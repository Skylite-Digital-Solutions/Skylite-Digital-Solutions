import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaLock, FaDatabase, FaNetworkWired, FaVirus, FaExclamationCircle } from 'react-icons/fa'; // Importing cybersecurity icons
import '../styles/CyberSecurity.css';
import '../styles/color.css';

const CyberSecurity = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate('/contact-us');
  };

  return (
    <div className="CyberSecurity">
      <h2>Our Cybersecurity Services</h2>
      <p>
        At <strong>Skylite Digital Solutions</strong>, we prioritize your security in the ever-evolving cyber landscape. Our Cybersecurity services are designed to protect your business from potential cyber threats, ensuring the confidentiality, integrity, and availability of your data and systems. We use cutting-edge technologies and best practices to safeguard your organization from breaches, attacks, and vulnerabilities. Our expert team leverages solutions like firewalls, encryption, intrusion detection systems, and security audits to provide robust protection for your IT infrastructure.
      </p>

      {/* Cybersecurity section */}
      <ul className="keyfeature-list">
        <h3>Key Features and Expertise in Cybersecurity</h3>
        <li>
          <FaShieldAlt className="feature-icon" />
          <strong>Network Security</strong>: Our network security solutions ensure that your internal and external communications are secure, protecting your systems from potential attacks. We use firewalls, intrusion detection/prevention systems, and secure VPNs to safeguard your network infrastructure.
        </li>
        <li>
          <FaLock className="feature-icon" />
          <strong>Data Encryption</strong>: We implement advanced encryption protocols to protect sensitive data from unauthorized access. Whether it's data in transit or at rest, we ensure that your information remains private and secure.
        </li>
        <li>
          <FaDatabase className="feature-icon" />
          <strong>Data Protection & Backup</strong>: Our data protection services include secure backups, disaster recovery, and data loss prevention strategies to ensure that your critical business information is always safe and recoverable in case of an incident.
        </li>
      </ul>

      {/* Additional Cybersecurity Services */}
      <ul className="keyfeature-list">
        <h3>Additional Cybersecurity Expertise</h3>
        <li>
          <FaNetworkWired className="feature-icon" />
          <strong>Infrastructure Security</strong>: Our infrastructure security services focus on securing your servers, databases, and cloud environments. We perform thorough vulnerability assessments, patch management, and ensure your systems are always up to date and protected from exploits.
        </li>
        <li>
          <FaVirus className="feature-icon" />
          <strong>Malware Protection</strong>: Our proactive approach to malware protection includes real-time scanning, threat intelligence, and endpoint protection to detect and eliminate viruses, ransomware, and other malicious threats before they can damage your systems.
        </li>
        <li>
          <FaExclamationCircle className="feature-icon" />
          <strong>Security Audits & Compliance</strong>: We conduct regular security audits to identify weaknesses in your system and ensure compliance with industry standards and regulations, such as GDPR, HIPAA, and PCI-DSS. Our goal is to reduce risks and ensure that your business meets the highest security standards.
        </li>
      </ul>
        <p>
          Our Cybersecurity expertise ensures that your digital infrastructure remains secure and resilient. From data encryption and malware protection to network security and compliance audits, we provide comprehensive protection against all forms of cyber threats. Let us safeguard your systems so you can focus on growing your business with peace of mind.
        </p>

      {/* Button container for centering */}
      <div className="button-container">
        <button onClick={handleGetInTouch} className="get-in-touch-button">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default CyberSecurity;
