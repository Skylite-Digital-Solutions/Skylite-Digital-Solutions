import React from 'react';
import '../styles/color.css';
import '../styles/Leadership.css';

const Leadership = () => {
  const leadership = [
    {
      name: 'Shalini Saurabh',
      title: 'CEO',
      image: 'https://via.placeholder.com/150',
      description:
        'Shalini Saurabh is the visionary leader of Skylite Digital, ensuring that the company stays ahead of industry trends and always strives for excellence.',
    },
    {
      name: 'A D Saurabh',
      title: 'CTO',
      image: 'https://via.placeholder.com/150',
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
      name: 'Nikhlesh Singh',
      title: 'Technical Lead',
      image: 'https://via.placeholder.com/150',
      description:
        'Nikhlesh is responsible for managing Skylite Digital’s day-to-day operations, ensuring smooth execution across all departments.',
    },
  ];

  return (
    <section className="leadership-container">
      <h2>Meet Our Leadership Team</h2>
      <div className="leadership">
        {leadership.map((member, index) => (
          <div key={index} className="leadership-member">
            <img src={member.image} alt={member.name} className="leadership-image" />
            <div className="leadership-info">
              <h2>{member.name}</h2>
              <h3>{member.title}</h3>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
