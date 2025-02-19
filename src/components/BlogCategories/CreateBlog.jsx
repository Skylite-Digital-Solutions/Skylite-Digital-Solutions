import React, { useState } from "react";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig";
import { 
  Pencil, 
  BookOpen, 
  User, 
  Tag, 
  Plus, 
  Minus, 
  AlertCircle,
  Loader,
  ChevronDown,
  Image
} from 'lucide-react';

const CreateBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBodySections, setBlogBodySections] = useState([""]);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState({ title: 0, body: [0] });
  const [previewMode, setPreviewMode] = useState(false);

  const db = getFirestore(app);

  const categories = [
    "The Future of Web Development",
    "Digital Marketing Strategies",
    "Expert Interviews in Tech Industry",
    "IT Consultancy Best Practices",
    "Technology Trends",
    "Threats of Cyber Security",
    "Understanding Quality Assurance",
  ];

  const sortedCategories = categories.sort();




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !author) {
      setError("Please fill out all fields.");
      return;
    }

    setLoading(true);
    try {
      const blogRef = collection(db, "blogs");
      const q = query(blogRef, where("title", "==", blogTitle));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError("A blog with this title already exists. Please use a different title.");
        setLoading(false);
        return;
      }

      await addDoc(blogRef, {
        title: blogTitle,
        body: blogBodySections,
        category,
        author,
      });

      setBlogTitle("");
      setBlogBodySections([""]);
      setCategory("");
      setAuthor("");
      setError("");
      alert("Blog created successfully!");
    } catch (error) {
      console.error("Error creating blog:", error);
      setError("There was an error creating the blog.");
    } finally {
      setLoading(false);
    }
  };

  // onst CreateBlog = () => {
  //   const [blogTitle, setBlogTitle] = useState('');
  //   const [blogBodySections, setBlogBodySections] = useState(['']);
  //   const [category, setCategory] = useState('');
  //   const [author, setAuthor] = useState('');
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState('');
  //   const [charCount, setCharCount] = useState({ title: 0, body: [0] });
  //   const [previewMode, setPreviewMode] = useState(false);
  
    // Handlers remain the same, adding new preview handler
    const handleBodyChange = (index, value) => {
      const newSections = [...blogBodySections];
      newSections[index] = value;
      setBlogBodySections(newSections);
  
      const newCharCount = { ...charCount };
      newCharCount.body[index] = value.length;
      setCharCount(newCharCount);
    };
  
    const handleTitleChange = (e) => {
      setBlogTitle(e.target.value);
      setCharCount({ ...charCount, title: e.target.value.length });
    };
  
    const addBodySection = () => {
      setBlogBodySections([...blogBodySections, '']);
      setCharCount({ ...charCount, body: [...charCount.body, 0] });
    };
  
    const removeBodySection = (index) => {
      const newSections = blogBodySections.filter((_, i) => i !== index);
      setBlogBodySections(newSections);
      const newCharCount = { ...charCount };
      newCharCount.body = charCount.body.filter((_, i) => i !== index);
      setCharCount(newCharCount);
    };
  
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                <Pencil className="text-indigo-600" />
                Create New Blog
              </h2>
              <button
                type="button"
                onClick={() => setPreviewMode(!previewMode)}
                className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
              >
                {previewMode ? 'Edit Mode' : 'Preview Mode'}
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <BookOpen size={16} />
                <span>{blogBodySections.reduce((acc, curr) => acc + curr.split(' ').length, 0)} words</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{author || 'Anonymous'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={16} />
                <span>{category || 'Uncategorized'}</span>
              </div>
            </div>
          </div>
  
          {/* Main Form */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Blog Title */}
              <div className="space-y-2">
                <label htmlFor="blogTitle" className="text-lg font-medium text-gray-700 flex items-center justify-between">
                  Blog Title
                  <span className="text-sm text-gray-500">{charCount.title}/100 characters</span>
                </label>
                <input
                  id="blogTitle"
                  type="text"
                  value={blogTitle}
                  onChange={handleTitleChange}
                  maxLength={100}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                  placeholder="Enter your blog title..."
                />
              </div>
  
              {/* Featured Image Upload */}
              <div className="space-y-2">
                <label className="text-lg font-medium text-gray-700">Featured Image</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors cursor-pointer">
                  <Image className="mx-auto text-gray-400 mb-2" size={32} />
                  <p className="text-sm text-gray-600">Drag and drop an image, or click to select</p>
                </div>
              </div>
  
              {/* Blog Body Sections */}
              <div className="space-y-4">
                <label className="text-lg font-medium text-gray-700">Blog Content</label>
                {blogBodySections.map((section, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-2">
                      <textarea
                        value={section}
                        onChange={(e) => handleBodyChange(index, e.target.value)}
                        rows="6"
                        required
                        placeholder="Write your content here..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none"
                      />
                      <div className="flex flex-col gap-2">
                        <button
                          type="button"
                          onClick={() => removeBodySection(index)}
                          disabled={blogBodySections.length <= 1}
                          className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          <Minus size={20} />
                        </button>
                        {index === blogBodySections.length - 1 && (
                          <button
                            type="button"
                            onClick={addBodySection}
                            disabled={blogBodySections.length >= 5}
                            className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            <Plus size={20} />
                          </button>
                        )}
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-14 text-sm text-gray-500">
                      {charCount.body[index]} characters
                    </span>
                  </div>
                ))}
              </div>
  
              {/* Category Selection */}
              <div className="space-y-2">
                <label htmlFor="category" className="text-lg font-medium text-gray-700">Category</label>
                <div className="relative">
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow appearance-none"
                  >
                    <option value="">Select Category</option>
                    {sortedCategories.map((cat, index) => (
                      <option key={index} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
              </div>
  
              {/* Author Field */}
              <div className="space-y-2">
                <label htmlFor="author" className="text-lg font-medium text-gray-700">Author</label>
                <input
                  id="author"
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                />
              </div>
  
              {/* Error Message */}
              {error && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle size={20} />
                  <p>{error}</p>
                </div>
              )}
  
              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    Creating Blog...
                  </>
                ) : (
                  'Publish Blog'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default CreateBlog;