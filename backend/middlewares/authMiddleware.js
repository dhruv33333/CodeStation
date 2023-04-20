const jwt = require("jsonwebtoken");

// temp arr
const USERS = [
  {
    name: "Barney Stinson",
    email: "barney@stinson.com",
    password: "barney",
  },
];

// for now its gonna get USERS like this, later we will find from DB
const protect = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];

      // decoding the token // TODO change email to id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = USERS.find((user) => user.email === decoded.id);
      if (user) {
        req.user = user;
        next();
      } else throw new Error();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

module.exports = { protect };
