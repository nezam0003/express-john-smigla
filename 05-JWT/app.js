require("dotenv").config();
require("express-async-errors");
const express = require("express");
const mainRouter = require("./routes/main");

const app = express();

/******** Middlewares ******/
const notFoundHandler = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", mainRouter);

const port = process.env.PORT || 4000;

app.use(notFoundHandler);
app.use(errorHandler);

const start = async () => {
  try {
    app.listen(port, () => console.log(`server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
