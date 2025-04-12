// src/components/ThemeToggle.jsx
import React from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode((prev) => !prev)}
    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

export default ThemeToggle;
