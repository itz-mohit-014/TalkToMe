import React, { useState } from "react";
import Header from "./Header";
import MarkdownRenderer from "./markdownRender";

const Home = () => {
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

export default Home;
