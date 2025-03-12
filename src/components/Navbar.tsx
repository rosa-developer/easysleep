
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useNavigation } from "@/contexts/NavigationContext";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useScrollDetection } from "@/hooks/useScrollDetection";

const Navbar = () => {
  const { 
    isMobileMenuOpen, 
    toggleMobileMenu, 
    closeMobileMenu 
  } = useNavigation();
  
  const isScrolled = useScrollDetection(10);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
          aria-label="EasySleep Home"
        >
          <span className="text-sleep-800 dark:text-sleep-200 font-['Playfair_Display'] text-2xl font-bold tracking-tighter group-hover:text-sleep-600 dark:group-hover:text-sleep-300 transition-colors">
            easy
            <span className="text-sleep-500 group-hover:text-sleep-400 transition-colors">sleep</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
};

export default Navbar;
