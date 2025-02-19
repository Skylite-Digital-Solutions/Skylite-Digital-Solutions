import React from 'react';

const partners = [
  { name: 'Google', image: '/google.png' },
  { name: 'Databricks', image: '/Databricks_Logo.png' },
  { name: 'Salesforce', image: '/Salesforce.png' },
  { name: 'Simplilearn', image: '/Simplilearn_Logo-1.jpg' },
  { name: 'AWS', image: '/AWS.png' },
  { name: 'Microsoft', image: '/Microsoft.png' },
];

const OurClient = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Our Partners</h1>
        <div className="w-32 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-center text-gray-700 mb-8">
          We are proud to collaborate with some of the world's most renowned companies to deliver exceptional value and innovative solutions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="w-24 h-24 mb-4 object-contain"
              />
              <h2 className="text-xl font-semibold text-gray-800">{partner.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClient;
