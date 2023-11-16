const express = require("express");
const foods = express.Router();

const { getAllFood } = require("../queries/food.js");

foods.get("/", async (req, res) => {
  const allfood = await getAllFood();
  if (allfood[0]) {
    res.status(200).json(allfood);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = foods;
