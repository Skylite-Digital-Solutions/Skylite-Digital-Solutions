import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const YOUR_BACKEND_API_URL = 'http://localhost:5000/api/contact'; // Replace with your backend API endpoint
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill out all required fields.');
      return;
    }

    try {
      console.log(formData);
      const response = await axios.post(YOUR_BACKEND_API_URL, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      setSubmitStatus('Data submitted successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting data', error);
      setSubmitStatus('Error submitting data');
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partner section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-3xl font-bold text-center mb-8">Why Partner with Us?</h2>
          <ul className="space-y-6">
            <li>
              <strong className="font-semibold">Tailored Solutions</strong>: We recognize that every business is unique. Our approach starts with understanding your specific goals and challenges, allowing us to deliver customized solutions that align perfectly with your vision and business objectives.
            </li>
            <li>
              <strong className="font-semibold">Comprehensive Expertise</strong>: Our team comprises experts in web development, software engineering, cloud solutions, cybersecurity, and digital transformation. With years of industry experience, we ensure your project is handled by skilled professionals committed to your success.
            </li>
            <li>
              <strong className="font-semibold">Scalable Services</strong>: As your business grows, your IT needs will evolve. We provide scalable solutions that adapt to your changing requirements, ensuring you have the resources and support needed at every stage.
            </li>
            <li>
              <strong className="font-semibold">Data Security and Compliance</strong>: Your data’s security is paramount. We implement rigorous security protocols and maintain compliance with industry regulations, safeguarding your business from potential threats and ensuring peace of mind.
            </li>
            <li>
              <strong className="font-semibold">Agile and Transparent Processes</strong>: We adopt an agile approach, allowing flexibility and transparency in every project phase. You stay informed, involved, and can count on timely delivery without compromising quality.
            </li>
            <li>
              <strong className="font-semibold">Proactive Innovation</strong>: As your strategic partner, we anticipate your future needs, exploring opportunities for enhancement and proactively recommending improvements that keep your business at the forefront of your industry.
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-center mb-4">Get In Touch</h3>
          <p className="text-center text-gray-600 mb-4">Feel free to drop us a line below! We would get in touch with you soon.</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                required
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
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                required
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
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
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
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Send Message</button>
            </div>
          </form>

          {submitStatus && (
            <p className="text-center mt-4 text-lg font-medium text-green-600">{submitStatus}</p>
          )}
        </div>

        {/* Location Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold text-center mb-6">Our Global Location</h3>
          <div className="aspect-w-16 aspect-h-9">
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

export default ContactUs;
