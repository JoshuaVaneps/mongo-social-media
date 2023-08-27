const router = require("express").Router();

const {
  createFriend,
  removeFriend,
} = require("../../controllers/friendsController");

router.route("/").post(createFriend).delete(removeFriend);

module.exports = router;
