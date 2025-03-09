
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";

interface SleepMetricsCardProps {
  title: string;
  description: string;
  value: number | string;
  suffix?: string;
  progressValue?: number;
  progressMin?: string;
  progressMax?: string;
  icon?: LucideIcon;
  iconText?: string;
}

const SleepMetricsCard = ({
  title,
  description,
  value,
  suffix,
  progressValue,
  progressMin,
  progressMax,
  icon: Icon,
  iconText,
}: SleepMetricsCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="flex items-end mb-2">
            <span className="text-3xl font-bold text-slate-800">
              {value}
            </span>
            {suffix && <span className="ml-1 text-slate-600">{suffix}</span>}
          </div>
          {progressValue !== undefined && (
            <>
              <Progress 
                className="h-2 mt-2" 
                value={progressValue} 
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>{progressMin}</span>
                <span>{progressMax}</span>
              </div>
            </>
          )}
          {Icon && iconText && (
            <div className="flex items-center mt-4">
              <span className="text-sm text-slate-600 flex items-center">
                <Icon className="h-4 w-4 mr-1" />
                {iconText}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SleepMetricsCard;
