import Prompt from "../models/promptModel.js";

// Create a new system/user prompt
export const createPrompt = async (req, res) => {
  try {
    const { role, content } = req.body;

    if (!role || !content) {
      return res.status(400).json({ message: "Role and content are required." });
    }

    const prompt = await Prompt.create({ role, content });
    res.status(201).json(prompt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all prompts (optionally filter by role)
export const getPrompts = async (req, res) => {
  try {
    const { role } = req.query;
    const filter = role ? { role } : {};
    const prompts = await Prompt.find(filter).sort({ createdAt: -1 });
    res.status(200).json(prompts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
