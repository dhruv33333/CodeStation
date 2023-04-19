const express = require("express");

const router = express.Router();
const USERS = []; //temp arr for now

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body || {};

  if (!email || !password) {
    return res
      .status(400)
      .json({ status: "failure", error: "Please enter all the credentials" });
  }

  const user = USERS.find((user) => user.email === email);
  if (user)
    return res.status(400).json({
      status: "failure",
      error: "User with same email already exists!",
    });

  USERS.push({ name, email, password });

  res.status(200).json({ USERS, status: "ok" });
});

module.exports = router;
