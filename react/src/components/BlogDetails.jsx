import React from "react";
import "../css/BlogDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const BlogDetails = () => {
  const { blog_id } = useParams();
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, [blog_id]);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/blogs/viewblogs/${blog_id}`
      );
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };
  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/comments/viewcomments/${blog_id}`
      );
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  const handleBackButtonClick = () => {
    navigate(-1);
  };
  return (
    <>
      <section className="blog-details">
        <h1>Read it on our blog</h1>
        <div className="details-card">
          <p>
            <strong>Title:</strong>
            {blog.title}
          </p>
          <p>
            <strong>Author:</strong>
            {blog.author_name}
          </p>

          <p>
            <strong>Category:</strong>
            {blog.category_name}
          </p>
          <p>
            <strong>Tags:</strong>
            {blog.tags}
          </p>
          <p>
            <strong>Date:</strong>
            {blog.date}
          </p>
          <p>
            <strong>Content:</strong>
            {blog.content}
          </p>
          <p>
            <strong>Comment:</strong>
          </p>
          <ul>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <li key={index}>
                  <ul>
                    <li>
                      <strong>{comment.author}</strong>
                    </li>
                    <li>{comment.date}</li>
                    <li>{comment.content}</li>
                  </ul>
                </li>
              ))
            ) : (
              <p>No comments available.</p>
            )}
          </ul>
        </div>
      </section>
      <footer>
        <button onClick={handleBackButtonClick}>Back to Blogs</button>
      </footer>
    </>
  );
};

export default BlogDetails;
