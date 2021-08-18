const todolistRouter = require("express").Router();
const {
  createTodolist,
  getTodolist,
  deleteTodolist,
} = require("../controllers/todolist");

todolistRouter.get("/", getTodolist);
todolistRouter.post("/", createTodolist);
todolistRouter.delete("/:id", deleteTodolist);

module.exports = todolistRouter;
