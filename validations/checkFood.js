const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ message: "Name is required" });
  }
};

const checkPrice = (req, res, next) => {
  if (req.body.price & (typeof price === "number")) {
    next();
  } else {
    res.status(400).json({ message: "Price is required" });
  }
};

module.exports = { checkName, checkPrice };
