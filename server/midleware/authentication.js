// Whenever you register or login successfuly, you will get a token that matches the user {id,username}. If you have a token you may access certain pages. This middleware is used on those pages(personal pages..).

require("dotenv").config();
const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("../errors/index");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AuthenticationError("Token not provided..");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = { userId: payload.userId, username: payload.username };
  } catch (error) {
    throw new AuthenticationError("Token not provided.");
  }
  next();
};

module.exports = authenticationMiddleware;
