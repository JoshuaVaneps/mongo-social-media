const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  usernames,
  emails,
  getRandomThought,
  getRandomReaction,
  getRandomUser,
} = require("./data");

// Start the seeding runtime timer
console.time("seeding");

connection.once("open", async () => {
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length) {
    await connection.dropCollection("users");
  }

  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection("thoughts");
  }

  const newUsers = [];

  for (let i = 0; i < usernames.length; i++) {
    newUsers.push({
      username: usernames[i],
      email: emails[i],
    });
  }
  const createdUsers = await User.insertMany(newUsers);

  for (const user of createdUsers) {
    const userThoughts = [];

    for (let i = 0; i < 5; i++) {
      const randomThought = getRandomThought();
      const reactions = [];

      for (let j = 0; j < 3; j++) {
        const randomReactionUser = getRandomUser();
        reactions.push({
          reactionBody: getRandomReaction(),
          username: randomReactionUser,
        });
      }

      userThoughts.push({
        thoughtText: randomThought,
        username: user.username,
        reactions: reactions,
      });
    }

    for (const thoughtData of userThoughts) {
      const newThought = new Thought({
        thoughtText: thoughtData.thoughtText,
        username: thoughtData.username,
        reactions: thoughtData.reactions,
        user: user._id,
      });

      await newThought.save();
      user.thoughts.push(newThought._id);
    }

    await user.save();
  }

  console.timeEnd("seeding");
  console.table(newUsers);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
