import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc, collection, query, where, getDocs, limit } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig"; // Firebase configuration
import { 
  Clock, 
  User, 
  Tag, 
  Share, 
  Bookmark, 
  Heart,
  ChevronDown,
  ChevronUp 
} from 'lucide-react';

const BlogDetail = () => {
  const { blogId } = useParams(); // Get the blogId from the URL
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]); // Store categories with their blogs
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
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
  
    const toggleCategory = (categoryId) => {
      setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    };
  
    return (
      <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
        {/* Main Blog Content Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            {/* Blog Header */}
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {blog?.title || "Untitled Blog"}
              </h2>
              
              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} />
                  <span>By John Doe</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={16} />
                  <Link 
                    to={`/category/${blog?.category}`} 
                    className="text-blue-600 hover:underline"
                  >
                    {blog?.category || "Uncategorized"}
                  </Link>
                </div>
              </div>
            </div>
  
            {/* Blog Content */}
            <div className="prose max-w-none text-gray-700">
              {Array.isArray(blog?.body) ? (
                blog.body.map((section, index) => (
                  <p key={index} className="mb-6 leading-relaxed">
                    {section}
                  </p>
                ))
              ) : (
                <p className="leading-relaxed">
                  {blog?.body || "No content available."}
                </p>
              )}
            </div>
  
            {/* Interaction Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <div className="flex gap-4">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors
                    ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
                >
                  <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                  <span>Like</span>
                </button>
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors
                    ${isSaved ? 'text-blue-500' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  <Bookmark size={20} fill={isSaved ? "currentColor" : "none"} />
                  <span>Save</span>
                </button>
                <button 
                  className="flex items-center gap-2 p-2 text-gray-600 hover:text-blue-500 
                    rounded-lg transition-colors"
                >
                  <Share size={20} />
                  <span>Share</span>
                </button>
              </div>
  
              <Link
                to={`/category/${blog?.category}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg transition-all 
                  hover:bg-blue-700 active:scale-95"
              >
                Back to Category
              </Link>
            </div>
          </div>
        </div>
  
        {/* Categories Section */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Explore Categories
            </h3>
            <div className="space-y-2">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <div key={category.id} className="border rounded-lg">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full flex justify-between items-center p-3 hover:bg-gray-50"
                    >
                      <span className="font-medium text-gray-700">
                        {category.name}
                      </span>
                      {expandedCategory === category.id ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                    
                    {expandedCategory === category.id && (
                      <div className="p-3 pt-0">
                        {category.blogs && category.blogs.length > 0 ? (
                          <ul className="space-y-2">
                            {category.blogs.map((blog) => (
                              <li key={blog.id}>
                                <Link
                                  to={`/blogs/${blog.id}`}
                                  className="block p-2 text-gray-600 hover:text-blue-600 
                                    hover:bg-gray-50 rounded"
                                >
                                  {blog.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-500 italic">
                            No blogs in this category yet.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 italic">No categories available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogDetail;