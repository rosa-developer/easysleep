
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/contexts/NavigationContext";

interface NavLinksProps {
  navLinks: ReturnType<typeof useNavigation>["navLinks"];
  location: ReturnType<typeof useLocation>;
}

const NavLinks = ({ navLinks, location }: NavLinksProps) => {
  return (
    <nav className="flex items-center space-x-8">
      {navLinks.map((link) => (
        <div key={link.name} className="relative group">
          {link.dropdown ? (
            <DropdownLink link={link} location={location} />
          ) : (
            <Link
              to={link.path}
              className={cn(
                "text-slate-700 dark:text-slate-300 hover:text-sleep-500 dark:hover:text-sleep-400 transition-colors duration-200 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-sleep-500 after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-x-100",
                location.pathname === link.path && "text-sleep-500 dark:text-sleep-400 after:scale-x-100"
              )}
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

interface DropdownLinkProps {
  link: ReturnType<typeof useNavigation>["navLinks"][0];
  location: ReturnType<typeof useLocation>;
}

const DropdownLink = ({ link, location }: DropdownLinkProps) => {
  return (
    <>
      <button
        className={cn(
          "text-slate-700 dark:text-slate-300 hover:text-sleep-500 dark:hover:text-sleep-400 transition-colors duration-200 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-sleep-500 after:origin-center after:scale-x-0 after:transition-transform hover:after:scale-x-100 flex items-center",
          location.pathname === link.path && "text-sleep-500 dark:text-sleep-400 after:scale-x-100"
        )}
      >
        {link.name}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1 rounded-md bg-white dark:bg-gray-900 shadow-xs">
          {link.dropdown?.map((dropdownItem) => (
            <Link
              key={dropdownItem.name}
              to={dropdownItem.path}
              className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-sleep-50 dark:hover:bg-gray-800 hover:text-sleep-500 dark:hover:text-sleep-400"
            >
              {dropdownItem.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavLinks;
