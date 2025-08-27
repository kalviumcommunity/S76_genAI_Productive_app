import { createZeroShotPrompt, createOneShotPrompt, createMultiShotPrompt , createDynamicPrompt, createChainOfThoughtPrompt} from "../controllers/promptController.js";
// POST /api/prompts/zero-shot - Create a zero-shot prompt
router.post("/zero-shot", createZeroShotPrompt);
router.post("/one-shot", createOneShotPrompt);
router.post("/multi-shot", createMultiShotPrompt);
router.post("/dynamic", createDynamicPrompt);
router.post("/chain-of-thought", createChainOfThoughtPrompt);