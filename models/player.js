const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
});
