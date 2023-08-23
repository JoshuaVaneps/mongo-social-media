const { Schema, Types } = require("mongoose");

const commentSchema = new Schema(
  {
    commentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    commentText: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
    },
    commentDate: {
      type: Date,
      default: Date.now,
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = commentSchema;
