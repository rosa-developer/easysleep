
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, User, LogOut } from "lucide-react";

interface AuthButtonsProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
  navigateToPath: (path: string) => void;
}

const AuthButtons = ({ isLoggedIn, handleLogout, navigateToPath }: AuthButtonsProps) => {
  return (
    <>
      {isLoggedIn ? (
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 transition-all hover:bg-sleep-50 dark:hover:bg-gray-800"
            onClick={() => navigateToPath("/profile")}
          >
            <User className="w-4 h-4 mr-1" />
            Profile
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 transition-all hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-1" />
            Log out
          </Button>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 transition-all hover:bg-sleep-50 dark:hover:bg-gray-800"
            onClick={() => navigateToPath("/login")}
          >
            <LogIn className="w-4 h-4 mr-1" />
            Log in
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 bg-sleep-500 text-white hover:bg-sleep-600 border-none transition-all"
            onClick={() => navigateToPath("/signup")}
          >
            <UserPlus className="w-4 h-4 mr-1" />
            Sign up
          </Button>
        </div>
      )}
    </>
  );
};

export default AuthButtons;
