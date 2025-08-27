import express from "express";
import { createPrompt, getPrompts } from "../controllers/promptController.js";

const router = express.Router();

// POST /api/prompts - Create a system/user prompt
router.post("/", createPrompt);

// GET /api/prompts?role=system - Retrieve prompts (optional role filter)
router.get("/", getPrompts);

export default router;
