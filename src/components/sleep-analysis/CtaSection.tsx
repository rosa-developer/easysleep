
import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
