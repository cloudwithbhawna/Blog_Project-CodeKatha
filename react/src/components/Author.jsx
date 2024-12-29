import React from "react";
import { useState, useEffect } from "react";
import '../css/Author.css';
import axios from "axios";
import { Link } from "react-router-dom";
const Author = () => {
  const [authors, setAuthors] = useState([]);


  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try{
    const response = await axios.get(`http://localhost:3000/api/authors/viewauthors`);
    setAuthors(response.data);
  } catch (error) {
    console.error("Error fetching authors:", error);
  }
}
  return (
    <>
      <aside className="author-list">
        <h3>Author List</h3>
        <ul>
          {authors.map((author) => (
            <li key={author.author_id}>
              <Link to={`/viewblogs/authors/${author.author_id}`}>{author.author_name}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Author;
