const router = require("express").Router();

const {
  createReaction,
  removeReaction,
} = require("../../controllers/reactionsController");

router.route("/").post(createReaction).delete(removeReaction);

module.exports = router;
