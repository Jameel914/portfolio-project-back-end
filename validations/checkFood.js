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
  if (req.body & (typeof is_spicy === "boolean")) {
    next();
  } else {
    res.status(400).json({ message: "Is Spicy is required" });
  }
};

module.exports = { checkName, checkPrice, checkIsSpicy };
