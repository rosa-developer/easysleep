
import { Activity, Moon, Zap, BadgeCheck, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";

const SleepTechnology = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
        
        <div className="container-custom pt-32 pb-16 md:pt-40 md:pb-24">
          <SectionTitle 
            pretitle="Advanced Innovation"
            title="Our Sleep Technology"
            description="Discover the science and technology behind EasySleep's revolutionary approach to improving your sleep quality."
          />
          
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">The Science of Better Sleep</h3>
                <p className="text-slate-600 mb-6">
                  Our sleep technology combines the latest research in sleep science with innovative monitoring techniques to provide you with actionable insights about your sleep patterns.
                </p>
                <ul className="space-y-3">
                  {[
                    "Advanced sleep cycle detection",
                    "Environmental quality monitoring",
                    "Personalized sleep improvement algorithms",
                    "Integration with health data platforms",
                    "Machine learning sleep pattern analysis"
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
              <div className="relative">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-sleep-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <img 
                  src="/lovable-uploads/35651cc2-a519-4a19-85a6-73182fd6fa38.png" 
                  alt="Sleep technology visualization" 
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Core Technology Features"
            title="Innovative Sleep Solutions"
            description="Our comprehensive suite of sleep technologies address every aspect of your sleep experience."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              icon={Activity}
              title="In-Depth Sleep Analysis"
              description="Get detailed insights into your sleep cycles, patterns, and quality with our advanced sleep monitoring technology."
            />
            <FeatureCard 
              icon={Moon}
              title="Personalized Sleep Plans"
              description="Receive customized sleep recommendations based on your unique sleep data and personal goals."
            />
            <FeatureCard 
              icon={Zap}
              title="Smart Alarm Technology"
              description="Wake up feeling refreshed with our smart alarm that detects the optimal moment in your sleep cycle."
            />
            <FeatureCard 
              icon={BadgeCheck}
              title="Expert Sleep Coaching"
              description="Connect with certified sleep specialists who can provide personalized guidance and support."
            />
            <FeatureCard 
              icon={Clock}
              title="Dedicated Sleep Tracker"
              description="Monitor your sleep progress over time with detailed statistics and visual reports."
            />
            <FeatureCard 
              icon={Heart}
              title="Health Integration"
              description="Seamlessly connect your sleep data with other health metrics for a comprehensive wellness approach."
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Explore Our Technology?</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Start your journey towards better sleep with EasySleep's cutting-edge technology suite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/analysis">
                  <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-8 py-6 rounded-md text-lg transition-all duration-300">
                    Try Sleep Analysis
                  </Button>
                </Link>
                <Link to="/tracker">
                  <Button variant="outline" className="px-8 py-6 rounded-md text-lg transition-all duration-300">
                    Explore Sleep Tracker
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

export default SleepTechnology;
