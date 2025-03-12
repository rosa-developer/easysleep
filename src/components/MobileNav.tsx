import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogIn, UserPlus, User, LogOut, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/contexts/NavigationContext";

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
        {navLinks.map((link) => (
          <div key={link.name}>
            {link.dropdown ? (
              <div className="py-2 px-2">
                <div className="font-medium text-slate-800 dark:text-slate-200 mb-2">{link.name}</div>
                <div className="pl-4 space-y-2 border-l border-slate-100 dark:border-gray-800">
                  {link.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      to={dropdownItem.path}
                      className="block py-1 text-slate-700 dark:text-slate-300 hover:text-sleep-500 dark:hover:text-sleep-400"
                      onClick={onClose}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                to={link.path}
                className={cn(
                  "text-slate-700 dark:text-slate-300 py-2 px-3 rounded-md hover:bg-slate-100 dark:hover:bg-gray-800 hover:text-sleep-500 dark:hover:text-sleep-400 transition-colors block",
                  location.pathname === link.path && "bg-slate-100 dark:bg-gray-800 text-sleep-500 dark:text-sleep-400"
                )}
                onClick={onClose}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
        <div className="border-t border-gray-200 dark:border-gray-800 my-2 pt-2"></div>
        <MobileAuthSection 
          isLoggedIn={isLoggedIn}
          navigateToPath={navigateToPath}
          handleLogout={handleLogout}
          onClose={onClose}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </nav>
    </div>
  );
};

interface MobileAuthSectionProps {
  isLoggedIn: boolean;
  navigateToPath: (path: string) => void;
  handleLogout: () => void;
  onClose: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const MobileAuthSection = ({ 
  isLoggedIn, 
  navigateToPath, 
  handleLogout, 
  onClose,
  isDarkMode,
  toggleDarkMode
}: MobileAuthSectionProps) => {
  return (
    <>
      {isLoggedIn ? (
        <>
          <Button
            variant="ghost"
            className="justify-start w-full text-left px-3"
            onClick={() => {
              navigateToPath("/profile");
              onClose();
            }}
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
          <Button
            variant="ghost"
            className="justify-start w-full text-left px-3 text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
            onClick={() => {
              handleLogout();
              onClose();
            }}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Log out
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="ghost"
            className="justify-start w-full text-left px-3"
            onClick={() => {
              navigateToPath("/login");
              onClose();
            }}
          >
            <LogIn className="w-4 h-4 mr-2" />
            Log in
          </Button>
          <Button
            variant="default"
            className="justify-start w-full text-left px-3 bg-sleep-500 hover:bg-sleep-600"
            onClick={() => {
              navigateToPath("/signup");
              onClose();
            }}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Sign up
          </Button>
        </>
      )}
      <Button 
        variant="ghost" 
        className="justify-start w-full text-left px-3" 
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </>
  );
};

export default MobileNav;
