import express from "express";
import { sendMessage, getMessages } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/history/:user1/:user2", getMessages);

export default router;