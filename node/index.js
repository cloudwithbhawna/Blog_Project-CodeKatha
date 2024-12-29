const express = require("express");
const authors = require("./routes/authors");
const categories = require("./routes/categories");
const blogs = require("./routes/blogs");
const comments = require("./routes/comments");
const cors = require("cors");


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(express.json());


app.use("/api/authors", authors);
app.use("/api/categories", categories);
app.use("/api/blogs", blogs);
app.use("/api/comments", comments);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
