const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
const userRouter = require("./routes/user");
const problemsRouter = require("./routes/problems");

dotenv.config();

app.use(express.json());

app.use("/user", userRouter);
app.use("/problems", problemsRouter);

app.listen(port, () => {
  console.log("Backend server running on port - ", port);
});
