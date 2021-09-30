const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    dynamicData: {
      type: mongoose.Schema.Types.Mixed, // new key dyanamc banegi
    },
    status: {
      type: Boolean,
      default: false,
    },
    // like:[ {
    //   type: Boolean,
    //   default: false,
    // }],
    username: {
      type: String,
      required: [true, "Please Enter username"],
    },
    category: {
      type: String,
      enum: ["task", "hobby", "work"],
      default: "task",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Todo", TodoSchema);
