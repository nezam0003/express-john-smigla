/********** Dependencies */
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

const port = 4000;
app.listen(port, () => console.log(`Server is Runnging on port ${port}`));
