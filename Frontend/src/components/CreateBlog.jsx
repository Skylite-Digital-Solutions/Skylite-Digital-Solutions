import React, { useState } from 'react';
import './CreateBlog.css'; // Ensure to create a CSS file for styling

const CreateBlog = () => {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    author: '',
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreview(blog);
    setBlog({ title: '', content: '', author: '' }); // Clear form after submission
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
