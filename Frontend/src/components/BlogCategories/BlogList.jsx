import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Blogcategory/BlogList.css"; // CSS for Blog List
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
    return <p className="error">{error}</p>;
  }

  return (
    <div className="blog-list">
      <h2>Blogs by Category</h2>
      <div className="categories-container">
        {predefinedCategories.map((category) => (
          <div key={category} className="blog-category">
            <div className="category-container">
              <h3>{category}</h3>
              {blogsByCategory[category] && blogsByCategory[category].length > 0 ? (
                <div className="blog-cards-container">
                  {blogsByCategory[category].slice(0, 3).map((blog) => (
                    <div key={blog.id} className="blog-card">
                      <h4>{blog.title}</h4>
                      <p>{blog.summary}</p>
                      {/* Explore button linking to the category page */}
                      <Link to={`/category/${category}`} className="explore-button">
                        Explore
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-data">No blogs available for this category.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
