
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { NavLink } from "@/types/navigation";

interface MobileNavLinksProps {
  navLinks: NavLink[];
  location: {
    pathname: string;
  };
  onClose: () => void;
}

const MobileNavLinks = ({ navLinks, location, onClose }: MobileNavLinksProps) => {
  return (
    <div className="flex flex-col space-y-4 pt-2">
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
    </div>
  );
};

export default MobileNavLinks;
