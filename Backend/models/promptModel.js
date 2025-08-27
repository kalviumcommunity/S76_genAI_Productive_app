const promptSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["system", "user", "zero-shot", "one-shot"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["instruction", "zero-shot", "one-shot"], // Extend if needed
    default: "instruction"
  }
}, { timestamps: true });
