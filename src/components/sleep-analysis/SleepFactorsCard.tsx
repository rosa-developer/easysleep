
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown, BedDouble, Calendar } from "lucide-react";

interface SleepFactorsCardProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SleepFactorsCard = ({ isExpanded, onToggle }: SleepFactorsCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-medium">Sleep Factors</CardTitle>
            <CardDescription>Environmental and lifestyle factors affecting your sleep</CardDescription>
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
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-slate-50">
              <h4 className="text-sm font-semibold flex items-center mb-2">
                <BedDouble className="h-4 w-4 mr-2 text-sleep-500" />
                Bedroom Environment
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="text-xs text-slate-500">Temperature</div>
                  <div className="font-medium">68°F (Optimal)</div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="text-xs text-slate-500">Humidity</div>
                  <div className="font-medium">45% (Optimal)</div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="text-xs text-slate-500">Noise Level</div>
                  <div className="font-medium">Low (Optimal)</div>
                </div>
              </div>
            </div>
            
            <div className="p-4 rounded-lg bg-slate-50">
              <h4 className="text-sm font-semibold flex items-center mb-2">
                <Calendar className="h-4 w-4 mr-2 text-sleep-500" />
                Daily Habits
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="text-xs text-slate-500">Screen Time Before Bed</div>
                  <div className="font-medium text-amber-500">45 min (Reduce)</div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="text-xs text-slate-500">Caffeine Consumption</div>
                  <div className="font-medium">4+ hours before bed (Good)</div>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <div className="text-xs text-slate-500">Exercise</div>
                  <div className="font-medium">6+ hours before bed (Good)</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default SleepFactorsCard;
