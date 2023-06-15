import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
const ThemeToggle = () => {
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
      className=" py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
      onClick={toggleTheme}
    >
      {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
