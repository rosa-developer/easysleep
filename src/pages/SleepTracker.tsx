
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { BarChart3, Bell, Calendar, Clock, Moon, Smartphone } from "lucide-react";

const SleepTracker = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
        
        <div className="container-custom pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-sleep-700 uppercase bg-sleep-100 rounded-full">
              Smart Sleep Monitoring
            </div>
            <h1 className="font-bold text-slate-900 mb-6">
              Dedicated <span className="text-sleep-600">Sleep Tracker</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Monitor and improve your sleep patterns with our advanced sleep tracking technology. Set goals, track progress, and optimize your sleep routine.
            </p>
            <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-6 py-6 rounded-md transition-all duration-300">
              Start Tracking
            </Button>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Key Features"
            title="Track and Optimize Your Sleep"
            description="Our dedicated sleep tracker offers comprehensive tools to monitor and improve your sleep quality."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Mobile Tracking</h3>
              <p className="text-slate-600">
                Track your sleep patterns seamlessly with our mobile app, no additional devices required.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in delay-100">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Sleep History</h3>
              <p className="text-slate-600">
                View your complete sleep history with detailed insights about your sleep quality over time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in delay-200">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Progress Analytics</h3>
              <p className="text-slate-600">
                Track your sleep improvement over time with visual analytics and progress reports.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in delay-300">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <Bell className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Smart Alarm</h3>
              <p className="text-slate-600">
                Wake up at the optimal time in your sleep cycle to feel refreshed and energized.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in delay-400">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <Moon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Sleep Goal Setting</h3>
              <p className="text-slate-600">
                Set personalized sleep goals and track your progress toward achieving better sleep.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in delay-500">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Bedtime Reminders</h3>
              <p className="text-slate-600">
                Receive gentle reminders to help you maintain a consistent sleep schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                pretitle="Smart Technology"
                title="Advanced Sleep Tracking Technology"
                description="Our sleep tracker uses cutting-edge technology to monitor your sleep patterns and provide actionable insights."
              />
              
              <ul className="mt-6 space-y-4">
                {[
                  "Non-invasive sleep monitoring",
                  "Precise sleep cycle tracking",
                  "Environmental factors analysis",
                  "Sleep quality scoring",
                  "Health metrics integration"
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
              
              <div className="mt-8">
                <Button className="easysleep-button">
                  Explore Technology
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/c587cb93-610d-443b-82b1-3f3a69dd1053.png" 
                alt="Sleep tracker technology" 
                className="rounded-xl shadow-lg transition-image"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Simple Process"
            title="How Sleep Tracking Works"
            description="Our sleep tracking process is simple, accurate, and designed to help you improve your sleep quality."
            centered={true}
          />
          
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-sleep-200 transform md:translate-x-[-0.5px]"></div>
              
              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-shrink-0 order-1 md:order-1 w-10 h-10 rounded-full bg-sleep-500 text-white flex items-center justify-center font-bold z-10 mb-4 md:mb-0">
                    1
                  </div>
                  <div className="order-2 md:order-1 md:w-1/2 md:pr-8 md:text-right"></div>
                  <div className="order-3 md:order-2 md:w-1/2 md:pl-8 animate-fade-in">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">Set Up Your Profile</h3>
                    <p className="text-slate-600">
                      Create your personalized sleep profile and set your sleep goals based on your lifestyle and preferences.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-shrink-0 order-1 md:order-2 w-10 h-10 rounded-full bg-sleep-500 text-white flex items-center justify-center font-bold z-10 mb-4 md:mb-0">
                    2
                  </div>
                  <div className="order-2 md:order-1 md:w-1/2 md:pr-8 md:text-right animate-fade-in delay-100">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">Start Tracking</h3>
                    <p className="text-slate-600">
                      Place your device near your bed and activate sleep tracking mode before you go to sleep.
                    </p>
                  </div>
                  <div className="order-3 md:order-3 md:w-1/2 md:pl-8"></div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-shrink-0 order-1 md:order-1 w-10 h-10 rounded-full bg-sleep-500 text-white flex items-center justify-center font-bold z-10 mb-4 md:mb-0">
                    3
                  </div>
                  <div className="order-2 md:order-1 md:w-1/2 md:pr-8 md:text-right"></div>
                  <div className="order-3 md:order-2 md:w-1/2 md:pl-8 animate-fade-in delay-200">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">Get Insights</h3>
                    <p className="text-slate-600">
                      Review your sleep data each morning to understand your sleep patterns and quality.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-shrink-0 order-1 md:order-2 w-10 h-10 rounded-full bg-sleep-500 text-white flex items-center justify-center font-bold z-10 mb-4 md:mb-0">
                    4
                  </div>
                  <div className="order-2 md:order-1 md:w-1/2 md:pr-8 md:text-right animate-fade-in delay-300">
                    <h3 className="text-xl font-bold mb-2 text-slate-800">Improve Your Sleep</h3>
                    <p className="text-slate-600">
                      Follow personalized recommendations to gradually improve your sleep quality and habits.
                    </p>
                  </div>
                  <div className="order-3 md:order-3 md:w-1/2 md:pl-8"></div>
                </div>
              </div>
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Start Tracking Your Sleep Today</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have improved their sleep quality with our advanced sleep tracking tools.
              </p>
              <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-8 py-6 rounded-md text-lg transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SleepTracker;
