import { createZeroShotPrompt, createOneShotPrompt, createMultiShotPrompt } from "../controllers/promptController.js";
// POST /api/prompts/zero-shot - Create a zero-shot prompt
router.post("/zero-shot", createZeroShotPrompt);
router.post("/one-shot", createOneShotPrompt);
router.post("/multi-shot", createMultiShotPrompt);