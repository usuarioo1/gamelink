const express = require("express");
const {
  loginRegister,
  editUser,
  deleteUser,
  getUser,
  loginUser,
  getProfile,
  getVerifyUser
} = require("../controllers/userController");

const auth  = require("../middleware/auth");

const userRouter = express.Router();

userRouter.route("/users").post(loginRegister).get( getUser);

userRouter.route("/users/:id").put(editUser).delete(deleteUser).get(getProfile);

userRouter.route("/login").post(loginUser);

userRouter.route('verifyUser').get(getVerifyUser)

module.exports = userRouter;
