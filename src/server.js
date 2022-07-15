const express = require("express");
const app = express();

app.get("/*", (req, res) => {
  res.status(404);
  res.send("你跑到外太空啦");
});

app.listen(3000, () => {
  console.log("Server is running on port 3001.");
});
