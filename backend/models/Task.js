const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName: String,
  status: String
});

module.exports = mongoose.model("Task", taskSchema);