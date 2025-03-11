
export interface NavLink {
  name: string;
  path: string;
  dropdown?: Array<{
    name: string;
    path: string;
  }>;
}

export interface NavigationProps {
  navLinks: NavLink[];
  isLoggedIn: boolean;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  handleLogout: () => void;
  navigateToPath: (path: string) => void;
}
