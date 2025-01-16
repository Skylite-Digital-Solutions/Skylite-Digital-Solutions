import React, { useState } from 'react';
import '../styles/ContactUs.css';
import '../styles/color.css';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../Firebase/firebaseConfig'; // Ensure Firebase is configured in this file

const Contacts = () => {
  const db = getFirestore(app); // Initialize Firestore
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill out all required fields.');
      return;
    }

    try {
      // Save the contact details to Firestore
      const contactRef = collection(db, 'contacts');
      await addDoc(contactRef, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'No subject', // Default subject if not provided
        message: formData.message,
        timestamp: new Date(), // Optional: Add a timestamp
      });

      setSubmitStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error saving contact details:', error);
      setSubmitStatus('An error occurred while sending your message. Please try again.');
    }
  };

  return (
    <div className="Background-container">
      <div className="background-container-top">
        <div className="Partner-container-main">
          <ul className="Partner-container">
            <h2>Why Partner with Us?</h2>
          <li>
            <strong>Tailored Solutions</strong>: We recognize that every business is unique. Our approach starts with understanding 
            your specific goals and challenges, allowing us to deliver customized solutions that align perfectly with your vision and business objectives.
          </li>
          <li>
            <strong>Comprehensive Expertise</strong>: Our team comprises experts in web development, software engineering, cloud 
            solutions, cybersecurity, and digital transformation. With years of industry experience, we ensure your project is handled by skilled professionals committed to your success.
          </li>
          <li>
            <strong>Scalable Services</strong>: As your business grows, your IT needs will evolve. We provide scalable solutions that adapt 
            to your changing requirements, ensuring you have the resources and support needed at every stage.
          </li>
          <li>
            <strong>Data Security and Compliance</strong>: Your data’s security is paramount. We implement rigorous security protocols and 
            maintain compliance with industry regulations, safeguarding your business from potential threats and ensuring peace of mind.
          </li>
          <li>
            <strong>Agile and Transparent Processes</strong>: We adopt an agile approach, allowing flexibility and transparency in every 
            project phase. You stay informed, involved, and can count on timely delivery without compromising quality.
          </li>
          <li>
            <strong>Proactive Innovation</strong>: As your strategic partner, we anticipate your future needs, exploring opportunities 
            for enhancement and proactively recommending improvements that keep your business at the forefront of your industry.
          </li>
          </ul>
        </div>

        <div className="contact-us-container">
          <h3 className="contact-us-heading">Get In Touch</h3>
          <p className="contact-us-description">Feel free to drop us a line below!</p>
          <p className="contact-us-description-1">We would get in touch with you soon.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          {submitStatus && <p className="submit-status">{submitStatus}</p>}
        </div>
      </div>

      <div className="location">
        <div className="global-location-container">
          <h2 className="global-location-heading">Our Global Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7960296849215!2d73.8567438146921!3d18.520430087400558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08993c17f97%3A0xf47e8cccb0de418!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1603130022210!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our Global Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
