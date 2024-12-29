const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/viewblogs", (req, res) => {
  const query =
  `
  SELECT 
    blog.blog_id, 
    blog.title, 
    authors.author_name, 
    categories.category_name
  FROM blogs blog
  INNER JOIN authors ON blog.author_id = authors.author_id
  INNER JOIN categories ON blog.category_id = categories.category_id
`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "database err" });
    }
    res.status(200).json(result);
  });
});

router.get("/viewblogs/:blog_id", (req, res) => {
  const id = req.params.blog_id;
  const cmd = `
    SELECT 
      blog.title, 
      blog.content, 
      blog.date, 
      blog.tags, 
      authors.author_name, 
      categories.category_name
    FROM blogs blog
    INNER JOIN authors ON blog.author_id = authors.author_id
    INNER JOIN categories ON blog.category_id = categories.category_id
    WHERE blog.blog_id = ?
  `;
  db.query(cmd, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(result[0]);
  });
});


router.get("/viewblogs/authors/:author_id", (req, res) => {
  const { author_id } = req.params;
  const cmd = `SELECT blogs.*, authors.author_name, categories.category_name FROM blogs INNER JOIN authors ON blogs.author_id = authors.author_id INNER JOIN categories ON blogs.category_id = categories.category_id WHERE blogs.author_id = ?`;
  db.query(cmd, [author_id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(result);
  });
});

router.get("/viewblogs/categories/:category_id", (req, res) => {
  const { category_id } = req.params;
  const cmd = `SELECT blogs.*, categories.category_name FROM blogs INNER JOIN categories ON blogs.category_id = categories.category_id WHERE blogs.category_id = ?`;
  db.query(cmd, [category_id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(result);
  });
});

module.exports = router;
// create table blogs(
//   blog_id int auto_increment,
//   title varchar(255),
//   author_id int,
//   category_id int,
//   tags varchar(255),
//   date DATE,
//   content varchar(500),
//   primary key(blog_id),
//   foreign key (author_id) references authors(author_id) on delete cascade,
//   foreign key (category_id) references categories(category_id) on delete cascade
//   );



