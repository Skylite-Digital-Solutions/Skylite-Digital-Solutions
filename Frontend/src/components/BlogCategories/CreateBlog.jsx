import React, { useState } from "react";
import "../../styles/Color.css";
import "../../styles/Blogcategory/CreateBlog.css";
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
    <div className="create-blog">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Blog Title</label>
          <input
            type="text"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Blog Body</label>
          {blogBodySections.map((section, index) => (
            <div key={index} className="blog-body-section">
              <textarea
                value={section}
                onChange={(e) => handleBodyChange(index, e.target.value)}
                rows="5"
                required
              />
              <button
                type="button"
                onClick={() => removeBodySection(index)}
                disabled={blogBodySections.length <= 1}
              >
                -
              </button>
              {index === blogBodySections.length - 1 && (
                <button
                  type="button"
                  onClick={addBodySection}
                  disabled={blogBodySections.length >= 3}
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {sortedCategories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Creating Blog..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
