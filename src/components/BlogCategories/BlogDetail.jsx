import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc, collection, query, where, getDocs, limit } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig"; // Firebase configuration

const BlogDetail = () => {
  const { blogId } = useParams(); // Get the blogId from the URL
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]); // Store categories with their blogs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const db = getFirestore(app);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!blogId) {
          throw new Error("Blog ID is undefined. Check the route and URL.");
        }

        const blogDoc = doc(db, "blogs", blogId);
        const blogSnapshot = await getDoc(blogDoc);

        if (blogSnapshot.exists()) {
          setBlog({ id: blogId, ...blogSnapshot.data() });
        } else {
          throw new Error("Blog not found.");
        }
      } catch (err) {
        console.error("Error fetching blog:", err.message, err);
        setError(err.message || "Failed to fetch blog. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const categoriesQuery = query(collection(db, "categories"));
        const categorySnapshots = await getDocs(categoriesQuery);

        if (!categorySnapshots.empty) {
          const categoriesWithBlogs = await Promise.all(
            categorySnapshots.docs.map(async (categoryDoc) => {
              const categoryData = categoryDoc.data();
              const blogsQuery = query(
                collection(db, "blogs"),
                where("category", "==", categoryData.name),
                limit(5) // Limit to 5 blogs per category
              );
              const blogsSnapshot = await getDocs(blogsQuery);
              return {
                ...categoryData,
                id: categoryDoc.id,
                blogs: blogsSnapshot.docs.map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                })),
              };
            })
          );

          setCategories(categoriesWithBlogs);
        } else {
          console.warn("No categories found.");
        }
      } catch (err) {
        console.error("Error fetching categories:", err.message, err);
        setError("Failed to fetch categories. Please try again.");
      }
    };

    fetchBlog();
    fetchCategories();
  }, [db, blogId]);

  if (loading) {
    return <p>Loading blog...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center text-lg">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">{blog?.title || "Untitled Blog"}</h2>
        <div className="blog-body text-gray-700 text-base leading-relaxed">
          {Array.isArray(blog?.body) ? (
            blog.body.map((section, index) => <p key={index} className="mb-4 text-justify">{section}</p>)
          ) : (
            <p className="text-justify">{blog?.body || "No content available."}</p>
          )}
        </div>
        <Link
          to={`/category/${blog?.category || ""}`}
          className="inline-block mt-6 py-2 px-6 bg-blue-600 text-white rounded-md transition-all duration-200 hover:bg-blue-700 transform hover:scale-105"
        >
          Back to {blog?.category || "Category"}
        </Link>
      </div>

      <div className="bg-gray-100 rounded-lg shadow-lg mt-8 p-6">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">Blog Categories</h3>
        <ul className="space-y-4">
          {categories.length > 0 ? (
            categories.map((category) => (
              <li key={category.id} className="space-y-2">
                <Link
                  to={`/category/${category.name}`}
                  className="block text-xl text-blue-600 hover:text-blue-700"
                >
                  {category.name}
                </Link>
                {category.blogs && category.blogs.length > 0 ? (
                  <ul className="ml-4 space-y-2">
                    {category.blogs.map((blog) => (
                      <li key={blog.id}>
                        <Link
                          to={`/blogs/${blog.id}`}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          {blog.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No blogs available in this category.</p>
                )}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No categories available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetail;
