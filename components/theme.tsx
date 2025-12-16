"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Theme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed bottom-6 left-6 z-50 bg-gray-700 text-white dark:bg-yellow-300 dark:text-black 
                 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
