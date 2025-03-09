
import React from "react";

const Hero = () => {
  return (
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
