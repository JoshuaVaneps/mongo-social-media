const { User } = require("../models");
const { ObjectId } = require("mongoose").Types;

module.exports = {
  async createFriend(req, res) {
    try {
      let user;
      // Check if the parameter is a valid ObjectId (user ID)
      if (ObjectId.isValid(req.params.userId)) {
        user = await User.findOne({ _id: req.params.userId });
      } else {
        user = await User.findOne({ username: req.params.userId });
      }

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      let friend;
      // Add the friend's _id to the user's friends array
      // Check if the parameter is a valid ObjectId (user ID)
      if (ObjectId.isValid(req.params.friendId)) {
        friend = await User.findOne({ _id: req.params.friendId });
      } else {
        friend = await User.findOne({ username: req.params.friendId });
      }

      if (!friend) {
        return res.status(404).json({ message: "friend not found" });
      }

      user.friends.addToSet(friend._id); //pushing friend id into the array
      await user.save(); // Save the user with the updated friends array

      res.json({ message: "Friend created" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "An error occurred" });
    }
  },
  async removeFriend(req, res) {
    try {
      let user;
      // Check if the parameter is a valid ObjectId (user ID)
      if (ObjectId.isValid(req.params.userId)) {
        user = await User.findOne({ _id: req.params.userId });
      } else {
        user = await User.findOne({ username: req.params.userId });
      }

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      let friend;
      // Add the friend's _id to the user's friends array
      // Check if the parameter is a valid ObjectId (user ID)
      if (ObjectId.isValid(req.params.friendId)) {
        friend = await User.findOne({ _id: req.params.friendId });
      } else {
        friend = await User.findOne({ username: req.params.friendId });
      }

      if (!friend) {
        return res.status(404).json({ message: "friend not found" });
      }

      //   if friend is in users friend list remove it from friend list
      const isFriend = user.friends.includes(friend._id);

      if (!isFriend) {
        return res.status(404).json({ message: "no friend found" });
      } else if (isFriend) {
        await User.updateOne(
          { _id: user._id },
          { $pull: { friends: friend._id } }
        );
      }

      res.json({ message: "Friend removed" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "An error occurred" });
    }
  },
};
