const todolistRouter = require("./todolist");

module.exports = (app) => {
  app.use("/todolist", todolistRouter);
};