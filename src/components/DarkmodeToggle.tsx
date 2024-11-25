'use client';

import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";
import { useEffect, useState } from "react";

const DarkmodeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // التأكد من أن الكومبوننت تم تركيبه
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !theme) {
    return null; // لا تعرض أي شيء حتى يتم تحميل السمة
  }

  return (
    <div className="flex items-center gap-x-6">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="transition duration-300"
      >
        {theme === "dark" ? (
          <HiSun className="w-6 h-6 text-yellow-400" />
        ) : (
          <HiMoon className="w-6 h-6 text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default DarkmodeToggle;
