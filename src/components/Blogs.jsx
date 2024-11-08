import React from 'react';
import '../styles/Blogs.css'; // Importing the CSS file for the Blogs component

const blogs = [
  {
    id: 1,
    title: 'The Future of Web Development',
    summary: 'An overview of the latest trends and technologies in web development.',
    link: '#',
  },
  {
    id: 2,
    title: 'Understanding Quality Assurance',
    summary: 'A deep dive into the importance of QA in the software development lifecycle.',
    link: '#',
  },
  {
    id: 3,
    title: 'Digital Marketing Strategies for 2024',
    summary: 'Explore effective digital marketing strategies for the coming year.',
    link: '#',
  },
  {
    id: 4,
    title: 'IT Consultancy Best Practices',
    summary: 'Key practices to follow for effective IT consultancy services.',
    link: '#',
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1 className="blogs-heading">Our Blogs</h1>
      <div className="blogs-list">
        {blogs.map((blog) => (
          <div className="blog-item" key={blog.id}>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-summary">{blog.summary}</p>
            <a href={blog.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
