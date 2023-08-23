const { Schema, model, Types } = require("mongoose");
const commentSchema = require("./Comment");

const postSchema = new Schema(
  {
    postId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    postTitle: {
      type: String,
      required: true,
      maxlength: 20,
      minlength: 4,
      default: "Unnamed post",
    },
    postContents: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
    },
    postDate: {
      type: Date,
      default: Date.now,
    },
    comments: [commentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Post = model("post", postSchema);

module.exports = Post;
