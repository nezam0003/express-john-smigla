require("dotenv").config();
require("express-async-errors");
const express = require("express");

const app = express();

const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

/***** Built-in Middlewares */
app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to jobs page"));

/***** Error handling Middleware */
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    app.listen(port, () => console.log(`server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
