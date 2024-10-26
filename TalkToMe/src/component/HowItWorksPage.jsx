// HowItWorks.js
import React from "react";
import Header from "./Header";

const HowItWorks = () => {
  return (
    <section className="h-screen bg-blue-50">
        <Header/>

    <div className="flex flex-col items-center justify-center pt-32 px-6 text-gray-700">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 animate-fadeIn">How TalkToMe Works</h1>
      <p className="text-lg text-center mb-4 animate-slideUp">
        TalkToMe is designed to assist users with mental health through a personalized chatbot system.
      </p>
      <div className="flex flex-col  md:flex-row md:space-x-8">
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6 m-4 transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-semibold text-blue-500">Natural Language Processing</h2>
          <p className="mt-2">
            TalkToMe understands user input via <strong>text</strong> and <strong>voice commands</strong>.
            Our chatbot uses advanced NLP to comprehend and process user messages efficiently.
          </p>
        </div>
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6 m-4 transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-semibold text-blue-500">Personalized User Experience</h2>
          <p className="mt-2">
            By understanding user needs, TalkToMe offers a digital assistant that evolves with users
            to provide a more personalized and supportive experience.
          </p>
        </div>
      </div>    
    </div>

    </section>
  );
};

export default HowItWorks;
