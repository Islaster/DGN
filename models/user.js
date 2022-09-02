const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
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
