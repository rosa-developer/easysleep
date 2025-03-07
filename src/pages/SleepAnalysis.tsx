
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { Activity, BarChart3, Clock, Moon, RefreshCw, Zap } from "lucide-react";

const SleepAnalysis = () => {
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
              Advanced Sleep Insights
            </div>
            <h1 className="font-bold text-slate-900 mb-6">
              In-Depth <span className="text-sleep-600">Sleep Analysis</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Understand your sleep patterns like never before with our comprehensive sleep analysis tools. Gain insights into your sleep quality and make informed decisions for better rest.
            </p>
            <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-6 py-6 rounded-md transition-all duration-300">
              Start Your Analysis
            </Button>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Our Approach"
            title="Comprehensive Sleep Analysis"
            description="Our advanced sleep tracking technology provides detailed insights into your sleep patterns, helping you understand and improve your sleep quality."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Data-Driven Insights</h3>
              <p className="text-slate-600">
                Our algorithm collects and analyzes your sleep data to provide personalized insights and recommendations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in delay-100">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <RefreshCw className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Sleep Cycle Tracking</h3>
              <p className="text-slate-600">
                Monitor your sleep cycles including REM, deep sleep, and light sleep phases to optimize your rest.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in delay-200">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Trend Analysis</h3>
              <p className="text-slate-600">
                Track your sleep patterns over time to identify trends, improvements, and areas that need attention.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <SectionTitle 
            pretitle="The Process"
            title="How Sleep Analysis Works"
            description="Our simple yet powerful sleep analysis process helps you understand and improve your sleep quality in just a few steps."
            centered={true}
          />
          
          <div className="mt-16 relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-sleep-200 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Step 1 */}
              <div className="relative animate-fade-in">
                <div className="md:text-right">
                  <div className="md:hidden w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-500 text-white font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">Data Collection</h3>
                  <p className="text-slate-600 mb-4">
                    Our sensors accurately collect data while you sleep, including movement, heart rate, and environmental factors.
                  </p>
                </div>
                <div className="hidden md:block absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-sleep-500 text-white flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              
              {/* Empty space for alignment */}
              <div className="hidden md:block"></div>
              
              {/* Empty space for alignment */}
              <div className="hidden md:block"></div>
              
              {/* Step 2 */}
              <div className="relative animate-fade-in delay-100">
                <div>
                  <div className="md:hidden w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-500 text-white font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">Processing & Analysis</h3>
                  <p className="text-slate-600 mb-4">
                    Our advanced algorithms process your sleep data to identify patterns and calculate sleep quality metrics.
                  </p>
                </div>
                <div className="hidden md:block absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-sleep-500 text-white flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative animate-fade-in delay-200">
                <div className="md:text-right">
                  <div className="md:hidden w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-500 text-white font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">Personalized Insights</h3>
                  <p className="text-slate-600 mb-4">
                    Receive detailed reports with personalized insights about your sleep quality and patterns.
                  </p>
                </div>
                <div className="hidden md:block absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-sleep-500 text-white flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              
              {/* Empty space for alignment */}
              <div className="hidden md:block"></div>
              
              {/* Empty space for alignment */}
              <div className="hidden md:block"></div>
              
              {/* Step 4 */}
              <div className="relative animate-fade-in delay-300">
                <div>
                  <div className="md:hidden w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-500 text-white font-bold">
                    4
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-800">Recommendations</h3>
                  <p className="text-slate-600 mb-4">
                    Get actionable recommendations to improve your sleep quality based on your unique data.
                  </p>
                </div>
                <div className="hidden md:block absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-sleep-500 text-white flex items-center justify-center font-bold">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Highlight */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="/lovable-uploads/0d1ffa34-3c02-49c2-9042-0b82a49d2b2d.png" 
                alt="Sleep analysis dashboard" 
                className="rounded-xl shadow-lg transition-image"
              />
            </div>
            
            <div>
              <SectionTitle 
                pretitle="Key Features"
                title="Advanced Analytics at Your Fingertips"
                description="Our sleep analysis tools provide comprehensive insights to help you optimize your sleep quality."
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sleep-100 text-sleep-500 flex items-center justify-center mr-4">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-slate-800">Sleep Quality Score</h4>
                    <p className="text-slate-600">
                      Get a daily sleep quality score that helps you understand how well you slept.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sleep-100 text-sleep-500 flex items-center justify-center mr-4">
                    <Moon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-slate-800">Sleep Stage Analysis</h4>
                    <p className="text-slate-600">
                      Track your time spent in each sleep stage: REM, deep sleep, and light sleep.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sleep-100 text-sleep-500 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-slate-800">Sleep Duration Tracking</h4>
                    <p className="text-slate-600">
                      Monitor your total sleep time and sleep efficiency to ensure you're getting enough rest.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sleep-100 text-sleep-500 flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-slate-800">Smart Recommendations</h4>
                    <p className="text-slate-600">
                      Receive personalized suggestions to improve your sleep based on your unique patterns.
                    </p>
                  </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Understand Your Sleep?</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Start your journey to better sleep with our comprehensive sleep analysis tools.
              </p>
              <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-8 py-6 rounded-md text-lg transition-all duration-300">
                Begin Your Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SleepAnalysis;
