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

export const createOneShotPrompt = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ message: "Prompt content is required." });
    }
    // For one-shot, set role to 'one-shot' and type accordingly
    const prompt = await Prompt.create({ role: "one-shot", content, type: "one-shot" });
    res.status(201).json(prompt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createMultiShotPrompt = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ message: "Prompt content is required." });
    }
    const prompt = await Prompt.create({ role: "multi-shot", content, type: "multi-shot" });
    res.status(201).json(prompt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createDynamicPrompt = async (req, res) => {
  try {
    const { userInput, contextInfo } = req.body;

    if (!userInput) {
      return res.status(400).json({ message: "User input is required." });
    }

    // Construct prompt dynamically using template strings
    let promptContent = `You are a helpful assistant.\n\nUser said: "${userInput}"\n`;

    if (contextInfo) {
      promptContent += `Here is some additional context: ${contextInfo}\n`;
    }

    promptContent += "Please provide a detailed and helpful response.";

    // Save as a dynamic prompt with 'user' role and type
    const prompt = await Prompt.create({
      role: "user",
      content: promptContent,
      type: "dynamic"
    });

    res.status(201).json(prompt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createChainOfThoughtPrompt = async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ message: "Question is required." });
    }

    // Example CoT prompt template with step-by-step reasoning
    const promptContent = `
Problem: What is the value of 3 + 4 + 19 - 12?
Solution:
- Start with the first two numbers: 3 + 4 = 7.
- Add the next number: 7 + 19 = 26.
- Subtract the last number: 26 - 12 = 14.
- Final answer: 14.

Problem: ${question}
Solution:
`;

    const prompt = await Prompt.create({
      role: "system",
      content: promptContent,
      type: "chain-of-thought"
    });

    res.status(201).json(prompt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

