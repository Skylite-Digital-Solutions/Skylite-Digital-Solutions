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

  return (
    <div>
      <div className="flex flex-wrap gap-8 justify-center p-4">
        {predefinedCategories.map((category) => (
          <div key={category} className="w-72 h-56 flex flex-col justify-between items-center bg-gray-200 rounded-lg shadow-md p-4 hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{category}</h3>
            {blogsByCategory[category] && blogsByCategory[category].length > 0 ? (
              <div className="flex flex-col gap-2">
                {blogsByCategory[category].slice(0, 3).map((blog) => (
                  <div key={blog.id} className="bg-white p-3 rounded-md shadow-sm hover:shadow-lg transition-shadow">
                    <h4 className="text-md font-semibold text-gray-800">{blog.title}</h4>
                    <p className="text-sm text-gray-600">{blog.summary}</p>
                    <Link to={`/category/${category}`} className="mt-2 text-blue-500 text-sm hover:text-blue-700">
                      Explore
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No blogs available for this category.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
