/********** Get all tasks */
const getAllTasks = (req, res) => {
  res.send("all tasks");
};

/********** Post task */
const createTask = (req, res) => {
  res.send("post task");
};

/********** Get a task */
const getSingleTask = (req, res) => {
  res.send("single tasks");
};

/********** Update a task */
const updateTask = (req, res) => {
  res.send("update task");
};

/********** Delete a Task */
const deleteTask = (req, res) => {
  res.send("delete task");
};

/******** Module Exports */
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
