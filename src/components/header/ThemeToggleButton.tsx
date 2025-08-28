"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button onClick={() => setTheme(isDark ? "light" : "dark")} className="transition">
      {isDark ? <Sun className="w-8 h-8 text-yellow-400" /> : <Moon className="w-8 h-8 text-gray-800" />}
    </button>
  );
}
