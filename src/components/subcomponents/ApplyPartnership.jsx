import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig";
import { FaUser, FaBuilding, FaEnvelope, FaPhone, FaBriefcase, FaComment, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

// Initialize Firestore
const db = getFirestore(app);

const ApplyPartnership = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({...formErrors, [name]: ""});
    }
  };

  // Validate form
  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.company.trim()) errors.company = "Company name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!formData.businessType) errors.businessType = "Please select a business type";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Save data to Firebase Firestore
        await addDoc(collection(db, "partnerships"), {
          ...formData,
          createdAt: new Date()
        });
        
        setSuccessMessage("Thank you! Your application has been submitted successfully.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          businessType: "",
          message: "",
        });
      } catch (error) {
        setSuccessMessage("Error submitting the form. Please try again.");
        console.error("Firestore Error: ", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Form input components
  const FormInput = ({ label, name, type, value, icon, placeholder, options }) => {
    return (
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">{label}</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            {icon}
          </div>
          
          {type === "select" ? (
            <select
              name={name}
              value={value}
              onChange={handleChange}
              className={`w-full p-3 pl-10 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                formErrors[name] ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Business Type</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : type === "textarea" ? (
            <textarea
              name={name}
              value={value}
              onChange={handleChange}
              rows="4"
              className={`w-full p-3 pl-10 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                formErrors[name] ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={placeholder}
            ></textarea>
          ) : (
            <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              className={`w-full p-3 pl-10 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                formErrors[name] ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={placeholder}
            />
          )}
        </div>
        {formErrors[name] && (
          <p className="text-red-500 text-sm mt-1">{formErrors[name]}</p>
        )}
      </div>
    );
  };

  const businessTypes = [
    { value: "Startup", label: "Startup" },
    { value: "Enterprise", label: "Enterprise" },
    { value: "Consultant", label: "Consultant" },
    { value: "Freelancer", label: "Freelancer" },
    { value: "Other", label: "Other" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-6">
          <h1 className="text-3xl font-bold text-center mb-2">
            Partnership Application
          </h1>
          <p className="text-center text-blue-100">
            Join our network of strategic partners and let's grow together
          </p>
        </div>

        {/* Form Content */}
        <div className="p-8">
          {successMessage ? (
            <div className="text-center py-10">
              <div className="flex justify-center mb-4">
                <FaCheckCircle className="text-green-500 text-5xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Application Submitted!
              </h2>
              <p className="text-gray-600 mb-6">{successMessage}</p>
              <button
                onClick={() => setSuccessMessage("")}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <FormInput
                  label="Full Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  icon={<FaUser />}
                  placeholder="Enter your full name"
                />

                <FormInput
                  label="Company Name"
                  name="company"
                  type="text"
                  value={formData.company}
                  icon={<FaBuilding />}
                  placeholder="Enter your company name"
                />

                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  icon={<FaEnvelope />}
                  placeholder="Enter your email"
                />

                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  icon={<FaPhone />}
                  placeholder="Enter your phone number"
                />

                <FormInput
                  label="Business Type"
                  name="businessType"
                  type="select"
                  value={formData.businessType}
                  icon={<FaBriefcase />}
                  options={businessTypes}
                />
              </div>

              <FormInput
                label="Tell us about your partnership interest"
                name="message"
                type="textarea"
                value={formData.message}
                icon={<FaComment />}
                placeholder="Describe your business, goals, and how you'd like to partner with us"
              />

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Submit Application
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyPartnership;