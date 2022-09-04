const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    username: String,
    player: {
      type: Schema.Types.ObjectId,
      ref: "Player",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
