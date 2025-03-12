
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, User, LogOut } from "lucide-react";

interface MobileAuthButtonsProps {
  isLoggedIn: boolean;
  navigateToPath: (path: string) => void;
  handleLogout: () => void;
  onClose: () => void;
}

const MobileAuthButtons = ({ 
  isLoggedIn, 
  navigateToPath, 
  handleLogout, 
  onClose 
}: MobileAuthButtonsProps) => {
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
    </>
  );
};

export default MobileAuthButtons;
