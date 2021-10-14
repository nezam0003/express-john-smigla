const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const authenticationMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    throw new CustomAPIError("Authentication failure", 401);
  }

  //   get token
  const token = authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { username, id } = decoded;
    req.user = { username, id };
    next();
  } catch (error) {
    throw new CustomAPIError("Authentication failure", 401);
  }
};

module.exports = authenticationMiddleware;
