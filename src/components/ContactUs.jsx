import React, { useState } from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  // Form state for each field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for handling submission feedback
  const [submitStatus, setSubmitStatus] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill out all required fields.');
      return;
    }

    // Mock form submission process
    setSubmitStatus('Submitting...');
    setTimeout(() => {
      console.log('Form Data Submitted:', formData);
      setSubmitStatus('Thank you for your message!');
      
      // Reset form fields after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="contact-us-container">
      <h3 className="contact-us-heading">Contact Us</h3>
      <p className="contact-us-description">
        We'd love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
      </p>
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

      {/* Display submission status */}
      {submitStatus && <p className="submit-status">{submitStatus}</p>}
    </div>
  );
};

export default ContactUs;
