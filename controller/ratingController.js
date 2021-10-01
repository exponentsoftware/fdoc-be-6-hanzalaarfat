const Rating = require("../Models/Rating");

exports.addRating = async (req, res) => {
  const { userId, todoId, rate } = req.body;

  const todo_rating = await Rating.findOne({ todoId: todoId });
  // console.log(todo_like.todoId);
  if (!todo_rating) {
    // viewed_by = []
    const rating = new Rating({
      userId,
      todoId,
      rating: rate,
    });
    const rated = await rating.save();

    if (rated) {
      return res.status(201).json({
        message: "Rated_by added successfully",
      });
    } else {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  } else {
    const rating = await Rating.find({ userId: userId });
    console.log("ratingggggg", rating.userId);

    if (!rating) {
      console.log("ratingggggg", rating.userId);
      const existingRating = await Rating.findOneAndUpdate(
        { todoId: todo_rating.todoId },
        { $push: { userId: userId }, $inc: { rating: rate } },

        { new: true, runValidator: true, useFindAndModify: false }
      );
      return res.status(201).json({
        message: "Rated_by added successfully",
      });
      console.log(existingRating);
    } else {
      return res.status(201).json({
        message: "already Rated_by by the user",
      });
    }
  }
};

exports.getMostTodoRating = async (req, res) => {
  try {
    console.log("Here");
    const todo = await Rating.find().sort({ rating: -1 });

    console.log(todo);
    if (!todo) {
      res.status(404).json({
        success: false,
        message: `Not Found any Todo Data`,
      });
    }

    res.status(200).json({ success: true, message: "All Todo", todo });
  } catch (err) {
    console.log(err);
  }
};
