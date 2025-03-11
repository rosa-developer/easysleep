
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import SleepAnalysis from "./pages/SleepAnalysis";
import SleepTracker from "./pages/SleepTracker";
import SleepTechnology from "./pages/SleepTechnology";
import SmartAlarm from "./pages/SmartAlarm";
import SleepCoaching from "./pages/SleepCoaching";
import HealthIntegration from "./pages/HealthIntegration";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { setupDatabase } from "./utils/dbSetup";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Setup the database when the app starts
    setupDatabase()
      .then(() => console.log('Database setup complete'))
      .catch(err => console.error('Database setup failed:', err));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/analysis" element={<SleepAnalysis />} />
              <Route path="/tracker" element={<SleepTracker />} />
              <Route path="/technology" element={<SleepTechnology />} />
              <Route path="/smart-alarm" element={<SmartAlarm />} />
              <Route path="/coaching" element={<SleepCoaching />} />
              <Route path="/health-integration" element={<HealthIntegration />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
