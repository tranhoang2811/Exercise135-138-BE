import mongoose from "mongoose";

const mongooseLeanId = require("mongoose-lean-id");

const Schema = mongoose.Schema;

const user = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

user.plugin(mongooseLeanId);

const User = mongoose.model("User", user);

export default User;
