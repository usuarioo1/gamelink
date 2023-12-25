const { expressjwt } = require("express-jwt");
require("dotenv").config();

const getToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const [type, token] = authorization.split(" ");
    return type === "Bearer" ? token : null;
    next()
  }

  return null;
};
const auth = expressjwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  getToken
});
  
module.exports = auth;
