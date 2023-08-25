const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought);
router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);

module.exports = router;
