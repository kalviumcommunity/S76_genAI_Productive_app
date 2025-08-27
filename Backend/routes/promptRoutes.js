import { createZeroShotPrompt, createOneShotPrompt } from "../controllers/promptController.js";
// POST /api/prompts/zero-shot - Create a zero-shot prompt
router.post("/zero-shot", createZeroShotPrompt);
router.post("/one-shot", createOneShotPrompt);