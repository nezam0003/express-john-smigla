const notFound = (req, res) =>
  res.status(404).send("Requested URL does not found...");

module.exports = notFound;
