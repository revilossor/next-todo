const mongoose = require("mongoose");

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    user: String,
    body: String,
    status: {
      type: String,
      enum: ["todo", "doing", "done"],
      default: "todo"
    }
  })
);

module.exports = Todo;
