
import ThemeToggle from "./ThemeToggle";
import AuthButtons from "./AuthButtons";

interface NavControlsProps {
  isLoggedIn: boolean;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  handleLogout: () => void;
  navigateToPath: (path: string) => void;
}

const NavControls = ({ 
  isLoggedIn, 
  isDarkMode, 
  toggleDarkMode, 
  handleLogout, 
  navigateToPath 
}: NavControlsProps) => {
  return (
    <div className="flex items-center space-x-4">
      <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <AuthButtons 
        isLoggedIn={isLoggedIn} 
        handleLogout={handleLogout} 
        navigateToPath={navigateToPath} 
      />
    </div>
  );
};

export default NavControls;
