
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

interface SleepInsightsCardProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SleepInsightsCard = ({ isExpanded, onToggle }: SleepInsightsCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-medium">Personalized Sleep Insights</CardTitle>
            <CardDescription>Key observations and recommendations</CardDescription>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onToggle}
            className="ml-2"
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 rounded-lg border border-sleep-100 bg-sleep-50">
              <h3 className="text-base font-semibold mb-2 text-sleep-700">Your sleep patterns show signs of inconsistency</h3>
              <p className="text-sm text-slate-600 mb-3">
                Your bedtime varies by more than 1 hour across the week, which can disrupt your circadian rhythm.
              </p>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <h4 className="text-sm font-medium mb-1 text-sleep-600">Recommendation</h4>
                <p className="text-sm text-slate-600">
                  Try to maintain a consistent sleep schedule, going to bed and waking up at similar times each day, even on weekends.
                </p>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-sleep-100 bg-sleep-50">
              <h3 className="text-base font-semibold mb-2 text-sleep-700">Your deep sleep percentage is slightly below optimal</h3>
              <p className="text-sm text-slate-600 mb-3">
                You're getting about 22% deep sleep, while 23-27% is considered optimal for your age group.
              </p>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <h4 className="text-sm font-medium mb-1 text-sleep-600">Recommendation</h4>
                <p className="text-sm text-slate-600">
                  Consider regular physical activity earlier in the day and reducing alcohol consumption to improve deep sleep quality.
                </p>
              </div>
            </div>
            
            <div className="p-4 rounded-lg border border-sleep-100 bg-sleep-50">
              <h3 className="text-base font-semibold mb-2 text-sleep-700">Your sleep seems disrupted during early morning hours</h3>
              <p className="text-sm text-slate-600 mb-3">
                Data shows multiple brief awakenings between 4-6 AM, which may be impacting your overall sleep quality.
              </p>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <h4 className="text-sm font-medium mb-1 text-sleep-600">Recommendation</h4>
                <p className="text-sm text-slate-600">
                  Ensure your bedroom is dark and quiet. Consider using blackout curtains or a white noise machine to minimize disturbances.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default SleepInsightsCard;
