var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("asdasdasd");
});

app.listen(3001, () => console.log("server up!"));

module.exports = app;
