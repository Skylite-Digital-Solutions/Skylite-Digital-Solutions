import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../../styles/Blogcategory/BlogList.css"; // CSS for Blog List
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig"; // Firebase configuration

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
      {Object.keys(blogsByCategory).length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        Object.keys(blogsByCategory).map((category) => (
          <div key={category} className="blog-category">
            <h3>{category}</h3>
            <ul>
              {blogsByCategory[category].map((blog) => (
                <li key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
