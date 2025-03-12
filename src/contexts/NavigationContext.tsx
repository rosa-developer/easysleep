
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "@/types/navigation";
import { useThemeToggle } from "@/hooks/useThemeToggle";

interface NavigationContextType {
  navLinks: NavLink[];
  isLoggedIn: boolean;
  isDarkMode: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleDarkMode: () => void;
  handleLogout: () => void;
  navigateToPath: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Would connect to your auth system
  const { isDarkMode, toggleDarkMode } = useThemeToggle();
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation links configuration - "Home" moved to the right side
  const navLinks: NavLink[] = [
    { name: "Sleep Analysis", path: "/analysis" },
    { name: "Sleep Tracker", path: "/tracker" },
    { name: "Features", path: "#", 
      dropdown: [
        { name: "Sleep Technology", path: "/technology" },
        { name: "Smart Alarm", path: "/smart-alarm" },
        { name: "Sleep Coaching", path: "/coaching" },
        { name: "Health Integration", path: "/health-integration" },
      ] 
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Home", path: "/" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    // This would be connected to your auth system
    setIsLoggedIn(false);
    navigate("/");
  };

  const navigateToPath = (path: string) => {
    navigate(path);
  };

  return (
    <NavigationContext.Provider
      value={{
        navLinks,
        isLoggedIn,
        isDarkMode,
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
        toggleDarkMode,
        handleLogout,
        navigateToPath,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
