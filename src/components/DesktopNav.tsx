
import { useLocation } from "react-router-dom";
import { useNavigation } from "@/contexts/NavigationContext";
import NavLinks from "./navigation/NavLinks";
import NavControls from "./navigation/NavControls";

const DesktopNav = () => {
  const location = useLocation();
  const {
    navLinks,
    isLoggedIn,
    isDarkMode,
    toggleDarkMode,
    handleLogout,
    navigateToPath
  } = useNavigation();

  return (
    <div className="hidden md:flex items-center justify-between w-full pl-8">
      <NavLinks navLinks={navLinks} location={location} />
      <NavControls 
        isLoggedIn={isLoggedIn} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        handleLogout={handleLogout} 
        navigateToPath={navigateToPath} 
      />
    </div>
  );
};

export default DesktopNav;
