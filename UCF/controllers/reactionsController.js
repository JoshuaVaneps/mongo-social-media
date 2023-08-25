const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");

// create a new thought
module.exports = {
  async createReactions(req, res) {
    try {
      const thought = await Thoughts.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: "Thought created, but no user with this ID" });
      }
      res.json({ message: "Thought created" });
    } catch (err) {
      console.error(err);
    }
  },




  
};
