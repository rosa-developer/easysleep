
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigation } from "@/contexts/NavigationContext";
import MobileNavLinks from "./navigation/MobileNavLinks";
import MobileAuthButtons from "./navigation/MobileAuthButtons";
import MobileThemeToggle from "./navigation/MobileThemeToggle";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const location = useLocation();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { 
    navLinks,
    isLoggedIn,
    isDarkMode,
    toggleDarkMode,
    handleLogout,
    navigateToPath
  } = useNavigation();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={mobileMenuRef}
      className="md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40 p-4 shadow-lg overflow-y-auto transition-all duration-300 ease-in-out animate-fade-in max-h-[calc(100vh-4rem)]"
    >
      <nav className="flex flex-col space-y-4 pt-2">
        <MobileNavLinks 
          navLinks={navLinks} 
          location={location} 
          onClose={onClose} 
        />
        
        <div className="border-t border-gray-200 dark:border-gray-800 my-2 pt-2"></div>
        
        <MobileAuthButtons 
          isLoggedIn={isLoggedIn}
          navigateToPath={navigateToPath}
          handleLogout={handleLogout}
          onClose={onClose}
        />
        
        <MobileThemeToggle 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          onClose={onClose}
        />
      </nav>
    </div>
  );
};

export default MobileNav;
