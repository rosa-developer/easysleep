
import { useState, useEffect } from "react";

export const useThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has previously set a preference
    const savedTheme = localStorage.getItem("theme");
    // Check system preference
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    return savedTheme === "dark" || (!savedTheme && systemPreference);
  });

  useEffect(() => {
    // Set initial dark mode class on document
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Update DOM
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save preference
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return { isDarkMode, toggleDarkMode };
};
