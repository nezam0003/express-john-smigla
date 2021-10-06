// const { CustomAPIError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  console.log(err);
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again later" });
};

module.exports = errorHandler;
