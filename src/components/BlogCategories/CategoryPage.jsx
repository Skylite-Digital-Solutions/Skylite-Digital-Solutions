import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig";
import { Search, BookOpen, Clock, ChevronUp, ChevronDown, Filter } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams(); // Fetch the category from the URL
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'asc' });
  const [showFilters, setShowFilters] = useState(false);

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

  // import React, { useState } from 'react';
  // import { Link } from 'react-router-dom';
  // import { Search, BookOpen, Clock, ChevronUp, ChevronDown, Filter } from 'lucide-react';
  
  // const CategoryPage = ({ category, blogs }) => {
  //   const [searchTerm, setSearchTerm] = useState('');
  //   const [sortConfig, setSortConfig] = useState({ key: 'title', direction: 'asc' });
  //   const [showFilters, setShowFilters] = useState(false);
  
    // Sort blogs based on current configuration
    const sortedBlogs = [...blogs].sort((a, b) => {
      const key = sortConfig.key;
      if (a[key] < b[key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  
    // Filter blogs based on search term
    const filteredBlogs = sortedBlogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const requestSort = (key) => {
      const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
      setSortConfig({ key, direction });
    };
  
    const getSortIndicator = (key) => {
      if (sortConfig.key === key) {
        return sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
      }
      return null;
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              <span className="text-blue-600">{category}</span> Blogs
            </h2>
            <div className="text-gray-600 flex items-center justify-center gap-2">
              <BookOpen size={20} />
              <span>{filteredBlogs.length} articles</span>
            </div>
          </div>
  
          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search blogs..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Filter size={20} />
                <span>Filters</span>
                {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
  
            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Add filter options here */}
                </div>
              </div>
            )}
          </div>
  
          {/* Blogs Table */}
          {filteredBlogs.length > 0 ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th 
                      className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100"
                      onClick={() => requestSort('title')}
                    >
                      <div className="flex items-center gap-2">
                        <span>Title</span>
                        {getSortIndicator('title')}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left cursor-pointer hover:bg-gray-100"
                      onClick={() => requestSort('author')}
                    >
                      <div className="flex items-center gap-2">
                        <span>Author</span>
                        {getSortIndicator('author')}
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left">Reading Time</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBlogs.map((blog) => (
                    <tr 
                      key={blog.id} 
                      className="border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <Link 
                          to={`/blogs/${blog.id}`} 
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {blog.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {blog.author || "Unknown Author"}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{blog.readingTime || "5 min"}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500 text-lg">
                No blogs found {searchTerm && "matching your search criteria"}.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default CategoryPage;