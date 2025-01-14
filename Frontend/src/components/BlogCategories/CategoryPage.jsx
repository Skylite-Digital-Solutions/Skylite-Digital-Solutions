import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To access the category from URL
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig";
import "../../styles/Blogcategory/CategoryPage.css";

const CategoryPage = () => {
  const { category } = useParams(); // Fetch the category from the URL
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const db = getFirestore(app);

  useEffect(() => {
    const fetchBlogsByCategory = async () => {
      try {
        const blogCollection = collection(db, "blogs");
        const q = query(blogCollection, where("category", "==", category)); // Fetch blogs filtered by category
        const blogSnapshot = await getDocs(q);
        const blogData = blogSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBlogs(blogData);
      } catch (err) {
        console.error("Error fetching blogs by category:", err);
        setError("Failed to fetch blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogsByCategory();
  }, [category, db]);

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="category-page">
      <h2>Blogs in "{category}"</h2>
      {blogs.length > 0 ? (
        <table className="blogs-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.title}</td>
                <td>{blog.author}</td> {/* Assuming the 'author' field exists in your blog data */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No blogs available for this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
