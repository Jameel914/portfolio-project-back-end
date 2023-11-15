const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});

module.exports = app;
