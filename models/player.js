const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  exp: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  stats: {
    type: Number,
    required: true,
  },
  bag: [{}],
});

module.exports = mongoose.model("Player", playerSchema);
