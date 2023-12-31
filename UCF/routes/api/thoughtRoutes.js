const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
} = require("../../controllers/thoughtController");

const {
  createReaction,
  removeReaction,
} = require("../../controllers/reactionsController");

router.route("/").get(getThoughts).post(createThought);
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);

router
  .route("/:thoughtId/reactions")
  .post(createReaction)
  .delete(removeReaction);
module.exports = router;
