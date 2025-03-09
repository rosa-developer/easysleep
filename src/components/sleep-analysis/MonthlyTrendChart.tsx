
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { monthlyTrendData } from "./data";

const MonthlyTrendChart = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Monthly Sleep Duration Trend</CardTitle>
        <CardDescription>Average hours slept each month</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[5, 9]} />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="avgDuration" 
              name="Avg. Sleep Duration (hours)" 
              stroke="#1E40AF" 
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlyTrendChart;
