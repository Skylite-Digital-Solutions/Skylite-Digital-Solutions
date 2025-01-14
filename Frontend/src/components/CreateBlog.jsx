import React, { useState } from "react";
import "../styles/CreateBlog.css"; // Ensure to create a CSS file for styling
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../Firebase/firebaseConfig'; // assuming firebase.js file to initialize Firebase

const CreateBlog = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogBodySections, setBlogBodySections] = useState(['']); // Initialize with one section
  const [category, setCategory] = useState(''); // New state for category
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const db = getFirestore(app);

  const handleBodyChange = (index, value) => {
    const newBodySections = [...blogBodySections];
    newBodySections[index] = value;
    setBlogBodySections(newBodySections);
  };

  const addBodySection = () => {
    if (blogBodySections.length < 3) {
      setBlogBodySections([...blogBodySections, '']); // Add new section if less than 3
    }
  };

  const removeBodySection = (index) => {
    if (blogBodySections.length > 1) {
      const newBodySections = [...blogBodySections];
      newBodySections.splice(index, 1); // Remove section
      setBlogBodySections(newBodySections);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      setError('Please select a category.');
      return;
    }

    setLoading(true);
    try {
      const blogRef = collection(db, 'blogs');
      await addDoc(blogRef, {
        title: blogTitle,
        body: blogBodySections,
        category: category, // Include category in the Firestore document
      });

      setBlogTitle('');
      setBlogBodySections(['']);
      setCategory(''); // Reset category after successful submission
      setError('');
      alert('Blog created successfully!');
    } catch (error) {
      console.error('Error creating blog:', error);
      setError('There was an error creating the blog.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-blog">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Blog Title</label>
          <input
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Blog Body</label>
          {blogBodySections.map((section, index) => (
            <div key={index} className="blog-body-section">
              <textarea
                value={section}
                onChange={(e) => handleBodyChange(index, e.target.value)}
                rows="5"
                required
              />
              <div className="add-remove-buttons">
                <button
                  type="button"
                  onClick={() => removeBodySection(index)}
                  disabled={blogBodySections.length <= 1} // Prevent removal if there's only one section
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={addBodySection}
                  disabled={blogBodySections.length >= 3}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="The Future of Web Development">The Future of Web Development</option>
            <option value="Digital Marketing Strategies">Digital Marketing</option>
            <option value="Expert Interviews in Tech Industry">Business</option>
            <option value="IT Consultancy Best Practices">IT Consultancy</option>
            <option value="Technology Trends">Technology Trends</option>
            <option value="Threats of Cyber Security">Cyber Security</option>
            <option value="Understanding Quality Assurance">Quality Assurance</option>
          </select>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Creating Blog...' : 'Create Blog'}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
