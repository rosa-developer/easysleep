
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { getSleepQualityText } from "./data";

interface SleepScoreCardProps {
  sleepScore: number;
}

const SleepScoreCard = ({ sleepScore }: SleepScoreCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Sleep Score</CardTitle>
        <CardDescription>Last night's sleep quality</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle 
                className="text-slate-100" 
                strokeWidth="8" 
                stroke="currentColor" 
                fill="transparent" 
                r="40" 
                cx="50" 
                cy="50" 
              />
              <circle 
                className="text-sleep-500" 
                strokeWidth="8" 
                strokeDasharray={`${sleepScore * 2.51} 251`}
                strokeLinecap="round" 
                stroke="currentColor" 
                fill="transparent" 
                r="40" 
                cx="50" 
                cy="50" 
              />
            </svg>
            <span className="absolute text-3xl font-bold text-sleep-700">{sleepScore}</span>
          </div>
          <span className="mt-2 text-lg font-medium text-sleep-600">{getSleepQualityText(sleepScore)}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SleepScoreCard;
