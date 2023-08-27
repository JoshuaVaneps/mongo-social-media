const router = require("express").Router();

const {
  getUsers,
  createUser,
  getSingleUser,
  updateUserProfile,
  deleteUser,
} = require("../../controllers/userController");

const {
  createFriend,
  removeFriend,
} = require("../../controllers/friendsController");

router.route("/").get(getUsers).post(createUser);

router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUserProfile)
  .delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(createFriend)
  .delete(removeFriend);
module.exports = router;
