import React from "react";
import { features } from "../mocks/cardsFeatures";
import FeatureCard from "./FeaturesCard";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-blue-50 min-h-screen relative">
      <Header/>
      <main className="text-center sm:py-16 py-8 px-4 relative z-[2] bg-blue-50/70 flex items-center h-[80dvh] justify-center flex-col ga-4">
      <div className="absolute w-full z-[-1] top-0 left-0 overflow-hidden">
       <img src="./logo.png" alt="image" className='h-[80%] sm:h-[40%] w-full sm:w-[40%] relative left-[-100px] sm:left-[20%] opacity-60 sm:translate-y-[-180px] mix-blend-overlay object-fit'/>

      </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#1A365D] mb-6">
          Your Mental
          <br />
          Health Matter
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Take back control of your mental health. Train your brain with
          pleasure, develop memory, attention and thinking with keepapp's proven
          techniques and exercises.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#B7E2FF] text-gray-900 rounded-full shadow transition hover:bg-blue-300">
          <Link to={"/chat"}>
          Talk now →
          </Link>
        </button>
      </main>

      <div className="p-8 flex items-stretch justify-center flex-wrap lg:flex-nowrap gap-8 lg:gap-0 relative z-[3] mt-4">
        {features.map((card, index) => (
          <FeatureCard card={card}  key={index}/>
        ))}
      </div>

      <Footer/>
    </div>
  );
};

export default HomePage;

const temp = () => {
  <section className="flex justify-center space-x-6 py-10 overflow-hidden px-4">
    {/* Card 1 */}
    <div>
      <h3 className="text-lg font-bold text-purple-600 mb-2">Mood tracker</h3>
      <div className="bg-gradient-to-b from-purple-100 to-purple-50 p-6 rounded-xl shadow-lg w-72 text-center">
        {/* SVG Image */}
        <div className="mx-auto mb-4">
          <svg
            width="80"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.95 13.95a6 6 0 1 1 0-8.49 6 6 0 0 1 0 8.49Z"
              fill="#A78BFA"
            />
          </svg>
        </div>
        <p className="text-blue-900 font-medium text-lg">Mood tracker</p>
        <p className="text-gray-600 mt-2">
          A mood tracker is a tool to keep a record of emotions at regular
          intervals.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div>
      <h3 className="text-lg font-bold text-green-600 mb-2">
        Meditation catalog
      </h3>
      <div className="bg-gradient-to-b from-green-100 to-green-50 p-6 rounded-xl shadow-lg w-72 text-center">
        {/* SVG Image */}
        <div className="mx-auto mb-4">
          <svg
            width="80"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.95 13.95a6 6 0 1 1 0-8.49 6 6 0 0 1 0 8.49Z"
              fill="#34D399"
            />
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
          <svg
            width="80"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.95 13.95a6 6 0 1 1 0-8.49 6 6 0 0 1 0 8.49Z"
              fill="#F472B6"
            />
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
      <h3 className="text-lg font-bold text-yellow-600 mb-2">
        Gratitude practice
      </h3>
      <div className="bg-gradient-to-br from-[#E6EEFF] via-[#EFE6FF] to-[#F5E6FF] p-6 rounded-xl shadow-lg w-72 text-center">
        {/* SVG Image */}
        <div className="mx-auto mb-4">
          <svg
            width="80"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.95 13.95a6 6 0 1 1 0-8.49 6 6 0 0 1 0 8.49Z"
              fill="#FBBF24"
            />
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
          <svg
            width="80"
            height="80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.95 13.95a6 6 0 1 1 0-8.49 6 6 0 0 1 0 8.49Z"
              fill="#60A5FA"
            />
          </svg>
        </div>
        <p className="text-blue-900 font-medium text-lg">Make a goal list</p>
        <p className="text-gray-600 mt-2">
          Setting goals helps you organize your time and resources.
        </p>
      </div>
    </div>
  </section>;
};
