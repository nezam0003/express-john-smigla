require("dotenv").config();
require("express-async-errors");

// Extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const authenticateUser = require("./middlewares/authentication");

const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

/***** Built-in Middlewares */
app.use(express.json());

/****** external middlewares */
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, //15mins
    max: 100, // Maximum request accepts
  })
);
app.use(helmet());
app.use(cors());
app.use(xss());

/******* Routes */
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

/***** Error handling Middleware */
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
