
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const ContactHeader = () => {
  return (
    <div className="flex items-center mb-10">
      <Link 
        to="/" 
        className="flex items-center group mr-6"
        aria-label="EasySleep Home"
      >
        <span className="text-sleep-800 dark:text-sleep-200 font-['Playfair_Display'] text-2xl font-bold tracking-tighter group-hover:text-sleep-600 dark:group-hover:text-sleep-300 transition-colors">
          easy
          <span className="text-sleep-500 group-hover:text-sleep-400 transition-colors">sleep</span>
        </span>
      </Link>
      
      <Button 
        asChild 
        variant="outline" 
        className="flex items-center gap-2 text-sleep-500 hover:text-sleep-600 hover:bg-sleep-50 border-sleep-200"
      >
        <Link to="/">
          <Home size={18} />
          <span>Home</span>
        </Link>
      </Button>
    </div>
  );
};

export default ContactHeader;
