import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const todoModel = mongoose.model("todos", todoSchema);
