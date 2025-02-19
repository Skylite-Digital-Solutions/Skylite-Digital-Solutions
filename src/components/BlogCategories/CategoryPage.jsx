import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig";

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
        console.error("Error fetching blogs by category:", err.message, err);
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
    return <p className="text-red-500 text-xl mt-4">{error}</p>;
  }

  return (
    <div className="p-8 bg-gray-100 rounded-lg text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Blogs in "{category}"</h2>
      {blogs.length > 0 ? (
        <table className="w-full border-collapse mt-6">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Author</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-200 transition-colors duration-300">
                <td className="px-4 py-2">
                  <Link to={`/blogs/${blog.id}`} className="text-blue-600 hover:text-blue-800">
                    {blog.title}
                  </Link>
                </td>
                <td className="px-4 py-2">{blog.author || "Unknown Author"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No blogs available for this category.</p>
      )}
    </div>
  );
};

export default CategoryPage;
