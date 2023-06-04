const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World, this is containerized using Docker!");
});

app.listen(port, () => {
  console.log("Server listening on port 3000");
});
