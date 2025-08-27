export const createZeroShotPrompt = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ message: "Prompt content is required." });
    }
    // For zero-shot, set role to 'zero-shot' and type accordingly
    const prompt = await Prompt.create({ role: "zero-shot", content, type: "zero-shot" });
    res.status(201).json(prompt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
