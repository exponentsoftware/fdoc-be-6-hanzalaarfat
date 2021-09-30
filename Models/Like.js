const mongoose = require("mongoose");
const LikeSchema = new mongoose.Schema(
  {
    // like can be fecth by userid length

    userId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    todoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Like", LikeSchema);
