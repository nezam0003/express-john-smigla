/********* Dependencies *********/
const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config();
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/error-handler");
const app = express();

/****** Middlewares ******/
app.use(express.static("./public"));
app.use(express.json());

/******** Routes *******/
app.use("/api/v1/tasks", tasks);

/****** 404 not found******/
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server runnig on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
