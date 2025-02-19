import React, { useState } from 'react';
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
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Partner Section */}
        <div className="bg-white shadow-lg p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Partner with Us?</h2>
          <ul className="space-y-4 text-gray-700">
            <li><strong>Tailored Solutions</strong>: We provide customized solutions tailored to your business goals.</li>
            <li><strong>Comprehensive Expertise</strong>: Our team of experts in web development, cybersecurity, and more ensures success.</li>
            <li><strong>Scalable Services</strong>: We provide solutions that evolve with your business growth.</li>
            <li><strong>Data Security and Compliance</strong>: We prioritize your data's security and comply with industry standards.</li>
            <li><strong>Agile and Transparent Processes</strong>: We ensure timely delivery and keep you informed at every stage.</li>
            <li><strong>Proactive Innovation</strong>: We anticipate your future needs and recommend improvements to keep you ahead of the competition.</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
          <p className="text-lg text-gray-600 mb-6">Feel free to drop us a line below! We will get in touch with you soon.</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
          {submitStatus && (
            <p className={`mt-4 text-center ${submitStatus.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
              {submitStatus}
            </p>
          )}
        </div>

        {/* Location Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Global Location</h2>
          <div className="w-full h-72 mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7960296849215!2d73.8567438146921!3d18.520430087400558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08993c17f97%3A0xf47e8cccb0de418!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1603130022210!5m2!1sen!2sus"
              width="100%"
              height="100%"
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
