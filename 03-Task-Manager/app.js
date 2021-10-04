/********* Dependencies *********/
const express = require("express");
const tasks = require("./routes/tasks");

const app = express();

/****** Middlewares ******/
app.use(express.json());

/******** Routes *******/
app.use("/api/v1/tasks", tasks);
const port = 5000;

app.listen(port, () => console.log(`server runnig on port ${port}`));
