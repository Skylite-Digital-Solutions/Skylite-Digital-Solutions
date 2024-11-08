// src/components/BlogPage.js
import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase/firebase'; // Firebase configuration
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import '../../styles/BlogFirebasestyles/Blogpage.css'; // CSS import

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const q = query(blogsCollection, orderBy('timestamp', 'desc')); // Order by timestamp
        const querySnapshot = await getDocs(q);
        const blogsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogsList);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <h1>Blog Page</h1>
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="blog-post">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>By: {blog.author}</p>
            <p>
              {blog.timestamp
                ? new Date(blog.timestamp.seconds * 1000).toLocaleDateString()
                : 'No date available'}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogPage;
