import { Chat, Message } from "../Models/chat.model.js";
import asyncHandler from "../Services/AsyncHandler.js";

  // Add a message to a chat
const addMessageToChat = async (req, res) => {
    try {
      const { chatId, prompt, solution } = req.body;
  
      const chat = await Chat.findById(chatId);
      if (!chat) {
        return res.status(404).json({ message: "Chat not found." });
      }
  
      const message = { prompt, solution };
      chat.messages.push(message);
      await chat.save();
  
      res.status(201).json({ message: "Message added successfully.", chat });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error." });
    }
  };

  export default addMessageToChat;