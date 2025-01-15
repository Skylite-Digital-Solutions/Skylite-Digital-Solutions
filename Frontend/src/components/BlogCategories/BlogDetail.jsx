import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To access the blogId parameter
import "../../styles/Blogcategory/BlogDetail.css"; // CSS for Blog Detail
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig"; // Firebase configuration

const BlogDetail = () => {
  const { blogId } = useParams(); // Get the blogId from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

    fetchBlog();
  }, [db, blogId]);

  if (loading) {
    return <p>Loading blog...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="blog-detail">
      <h2>{blog?.title || "Untitled Blog"}</h2>
      <div className="blog-body">
        {Array.isArray(blog?.body) ? (
          blog.body.map((section, index) => <p key={index}>{section}</p>)
        ) : (
          <p>{blog?.body || "No content available."}</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
