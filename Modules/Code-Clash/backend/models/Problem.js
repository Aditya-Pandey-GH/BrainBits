const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: String,
  description: String,
  constraints: String,
  difficulty: String,
  testCases: Array
});

module.exports = mongoose.model("Problem", problemSchema);
