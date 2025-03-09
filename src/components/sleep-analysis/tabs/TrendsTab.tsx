
import React from "react";
import MonthlyTrendChart from "../MonthlyTrendChart";
import SleepFactorsCard from "../SleepFactorsCard";

interface TrendsTabProps {
  expandedSections: {
    factors: boolean;
  };
  toggleSection: (section: string) => void;
}

const TrendsTab = ({ expandedSections, toggleSection }: TrendsTabProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 animate-fade-in">
      {/* Monthly Trends */}
      <MonthlyTrendChart />
      
      {/* Sleep Factors */}
      <SleepFactorsCard 
        isExpanded={expandedSections.factors}
        onToggle={() => toggleSection("factors")}
      />
    </div>
  );
};

export default TrendsTab;
