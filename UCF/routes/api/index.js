const router = require("express").Router();
const thoughtRoutes = require("./thoughtRoutes");
const userRoutes = require("./userRoutes");
const friendsRoutes = require("./friendsRoutes");
const reactionsRoutes = require("./reactionsRoutes");

router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);
router.use("/users/:userId/friends/:friendId", friendsRoutes);
router.use("/thoughts/:thoughtId/reactions", reactionsRoutes);

module.exports = router;
