import React from "react";
import "../css/Navbar.css";
import Logo from "../images/Logo4.jpg";
import profile from "../images/profile1.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 3;

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/categories/viewcategories`
      ); 
      setCategories(response.data);
    } catch (error) {
      console.log("error fetching data", error);
    }
  };

  //loogic for pagination
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span className="brand-name">CodeKatha</span>
        </div>
        <nav>
          <ul className="nav-links">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            &nbsp;
            <Link to="/">Home</Link>
            {currentCategories.map((category) => (
              <Link
                to={`/viewblogs/categories/${category.category_id}`}
                key={category.category_id}
              >
                {category.category_name}
              </Link>
            ))}
            &nbsp;
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={indexOfFirstCategory >= categories.length}
            >
              &gt;
            </button>
          </ul>
        </nav>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="profile-icon">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
