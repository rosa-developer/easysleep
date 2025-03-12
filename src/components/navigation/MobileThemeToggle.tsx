
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface MobileThemeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onClose?: () => void;
}

const MobileThemeToggle = ({ isDarkMode, toggleDarkMode, onClose }: MobileThemeToggleProps) => {
  const handleToggle = () => {
    toggleDarkMode();
    if (onClose) onClose();
  };

  return (
    <Button 
      variant="ghost" 
      className="justify-start w-full text-left px-3" 
      onClick={handleToggle}
    >
      {isDarkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default MobileThemeToggle;
