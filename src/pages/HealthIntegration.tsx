
import { Heart, Activity, Smartphone, ListChecks, Share2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";

const HealthIntegration = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
        
        <div className="container-custom pt-32 pb-16 md:pt-40 md:pb-24">
          <SectionTitle 
            pretitle="Connected Wellness"
            title="Health Integration"
            description="Seamlessly connect your sleep data with other health metrics for a comprehensive approach to your overall wellbeing."
          />
          
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-sleep-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <img 
                  src="/lovable-uploads/c587cb93-610d-443b-82b1-3f3a69dd1053.png" 
                  alt="Health integration visualization" 
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Comprehensive Health Insights</h3>
                <p className="text-slate-600 mb-6">
                  Sleep doesn't exist in isolation. Our health integration features connect your sleep data with other vital health metrics, providing a holistic view of how different aspects of your health influence each other.
                </p>
                <ul className="space-y-3">
                  {[
                    "Integration with popular fitness apps and wearables",
                    "Correlation between activity levels and sleep quality",
                    "Heart rate and HRV analysis during sleep",
                    "Nutrition and hydration impact on sleep patterns",
                    "Stress levels and sleep quality relationships"
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
      
      {/* Integration Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Integration Features"
            title="Connected Health Ecosystem"
            description="Our platform seamlessly connects with your favorite health and fitness apps to create a comprehensive wellness profile."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              icon={Heart}
              title="Heart Health Monitoring"
              description="Track how your heart rate and heart rate variability during sleep correlate with your overall heart health."
            />
            <FeatureCard 
              icon={Activity}
              title="Activity & Sleep Correlation"
              description="See how your daily physical activity impacts your sleep quality and duration."
            />
            <FeatureCard 
              icon={Smartphone}
              title="Wearable Device Integration"
              description="Sync with popular fitness trackers and smartwatches for automated data collection."
            />
            <FeatureCard 
              icon={ListChecks}
              title="Nutrition Tracking"
              description="Connect with nutrition apps to understand how diet affects your sleep patterns."
            />
            <FeatureCard 
              icon={Share2}
              title="Data Sharing"
              description="Securely share your sleep and health data with healthcare providers or wellness coaches."
            />
            <FeatureCard 
              icon={Shield}
              title="Privacy Controls"
              description="Granular privacy settings give you complete control over your health data sharing."
            />
          </div>
        </div>
      </section>
      
      {/* Compatible Platforms Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Compatibility"
            title="Supported Platforms"
            description="EasySleep integrates with a wide range of health and fitness platforms to provide comprehensive wellness insights."
            centered={true}
          />
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {/* Placeholder for platform logos */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="w-32 h-16 md:w-40 md:h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <div className="w-20 h-8 bg-slate-200 rounded"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-slate-600">
              Don't see your favorite platform? We're constantly adding new integrations.
            </p>
            <Link to="/contact" className="text-sleep-600 hover:text-sleep-700 font-medium inline-block mt-2">
              Request an integration →
            </Link>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Connect Your Health Journey</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Experience the power of integrated health data and discover insights that can transform your wellness routine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-8 py-6 rounded-md text-lg transition-all duration-300">
                    Start Connecting
                  </Button>
                </Link>
                <Link to="/analysis">
                  <Button variant="outline" className="px-8 py-6 rounded-md text-lg transition-all duration-300">
                    See Analysis Tools
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

export default HealthIntegration;
