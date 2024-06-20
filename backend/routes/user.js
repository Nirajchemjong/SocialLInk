const express = require("express");
const userRouter = express.Router();
const registerationController = require("../controller/user/registerationController");

userRouter.get("/", (req, res) => {
  res.json({
    message: "user route open",
  });
});

userRouter.post("/", registerationController.createUser);

module.exports = userRouter;
