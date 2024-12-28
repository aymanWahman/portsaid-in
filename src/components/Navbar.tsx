'use client';

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiUser, FiLogOut } from 'react-icons/fi';
import DarkModeToggle from "./DarkmodeToggle";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const menuItems = [
    // { href: "/essentialPlaces", label: "الأماكن الهامة" },
    { href: "/tourist-spots", label: "الأماكن السياحية" },
    { href: "/aboutPort", label: "عن بورسعيد" },
    { href: "/contact", label: "اتصل بنا" },
  ];

  return (
    <header className="fixed top-0 w-full px-4 py-3 z-50 bg-transparent backdrop-blur-[2px] border-b border-gray-200  dark:border-gray-700 rounded-b-2xl shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* القائمة للموبايل */}
        <div className="flex md:hidden items-center gap-x-4">
          <DarkModeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button p-2 rounded-full hover:bg-gray-100/50 text-seaBlue transition duration-300"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>

        {/* الشعار */}
        <Link href="/" className="flex items-center">
          <h1 className="font-extrabold text-xl md:text-3xl text-seaBlue hover:text-sandyGold transition duration-300">
            Portsaid-in
          </h1>
        </Link>

        {/* القائمة الكاملة للديسكتوب */}
        <div className="hidden md:flex items-center gap-x-6">
          <nav className="flex items-center gap-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-lg text-seaBlue hover:text-sandyGold hover:bg-gray-100/50 rounded-lg transition duration-300 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <DarkModeToggle />
          <div className="border-r border-gray-300 dark:border-gray-700 h-6 mx-4" />
          {session ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="profile-button flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100/50 text-seaBlue transition duration-300"
              >
                <span className="text-lg">{session.user.name}</span>
                <FiUser className="w-5 h-5" />
              </button>
              {isProfileMenuOpen && (
                <div className="profile-menu absolute right-0 mt-2 w-48 rounded-lg shadow-lg py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md ring-1 ring-black/5">
                  <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                    مرحباً، {session.user.name}
                  </div>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                  >
                    الملف الشخصي
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="w-full text-right px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100/50 dark:hover:bg-gray-700/50"
                  >
                    <span className="flex items-center gap-2">
                      <FiLogOut className="w-4 h-4" />
                      تسجيل الخروج
                    </span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/auth/signin"
              className="px-4 py-2 text-lg text-seaBlue hover:text-sandyGold hover:bg-gray-100/50 rounded-lg transition duration-300"
            >
              تسجيل الدخول
            </Link>
          )}
        </div>

        {/* قائمة الموبايل */}
        {isMenuOpen && (
          <div className="mobile-menu absolute top-full right-4 left-4 mt-2 rounded-lg shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-md ring-1 ring-black/5 md:hidden">
            <nav className="py-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 text-right"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
