import React, { useState } from "react";
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { app } from "../../Firebase/firebaseConfig";

const CreateBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogBodySections, setBlogBodySections] = useState([""]);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleBodyChange = (index, value) => {
    const newBodySections = [...blogBodySections];
    newBodySections[index] = value;
    setBlogBodySections(newBodySections);
  };

  const addBodySection = () => {
    if (blogBodySections.length < 3) {
      setBlogBodySections([...blogBodySections, ""]);
    }
  };

  const removeBodySection = (index) => {
    if (blogBodySections.length > 1) {
      const newBodySections = [...blogBodySections];
      newBodySections.splice(index, 1);
      setBlogBodySections(newBodySections);
    }
  };

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

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Blog Title */}
        <div>
          <label htmlFor="blogTitle" className="block text-lg font-medium text-gray-700">Blog Title</label>
          <input
            id="blogTitle"
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Blog Body Sections */}
        <div>
          <label htmlFor="blogBody" className="block text-lg font-medium text-gray-700">Blog Body</label>
          {blogBodySections.map((section, index) => (
            <div key={index} className="mt-4 flex items-center space-x-2">
              <textarea
                value={section}
                onChange={(e) => handleBodyChange(index, e.target.value)}
                rows="5"
                required
                className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => removeBodySection(index)}
                disabled={blogBodySections.length <= 1}
                className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 disabled:bg-gray-400"
              >
                -
              </button>
              {index === blogBodySections.length - 1 && (
                <button
                  type="button"
                  onClick={addBodySection}
                  disabled={blogBodySections.length >= 3}
                  className="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 disabled:bg-gray-400"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-lg font-medium text-gray-700">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Category</option>
            {sortedCategories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Author */}
        <div>
          <label htmlFor="author" className="block text-lg font-medium text-gray-700">Author</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full p-3 text-white rounded-md ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
        >
          {loading ? "Creating Blog..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
