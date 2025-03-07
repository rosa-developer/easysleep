
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be connected to your auth system
  const location = useLocation();

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
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleLogout = () => {
    // This would be connected to your auth system
    setIsLoggedIn(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sleep Analysis", path: "/analysis" },
    { name: "Sleep Tracker", path: "/tracker" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
          aria-label="EasySleep Home"
        >
          <span className="text-sleep-800 font-['Playfair_Display'] text-2xl font-bold tracking-tighter group-hover:text-sleep-600 transition-colors">
            easy
            <span className="text-sleep-500 group-hover:text-sleep-400 transition-colors">sleep</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-slate-700 hover:text-sleep-500 transition-colors duration-200 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-sleep-500 after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                location.pathname === link.path && "text-sleep-500 after:scale-x-100"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleDarkMode}
            className="rounded-full w-9 h-9 p-0"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700" />
            )}
          </Button>
          
          {isLoggedIn ? (
            <Button 
              variant="outline"
              className="border-sleep-500 text-sleep-500 hover:bg-sleep-50"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Button 
                  variant="ghost"
                  className="flex items-center gap-1 text-slate-700 hover:text-sleep-500"
                >
                  <LogIn className="h-4 w-4" />
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  className="bg-sleep-500 hover:bg-sleep-600 text-white transition-all duration-200 flex items-center gap-1"
                >
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden rounded-full w-9 h-9 p-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-slate-700" />
          ) : (
            <Menu className="h-5 w-5 text-slate-700" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-fade-in-fast">
          <div className="container py-5 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-slate-700 hover:text-sleep-500 hover:bg-sleep-50 rounded-md transition-colors",
                  location.pathname === link.path && "text-sleep-500 bg-sleep-50"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {isLoggedIn ? (
              <Button 
                variant="outline"
                className="border-sleep-500 text-sleep-500 hover:bg-sleep-50 mt-4"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            ) : (
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-100">
                <Link to="/login" className="w-full">
                  <Button 
                    variant="outline"
                    className="w-full flex items-center justify-center gap-1"
                  >
                    <LogIn className="h-4 w-4" />
                    Log In
                  </Button>
                </Link>
                <Link to="/signup" className="w-full">
                  <Button 
                    className="w-full bg-sleep-500 hover:bg-sleep-600 text-white flex items-center justify-center gap-1"
                  >
                    <UserPlus className="h-4 w-4" />
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
            
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="rounded-full"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4 mr-2 text-yellow-500" />
                ) : (
                  <Moon className="h-4 w-4 mr-2 text-slate-700" />
                )}
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
