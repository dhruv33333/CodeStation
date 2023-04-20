const express = require("express");

const router = express.Router();

// middlware
const { protect } = require("../middlewares/authMiddleware");

// temp arrays

const USERS = [];
const QUESTIONS = [
  {
    _id: "1",
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [
      {
        input: "[1,2,3,4,5]",
        output: "5",
      },
    ],
  },
];

router.get("/questions", protect, (req, res) => {
  console.log(req.user);
  res.status(200).json({ data: { QUESTIONS }, status: "ok" });
});

module.exports = router;
