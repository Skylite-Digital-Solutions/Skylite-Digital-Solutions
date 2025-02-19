import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogList from './BlogCategories/BlogList';
import { BookOpen, Edit, TrendingUp, Users } from 'lucide-react';

const Blogs = () => {
  const navigate = useNavigate();
  
  const handleCreateBlogClick = () => {
    navigate('/create-blog');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      {/* Hero section with decorative elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative mb-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex space-x-2 opacity-20">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-blue-600"></div>
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-slate-800 mb-6 inline-block relative">
            Our Blog Insights
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-600 rounded-full"></div>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-6">
            Drive traffic, engage users, and grow your online presence with our Digital Marketing and SEO services. 
            We use data-driven strategies to ensure you reach your target audience effectively.
          </p>
          
          {/* Blog statistics cards - New addition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, title: "Content Library", value: "200+ Articles" },
              { icon: Users, title: "Monthly Readers", value: "50,000+" },
              { icon: TrendingUp, title: "Knowledge Growth", value: "New posts weekly" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-50 p-3 rounded-full">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{stat.title}</h3>
                <p className="text-blue-600 font-medium mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Blog categories navigation - New addition */}
        <div className="mb-12 bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["All Posts", "Web Development", "Digital Marketing", "UI/UX Design", "Technology Trends"].map((category, index) => (
              <button 
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0 
                    ? "bg-blue-600 text-white" 
                    : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured blog section - New addition */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl overflow-hidden shadow-md">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-600 p-8 flex items-center justify-center">
              <div className="h-64 w-full bg-blue-500 rounded-lg flex items-center justify-center">
                <BookOpen className="h-24 w-24 text-white opacity-50" />
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="text-sm font-medium text-blue-600 mb-2">FEATURED POST</div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">The Future of Digital Marketing in 2025</h2>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Discover how AI, personalization, and interactive content are reshaping the digital marketing landscape
                and what strategies will help you stay ahead of the competition.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 inline-flex items-center">
                Read full article
                <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Blog list section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Latest Articles</h2>
            <div className="flex items-center space-x-2">
              <span className="text-slate-600">Sort by:</span>
              <select className="bg-white border border-slate-200 text-slate-800 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Most Recent</option>
                <option>Most Popular</option>
                <option>Trending</option>
              </select>
            </div>
          </div>
          <BlogList />
        </section>

        {/* Create blog CTA section */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center mb-16">
          <div className="inline-block bg-blue-100 p-4 rounded-full mb-6">
            <Edit className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-4">Create Your Blog</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Ready to share your ideas? Click below to start creating and publishing your blog posts on our platform.
            Join our community of writers and reach thousands of readers.
          </p>
          <button
            className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleCreateBlogClick}
          >
            <span className="flex items-center">
              <Edit className="w-5 h-5 mr-2" />
              Create Your Blog
            </span>
          </button>
          <div className="mt-6 text-sm text-slate-500">
            Already have a draft? <a href="/my-drafts" className="text-blue-600 hover:underline">View your drafts</a>
          </div>
        </div>

        {/* Newsletter subscription - New addition */}
        <div className="bg-blue-600 rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Our Newsletter</h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Subscribe to receive the latest articles, tips, and industry insights directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;