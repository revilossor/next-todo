const mongoose = require("mongoose");
const Todo = require("./Todo");

const mongoDB = "mongodb://mongo:27017/todos";
mongoose.Promise = global.Promise;

module.exports = {
  connect: () => {
    mongoose.connect(
      mongoDB,
      { useNewUrlParser: true }
    );
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    return new Promise(resolve => {
      db.once("open", resolve);
    });
  },
  add: (user, body = "nothing") => {
    return new Promise((resolve, reject) => {
      const todo = new Todo({
        user,
        body
      });
      todo.save(err => {
        err ? reject(err) : resolve(todo.body);
      });
    });
  },
  list: user => {
    return new Promise((resolve, reject) => {
      Todo.find({ user: user }, "body status", (err, todos) => {
        err
          ? reject(err)
          : resolve(todos.map(({ body, status }) => ({ body, status })));
      });
    });
  },
  update: (user, body, status) => {
    return new Promise((resolve, reject) => {
      Todo.updateMany({ user, body }, { status }, {}, err => {
        err ? reject(err) : resolve();
      });
    });
  }
};
