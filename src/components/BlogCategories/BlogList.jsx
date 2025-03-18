import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig";

// List of predefined categories
const predefinedCategories = [
  "The Future of Web Development",
  "Digital Marketing Strategies",
  "Expert Interviews in Tech Industry",
  "IT Consultancy Best Practices",
  "Technology Trends",
  "Threats of Cyber Security",
  "Understanding Quality Assurance",
];

const BlogList = () => {
  const [blogsByCategory, setBlogsByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const db = getFirestore(app);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogCollection = collection(db, "blogs");
        const blogSnapshot = await getDocs(blogCollection);
        const blogData = blogSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Group blogs by category and ensure all predefined categories are included
        const groupedByCategory = predefinedCategories.reduce((acc, category) => {
          acc[category] = [];
          return acc;
        }, {});

        blogData.forEach((blog) => {
          const category = blog.category || "Uncategorized";
          if (!groupedByCategory[category]) {
            groupedByCategory[category] = [];
          }
          groupedByCategory[category].push(blog);
        });

        setBlogsByCategory(groupedByCategory);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [db]);

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

 // SVG Icons as components
 const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6"></path>
  </svg>
);

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
);

return (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Explore Our Blog Categories
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {predefinedCategories.map((category) => (
          <div 
            key={category}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            {/* Card Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
                <span className="text-blue-500"><BookIcon /></span>
                {category}
              </div>
            </div>
            
            {/* Card Content */}
            <div className="p-6">
              {blogsByCategory[category]?.length > 0 ? (
                <div className="space-y-4">
                  {blogsByCategory[category].slice(0, 3).map((blog) => (
                    <div 
                      key={blog.id}
                      className="group relative bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-200"
                    >
                      <h4 className="font-semibold text-gray-800 mb-1 pr-6">
                        {blog.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {blog.summary}
                      </p>
                      <div className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight />
                      </div>
                    </div>
                  ))}
                  
                  <Link 
                    to={`/category/${category}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm mt-4 group"
                  >
                    View all posts
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      <ChevronRight />
                    </span>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                  <span className="mb-2">
                    <AlertIcon />
                  </span>
                  <p className="text-center">No blogs available for this category yet.</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default BlogList;