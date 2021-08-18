const { find, create, delete_ } = require("../models/todolist");

const getTodolist = async (req, res) => {
  const [todolist] = await find(req.query);
  res.status(200).json(todolist);
};

const createTodolist = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("Task has been created");
  } catch (err) {
    res.status(500).send("Error creating task");
  }
};

const deleteTodolist = async (req, res) => {
  try {
    await delete_(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send("Error deleting task");
  }
};

module.exports = {
  getTodolist,
  createTodolist,
  deleteTodolist,
};