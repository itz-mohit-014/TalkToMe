import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import {Link} from "react-router-dom"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className="flex justify-between items-center py-8 px-6 sm:px-12 relative">
        <h1 className="text-3xl text-blue-900 font-thin">TalkToME</h1>
      
          <Menu className="w-6 h-6 text-gray-500 block cursor-pointer active:scale-95 md:hidden" onClick={toggleMenu}/>
        <nav className={`space-x-8 md:block text-center ${showMenu ? "w-full z-10 flex flex-col gap-4 items-center justify-center bg-blue-50 p-8   absolute top-full left-0" : "hidden"} transition`}>
          <Link href="#" className="text-blue-900 hover:text-blue-700 text-center">
            How it works
          </Link>
          <Link href="#" className="text-blue-900 hover:text-blue-700 text-center">
            About us
          </Link>
          <Link href="#" className="text-blue-900 hover:text-blue-700 text-center">
            Resources
          </Link>
        </nav>
      </header> 
  )
}

export default Header