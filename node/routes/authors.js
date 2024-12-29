const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/viewauthors", (req, res) => {
  const query = "select * from authors";
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "database err" });
    }
    res.status(200).json(result);
  });
});

router.get("/viewauthors/:author_id", (req, res) => {
  const id = req.params.author_id;
  const cmd = "select * from authors where author_id = ?";
  db.query(cmd, id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(result[0]);
  });
});

module.exports = router;
// router.post("/addauthor", (req, res) => {
//   const { author_name } = req.body;
//   const query = "insert into authors(author_name) values(?)";
//   db.query(query, [author_name], (err, result) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({ error: "database err" });
//     }
//     res.status(200).json({ message: "author added" });
//   });
// });
// module.exports = router;

//  create table authors(
//    author_id int auto_increment,
//    author_name varchar(150),
//    primary key(author_id)
//    );
