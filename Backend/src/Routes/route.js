import { Router } from "express";
import queryHandler from "../controllers/queryHandler.js";
import deleteChat from "../controllers/deleteChat.js";
import { createChat, getAllChats, getChatById } from "../controllers/getChat.js";
import addMessageToChat from "../controllers/handleMessage.js";
import answerToVoiceMessage from "../controllers/speechToText.js";
import upload from "../multer/uploads.js";

const userMessage = Router();
// userMessage.post("/message", queryHandler);

// Chat CRUD routes
userMessage.post("/chats", createChat); // Create a new chat
userMessage.get("/chats", getAllChats); // Get all chats
userMessage.get("/chats/:chatId", getChatById); // Get chat by ID
userMessage.post("/chats/:chatId/messages", addMessageToChat); // Add message to chat
userMessage.delete("/chats/:chatId", deleteChat); // Delete chat
userMessage.post('/chats/:chatId/voice', upload.single('audio'), answerToVoiceMessage);


export default userMessage;