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
    { href: "/tourist-spots", label: "الأماكن السياحية" },
    { href: "/aboutPort", label: "عن بورسعيد" },
    { href: "/contact", label: "اتصل بنا" },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex fixed top-0 w-full px-4 py-3 z-50 justify-between items-center rounded-b-2xl shadow-lg bg-transparent backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center gap-x-3">
        <Link href="/">
          <h1
            className="font-extrabold text-xl hover:text-2xl md:text-4xl hover:md:text-5xl text-seaBlue hover:text-sandyGold font-serif transition duration-300"
            aria-label="العودة إلى الصفحة الرئيسية"
          >
            Portsaid-in
          </h1>
        </Link>
      </div>

      {/* زر الهامبرغر ووضع الليل */}
      <div className="md:hidden flex items-center gap-x-6">
        <DarkmodeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
        <FiMenu className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      {/* القائمة الكاملة */}
      <div className="hidden md:flex items-center gap-x-6">
        <nav className="flex items-center gap-x-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
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
      <ul
        dir="rtl"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 right-0 w-fit bg-transparent shadow-xl rounded-2xl p-4 space-y-5 text-seaBlue hover:text-sandyGold transition-all duration-300 ease-in-out`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="text-lg py-1 px-2 bg-seagullGray hover:bg-yellow-100 dark:hover:bg-gray-700 rounded-md transition duration-300"
          >
            <Link href={item.href} onClick={handleMenuClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
