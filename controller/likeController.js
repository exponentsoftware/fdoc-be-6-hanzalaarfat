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
    const like = await Like.findOne({ userId: userId });

    if (!like) {
      const existingTodoliked = await Like.findOneAndUpdate(
        { todoId: todo_like.todoId },
        { $push: { userId: userId } }
      );
      console.log(existingTodoliked);
    } else {
      return res.status(201).json({
        message: "already liked by the user",
      });
    }
  }
};
