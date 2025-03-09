
// Sample sleep data
export const weeklyData = [
  { day: "Mon", hours: 6.2, efficiency: 78, deep: 22, light: 48, rem: 30 },
  { day: "Tue", hours: 7.1, efficiency: 85, deep: 24, light: 45, rem: 31 },
  { day: "Wed", hours: 6.8, efficiency: 82, deep: 21, light: 49, rem: 30 },
  { day: "Thu", hours: 7.5, efficiency: 88, deep: 26, light: 44, rem: 30 },
  { day: "Fri", hours: 5.9, efficiency: 72, deep: 19, light: 51, rem: 30 },
  { day: "Sat", hours: 8.2, efficiency: 90, deep: 28, light: 42, rem: 30 },
  { day: "Sun", hours: 7.8, efficiency: 86, deep: 25, light: 45, rem: 30 },
];

// Sleep stages data
export const sleepStagesData = [
  { name: "Deep Sleep", value: 25, color: "#0D47A1" },
  { name: "Light Sleep", value: 45, color: "#42A5F5" },
  { name: "REM Sleep", value: 30, color: "#90CAF9" },
];

// Monthly sleep duration trend
export const monthlyTrendData = [
  { date: "Jan", avgDuration: 6.5 },
  { date: "Feb", avgDuration: 6.8 },
  { date: "Mar", avgDuration: 7.0 },
  { date: "Apr", avgDuration: 7.2 },
  { date: "May", avgDuration: 7.1 },
  { date: "Jun", avgDuration: 6.9 },
];

// Helper function to calculate sleep score
export const calculateSleepScore = () => {
  const latestData = weeklyData[weeklyData.length - 1];
  // Weight: hours (40%), efficiency (40%), deep sleep percentage (20%)
  const hoursScore = Math.min(100, (latestData.hours / 8) * 100) * 0.4;
  const efficiencyScore = latestData.efficiency * 0.4;
  const deepSleepScore = (latestData.deep / 25) * 100 * 0.2;
  return Math.round(hoursScore + efficiencyScore + deepSleepScore);
};

// Get sleep quality text
export const getSleepQualityText = (sleepScore: number) => {
  if (sleepScore >= 85) return "Excellent";
  if (sleepScore >= 70) return "Good";
  if (sleepScore >= 60) return "Fair";
  return "Poor";
};
