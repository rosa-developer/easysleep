
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { BarChart3, RefreshCw, Clock } from "lucide-react";

const KeyBenefits = () => {
  return (
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
  );
};

export default KeyBenefits;
