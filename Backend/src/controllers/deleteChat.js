import asyncHandler from "../Services/AsyncHandler.js";
import { Chat } from "../Models/chat.model.js";

// Delete a chat
const deleteChat = asyncHandler( async (req, res) => {
  try {
    const { chatId } = req.body;
    if (!chatId) {
      return res.status(404).json({ message: "Chat not found." });
    }

    const chat = await Chat.findByIdAndDelete(chatId);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found." });
    }

    return res.status(200).json({ message: "Chat deleted successfully." });
  } catch (error) {
    console.error(error);
   return res.status(500).json({ message: "Internal server error." });
  }
});

export default deleteChat ;
