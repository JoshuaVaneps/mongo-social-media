const { Schema, Types, model } = require("mongoose");
const postSchema = require("./Post");

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        len: [6],
      },
    },
    posts: [postSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model("user", userSchema);

module.exports = User;
