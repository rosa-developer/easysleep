
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import SectionTitle from "@/components/SectionTitle";
import { 
  Activity, BarChart3, Clock, Moon, RefreshCw, Zap, 
  BedDouble, Calendar, ChevronDown, ChevronUp, ArrowRight
} from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend, LineChart, Line } from "recharts";

// Sample sleep data
const weeklyData = [
  { day: "Mon", hours: 6.2, efficiency: 78, deep: 22, light: 48, rem: 30 },
  { day: "Tue", hours: 7.1, efficiency: 85, deep: 24, light: 45, rem: 31 },
  { day: "Wed", hours: 6.8, efficiency: 82, deep: 21, light: 49, rem: 30 },
  { day: "Thu", hours: 7.5, efficiency: 88, deep: 26, light: 44, rem: 30 },
  { day: "Fri", hours: 5.9, efficiency: 72, deep: 19, light: 51, rem: 30 },
  { day: "Sat", hours: 8.2, efficiency: 90, deep: 28, light: 42, rem: 30 },
  { day: "Sun", hours: 7.8, efficiency: 86, deep: 25, light: 45, rem: 30 },
];

// Sleep stages data
const sleepStagesData = [
  { name: "Deep Sleep", value: 25, color: "#0D47A1" },
  { name: "Light Sleep", value: 45, color: "#42A5F5" },
  { name: "REM Sleep", value: 30, color: "#90CAF9" },
];

// Monthly sleep duration trend
const monthlyTrendData = [
  { date: "Jan", avgDuration: 6.5 },
  { date: "Feb", avgDuration: 6.8 },
  { date: "Mar", avgDuration: 7.0 },
  { date: "Apr", avgDuration: 7.2 },
  { date: "May", avgDuration: 7.1 },
  { date: "Jun", avgDuration: 6.9 },
];

const SleepAnalysis = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    insights: true,
    stages: false,
    factors: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  // Calculate sleep score
  const calculateSleepScore = () => {
    const latestData = weeklyData[weeklyData.length - 1];
    // Weight: hours (40%), efficiency (40%), deep sleep percentage (20%)
    const hoursScore = Math.min(100, (latestData.hours / 8) * 100) * 0.4;
    const efficiencyScore = latestData.efficiency * 0.4;
    const deepSleepScore = (latestData.deep / 25) * 100 * 0.2;
    return Math.round(hoursScore + efficiencyScore + deepSleepScore);
  };

  const sleepScore = calculateSleepScore();
  
  // Get sleep quality text
  const getSleepQualityText = () => {
    if (sleepScore >= 85) return "Excellent";
    if (sleepScore >= 70) return "Good";
    if (sleepScore >= 60) return "Fair";
    return "Poor";
  };

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
        
        <div className="container-custom pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-sleep-700 uppercase bg-sleep-100 rounded-full">
              Advanced Sleep Insights
            </div>
            <h1 className="font-bold text-slate-900 mb-6">
              In-Depth <span className="text-sleep-600">Sleep Analysis</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Understand your sleep patterns like never before with our comprehensive sleep analysis tools. Gain insights into your sleep quality and make informed decisions for better rest.
            </p>
          </div>
        </div>
      </section>
      
      {/* Interactive Analysis Dashboard */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-3 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Sleep Score Card */}
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
                      <span className="mt-2 text-lg font-medium text-sleep-600">{getSleepQualityText()}</span>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Sleep Duration Card */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Sleep Duration</CardTitle>
                    <CardDescription>Hours slept</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <div className="flex items-end mb-2">
                        <span className="text-3xl font-bold text-slate-800">
                          {weeklyData[weeklyData.length - 1].hours}
                        </span>
                        <span className="ml-1 text-slate-600">hours</span>
                      </div>
                      <Progress 
                        className="h-2 mt-2" 
                        value={Math.min(100, (weeklyData[weeklyData.length - 1].hours / 9) * 100)} 
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>0h</span>
                        <span>Recommended: 7-9h</span>
                      </div>
                      <div className="flex items-center mt-4">
                        <span className="text-sm text-slate-600 flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          11:30 PM - 7:15 AM
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Sleep Efficiency Card */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Sleep Efficiency</CardTitle>
                    <CardDescription>Time actually sleeping</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col">
                      <div className="flex items-end mb-2">
                        <span className="text-3xl font-bold text-slate-800">
                          {weeklyData[weeklyData.length - 1].efficiency}%
                        </span>
                      </div>
                      <Progress 
                        className="h-2 mt-2" 
                        value={weeklyData[weeklyData.length - 1].efficiency} 
                      />
                      <div className="flex justify-between text-xs text-slate-500 mt-1">
                        <span>Poor</span>
                        <span>Excellent</span>
                      </div>
                      <div className="flex items-center mt-4">
                        <span className="text-sm text-slate-600 flex items-center">
                          <Activity className="h-4 w-4 mr-1" />
                          5 awakenings
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sleep Stages */}
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
                      onClick={() => toggleSection('stages')}
                      className="ml-2"
                    >
                      {expandedSections.stages ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </Button>
                  </div>
                </CardHeader>
                {expandedSections.stages && (
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
                            <Bar dataKey="value" fill={(entry) => entry.color} barSize={30} />
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
              
              {/* Weekly Sleep Graph */}
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
            </TabsContent>
            
            <TabsContent value="trends" className="animate-fade-in">
              <div className="grid grid-cols-1 gap-6">
                {/* Monthly Trends */}
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
                
                {/* Sleep Factors */}
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
                        onClick={() => toggleSection('factors')}
                        className="ml-2"
                      >
                        {expandedSections.factors ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </Button>
                    </div>
                  </CardHeader>
                  {expandedSections.factors && (
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
              </div>
            </TabsContent>
            
            <TabsContent value="insights" className="animate-fade-in">
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
                      onClick={() => toggleSection('insights')}
                      className="ml-2"
                    >
                      {expandedSections.insights ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </Button>
                  </div>
                </CardHeader>
                {expandedSections.insights && (
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Our Approach"
            title="Comprehensive Sleep Analysis"
            description="Our advanced sleep tracking technology provides detailed insights into your sleep patterns, helping you understand and improve your sleep quality."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Data-Driven Insights</h3>
              <p className="text-slate-600">
                Our algorithm collects and analyzes your sleep data to provide personalized insights and recommendations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in delay-100">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <RefreshCw className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Sleep Cycle Tracking</h3>
              <p className="text-slate-600">
                Monitor your sleep cycles including REM, deep sleep, and light sleep phases to optimize your rest.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm animate-fade-in delay-200">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-sleep-100 text-sleep-500">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800">Trend Analysis</h3>
              <p className="text-slate-600">
                Track your sleep patterns over time to identify trends, improvements, and areas that need attention.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-sleep-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-sleep-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Understand Your Sleep?</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Start your journey to better sleep with our comprehensive sleep analysis tools.
              </p>
              <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-8 py-6 rounded-md text-lg transition-all duration-300">
                Begin Your Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SleepAnalysis;
