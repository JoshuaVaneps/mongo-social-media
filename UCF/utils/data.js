const usernames = [
  "NarutoUzumaki",
  "SailorMoon",
  "GokuSuperSaiyan",
  "LuffyPirateKing",
  "IchigoKurosaki",
];

const emails = usernames.map(
  (usernames) => `${usernames.toLowerCase()}@shonenjump.com`
);

const thoughts = [
  "Believe it!",
  "Moon Prism Power, Make Up!",
  "Kamehameha!",
  "I'm gonna be the Pirate King!",
  "Bankai!",
];

const reactions = [
  "Dattebayo!",
  "In the name of the moon, I'll punish you!",
  "It's over 9000!",
  "I'm gonna be the Pirate King!",
  "Getsuga Tensho!",
];

const getRandomArr = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomThought = () => {
  return getRandomArr(thoughts);
};

const getRandomReaction = () => {
  return getRandomArr(reactions);
};

const getRandomUser = () => {
  return getRandomArr(usernames);
};

// const getRandomThought = (int) => {
//   const thoughts = [];
//   for (let i = 0; i < int; i++) {
//     results.push({
//       thoughtText: getRandomArr(thoughtTexts),
//       username: getRandomArr(usernames),
//     });
//   }
//   return thoughts;
// };

module.exports = {
  usernames,
  emails,
  getRandomThought,
  getRandomReaction,
  getRandomUser,
};
