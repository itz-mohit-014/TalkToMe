import { Loader, Mic, Send } from "lucide-react";
import React, { useState } from "react";
import VoiceRecorderDialog from "./VoiceListening";
import { BASE_URL } from "../services/api";


const PromptBox = ({ setAllMessageList , setIsRecording, isRecording }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    try {
      const id = localStorage.getItem("chatID");
      const response = await fetch(
        `${BASE_URL}/${id}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: message, chatId: id }),
        }
      );
      const data = await response.json();
      if(data?.chat?.messages){
        console.log(data);
        setAllMessageList(data?.chat?.messages);
      }

      if (data?.chat) {
        localStorage.setItem("chatID", data?.chat?._id);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSend = (e) => {
    setLoading(true);
    if (message.trim()) {
      console.log("Sending message:", message);
      sendMessage();
      // response send and then append.
      setAllMessageList((old) => {
        const newMessages = [...old];
        // newMessages.push(message)
        return newMessages;
      });
      setMessage("");
    }
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="border-t bg-gray-50 border border-slate-300 p-4 overflow-hidden rounded-xl fixed bottom-4 w-[90%] sm:w-[80%] left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-2">
        <button
        onClick={() => setIsRecording(true)}
        className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
      >
        <Mic size={24} />
      </button>

        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Your Mental Health Assistence"
            className="w-full p-2 pr-10 border border-gray-200 rounded-lg placeholder-shown:text-gray-300 text-slate-900 focus:outline-none focus:border-blue-500 resize-none"
            rows="1"
          />
        </div>
        <button
          onClick={handleSend}
          className={`p-2 bg-blue-600 disabled:bg-gray-500 text-white rounded-full hover:bg-blue-700 transition-colors `}
          disabled={loading}
        >
          {loading ? (
            <Loader className="w-5 h-5" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PromptBox;
