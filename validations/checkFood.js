const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ message: "Name is required" });
  }
};

module.exports = { checkName };
