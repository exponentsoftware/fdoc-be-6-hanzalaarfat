const View = require("../Models/Views");

exports.addViews = async (req, res) => {
  const { userId, todoId } = req.body;

  const todo_view = await View.findOne({ todoId: todoId });
  // console.log(todo_like.todoId);
  if (!todo_view) {
    // viewed_by = []
    const view = new View({
      userId,
      todoId,
      view: 1,
    });
    const viewed = await view.save();

    if (viewed) {
      return res.status(201).json({
        message: "viewed_by added successfully",
      });
    }
    return res.status(400).json({
      message: "Something went wrong",
    });
  } else {
    const view = await View.findOne({ userId: userId });

    if (!view) {
      const existingViewed = await Like.findOneAndUpdate(
        { todoId: todo_view.todoId },
        { $push: { userId: userId }, $inc: { view: 1 } }
      );
      console.log(existingViewed);
    } else {
      return res.status(201).json({
        message: "already viewed_by by the user",
      });
    }
  }
};
