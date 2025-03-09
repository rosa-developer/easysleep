
import React from "react";
import { Clock, Activity } from "lucide-react";
import { weeklyData } from "../data";
import SleepScoreCard from "../SleepScoreCard";
import SleepMetricsCard from "../SleepMetricsCard";
import SleepStagesCard from "../SleepStagesCard";
import WeeklySleepGraph from "../WeeklySleepGraph";

interface DashboardTabProps {
  sleepScore: number;
  expandedSections: {
    stages: boolean;
  };
  toggleSection: (section: string) => void;
}

const DashboardTab = ({ sleepScore, expandedSections, toggleSection }: DashboardTabProps) => {
  return (
    <div className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Sleep Score Card */}
        <SleepScoreCard sleepScore={sleepScore} />
        
        {/* Sleep Duration Card */}
        <SleepMetricsCard 
          title="Sleep Duration"
          description="Hours slept"
          value={weeklyData[weeklyData.length - 1].hours}
          suffix="hours"
          progressValue={Math.min(100, (weeklyData[weeklyData.length - 1].hours / 9) * 100)}
          progressMin="0h"
          progressMax="Recommended: 7-9h"
          icon={Clock}
          iconText="11:30 PM - 7:15 AM"
        />
        
        {/* Sleep Efficiency Card */}
        <SleepMetricsCard 
          title="Sleep Efficiency"
          description="Time actually sleeping"
          value={`${weeklyData[weeklyData.length - 1].efficiency}%`}
          progressValue={weeklyData[weeklyData.length - 1].efficiency}
          progressMin="Poor"
          progressMax="Excellent"
          icon={Activity}
          iconText="5 awakenings"
        />
      </div>
      
      {/* Sleep Stages */}
      <SleepStagesCard 
        isExpanded={expandedSections.stages}
        onToggle={() => toggleSection("stages")}
      />
      
      {/* Weekly Sleep Graph */}
      <WeeklySleepGraph />
    </div>
  );
};

export default DashboardTab;
