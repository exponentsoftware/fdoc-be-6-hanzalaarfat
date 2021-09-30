const mongoose = require("mongoose");
const ViewSchema = new mongoose.Schema(
  {
    view: {
      type: Number,
      default: 0,
    },
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
module.exports = mongoose.model("View", ViewSchema);
