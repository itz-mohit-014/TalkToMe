import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BASE_URL } from "../services/api";

const Header = ({ className = "" }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  
  const handleDeleteChat = async () => {
    try {
      const chatId = localStorage.getItem("chatID");
      const response = await fetch(
        `${BASE_URL}/${chatId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ chatId }),
        }
      );
      const data = await response.json();
      console.log(data)
      if(data?.chat?.messages){
        console.log(data);
        setAllMessageList(data?.chat?.messages);
      }

      if (response.ok) {
        localStorage.removeItem("chatID")
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <header
      className={`flex justify-between items-center py-2 px-6 sm:px-12 relative  ${className}`}
    >
      <h1 className="text-3xl text-blue-900 font-thin">TalkToME</h1>

      <Menu
        className="w-6 h-6 text-gray-500 block cursor-pointer active:scale-95 md:hidden"
        onClick={toggleMenu}
      />
      <nav
        className={`space-x-8 md:block text-center ${
          showMenu
            ? "w-full z-10 flex flex-col gap-4 items-center justify-center bg-blue-50 p-8   absolute top-full left-0"
            : "hidden"
        } transition`}
      >
        <Link to="/" className="text-blue-900 hover:text-blue-700 text-center">
          Home
        </Link>
        <Link
          to="/how-it-works"
          className="text-blue-900 hover:text-blue-700 text-center"
        >
          How it works
        </Link>
        <Link
          to="/AboutUS"
          className="text-blue-900 hover:text-blue-700 text-center"
        >
          About us
        </Link>
      </nav>
      {pathname.includes("chats") ? (
        <button className="mt-4 px-6 py-3 bg-[#B7E2FF] text-gray-900 rounded-full shadow transition hover:bg-blue-300 md:inline-block hidden">
          <Link to={"/chat"}>Talk now →</Link>
        </button>
      ) : (
        <button onClick={handleDeleteChat} className="mt-4 px-6 py-3 bg-[#ffb7b7] text-red-900 rounded-full shadow transition hover:bg-red-300 md:inline-block hidden">
          Clear Chat
        </button>
      )}
    </header>
  );
};

export default Header;
