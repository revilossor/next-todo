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
        err ? reject(err) : resolve({ body, status: "todo" });
      });
    });
  },
  list: user => {
    return new Promise((resolve, reject) => {
      Todo.find({ user }, "body status", (err, todos) => {
        err
          ? reject(err)
          : resolve(todos.map(({ body, status }) => ({ body, status })));
      });
    });
  },
  bump: (user, body) => {
    const statusMap = {
      todo: "doing",
      doing: "done",
      done: "delete"
    };
    return new Promise((resolve, reject) => {
      Todo.findOne({ user, body }, "status", (err, todo) => {
        if (err) {
          return reject(err);
        }
        const status = statusMap[todo.status];
        status === "delete"
          ? Todo.deleteOne({ user, body }).then(resolve({ body, status }))
          : Todo.updateMany({ user, body }, { status }, {}, err => {
              err ? reject(err) : resolve({ body, status });
            });
      });
    });
  }
};
