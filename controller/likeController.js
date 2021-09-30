const Like = require("../Models/Like");

exports.addlikes = async (req, res) => {
  const { userId, todoId } = req.body;

  const todo_like = await Like.findOne({ todoId: todoId });
  // console.log(todo_like.todoId);
  if (!todo_like) {
    // viewed_by = []
    const like = new Like({
      userId,
      todoId,
      like: 1,
    });
    const liked = await like.save();

    if (liked) {
      return res.status(201).json({
        message: "liked_by added successfully",
      });
    }
    return res.status(400).json({
      message: "Something went wrong",
    });
  } else {
    const like = await Like.find({ userId: userId });

    console.log("chek", like, typeof like);
    if (!like) {
      const existingTodoliked = await Like.findOneAndUpdate(
        { todoId: todo_like.todoId },
        // { $push: { userId: userId } },
        { $inc: { like: 1 } }
      );
      return res.status(201).json({
        message: "liked_by added successfully",
      });
    } else {
      return res.status(201).json({
        message: "already liked by the user",
      });
    }
  }
};

exports.getMostTodoLike = async (req, res) => {
  try {
    console.log("Here");
    const todo = await Like.find().sort("-like");

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
