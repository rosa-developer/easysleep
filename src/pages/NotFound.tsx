
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Mail, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-sleep-500 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
          Page not found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Button asChild variant="default" className="bg-sleep-500 hover:bg-sleep-600">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Go to Homepage
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <Link to="/contact" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </div>
        
        <Button
          variant="ghost"
          onClick={() => window.history.back()}
          className="text-slate-600 dark:text-slate-400 hover:text-sleep-500 dark:hover:text-sleep-400"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
