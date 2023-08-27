const { User, Thought } = require("../models");
const { ObjectId } = require("mongoose").Types;

const userCount = async () => {
  const numberOfUsers = await User.aggregate().count("userCount");
  return numberOfUsers;
};

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      let user;
      // Check if the parameter is a valid ObjectId (user ID)
      if (ObjectId.isValid(req.params.userId)) {
        user = await User.findOne({ _id: req.params.userId });
      } else {
        user = await User.findOne({ username: req.params.userId });
      }
      if (!user) {
        return res.status(404).json({ message: "No such user exists" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUserProfile(req, res) {
    console.log("You are updating a user profile");
    console.log(req.body);

    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
          },
        },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: "No user found with that ID :(" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a User and remove there Thoughts
  async deleteUser(req, res) {
    try {
      let user;
      // Check if the parameter is a valid ObjectId (user ID)
      if (ObjectId.isValid(req.params.userId)) {
        user = await User.findOne({ _id: req.params.userId });
      } else {
        user = await User.findOne({ username: req.params.userId });
      }
      if (!user) {
        return res.status(404).json({ message: "No such user exists" });
      }

      // Delete the thoughts associated with the user
      await Thought.deleteMany({ username: user.username });

      // Delete the user
      await User.findOneAndRemove({ _id: user._id });

      res.json({
        message: `${user.username} and their thoughts successfully deleted`,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
