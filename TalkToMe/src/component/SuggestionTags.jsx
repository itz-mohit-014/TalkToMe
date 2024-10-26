import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";

const SuggestionTags = ({setAllMessageList}) => {
  const [position, setPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(true)
    
    // Mental health related topics
    const suggestions = [
      "Anxiety Management",
      "Depression Support",
      "Stress Relief",
      "Sleep Issues",
      "Mindfulness",
      "Self Care Tips",
      "Panic Attacks",
      "Work-Life Balance",
      "Social Anxiety",
      "Mood Swings",
      "Burnout Prevention",
      "Relationship Advice",
      "Coping Strategies",
      "Mental Wellness",
      "Emotional Support"
    ];
  
    const sendMessage = async (message) => {
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

    // Duplicate the array to create seamless scrolling
    const extendedSuggestions = [...suggestions, ...suggestions];
  
    useEffect(() => {
      const animate = () => {
        setPosition((prev) => {
          if (prev <= -100) {
            return 0;
          }
          return prev - 0.08;
        });
      };
  
      const animationInterval = setInterval(animate, 100);
  
      return () => clearInterval(animationInterval);
    }, []);
  
    return (
      isOpen && 
      <div className="w-full bg-gray-50 border border-slate-300 p-4 overflow-hidden h-32 rounded-3xl">
        <h3 className="text-gray-700 font-medium mb-3 text-center text-xl">Suggested Topics</h3>
        <div className="relative w-full mt-6">
          <div
            className="flex gap-3 absolute"
            style={{
              transform: `translateX(${position}%)`,
              transition: 'transform 0.05s linear',
            }}
          >
            {extendedSuggestions.map((suggestion, index) => (
              <button
                key={`${suggestion}-${index}`}
                className="whitespace-nowrap px-4 py-2 rounded-full bg-white border border-gray-200 
                         text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600
                         transition-colors duration-200 shadow-sm"
                         onClick={(e) =>{ sendMessage(suggestion); setIsOpen(false) }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default SuggestionTags;