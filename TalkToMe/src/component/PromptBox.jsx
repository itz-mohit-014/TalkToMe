import { Mic, Send } from 'lucide-react';
import React, { useState } from 'react'

const PromptBox = ({setAllMessageList}) => {
    const [message, setMessage] = useState("");
    const [isRecording, setIsRecording] = useState(false);

    const handleSend = () => {
        if (message.trim()) {
          console.log('Sending message:', message);
          // response send and then append.
          setAllMessageList((old) => {
            const newMessages = [...old];
            // newMessages.push(message)
            return newMessages;
          } )
          setMessage('');
        }
      };     

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="border-t bg-gray-50 border border-slate-300 p-4 overflow-hidden rounded-xl">
    <div className="flex items-center gap-2">
      <button
        onClick={toggleRecording}
        className={`p-2 rounded-full ${
          isRecording
            ? 'bg-red-100 text-red-600'
            : 'hover:bg-gray-100 text-gray-600'
        }`}
      >
        <Mic className="w-5 h-5" />
      </button>
      <div className="flex-1 relative">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Your Mental Health Assistence"
          className="w-full p-2 pr-10 border border-gray-200 rounded-lg placeholder-shown:text-gray-300 focus:outline-none focus:border-blue-500 resize-none"
          rows="1"
        />
      </div>
      <button
        onClick={handleSend}
        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  </div>
  )
}

export default PromptBox