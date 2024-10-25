import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    prompt: {
      type: String,
      require: true,
      trim: true,
    },
    solution: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);

const chatSchema = new mongoose.Schema( {
      title: {
        type: String,
        trim: true,
      },
      messages: [messageSchema], // Embedded messages
    },
    { timestamps: true }
  );
  
export const Chat = mongoose.model("Chat", chatSchema);