import mongoose from "mongoose";

const promptSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["system", "user"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Prompt", promptSchema);
