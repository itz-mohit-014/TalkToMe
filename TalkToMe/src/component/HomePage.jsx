import React from 'react';
import { features } from '../mocks/cardsFeatures';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-blue-50 min-h-screen">
      <header className="flex justify-between items-center py-8 px-12">
        <h1 className="text-3xl text-blue-900 font-thin">TalkToME</h1>
        <nav className="space-x-8">
          <a href="#" className="text-blue-900 hover:text-blue-700">How it works</a>
          <a href="#" className="text-blue-900 hover:text-blue-700">About us</a>
          <a href="#" className="text-blue-900 hover:text-blue-700">Resources</a>
        </nav>
      </header>

      <main className="text-center py-16 px-4">
      <h1 className="text-6xl font-serif text-[#1A365D] mb-6">
          Your Mental<br />Health Matter
        </h1>        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Take back control of your mental health. Train your brain with pleasure, develop memory, attention and thinking with keepapp's proven techniques and exercises.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#B7E2FF] text-gray-900 rounded-full shadow transition hover:bg-blue-300">
          Chat now →
        </button>
      </main>


      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {
      features.map((card) => (
        <div key={card.id} className={`relative rounded-3xl text-center ${card.gradient}`}>
          <span className={`absolute -top-6 font-semibold left-4 text-sm ${card.textColor}`}>
            {card.tag}
          </span>
            {
              <img src={card.svg} alt="image" /> 
            }
          <div className={`${card.gradient} p-8 h-80 rounded-3xl`}>
            <div className="h-full flex flex-col justify-end">
              <h3 className={`text-xl font-serif ${card.textColor} mb-2`}>
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm font-medium">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))
      }

      </div>
      <section className="flex justify-center space-x-6 py-10 overflow-hidden px-4">
        {/* Card 1 */}
        <div>
          <h3 className="text-lg font-bold text-purple-600 mb-2">Mood tracker</h3>
        <div className="bg-gradient-to-b from-purple-100 to-purple-50 p-6 rounded-xl shadow-lg w-72 text-center">
          {/* SVG Image */}
          <div className="mx-auto mb-4">
            <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.95 13.95a6 6 0 1 1 0-8.49 6 6 0 0 1 0 8.49Z" fill="#A78BFA" />
            </svg>
          </div>
          <p className="text-blue-900 font-medium text-lg">Mood tracker</p>
          <p className="text-gray-600 mt-2">
            A mood tracker is a tool to keep a record of emotions at regular intervals.
          </p>
        </div>
        </div>

        {/* Card 2 */}
        <div>
          <h3 className="text-lg font-bold text-green-600 mb-2">Meditation catalog</h3>
        <div className="bg-gradient-to-b from-green-100 to-green-50 p-6 rounded-xl shadow-lg w-72 text-center">
          {/* SVG Image */}
          <div className="mx-auto mb-4">
            <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.95 13.95a6 6 0 1 1 0-8.49 6 6 0 0 1 0 8.49Z" fill="#34D399" />
            </svg>
          </div>
          <p className="text-blue-900 font-medium text-lg">Meditation</p>
          <p className="text-gray-600 mt-2">
            Hundreds of mini-meditations, short meditations for your focus.
          </p>
        </div>

        </div>

        {/* Card 3 */}
        <div>
          <h3 className="text-lg font-bold text-pink-600 mb-2">Brain exercises</h3>
        <div className="bg-gradient-to-b from-pink-100 to-pink-50 p-6 rounded-xl shadow-lg w-72 text-center">
          {/* SVG Image */}
          <div className="mx-auto mb-4">
            <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.95 13.95a6 6 0 1 1 0-8.49 6 6 0 0 1 0 8.49Z" fill="#F472B6" />
            </svg>
          </div>
          <p className="text-blue-900 font-medium text-lg">Train your brain</p>
          <p className="text-gray-600 mt-2">
            Train your brain to improve thinking and memory processing.
          </p>
        </div>

        </div>

        {/* Card 4 */}
        <div>
          <h3 className="text-lg font-bold text-yellow-600 mb-2">Gratitude practice</h3>
        <div className="bg-gradient-to-br from-[#E6EEFF] via-[#EFE6FF] to-[#F5E6FF] p-6 rounded-xl shadow-lg w-72 text-center">
          {/* SVG Image */}
          <div className="mx-auto mb-4">
            <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.95 13.95a6 6 0 1 1 0-8.49 6 6 0 0 1 0 8.49Z" fill="#FBBF24" />
            </svg>
          </div>
          <p className="text-blue-900 font-medium text-lg">Gratefulness</p>
          <p className="text-gray-600 mt-2">
            Establish a daily practice to remind yourself of the good things.
          </p>
        </div>

        </div>

        {/* Card 5 */}
        <div>
          <h3 className="text-lg font-bold text-blue-600 mb-2">Goal plan</h3>
        <div className="bg-gradient-to-b from-blue-100 to-blue-50 p-6 rounded-xl shadow-lg w-72 text-center">
          {/* SVG Image */}
          <div className="mx-auto mb-4">
            <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.95 13.95a6 6 0 1 1 0-8.49 6 6 0 0 1 0 8.49Z" fill="#60A5FA" />
            </svg>
          </div>
          <p className="text-blue-900 font-medium text-lg">Make a goal list</p>
          <p className="text-gray-600 mt-2">
            Setting goals helps you organize your time and resources.
          </p>
        </div>

        </div>
      </section> 


    </div>
  );
};

export default HomePage;
