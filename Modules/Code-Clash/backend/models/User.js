const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  rating: { type: Number, default: 1000 }
});

module.exports = mongoose.model("User", userSchema);
