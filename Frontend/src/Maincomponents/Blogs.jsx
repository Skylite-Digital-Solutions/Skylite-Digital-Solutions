import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Mainstyles/Blogs.css'; // Importing the CSS file for the Blogs component

const blogs = [
  {
    id: 1,
    title: 'The Future of Web Development',
    summary: 'An overview of the latest trends and technologies in web development.',
    link: '/blogs/the-future-of-web-development', // Update with actual link
  },
  {
    id: 2,
    title: 'Understanding Quality Assurance',
    summary: 'A deep dive into the importance of QA in the software development lifecycle.',
    link: '/blogs/understanding-quality-assurance', // Update with actual link
  },
  {
    id: 3,
    title: 'Digital Marketing Strategies for 2024',
    summary: 'Explore effective digital marketing strategies for the coming year.',
    link: '/blogs/digital-marketing-strategies-2024', // Update with actual link
  },
  {
    id: 4,
    title: 'IT Consultancy Best Practices',
    summary: 'Key practices to follow for effective IT consultancy services.',
    link: '/blogs/it-consultancy-best-practices', // Update with actual link
  },
];

const Blogscategory = () => {
  return (
    <div className="blogs-container">
      {/* Blogs List */}
      <h1 className="blogs-heading">Our Blogs</h1>
      <div className="blogs-list">
        {blogs.map((blog) => (
          <div className="blog-item" key={blog.id}>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-summary">{blog.summary}</p>
            <Link to={blog.link} className="read-more">Read More</Link>
          </div>
        ))}
      </div>

      {/* Blog Categories as Header */}
      <nav className="blog-categories">
        <h2>Blog Categories</h2>
        <ul>
          <li>
            <Link to="/blogscategory/all-categories">All Categories</Link> {/* Link updated */}
          </li>
          <li>
            <Link to="/blogs/interviews">Interviews</Link>
          </li>
          <li>
            <Link to="/blogs/inspiration">Inspiration</Link>
          </li>
          <li>
            <Link to="/blogs/process">Process</Link>
          </li>
          <li>
            <Link to="/blogs/technology">Technology</Link>
          </li>
          <li>
            <Link to="/blogs/community">Community</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default blogs;
