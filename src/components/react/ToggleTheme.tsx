import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    localStorage.removeItem("theme");
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const preferredTheme = localStorage.getItem("theme");

    if (
      preferredTheme === "dark" ||
      (preferredTheme === null && prefersDarkMode.matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    const handleChange = () => {
      setIsDarkMode(prefersDarkMode.matches);
    };

    prefersDarkMode.addEventListener("change", handleChange);

    return () => {
      prefersDarkMode.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !isDarkMode);
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      aria-label="Toggle Themes"
      className={`py-2 px-4 transition-all   active:scale-95 ease-in-out  hover:border-white hover:scale-110 text-white rounded hover:bg-LapisLazuli-400 duration-150`}
      onClick={toggleTheme}
    >
      {isDarkMode ? <FaSun size={24} /> : <FaMoon size={20} />}
    </button>
  );
}
