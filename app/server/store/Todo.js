const mongoose = require("mongoose");

module.exports = mongoose.model(
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
