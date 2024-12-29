const express = require("express");
const router = express.Router();
const db = require("../config/db");


router.get("/viewcategories", (req, res) => {
  const query = "select * from categories";
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "database err" });
    }
    res.status(200).json(result);
  });
});

router.get("/viewcategories/:category_id", (req, res) => {
  const id = req.params.category_id;
  const cmd = "select * from categories where category_id = ?";
  db.query(cmd, id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(200).json(result[0]);
  });
});
module.exports = router;
// create table categories(
//   category_id int auto_increment,
//   category_name varchar(150),
//   primary key(category_id)
//   );
