
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/sleep-analysis/Hero";
import KeyBenefits from "@/components/sleep-analysis/KeyBenefits";
import CtaSection from "@/components/sleep-analysis/CtaSection";
import DashboardTab from "@/components/sleep-analysis/tabs/DashboardTab";
import TrendsTab from "@/components/sleep-analysis/tabs/TrendsTab";
import InsightsTab from "@/components/sleep-analysis/tabs/InsightsTab";
import { calculateSleepScore } from "@/components/sleep-analysis/data";

const SleepAnalysis = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    insights: true,
    stages: false,
    factors: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const sleepScore = calculateSleepScore();
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Hero Section */}
      <Hero />
      
      {/* Interactive Analysis Dashboard */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              <DashboardTab 
                sleepScore={sleepScore} 
                expandedSections={{ stages: expandedSections.stages }} 
                toggleSection={(section) => toggleSection(section as keyof typeof expandedSections)} 
              />
            </TabsContent>
            
            <TabsContent value="trends">
              <TrendsTab 
                expandedSections={{ factors: expandedSections.factors }} 
                toggleSection={(section) => toggleSection(section as keyof typeof expandedSections)} 
              />
            </TabsContent>
            
            <TabsContent value="insights">
              <InsightsTab 
                expandedSections={{ insights: expandedSections.insights }} 
                toggleSection={(section) => toggleSection(section as keyof typeof expandedSections)} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <KeyBenefits />
      
      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default SleepAnalysis;
