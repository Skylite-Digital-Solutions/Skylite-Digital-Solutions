import React from 'react';

const Leadership = () => {
  const leadership = [
    {
      name: 'Shalini Saurabh',
      title: 'CEO',
      image: '/CEO.png',
      description:
        'Shalini Saurabh is the visionary leader of Skylite Digital, ensuring that the company stays ahead of industry trends and always strives for excellence.',
    },
    {
      name: 'A D Saurabh',
      title: 'CTO',
      image: '/CTO.png',
      description:
        'A D Saurabh leads our tech team, driving innovation and ensuring that we always deliver cutting-edge technology solutions to our clients.',
    },
    {
      name: 'Rahul Kumar',
      title: 'Technical Lead',
      image: 'https://via.placeholder.com/150',
      description:
        'Rahul is responsible for managing Skylite Digital’s day-to-day operations, ensuring smooth execution across all departments.',
    },
    {
      name: 'Richika Singh',
      title: 'Technical Lead',
      image: 'https://via.placeholder.com/150',
      description:
        'Richika is responsible for managing Skylite Digital’s day-to-day operations, ensuring smooth execution across all departments.',
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-10">Meet Our Leadership Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {leadership.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <h4 className="text-md text-gray-500 mb-4">{member.title}</h4>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
