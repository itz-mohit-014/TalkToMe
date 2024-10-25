import React, { useState } from "react";
import Header from "./Header";
import MarkdownRenderer from "./markdownRender";
// icons
import { Mic, Send } from 'lucide-react';
import LeftSidebar from "./LeftSidebar";
import SuggestionTags from "./SuggestionTags";
import PromptBox from "./PromptBox";

const ChatBotUI = () => {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const sendMessage = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();
      console.log(data);

      setAnswer(data);
      setPrompt("");
    } catch (error) {
      console.log("err", error);
      setPrompt("");
    }
  };

  return (
    <section className="p-4">
      <Header />

    <div className="min-h-dvh w-full flex items-center justify-center flex-col gap-4">
      <div id="chat-box">
        {answer ? (
          <MarkdownRenderer markdownText ={answer}/>
        ) : (
          ""
        )}
      </div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your message here..."
        className="p-2 outline-none bg-transparent border border-white rounded-md px-6 text-xl w-4/5"
        />
      <div className="flex items-center justify-center gap-4">

      <button
        onClick={sendMessage}
        className="border-2 border-indigo-500 p-2 mt-4 rounded-md px-6 active:scale-95"
        >
        Send
      </button>
      <button className="border-2 border-indigo-500 p-2 mt-4 rounded-md px-6 active:scale-95" onClick={() => setAnswer("")}>clear</button>
        </div>
    </div>
          </section>
  );
};

export {ChatBotUI};




const messages = [
  { id: 1, text: "Hi! How can I help you today?", isBot: true },
  { id: 2, text: "I need help with setting up my account", isBot: false },
  { id: 3, text: "I'll guide you through the account setup process. What's your preferred email address?", isBot: true },
  { id: 1, text: "Hi! How can I help you today?", isBot: true },
  { id: 2, text: "I need help with setting up my account", isBot: false },
  { id: 3, text: "I'll guide you through the account setup process. What's your preferred email address?", isBot: true },
  { id: 1, text: "Hi! How can I help you today?", isBot: true },
  { id: 2, text: "I need help with setting up my account", isBot: false },
  { id: 3, text: "I'll guide you through the account setup process. What's your preferred email address?", isBot: true },
  { id: 1, text: "Hi! How can I help you today?", isBot: true },
  { id: 2, text: "I need help with setting up my account", isBot: false },
  { id: 3, text: "I'll guide you through the account setup process. What's your preferred email address?", isBot: true },
  { id: 1, text: "Hi! How can I help you today?", isBot: true },
  { id: 2, text: "I need help with setting up my account", isBot: false },
  { id: 3, text: "I'll guide you through the account setup process. What's your preferred email address?", isBot: true },
  { id: 1, text: "Hi! How can I help you today?", isBot: true },
  { id: 2, text: "I need help with setting up my account", isBot: false },
  { id: 3, text: "I'll guide you through the account setup process. What's your preferred email address?", isBot: true },
  { id: 1, text: "Hi! How can I help you today?", isBot: true },
  { id: 2, text: "I need help with setting up my account", isBot: false },
  { id: 3, text: "I'll guide you through the account setup process. What's your preferred email address?", isBot: true },
  { id: 1, text: "Hi! How can I help you today?", isBot: true },
  { id: 2, text: "I need help with setting up my account", isBot: false },
  { id: 3, text: "I'll guide you through the account setup process. What's your preferred email address?", isBot: true },
];

const ChatUI = () => {
  const [allMessageList, setAllMessageList] = useState([])
  const [message, setMessage] = useState("");
  
  const [chatHistory, setChatHistroy] = useState([]);
  // Sample chat history data
  const chatHistories = [
    { id: 1, title: "Getting Started Help", date: "Today" },
    { id: 2, title: "Travel Recommendations", date: "Today" },
    { id: 3, title: "Recipe Search", date: "Yesterday" },
    { id: 4, title: "Technical Support", date: "Yesterday" },
    { id: 5, title: "Weather Inquiry", date: "Last Week" },
  ];

  // Sample messages

  return (
    <div className="flex h-screen bg-gray-100">
      
      <LeftSidebar chatHistory={chatHistories} setAllMessageList={setAllMessageList}/>

      {/* Main Chat Area */}
      <div className={`flex-1 flex flex-col gap-4 p-4 border border-black ${ allMessageList.length < 1 ? "justify-center" : ""} relative`}>
        {/* Chat Messages */}
        {
          allMessageList.length > 0 
          ?  <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {allMessageList.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg?.prompt ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  msg?.solution
                    ? 'bg-white text-gray-800'
                    : 'bg-blue-600 text-white'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
          : ""
        }

        {/* Input Area */}
        {
          message.length < 1 && <SuggestionTags/>
        }
        
        <PromptBox setAllMessageList={setAllMessageList} />

      </div>
    </div>
  );
};

export default ChatUI;