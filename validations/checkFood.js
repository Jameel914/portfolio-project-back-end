const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ message: "Name is required" });
  }
};

const checkPrice = (req, res, next) => {
  if (req.body.price) {
    next();
  } else {
    res.status(400).json({ message: "Price is required" });
  }
};

const checkIsSpicy = (req, res, next) => {
  const spicy = req.body.is_spicy;
  if (typeof spicy === "boolean") {
    next();
  } else {
    res.status(400).json({ message: "Is Spicy is required" });
  }
};

module.exports = { checkName, checkPrice, checkIsSpicy };
