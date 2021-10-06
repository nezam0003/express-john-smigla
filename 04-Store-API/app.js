/********** Dependencies */
require("dotenv").config();
const express = require("express");
const connectDB = require("./DB/connectDB");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");
const products = require("./routes/products");

const app = express();

/******** Custom Middlewares */

/***** Built-in Middlewares */
app.use(express.json());

/******** Routes ********/
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.use("/api/v1/products", products);

/******* Custom Middlewares */
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is Runnging on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
