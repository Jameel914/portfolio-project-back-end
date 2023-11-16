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

module.exports = { getAllFood, getOneFood };
