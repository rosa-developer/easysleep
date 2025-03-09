
import React from "react";
import SleepInsightsCard from "../SleepInsightsCard";

interface InsightsTabProps {
  expandedSections: {
    insights: boolean;
  };
  toggleSection: (section: string) => void;
}

const InsightsTab = ({ expandedSections, toggleSection }: InsightsTabProps) => {
  return (
    <div className="animate-fade-in">
      <SleepInsightsCard 
        isExpanded={expandedSections.insights}
        onToggle={() => toggleSection("insights")}
      />
    </div>
  );
};

export default InsightsTab;
