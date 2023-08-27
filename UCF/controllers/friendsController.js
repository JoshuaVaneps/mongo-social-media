const { User } = require("../models");
const { ObjectId } = require("mongoose").Types;

module.exports = {
  async createFriend(req, res) {
    try {
      let user;
      // Check if the parameter is a valid ObjectId (user ID)
      if (ObjectId.isValid(req.params.usernameOrId)) {
        user = await User.findOne({ _id: req.params.usernameOrId });
      } else {
        user = await User.findOne({ username: req.params.usernameOrId });
      }

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Add the friend's _id to the user's friends array
      user.friends.addToSet(req.body.friendId); // Assuming req.body.friendId contains the friend's _id
      await user.save(); // Save the user with the updated friends array

      res.json({ message: "Friend created" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "An error occurred" });
    }
  },
  async removeFriend(req, res) {
    try {
      // Find the user
      let user;
      // Check if the parameter is a valid ObjectId (user ID)
      if (ObjectId.isValid(req.params.usernameOrId)) {
        user = await User.findOne({ _id: req.params.usernameOrId });
      } else {
        user = await User.findOne({ username: req.params.usernameOrId });
      }
      if (!user) {
        return res.status(404).json({ message: "No such user exists" });
      }

      //   find the friend
      const friend = await User.findOne({ _id: req.body.friendId });
      if (!friend) {
        return res.status(404).json({ message: "No such friend exists" });
      }

      //   if friend is in users friend list remove it from friend list
      const isFriend = user.friends.includes(req.body.friendId);

      if (!isFriend) {
        return res.status(404).json({ message: "no friend found" });
      } else if (isFriend) {
        await User.updateOne(
          { _id: user._id },
          { $pull: { friends: req.body.friendId } }
        );
      }

      res.json({ message: "Friend removed" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "An error occurred" });
    }
  },
};
