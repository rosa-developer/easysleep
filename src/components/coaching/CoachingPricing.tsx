
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for those just starting their sleep improvement journey",
    price: 79,
    duration: "per month",
    features: [
      "1 session per month",
      "Email support",
      "Personalized sleep plan",
      "Weekly sleep tracking",
      "Basic sleep education resources"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Premium",
    description: "Our most popular plan for comprehensive sleep improvement",
    price: 149,
    duration: "per month",
    features: [
      "2 sessions per month",
      "Priority email & chat support",
      "Personalized sleep plan",
      "Advanced sleep tracking & analysis",
      "Complete sleep education library",
      "Monthly progress reports"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Elite",
    description: "Intensive coaching for those with complex sleep challenges",
    price: 249,
    duration: "per month",
    features: [
      "4 sessions per month",
      "24/7 priority support",
      "Comprehensive sleep plan",
      "Advanced sleep tracking & analysis",
      "Complete sleep education library",
      "Biweekly progress reports",
      "Access to specialist consultations",
      "Environmental sleep assessment"
    ],
    cta: "Get Started",
    popular: false
  }
];

const CoachingPricing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {pricingPlans.map((plan, index) => (
        <Card 
          key={index} 
          className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
            plan.popular ? "border-sleep-500 shadow-md" : "border-slate-200"
          }`}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0">
              <div className="bg-sleep-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-md">
                Most Popular
              </div>
            </div>
          )}
          <CardHeader className="pb-8">
            <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold text-slate-900">${plan.price}</span>
              <span className="text-slate-600 ml-1">{plan.duration}</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sleep-100 text-sleep-500 flex items-center justify-center mr-3 mt-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Link to="/signup" className="w-full">
              <Button 
                className={`w-full py-6 ${
                  plan.popular 
                    ? "bg-sleep-500 hover:bg-sleep-600" 
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                }`}
              >
                {plan.cta}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default CoachingPricing;
