
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { weeklyData } from "./data";

const WeeklySleepGraph = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Weekly Sleep Graph</CardTitle>
        <CardDescription>Last 7 days of sleep data</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={weeklyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1E40AF" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#1E40AF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="day" />
            <YAxis domain={[0, 10]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="hours" 
              stroke="#1E40AF" 
              fillOpacity={1} 
              fill="url(#colorHours)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default WeeklySleepGraph;
