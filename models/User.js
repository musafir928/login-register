const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    confirmed: {
      type: Boolean,
      default: false
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      // when get the user information, password is not selected
      select: false
    },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin", "root"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("user", UserSchema);
