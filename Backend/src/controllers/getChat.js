import mongoose from "mongoose";
import asyncHandler from "../Services/AsyncHandler.js";
import { Chat } from "../Models/chat.model.js";

const getChatById = async (req, res) => {
  try {
    const { chatId } = req.params;
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found." });
    }
    return res.status(200).json(chat);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

// Get all chats
const getAllChats = async (req, res) => {
  try {
    const chats = await Chat.find();
   return res.status(200).json(chats);
  } catch (error) {
    console.error(error);
   return res.status(500).json({ message: "Internal server error." });
  }
};

const createChat = async (req, res) => {
  try {
    const { title } = req.body;
    const chat = new Chat({ title, messages: [] });
    await chat.save();
   return res.status(201).json({ message: "Chat created successfully.", chat });
  } catch (error) {
    console.error(error);
   return res.status(500).json({ message: "Internal server error." });
  }
};

export { createChat, getAllChats, getChatById };
