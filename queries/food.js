const db = require("../db/dbConfig.js");

const getAllFood = async () => {
  try {
    const allfood = await db.any("SELECT * FROM foods");
    return allfood;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllFood };
