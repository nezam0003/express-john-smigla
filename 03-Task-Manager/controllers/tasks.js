/******* Dependencies */
const Task = require("../models/tasks");

/********** Get all tasks */
const getAllTasks = (req, res) => {
  res.send("all tasks");
};

/********** Post task */
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
  }
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
