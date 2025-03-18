import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../Firebase/firebaseConfig';
import { Send, Shield, Clock, CheckCircle, XCircle, Loader2 } from 'lucide-react';

const Contacts = () => {
  const db = getFirestore(app);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const contactRef = collection(db, 'contacts');
      await addDoc(contactRef, {
        ...formData,
        timestamp: new Date(),
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error saving contact details:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Secure Communication",
                description: "Your data is encrypted and protected with industry-standard security measures."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Quick Response",
                description: "Our team typically responds within 24 hours to all inquiries."
              },
              {
                icon: <Send className="w-6 h-6" />,
                title: "Direct Contact",
                description: "Get in touch directly with our expert team for personalized solutions."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: 'name', label: 'Name', type: 'text', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'subject', label: 'Subject', type: 'text', required: false },
                  { name: 'message', label: 'Message', type: 'textarea', required: true }
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label 
                      htmlFor={field.name}
                      className={`absolute left-3 transition-transform duration-200 ${
                        focusedField === field.name || formData[field.name]
                          ? '-translate-y-6 text-sm bg-white px-2 text-indigo-600'
                          : 'translate-y-2 text-gray-500'
                      }`}
                    >
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows="4"
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                        required={field.required}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required={field.required}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[var(--color-blue-700)] text-white rounded-lg font-medium
                    hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500/50 
                    transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {submitStatus && (
                <div className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}>
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message sent successfully!
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5" />
                      {submitStatus}
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="relative h-full min-h-[400px] bg-gray-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7960296849215!2d73.8567438146921!3d18.520430087400558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c08993c17f97%3A0xf47e8cccb0de418!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1603130022210!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full filter contrast-125"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Our Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;