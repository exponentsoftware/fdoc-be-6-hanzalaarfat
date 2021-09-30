const express = require("express");
const router = express.Router();
const likeController = require("../controller/likeController");
const viewController = require("../controller/viewController");
const ratingController = require("../controller/ratingController");

router.get("/like", likeController.addlikes);
router.get("/view", viewController.addViews);
router.post("/rating", ratingController.addRating);

module.exports = router;
