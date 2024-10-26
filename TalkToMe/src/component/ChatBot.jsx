import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import MarkdownRenderer from "./markdownRender";
// icons
import SuggestionTags from "./SuggestionTags";
import PromptBox from "./PromptBox";
import VoiceRecordingDialog from "./VoiceListening";
import VoiceRecorderDialog from "./VoiceListening";
import { BASE_URL } from "../services/api";


const ChatUI = () => {
  const [allMessageList, setAllMessageList] = useState([]);
  const messagesEndRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isOpen , setIsOpen] = useState(false)

  const startChat = async (url, Credential = null) => {
    try {
      let response = null;
      if (Credential) {
        response = await fetch(url, Credential);
      } else {
        response = await fetch(url);
      }
      const data = await response.json();
      console.log(data);

      if (data?.chat) {
        localStorage.setItem("chatID", data?.chat?._id);
      }
      if (data?.messages) {
        setAllMessageList(data?.messages);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [allMessageList]);

  useEffect(() => {
    if (!localStorage.getItem("chatID"))
      
      startChat(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: "New Chat" }),
      });
    else {
      const id = localStorage.getItem("chatID");
      startChat(`${BASE_URL}/${id}`);
    }
  }, []);

  return (

    <div className="flex flex-col h-screen bg-gray-100 relative">
      <img src="/logo.png" alt="" className="fixed -top-[20%] left-[-15%] md:left-[25%] h-screen object-contain"/>
      <Header className=""/>
      {/* Main Chat Area */}
      <div
        className={`flex-1 mt-2 flex flex-col gap-4 p-4 pb-16 w-full md:max-w-[80%] mx-auto  ${
          allMessageList.length < 1 ? "justify-center" : ""
        } relative`}
      >
        {/* Chat Messages */}
        <div className="overflow-y-auto">

        {allMessageList.length > 0 ? (
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {allMessageList.map((msg) => (
              <div key={msg.id} className="">
                <div className={`flex mb-4 ${msg?.prompt && "justify-end"}`}>
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg?.prompt
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-800"
                    }`}
                  >
                    {msg.prompt}
                  </div>
                </div>
                <div className={`flex mb-4 `}>
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg?.solution
                        ? "bg-white text-gray-800"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    <MarkdownRenderer markdownText={msg?.solution} />
                  </div>
                </div>
              </div>
            ))}
             <div ref={messagesEndRef} />
          </div>
        ) : (
          ""
        )}
         </div>

        {/* Input Area */}
        <div className="">

        {allMessageList.length < 1 && <SuggestionTags setAllMessageList={setAllMessageList}/>}
        </div>

        {isRecording && <VoiceRecordingDialog isRecording={isRecording} setIsRecording={setIsRecording}/>}

        <PromptBox
          setAllMessageList={setAllMessageList}
          setIsRecording={setIsRecording}
          isRecording={isRecording}
        />
      </div>
{
      isOpen && 
      <VoiceRecorderDialog />}
    </div>
  );
};

export default ChatUI;
