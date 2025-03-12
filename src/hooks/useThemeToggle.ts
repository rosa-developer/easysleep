
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
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const hasUserPreference = localStorage.getItem("theme") !== null;
      if (!hasUserPreference) {
        setIsDarkMode(e.matches);
        updateTheme(e.matches);
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  
  const updateTheme = (darkMode: boolean) => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
    
    // Save preference
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  };
  
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    updateTheme(newDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
};
