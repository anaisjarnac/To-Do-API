const db = require("../db");

const find = async () => {
  return db.promise().query("select * from todolist");
};

const create = async ({ id, task, done }) => {
  return db
    .promise()
    .query(
      "INSERT INTO todolist ( id, task, done ) VALUES (?, ?, ?)",
      [id, task, done]
    );
};

const delete_ = (id) => {
    return db.promise().query("DELETE FROM todolist WHERE id=?", [id]);
  };

module.exports = { find, create, delete_ };