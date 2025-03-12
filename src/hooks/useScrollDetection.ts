
import { useState, useEffect } from "react";

export const useScrollDetection = (threshold = 0) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check initial scroll position
    if (window.scrollY > threshold) {
      setIsScrolled(true);
    }
    
    const handleScroll = () => {
      // Add some hysteresis to prevent flickering
      if (!isScrolled && window.scrollY > threshold + 5) {
        setIsScrolled(true);
      } else if (isScrolled && window.scrollY < threshold - 5) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, isScrolled]);

  return isScrolled;
};
