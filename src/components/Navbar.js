'use client';

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
// import Penguin from "@/components/Penguin";
// import { signOut, useSession } from 'next-auth/react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { data: session } = useSession();
  // const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex fixed top-0 w-full px-4 py-3 z-50 justify-between items-center rounded-b-2xl shadow-lg bg-transparent backdrop-blur-md">
      {/* Logo and Site Name */}
      <div className="flex items-center gap-x-3">
        {/* <div>
          <Link href="/adam">
          <Penguin width="50" height="50" />
          </Link>
        </div> */}
        <Link href="/">
          <h1 className="font-extrabold text-xl hover:text-2xl md:text-4xl hover:md:text-5xl text-seaBlue hover:text-sandyGold font-serif transition duration-300">
            Portsaid-in
          </h1>
        </Link>
      </div>

      {/* Hamburger Icon and Dark Mode Button for Mobile */}
      <div className="md:hidden flex items-center gap-x-6">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="transition duration-300"
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-8 h-8 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Full Menu on Medium Screens and Above */}
      <div className="hidden md:flex items-center gap-x-6">
        <nav className="flex items-center gap-x-8">
          {/* <Link href="/news" className="text-lg text-sandyGold  hover:text-seaBlue  transition">
            الأخبار
          </Link> */}
          {/* <Link href="/local-services" className="text-lg text-sandyGold  hover:text-seaBlue transition">
            الخدمات المحلية
          </Link> */}
            <Link href="/tourist-spots" className="text-lg text-sandyGold  hover:text-seaBlue transition">
            الأماكن السياحية
          </Link>
          <Link href="/aboutPort" className="text-lg text-sandyGold  hover:text-seaBlue transition">
            عن بورسعيد
          </Link>
        

       {/* <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="text-lg text-sandyGold hover:text-seaBlue">
              الأماكن السياحية
            </button>
           {isOpen && (
             <div className="absolute bg-sandyGold py-2 rounded shadow-lg mt-2">
              <Link href="/tourist-spots/museum">
              <h2 className="block px-4 py-2 hover:bg-seaBlue">المتحف</h2>              </Link>
             <Link href="/tourist-spots/beaches">
               <h2 className="block px-4 py-2 hover:bg-seaBlue">الشواطئ</h2>
             </Link>              
             <Link href="/tourist-spots/port">
               <h2 className="block px-4 py-2 hover:bg-seaBlue">الميناء</h2>
            </Link>
              </div>
            )}
          </div> */}

          <Link href="/contact" className="text-lg text-sandyGold  hover:text-seaBlue transition">
            اتصل بنا
          </Link>
        
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="transition duration-300"
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-gray-800"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      <ul dir="rtl"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 right-0 w-fit bg-transparent  shadow-xl rounded-2xl p-4 space-y-5 text-seaBlue hover:text-sandyGold transition-all duration-300 ease-in-out`}
      >
        {/* <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
          <Link href="/news" onClick={handleMenuClick}>الأخبار</Link>
        </li> */}
          <li className="text-lg py-1 px-2 bg-seagullGray rounded-md transition duration-300">
          <Link href="/tourist-spots" onClick={handleMenuClick}>الأماكن السياحية</Link>
        </li>
        <li className="text-lg py-1 px-2 bg-seagullGray hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
          <Link href="/aboutPort" onClick={handleMenuClick}>عن بورسعيد</Link>
        </li>
        {/* <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
          <Link href="/local-services" onClick={handleMenuClick}>خدمات محلية</Link>
        </li> */}
      
        <li className="text-lg py-1 px-2 bg-seagullGray rounded-md transition duration-300">
          <Link href="/contact" onClick={handleMenuClick}>اتصل بنا</Link>
        </li>
      
    
        
      </ul>
    </header>
  );
};

export default Header;

