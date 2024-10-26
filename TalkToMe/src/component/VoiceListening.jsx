import React, { useState, useRef } from "react";
import { Mic } from "lucide-react";

const VoiceRecorderDialog = ({ isOpen, setIsOpen }) => {
  const [audioBlob, setAudioBlob] = useState(null);
  const [isRecording, setIsRecording] = useState(true);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    sendMessage(transcript);
    console.log(transcript)
    // takeCommand(transcript.toLowerCase());
};

const sendMessage = async (message) => {
  try {
    if(!message.trim()) return;
    const id = localStorage.getItem("chatID");
    const response = await fetch(
      `https://talktome-0d75.onrender.com/api/v1/chats/${id}/messages`,
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


  const startRecording = async () => {
    try {
      recognition.start();
      // const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // mediaRecorderRef.current = new MediaRecorder(stream);

      // mediaRecorderRef.current.ondataavailable = (event) => {
      //   chunksRef.current.push(event.data);
      // };

      // mediaRecorderRef.current.onstop = () => {
      //   const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      //   setAudioBlob(blob);
      //   chunksRef.current = [];
      // };

      // mediaRecorderRef.current.start();
      // setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!audioBlob) return;

    const formData = new FormData();
    formData.append("audio", audioBlob, "command.wav");

    try {
      const chatId = localStorage.getItem("chatID");
      const response = await fetch(
        `https://talktome-0d75.onrender.com/api/v1/chats/${chatId}/voice`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setIsRecording(false);
        setAudioBlob(null);
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error uploading audio:", error);
    }
  };

  return (  isOpen && 
    <div
      className="fixed inset-0 z-10 bg-black bg-opacity-50 px-4 flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      {

     
      <div
        className="bg-white rounded-lg p-6 w-full sm:w-96 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Voice Recorder</h2>

          <div className="relative w-32 h-32 mx-auto mb-4">
            <div
              className={`absolute inset-0 rounded-full border-4 border-blue-500 ${
                isRecording ? "animate-pulse" : ""
              }`}
            >
              <div className="absolute inset-2">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 rounded-full border-4 border-blue-500 opacity-75 ${
                      isRecording ? "animate-ping" : ""
                    }`}
                    style={{
                      animationDelay: `${index * 0.5}s`,
                      animationDuration: "2s",
                    }}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={isRecording ? startRecording : stopRecording}
              className={`absolute inset-4 rounded-full ${
                isRecording ? "bg-red-500" : "bg-blue-500"
              } text-white flex items-center justify-center hover:opacity-90`}
            >
              <Mic size={32} />
            </button>
          </div>

          <p className="text-gray-600 mb-4">
            {isRecording
              ? "Recording in progress..."
              : null
              ? "Recording ready to submit."
              : "Click microphone to start recording"}
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                stopRecording();
                setIsOpen(false);
              }}
              className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isRecording}
              className={`px-4 py-2 rounded ${
                audioBlob
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default VoiceRecorderDialog;
