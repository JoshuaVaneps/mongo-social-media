const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
reactionSchema.virtual("formattedCreatedAt").get(function () {
  return this.createdAt.toLocaleString(); // Format the timestamp as needed
});

module.exports = reactionSchema;
