import React from 'react';
import '../../styles/Mainstyles/OurClients.css' // Ensure you have appropriate CSS for styling

const partners = [
  {
    name: 'Google',
    image: 'google.png', // Local image path
  },
  {
    name: 'Databricks',
    image: 'databricks.png', // Local image path
  },
  {
    name: 'Salesforce',
    image: 'Salesforce.png', // Local image path
  },
  {
    name: 'Tech Mahindra',
    image: 'logo-techMahindra.png', // Local image path
  },
  {
    name: 'AWS',
    image: 'aws.png', // Local image path
  },
  {
    name: 'Microsoft',
    image: 'microsoft.png', // Local image path
  },
];

const OurClient = () => {
  return (
    <div className="our-partners-page">
      <h1 className="partners-heading">Our Partners</h1>
      <div className="accent-line"></div>
      <p className="partners-intro">
        We are proud to collaborate with some of the world's most renowned companies to deliver exceptional value and innovative solutions.
      </p>

      <div className="partners-container">
        {partners.map((partner, index) => (
          <div key={index} className="partners-card">
            <img src={partner.image} alt={partner.name} className="partners-image" />
            <h2 className="partners-name">{partner.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
