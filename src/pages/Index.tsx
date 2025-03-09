
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Moon, Activity, Zap, BadgeCheck, Clock, Heart } from "lucide-react";

const Index = () => {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-fade-in">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-sleep-700 uppercase bg-sleep-100 rounded-full">
                Scientifically Designed Sleep Solutions
              </div>
              <h1 className="font-bold text-slate-900 mb-6">
                When it comes to sleep, <span className="text-sleep-600">EasySleep</span> is the master.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Transform your nights with our innovative sleep technology. Analyze, track, and optimize your sleep patterns for a healthier, more energized life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-6 py-6 rounded-md transition-all duration-300">
                  Start Your Sleep Journey
                </Button>
                <Link to="/analysis">
                  <Button variant="outline" className="px-6 py-6 rounded-md transition-all duration-300">
                    Explore Analysis
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs text-slate-600 overflow-hidden">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-slate-600">
                  <span className="font-semibold">2,000+</span> sleep-improved customers
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block animate-fade-in">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-sleep-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float delay-700"></div>
              
              <img 
                src="/lovable-uploads/35651cc2-a519-4a19-85a6-73182fd6fa38.png" 
                alt="Person sleeping peacefully" 
                className="rounded-xl shadow-lg relative z-10 transition-image"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Our Features"
            title="The Science of Better Sleep"
            description="Discover how our advanced features can transform your sleep experience and improve your overall wellbeing."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Link to="/technology" className="block">
              <FeatureCard 
                icon={Activity}
                title="In-Depth Sleep Analysis"
                description="Get detailed insights into your sleep cycles, patterns, and quality with our advanced sleep monitoring technology."
                className="animate-fade-in h-full"
              />
            </Link>
            <Link to="/technology" className="block">
              <FeatureCard 
                icon={Moon}
                title="Personalized Sleep Plans"
                description="Receive customized sleep recommendations based on your unique sleep data and personal goals."
                className="animate-fade-in delay-100 h-full"
              />
            </Link>
            <Link to="/smart-alarm" className="block">
              <FeatureCard 
                icon={Zap}
                title="Smart Alarm Technology"
                description="Wake up feeling refreshed with our smart alarm that detects the optimal moment in your sleep cycle."
                className="animate-fade-in delay-200 h-full"
              />
            </Link>
            <Link to="/coaching" className="block">
              <FeatureCard 
                icon={BadgeCheck}
                title="Expert Sleep Coaching"
                description="Connect with certified sleep specialists who can provide personalized guidance and support."
                className="animate-fade-in delay-300 h-full"
              />
            </Link>
            <Link to="/tracker" className="block">
              <FeatureCard 
                icon={Clock}
                title="Dedicated Sleep Tracker"
                description="Monitor your sleep progress over time with detailed statistics and visual reports."
                className="animate-fade-in delay-400 h-full"
              />
            </Link>
            <Link to="/health-integration" className="block">
              <FeatureCard 
                icon={Heart}
                title="Health Integration"
                description="Seamlessly connect your sleep data with other health metrics for a comprehensive wellness approach."
                className="animate-fade-in delay-500 h-full"
              />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Sleep Analysis Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img 
                src="/lovable-uploads/0d1ffa34-3c02-49c2-9042-0b82a49d2b2d.png" 
                alt="Sleep analysis demonstration" 
                className="rounded-xl shadow-lg transition-image"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <SectionTitle 
                pretitle="Detailed Analytics"
                title="In-Depth Sleep Analysis"
                description="Understand your sleep patterns like never before with our comprehensive sleep analysis tools. Identify trends, track improvements, and optimize your sleep quality for better health."
              />
              <ul className="mt-6 space-y-4">
                {[
                  "Track sleep cycles and stages",
                  "Monitor sleep duration and quality",
                  "Identify sleep disruptions",
                  "Analyze environmental factors",
                  "Generate detailed sleep reports"
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
                <Link to="/analysis">
                  <Button className="easysleep-button">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sleep Tracker Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                pretitle="Smart Monitoring"
                title="Dedicated Sleep Tracker"
                description="Keep track of your sleep habits and improvements over time with our dedicated sleep tracking tools. Set goals, monitor progress, and see real results."
              />
              <ul className="mt-6 space-y-4">
                {[
                  "Real-time sleep monitoring",
                  "Historical sleep data analysis",
                  "Goal setting and progress tracking",
                  "Sleep habit recommendations",
                  "Integration with other health apps"
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
                <Link to="/tracker">
                  <Button className="easysleep-button">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/c587cb93-610d-443b-82b1-3f3a69dd1053.png" 
                alt="Sleep tracker demonstration" 
                className="rounded-xl shadow-lg transition-image"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Success Stories"
            title="What Our Users Say"
            description="Hear from people who have transformed their sleep quality and overall wellbeing with EasySleep."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              quote="EasySleep has completely transformed my nights. I now fall asleep faster and wake up feeling refreshed."
              author="Sarah Johnson"
              role="Using EasySleep for 6 months"
              className="animate-fade-in"
            />
            <TestimonialCard 
              quote="The sleep analysis feature helped me identify patterns I never noticed before. My sleep quality has improved dramatically."
              author="Michael Chen"
              role="Using EasySleep for 1 year"
              className="animate-fade-in delay-100"
            />
            <TestimonialCard 
              quote="As someone who struggled with insomnia for years, EasySleep has been life-changing. The personalized recommendations really work."
              author="Emma Rodriguez"
              role="Using EasySleep for 8 months"
              className="animate-fade-in delay-200"
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Transform Your Sleep?</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join thousands of people who have improved their sleep quality, energy levels, and overall wellbeing with EasySleep.
              </p>
              <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-8 py-6 rounded-md text-lg transition-all duration-300">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
