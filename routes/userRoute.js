const express = require("express");
const {
  loginRegister,
  editUser,
  deleteUser,
  getUser,
  loginUser,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/users").post(loginRegister).get(getUser);

userRouter.route("/users/:id").put(editUser).delete(deleteUser);

userRouter.route("/login").post(loginUser);

module.exports = userRouter;
