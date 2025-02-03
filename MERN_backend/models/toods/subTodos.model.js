import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
