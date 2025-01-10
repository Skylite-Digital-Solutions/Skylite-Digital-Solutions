// src/components/Blog/AllCategories.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import '../styles/Blogs.css';
import '../styles/color.css';

const Blogs = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Blog data with added Technology and Interviews categories
  const blogs = [
    {
      id: 1,
      title: 'The Future of Web Development',
      summary: 'An overview of the latest trends and technologies in web development.',
      link: '/blogs/the-future-of-web-development',
    },
    {
      id: 2,
      title: 'Understanding Quality Assurance',
      summary: 'A deep dive into the importance of QA in the software development lifecycle.',
      link: '/blogs/understanding-quality-assurance',
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies for 2024',
      summary: 'Explore effective digital marketing strategies for the coming year.',
      link: '/blogs/digital-marketing-strategies-2024',
    },
    {
      id: 4,
      title: 'IT Consultancy Best Practices',
      summary: 'Key practices to follow for effective IT consultancy services.',
      link: '/blogs/it-consultancy-best-practices',
    },
    {
      id: 5,
      title: 'Technology Trends to Watch in 2024',
      summary: 'An in-depth look at the top technology trends expected to shape the future.',
      link: '/blogs/technology-trends-2024',
    },
    {
      id: 6,
      title: 'Expert Interviews in Tech Industry',
      summary: 'Insights from leading professionals in technology and innovation.',
      link: '/blogs/expert-interviews-tech-industry',
    },
    {
      id: 7,
      title: 'Threats of Cyber Security',
      summary: 'Insights from leading professionals in technology and innovation.',
      link: '/blogs/expert-interviews-tech-industry',
    },
  ];

  // Sort blogs alphabetically by title
  const sortedBlogs = [...blogs].sort((a, b) => a.title.localeCompare(b.title));

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the specific blog page
  };

  const handleCreateBlogClick = () => {
    navigate('/create-blog'); // Redirect to the create-blog page
  };

  return (
    <div className="Blogs">
      {/* Inner header for blogs page */}
      <div className="inner-header">
        <h2>Our Blog Insights</h2>
        <p>
          Drive traffic, engage users, and grow your online presence with our Digital Marketing and SEO services. We use
          data-driven strategies to ensure you reach your target audience effectively.
        </p>
      </div>

      <div className="blogs-list">
        {sortedBlogs.map((blog) => (
          <div className="blog-item" key={blog.id}>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-summary">{blog.summary}</p>
            <button
              className="read-more-button"
              onClick={() => handleNavigate(blog.link)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      <div className="create-blog-section">
        <h3>Create Your Blog</h3>
        <p>
          Ready to share your ideas? Click below to start creating and publishing your blog posts on our platform.
        </p>
        <button className="create-blog-button" onClick={handleCreateBlogClick}>
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default Blogs;
