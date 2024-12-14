'use client';

import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function DarkmodeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
    >
      {theme === 'dark' ? (
        <HiSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <HiMoon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}
