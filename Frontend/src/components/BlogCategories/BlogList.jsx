import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Blogcategory/BlogList.css"; // Ensure to create a CSS file for styling
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig"; // Import your Firebase configuration

const BlogList = () => {
  const [blogsByCategory, setBlogsByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

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

        // Group blogs by category
        const groupedByCategory = blogData.reduce((acc, blog) => {
          const category = blog.category || "Uncategorized";
          if (!acc[category]) acc[category] = [];
          acc[category].push(blog);
          return acc;
        }, {});

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
      <div className="category-row">
        {Object.keys(blogsByCategory).map((category) => (
          <button
            key={category}
            className="category-button"
            onClick={() =>
              setSelectedCategory(selectedCategory === category ? null : category)
            }
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="blog-titles">
          <h3>{selectedCategory}</h3>
          <ul>
            {blogsByCategory[selectedCategory].map((blog) => (
              <li
                key={blog.id}
                className="blog-title"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                {blog.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BlogList;
