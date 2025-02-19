import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import BlogList from './BlogCategories/BlogList'; // Import the BlogList component

const Blogs = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleCreateBlogClick = () => {
    navigate('/create-blog'); // Redirect to the create-blog page
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Inner header for blogs page */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Our Blog Insights</h2>
        <p className="text-lg text-gray-600 mt-4">
          Drive traffic, engage users, and grow your online presence with our Digital Marketing and SEO services. We use
          data-driven strategies to ensure you reach your target audience effectively.
        </p>
      </div>

      <section>
        <BlogList /> {/* Render the BlogList component */}
      </section>

      <div className="mt-10 text-center">
        <h3 className="text-3xl font-semibold text-gray-800">Create Your Blog</h3>
        <p className="text-lg text-gray-600 mt-4">
          Ready to share your ideas? Click below to start creating and publishing your blog posts on our platform.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none"
          onClick={handleCreateBlogClick}
        >
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default Blogs;
