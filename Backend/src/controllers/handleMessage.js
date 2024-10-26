import { Chat, Message } from "../Models/chat.model.js";
import asyncHandler from "../Services/AsyncHandler.js";
import { GoogleGenerativeAI }  from "@google/generative-ai";


const addMessageToChat = async (req, res) => {
  try {
    const { chatId, prompt } = req.body;
    console.log(prompt)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(prompt);
    if(!result.response.text()){
      res.status(403).json({ message: "Please try again leter.", success:false, chat:null })
    }
    
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found." });
    }
    
    const message = {
      prompt,
      solution:result.response.text()
    }

    chat.messages.push(message);
    await chat.save();

    return res.status(201).json({ message: "Message added successfully.", chat });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

export default addMessageToChat;