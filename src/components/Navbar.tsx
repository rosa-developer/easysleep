
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has previously set a preference
    const savedTheme = localStorage.getItem("theme");
    // Check system preference
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    return savedTheme === "dark" || (!savedTheme && systemPreference);
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be connected to your auth system
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Set initial dark mode class on document
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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

  const handleLogout = () => {
    // This would be connected to your auth system
    setIsLoggedIn(false);
    toast.success("You have been logged out");
    navigate("/");
  };

  const navigateToPath = (path: string) => {
    navigate(path);
  };

  const navLinks = [
    { name: "Home", path: "/" },
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
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
          aria-label="EasySleep Home"
        >
          <span className="text-sleep-800 dark:text-sleep-200 font-['Playfair_Display'] text-2xl font-bold tracking-tighter group-hover:text-sleep-600 dark:group-hover:text-sleep-300 transition-colors">
            easy
            <span className="text-sleep-500 group-hover:text-sleep-400 transition-colors">sleep</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav 
          navLinks={navLinks}
          isLoggedIn={isLoggedIn}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          handleLogout={handleLogout}
          navigateToPath={navigateToPath}
        />

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <MobileNav 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        isLoggedIn={isLoggedIn}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        handleLogout={handleLogout}
        navigateToPath={navigateToPath}
      />
    </header>
  );
};

export default Navbar;
