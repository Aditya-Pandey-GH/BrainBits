const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  players: [String],
  winner: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Match", matchSchema);
