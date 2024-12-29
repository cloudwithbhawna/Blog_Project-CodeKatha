import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/Blog.css";
import axios from "axios";
import { Link } from "react-router-dom";

const AuthorBlogs = () => {
  const { author_id } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, [author_id]);

  const getBlogs = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/blogs/viewblogs/authors/${author_id}`
      );
      console.log(response.data);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <>
      <section className="blogs">
        <h1>Blogs by {blogs[0]?.author_name || "Author"}</h1>
        <div className="blogs-cards">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.blog_id}>
              <h2>{blog.title}</h2>
              <p>{blog.content.slice(0, 100)}...</p>
              <p>
                <strong>Category:</strong> {blog.category_name}
              </p>
              <Link to={`/viewblogs/${blog.blog_id}`}>
                <button>Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default AuthorBlogs;
