const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/viewcomments/:blog_id", (req, res) => {
  const blog_id = req.params.blog_id;
  const query = "select comment_id, blog_id, author, content, date from comments where blog_id = ?";
  db.query(query, [blog_id] ,(err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "database err" });
    }
    res.status(200).json(result);
  });
});
router.get("/viewcomments/comments/:comment_id", (req, res) => {
  const id = req.params.comment_id;
  const cmd = "select * from comments where comment_id = ?";
  db.query(cmd, id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(result[0]);
  });
});
module.exports = router;

// create table comments(
//   comment_id int auto_increment,
//   blog_id int,
//   author varchar(255),
//   date date,
//   content varchar(500),
//   primary key(comment_id),
//   foreign key (blog_id) references blogs(blog_id) on delete cascade
//   );
