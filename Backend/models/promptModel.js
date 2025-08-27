const promptSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["system", "user", "zero-shot"],
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["instruction", "zero-shot"], // Extend if needed
    default: "instruction"
  }
}, { timestamps: true });
