import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Author from "./components/Author";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
// import Pagination from "./components/Pagination";
import AuthorBlogs from "./components/AuthorBlogs";
import CategoriesBlogs from "./components/CategoriesBlogs";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="content-container">
            <Author />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Blog searchTerm={searchTerm} />} />
                <Route path="/viewblogs/:blog_id" element={<BlogDetails />} />
                <Route path="/viewblogs/authors/:author_id" element={<AuthorBlogs />} />
                <Route path="/viewblogs/categories/:category_id" element={<CategoriesBlogs />} />
              </Routes>
            </div>
          </div>
          {/* <Pagination /> */}
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
