// src/components/Blogfirebase/BlogPostForm.js

import React, { useState } from 'react';
import { db } from '../../Firebase/firebase'; // Adjusted Firebase path
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import '../../styles/BlogFirebasestyles/BlogPostForm.css'; // Path for CSS

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'blogs'), {
        title,
        content,
        author,
        timestamp: serverTimestamp(),
      });
      alert('Blog Post Created Successfully');
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      alert('Error creating blog post:', error.message);
    }
  };

  return (
    <div className="create-blog">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
};

export default BlogPostForm;
