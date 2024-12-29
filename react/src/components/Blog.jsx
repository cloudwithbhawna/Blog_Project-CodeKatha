import React from "react";
import "../css/Blog.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Pagination.css";
const Blog = ({ searchTerm }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  //logic of pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  //Filter blogs
  const flterBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentBlogs = flterBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  useEffect(() => {
    fetchBlogs();
  }, []);

  //function to fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/blogs/viewblogs"
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };
  return (
    <>
      <section className="blogs">
        <h1>Read it on our blog</h1>
        <div className="blog-cards">
          {currentBlogs.map((blog) => (
            <div className="blog-card" key={blog.blog_id}>
              <h2>{blog.title}</h2>
              <p>
                <strong>Author:</strong> {blog.author_name}
              </p>
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
      <footer>
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastBlog >= blogs.length}
          >
            &gt;
          </button>
        </div>
      </footer>
    </>
  );
};

export default Blog;
