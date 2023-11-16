const db = require("../db/dbConfig.js");

const getAllFood = async () => {
  try {
    const allfood = await db.any("SELECT * FROM foods");
    return allfood;
  } catch (error) {
    return error;
  }
};

const getOneFood = async (id) => {
  try {
    const oneFood = await db.one("SELECT * FROM foods WHERE id=$1", id);
    return oneFood;
  } catch (error) {
    return error;
  }
};

const createFood = async (food) => {
  try {
    const newFood = await db.one(
      "INSERT INTO foods (name, image, calories, price, is_veg, is_spicy, description) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        food.name,
        food.image,
        food.calories,
        food.price,
        food.is_veg,
        food.is_spicy,
        food.description,
      ]
    );
    return newFood;
  } catch (error) {
    return error;
  }
};

const updateFood = async (id, food) => {
  try {
    const updatedFood = await db.one(
      "UPDATE foods SET name=$1, image=$2, calories=$3, price=$4, is_veg=$5, is_spicy=$6, description=$7 WHERE id=$8 RETURNING *",
      [
        food.name,
        food.image,
        food.calories,
        food.price,
        food.is_veg,
        food.is_spicy,
        food.description,
        id,
      ]
    );
    return updatedFood;
  } catch (error) {
    return error;
  }
};

const deleteFood = async (id) => {
  try {
    const deletedFood = await db.one(
      "DELETE FROM foods WHERE id=$1 RETURNING *",
      id
    );
    return deletedFood;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllFood, getOneFood, createFood, updateFood, deleteFood };
