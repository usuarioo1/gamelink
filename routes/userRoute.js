const express = require("express");
const {
  loginRegister,
  editUser,
  deleteUser,
  getUser,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.route("/users").post(loginRegister).post(getUser);

userRouter.route("/users/:id").put(editUser).delete(deleteUser);

module.exports = userRouter;
