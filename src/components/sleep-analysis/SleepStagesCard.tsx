
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { sleepStagesData } from "./data";

interface SleepStagesCardProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const SleepStagesCard = ({ isExpanded, onToggle }: SleepStagesCardProps) => {
  return (
    <Card className="mb-8">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-medium">Sleep Stages</CardTitle>
            <CardDescription>Distribution of your sleep cycles</CardDescription>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={sleepStagesData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Percentage']}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="#8884d8" 
                    barSize={30} 
                  >
                    {sleepStagesData.map((entry, index) => (
                      <rect 
                        key={`cell-${index}`} 
                        fill={entry.color} 
                        x={0} 
                        y={0} 
                        width="100%" 
                        height="100%" 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold flex items-center">
                    <div className="w-3 h-3 bg-[#0D47A1] rounded-full mr-2"></div>
                    Deep Sleep (25%)
                  </h4>
                  <p className="text-sm text-slate-600 ml-5">
                    Crucial for physical recovery and memory consolidation
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold flex items-center">
                    <div className="w-3 h-3 bg-[#42A5F5] rounded-full mr-2"></div>
                    Light Sleep (45%)
                  </h4>
                  <p className="text-sm text-slate-600 ml-5">
                    Transitional sleep, easier to wake from
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold flex items-center">
                    <div className="w-3 h-3 bg-[#90CAF9] rounded-full mr-2"></div>
                    REM Sleep (30%)
                  </h4>
                  <p className="text-sm text-slate-600 ml-5">
                    Important for cognitive functions and dreaming
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default SleepStagesCard;
