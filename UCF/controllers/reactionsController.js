const { Thought } = require("../models");

module.exports = {
  async createReaction(req, res) {
    try {
      const { thoughtId } = req.params;
      const { reactionBody, username } = req.body;

      const updatedThought = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: {
            reactions: {
              reactionBody: reactionBody,
              username: username,
            },
          },
        },
        { runValidators: true, new: true }
      );

      if (!updatedThought) {
        return res
          .status(404)
          .json({ message: "Thought not found or no thought with this ID" });
      }

      res.json({ message: "Reaction added to thought" });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  async removeReaction(req, res) {
    try {
      const { thoughtId } = req.params;
      const { reactionId } = req.body;

      const updatedThought = await Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $pull: { reactions: { reactionId: reactionId } },
        },
        { new: true }
      );

      if (!updatedThought) {
        return res
          .status(404)
          .json({ message: "Thought not found or no thought with this ID" });
      }

      await updatedThought.save();
      res.json({ message: "Reaction removed from thought" });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },
};
