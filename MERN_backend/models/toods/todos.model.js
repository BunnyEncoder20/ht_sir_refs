import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    cosntent: {
      type: String,
      default: "",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  {
    timestamps: true,
  }
);
