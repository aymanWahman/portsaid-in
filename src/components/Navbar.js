
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex fixed top-0 w-full z-50  rounded-b-2xl shadow-lg bg-transparent backdrop-blur-md ">
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <Link href="/">
          <h2 className="text-2xl hover:text-3xl font-bold hover:text-gray-300 font-serif">Portsaid-in</h2>
        </Link>
        {/* قائمة منسدلة للروابط */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/news">
            <h2 className="hover:text-blue-400">الأخبار</h2>
          </Link>
          <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="hover:text-blue-400">
              الأماكن السياحية
            </button>
            {isOpen && (
              <div className="absolute bg-blue-700 py-2 rounded shadow-lg mt-2">
                <Link href="/tourist-spots/museum">
                  <h2 className="block px-4 py-2 hover:bg-blue-600">المتحف</h2>
                </Link>
                <Link href="/tourist-spots/beaches">
                  <h2 className="block px-4 py-2 hover:bg-blue-600">الشواطئ</h2>
                </Link>
                <Link href="/tourist-spots/port">
                  <h2 className="block px-4 py-2 hover:bg-blue-600">الميناء</h2>
                </Link>
              </div>
            )}
          </div>
          <Link href="/local-services">
            <h2 className="hover:text-blue-400">الخدمات المحلية</h2>
          </Link>
          <Link href="/about">
            <h2 className="hover:text-blue-400">عن بورسعيد</h2>
          </Link>
          <Link href="/contact">
            <h2 className="hover:text-blue-400">اتصل بنا</h2>
          </Link>
        </nav>
        {/* زر للقائمة الجانبية */}
        <button className="md:hidden bg-slate-300 rounded-xl" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6 bg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {/* قائمة جانبية للأجهزة الصغيرة */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700">
          <Link href="/news">
            <h2 className="block px-4 py-2 hover:bg-blue-600">الأخبار</h2>
          </Link>
          <Link href="/tourist-spots">
            <h2 className="block px-4 py-2 hover:bg-blue-600">الأماكن السياحية</h2>
          </Link>
          <Link href="/local-services">
            <h2 className="block px-4 py-2 hover:bg-blue-600">الخدمات المحلية</h2>
          </Link>
          <Link href="/about">
            <h2 className="block px-4 py-2 hover:bg-blue-600">عن بورسعيد</h2>
          </Link>
          <Link href="/contact">
            <h2 className="block px-4 py-2 hover:bg-blue-600">اتصل بنا</h2>
          </Link>
        </nav>
      )}
      </header>
    );
  }
  

// import Link from "next/link";
// // import Image from "next/image";
// import { useState } from "react";
// // import { useTheme } from "next-themes";
// import Say from "@/components/say";
// // import { signOut, useSession } from 'next-auth/react';

// const Header = () => {
//   // const { theme, setTheme } = useTheme();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const { data: session } = useSession();

//   const handleMenuClick = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="flex fixed top-0 w-full px-4 py-3 z-50 justify-between items-center rounded-b-2xl shadow-lg bg-transparent backdrop-blur-md">
//       {/* Logo and Site Name */}
//       <div className="flex items-center gap-x-3">
//         <div>

//           <Link href="/">
//           <Say width="30" height="30" />
//           </Link>

//           {/* <Link href="/"
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
          
//             <Image
//               src="/imgs/portsaidLogo1.jpg"
//               alt="portsaidIn"
//               className="dark:invert rounded-2xl"
//               width={40}
//               height={24}
//               priority
//             />
//           </Link> */}
//         </div>

//         <Link href="/">
//           <h1 className="font-extrabold text-xl hover:text-2xl md:text-5xl hover:md:text-6xl text-pink-100 hover:text-gray-400 font-serif transition duration-300">
//             PortsaidIn
//           </h1>
//         </Link>

//       </div>

//       {/* Hamburger Icon and Dark Mode Button for Mobile */}
//       <div className="md:hidden flex items-center gap-x-6">
//         {/* <button
//           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//           className="transition duration-300"
//         >
//           {theme === "dark" ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-8 h-8 text-yellow-400"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="w-8 h-8 text-gray-800"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           )}
//         </button> */}
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <svg
//             className="w-8 h-8 text-gray-400 dark:text-gray-300"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Full Menu on Medium Screens and Above */}
//       <div className="hidden md:flex items-center gap-x-6">
//         <nav className="flex items-center gap-x-8">
//           <Link href="/" className="text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition">
//             Home
//           </Link>
        
//           <Link href="/" className="text-sm text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition">
//             About
//           </Link>
        
        

      

//         </nav>

//         {/* Dark Mode Toggle */}
//         {/* <button
//           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//           className="transition duration-300"
//         >
//           {theme === "dark" ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-8 h-8 text-yellow-400"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="w-8 h-8 text-gray-800"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           )}
//         </button> */}
//       </div>

//       {/* Dropdown Menu for Mobile */}
//       <ul
//         className={`${
//           isMenuOpen ? "block" : "hidden"
//         } absolute top-16 left-0 w-full bg-pink-100 dark:bg-gray-900 shadow-lg rounded-lg p-2 text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out`}
//       >
//         <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
//           <Link href="/" onClick={handleMenuClick}>Home</Link>
//         </li>
//         <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
//           <Link href="/lang/human-languages/arabic" onClick={handleMenuClick}>Arabic</Link>
//         </li>
//         <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
//           <Link href="/lang/human-languages/english" onClick={handleMenuClick}>English</Link>
//         </li>
//         <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
//           <Link href="/lang/human-languages/turkish" onClick={handleMenuClick}>Turkish</Link>
//         </li>
//         <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
//           <Link href="/lang/programming-languages" onClick={handleMenuClick}>Programming</Link>
//         </li>
//         <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
//           <Link href="/about" onClick={handleMenuClick}>About</Link>
//         </li>
//         {/* <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
//           <Link href="/auth/login" onClick={handleMenuClick}>Login</Link>
//         </li> */}
//         <li className="text-sm py-1 px-2 hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300">
//           <Link href="/auth/signup" onClick={handleMenuClick}>Signup</Link>
//         </li>
        
//       </ul>
//     </header>
//   );
// };

// export default Header;
