const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  // Dashboard data
  streak: { type: Number, default: 0 },
  studyHours: { type: Number, default: 0 },
  tasksCompleted: { type: Number, default: 0 },
  badges: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", userSchema);
