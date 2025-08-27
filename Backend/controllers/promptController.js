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


