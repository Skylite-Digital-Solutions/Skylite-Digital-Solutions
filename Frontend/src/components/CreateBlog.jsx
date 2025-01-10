import React, { useState } from 'react';
import axios from 'axios';
import '../styles/CreateBlog.css'; // Ensure to create a CSS file for styling

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    author: '',
  });

  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPreview(blog);

    // Send POST request to backend to create a new blog
    try {
      const response = await axios.post('http://localhost:5000/api/blogs', blog);
      console.log('Blog created:', response.data);
      setBlog({ title: '', content: '', author: '' }); // Clear form after submission
      setError('');
    } catch (err) {
      console.error('Error creating blog:', err);
      setError('Error creating blog, please try again.');
    }
  };

  return (
    <div className="create-blog-container">
      <h1>Create a Blog</h1>
      <form className="blog-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Blog Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            placeholder="Enter the blog title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={blog.content}
            onChange={handleChange}
            placeholder="Write your blog content here"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={blog.author}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <button type="submit" className="submit-button">Create Blog</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {preview && (
        <div className="blog-preview">
          <h2>Blog Preview</h2>
          <h3>{preview.title}</h3>
          <p>{preview.content}</p>
          <p>
            <strong>Author: </strong>
            {preview.author}
          </p>
        </div>
      )}
    </div>
  );
};

export default CreateBlog;
