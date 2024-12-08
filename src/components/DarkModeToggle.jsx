import { useState, useEffect } from "react";
import { Sun, MoonStar } from "lucide-react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode based on user's preferences or localStorage
  useEffect(() => {
    const storedPreference = localStorage.getItem("darkMode");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedPreference === "true" || (!storedPreference && systemPreference)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    if (newValue) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center rounded-full text-gray-400 hover:text-black dark:text-white dark:hover:text-white transition"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun aria-hidden="true" />
      ) : (
        <MoonStar aria-hidden="true" />
      )}
    </button>
  );
}
