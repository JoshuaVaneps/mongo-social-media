const router = require("express").Router();

const {
  getUsers,
  createUser,
  getSingleUser,
  updateUserProfile,
  deleteUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router
  .route("/:userId")
  .get(getSingleUser)
  .put(updateUserProfile)
  .delete(deleteUser);

module.exports = router;
