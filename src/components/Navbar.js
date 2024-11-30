'use client';

import DarkmodeToggle from "./DarkmodeToggle";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // غلق القائمة عند تغيير حجم الشاشة
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { href: "/essentialPlaces", label: "الأماكن الهامة" },
    { href: "/tourist-spots", label: "الأماكن السياحية" },
    { href: "/aboutPort", label: "عن بورسعيد" },
    { href: "/contact", label: "اتصل بنا" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full px-4 py-3 z-50 flex justify-between items-center bg-transparent backdrop-blur-md shadow-lg rounded-b-2xl">
      {/* الشعار */}
      <div className="flex items-center gap-x-3">
        <Link href="/">
          <h1
            className="font-extrabold text-xl md:text-4xl text-seaBlue hover:text-sandyGold font-serif transition duration-300"
            aria-label="العودة إلى الصفحة الرئيسية"
          >
            Portsaid-in
          </h1>
        </Link>
      </div>

      {/* القائمة وعناصر الوضع الليلي */}
      <div className="flex items-center gap-x-6 md:hidden z-50 ">
        <DarkmodeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="dropdown-menu transition duration-300"
        >
          <FiMenu className="w-10 h-10 text-gray-300" />
        </button>
      </div>

      {/* القائمة الكاملة */}
      <div className="hidden md:flex items-center gap-x-6">
        <nav className="flex items-center gap-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-sandyGold hover:text-seaBlue transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <DarkmodeToggle />
      </div>

      {/* قائمة الجوال */}
      {isMenuOpen && (
        <ul
          dir="rtl"
          className="absolute top-10 right-0  shadow-xl rounded-2xl p-4 space-y-5 text-seaBlue transition-all duration-300"
        >
          {menuItems.map((item) => (
            <li
              key={item.href}
              className="text-lg py-1 px-2 bg-gray-300 rounded-md transition duration-300"
            >
              <Link href={item.href} onClick={handleMenuClick}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
