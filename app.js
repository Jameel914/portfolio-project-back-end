const express = require("express");
const app = express();
const cors = require("cors");

const foodController = require("./controllers/foodController.js");

app.use(cors());
app.use(express.json());
app.use("/foods", foodController);

app.get("/", (req, res) => {
  res.status(200).send("Welcome!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});

module.exports = app;
