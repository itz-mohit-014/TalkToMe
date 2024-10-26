// AboutUs.js
import React from "react";
import Header from "./Header";

const AboutUs = () => {
  return (
    <section className="bg-green-50  h-screen ">
      <Header className="w-full"/>
    <div className="flex flex-col items-center justify-center flex-1 px-6 text-gray-700">

      <h1 className="text-4xl font-bold mb-6 text-green-600 animate-fadeIn">About Us</h1>
      <p className="text-lg text-center mb-4 animate-slideUp">
        We are <strong>BCA Elites</strong> from SBPGM, competing in Byte Brawl hackathon with our project,
        <strong> TalkToMe</strong> - a mental health chatbot system.
      </p>
      <div className="flex flex-col items-center md:flex-row md:space-x-8">
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 m-4 transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-500">Mohit Jangid</h2>
          <p className="mt-2">Team Leader</p>
        </div>
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 m-4 transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-500">Animesh Mathur</h2>
          <p className="mt-2">Team Member</p>
        </div>
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 m-4 transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-semibold text-green-500">Akshita Kumawat</h2>
          <p className="mt-2">Team Member</p>
        </div>
      </div>
    </div>

    </section>
  );
};

export default AboutUs;
