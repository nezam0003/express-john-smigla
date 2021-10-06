const getAllStaticProducts = async (req, res) => {
  throw new Error("async testing error");
  res.status(200).json({ msg: " all static products " });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: " all products " });
};

module.exports = {
  getAllProducts,
  getAllStaticProducts,
};
