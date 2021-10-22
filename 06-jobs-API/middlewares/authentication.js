const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnAuthenticationError } = require("../errors");

const auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new UnAuthenticationError("Authentication failur");
  }

  const token = authorization.split(" ")[1];
  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET);

    //  const user = User.findById(payload.id).select("-password");
    //  req.user = user

    const { userId, name } = payload;
    req.user = { userId, name };
    next();
  } catch (error) {
    throw new UnAuthenticationError("Authentication failur");
  }
};

module.exports = auth;
