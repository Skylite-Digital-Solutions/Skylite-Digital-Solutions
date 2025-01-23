import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // Added Link for navigation
import "../../styles/Blogcategory/BlogDetail.css"; // CSS for Blog Detail
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
    return <p className="error">{error}</p>;
  }

  return (
    <div className="blog-detail-container">
      <div className="blog-detail">
        <h2>{blog?.title || "Untitled Blog"}</h2>
        <div className="blog-body">
          {Array.isArray(blog?.body) ? (
            blog.body.map((section, index) => <p key={index}>{section}</p>)
          ) : (
            <p>{blog?.body || "No content available."}</p>
          )}
        </div>
        <Link to={`/category/${blog?.category || ""}`} className="back-to-category">
          Back to {blog?.category || "Category"}
        </Link>
      </div>
      <div className="blog-categories">
        <h3>Blog Categories</h3>
        <ul>
          {categories.length > 0 ? (
            categories.map((category) => (
              <li key={category.id} className="category-item">
                <Link to={`/category/${category.name}`}>
                  {category.name}
                </Link>
                {category.blogs && category.blogs.length > 0 ? (
                  <ul className="dropdown">
                    {category.blogs.map((blog) => (
                      <li key={blog.id} className="dropdown-item">
                        <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No blogs available in this category.</p>
                )}
              </li>
            ))
          ) : (
            <p>No categories available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetail;
