import React, { useState, useRef } from 'react';
import { Mic } from 'lucide-react';

const VoiceRecorderDialog = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        chunksRef.current = [];
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const handleSubmit = async () => {
    if (!audioBlob) return;


    const formData = new FormData();
    formData.append('audio', audioBlob, 'command.wav');

    try {
        const chatId = localStorage.getItem('chatID');
      // Replace with your API endpoint
      const response = await fetch(`http://localhost:3000/api/v1/chats/${chatId}/voice`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data)
      
      if (response.ok) {
        setIsOpen(false);
        setAudioBlob(null);
      }

      if (data.status == 200) {
        console.log(data);
        // Handle the text response from Gemini
        
        // Update your UI with the text response
        // displayResponse(result.data.aiResponse);
    } else {
        console.error('Error:', data.message);
    }
    
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
      >
        <Mic size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 px-4 flex items-center justify-center" onClick={(e) => setIsOpen(false) }>
          <div className="bg-white rounded-lg p-6 w-full sm:w-96 shadow-xl" onClick={(e) => {
             e.stopPropagation();
            setIsOpen(true)
          }}>
            <div className="text-center">
              <h2 className="text-xl font-bold mb-4">Voice Recorder</h2>
              
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className={`absolute inset-0 rounded-full border-4 border-blue-500 ${isRecording ? 'animate-pulse' : ''}`}>
                  <div className="absolute inset-2">
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 rounded-full border-4 border-blue-500 opacity-75 ${
                          isRecording ? 'animate-ping' : ''
                        }`}
                        style={{
                          animationDelay: `${index * 0.5}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                </div>
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`absolute inset-4 rounded-full ${
                    isRecording ? 'bg-red-500' : 'bg-blue-500'
                  } text-white flex items-center justify-center hover:opacity-90`}
                >
                  <Mic size={32} />
                </button>
              </div>

              <p className="text-gray-600 mb-4">
                {isRecording ? 'Recording in progress...' : 'Click microphone to start recording'}
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
                  disabled={!audioBlob}
                  className={`px-4 py-2 rounded ${
                    audioBlob
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorderDialog;