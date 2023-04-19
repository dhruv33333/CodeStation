const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("yoo");
});

app.listen(port, () => {
  console.log("Backend server running on port - ", port);
});
