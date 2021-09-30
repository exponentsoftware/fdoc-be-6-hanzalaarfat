const express = require("express");
const router = express.Router();
const likeController = require("../controller/likeController");
const viewController = require("../controller/viewController");
const ratingController = require("../controller/ratingController");

router.post("/like", likeController.addlikes);
router.get("/like", likeController.getMostTodoLike);

router.post("/view", viewController.addViews);

router.post("/rating", ratingController.addRating);
router.get("/rating", ratingController.getMostTodoRating);

module.exports = router;
