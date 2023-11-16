const express = require("express");
const foods = express.Router();

const {
  getAllFood,
  getOneFood,
  createFood,
  updateFood,
  deleteFood,
} = require("../queries/food.js");

foods.get("/", async (req, res) => {
  const allfood = await getAllFood();
  if (allfood[0]) {
    res.status(200).json(allfood);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

foods.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const oneFood = await getOneFood(id);
  if (oneFood) {
    res.status(200).json(oneFood);
  } else {
    res.status(404).json({ message: "Food Not Found" });
  }
});

foods.post("/", async (req, res) => {
  const body = req.body;
  const food = await createFood(body);
  if (food) {
    res.status(200).json(food);
  } else {
    res.status(404).json({ message: "Unable to add the food" });
  }
});

foods.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;
  const updatedFood = await updateFood(id, body);
  if (updatedFood.id) {
    res.status(200).json(updatedFood);
  } else {
    res.status(404).json({ message: "Unable to update the food" });
  }
});

foods.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const deletedFood = await deleteFood(id);
  if (deletedFood.id) {
    res.status(200).json(deletedFood);
  } else {
    res.status(404).json({ message: "Unable to delete the food" });
  }
});

module.exports = foods;
