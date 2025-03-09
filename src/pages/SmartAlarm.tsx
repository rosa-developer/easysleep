
import { Bell, Clock, Calendar, Moon, Sunrise, Sunset } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";

const SmartAlarm = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
        
        <div className="container-custom pt-32 pb-16 md:pt-40 md:pb-24">
          <SectionTitle 
            pretitle="Wake Up Better"
            title="Smart Alarm Technology"
            description="Our intelligent alarm system wakes you at the optimal moment in your sleep cycle, so you feel refreshed and energized."
          />
          
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-sleep-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <img 
                  src="/lovable-uploads/c587cb93-610d-443b-82b1-3f3a69dd1053.png" 
                  alt="Smart alarm visualization" 
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">How Our Smart Alarm Works</h3>
                <p className="text-slate-600 mb-6">
                  Traditional alarms interrupt your sleep cycle at fixed times, often leaving you groggy. Our Smart Alarm monitors your sleep phases and wakes you during your lightest sleep phase within your set wake-up window.
                </p>
                <ul className="space-y-3">
                  {[
                    "Tracks sleep cycles in real-time",
                    "Identifies optimal wake-up moments",
                    "Gentle wake-up sounds that gradually increase",
                    "Customizable wake-up window (15-30 minutes)",
                    "Integration with smart home devices"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sleep-100 text-sleep-600 flex items-center justify-center mr-3 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Key Features"
            title="Smart Alarm Benefits"
            description="Discover how our Smart Alarm technology transforms your morning routine and overall wellbeing."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              icon={Bell}
              title="Gentle Wake-Up"
              description="Gradually increasing sounds and optional light simulation for a natural, stress-free awakening."
            />
            <FeatureCard 
              icon={Clock}
              title="Sleep Cycle Detection"
              description="Advanced algorithms identify your sleep phases to determine the optimal wake-up moment."
            />
            <FeatureCard 
              icon={Calendar}
              title="Smart Scheduling"
              description="Set different wake-up times for weekdays and weekends with recurring alarm profiles."
            />
            <FeatureCard 
              icon={Moon}
              title="Sleep Quality Reports"
              description="Get insights about your sleep quality and how it affects your morning alertness."
            />
            <FeatureCard 
              icon={Sunrise}
              title="Dawn Simulation"
              description="Optional light that gradually brightens to simulate sunrise for a more natural awakening."
            />
            <FeatureCard 
              icon={Sunset}
              title="Bedtime Reminders"
              description="Personalized notifications to help you maintain a consistent sleep schedule."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-sleep-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-sleep-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Try Our Smart Alarm</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Experience the difference of waking up refreshed and energized every morning with EasySleep's Smart Alarm technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-8 py-6 rounded-md text-lg transition-all duration-300">
                    Get Started Today
                  </Button>
                </Link>
                <Link to="/tracker">
                  <Button variant="outline" className="px-8 py-6 rounded-md text-lg transition-all duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartAlarm;
