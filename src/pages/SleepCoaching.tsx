
import { Users, BookOpen, Award, MessageCircle, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";

const SleepCoaching = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
        
        <div className="container-custom pt-32 pb-16 md:pt-40 md:pb-24">
          <SectionTitle 
            pretitle="Expert Guidance"
            title="Sleep Coaching Services"
            description="Connect with certified sleep specialists who provide personalized guidance to optimize your sleep habits and address specific sleep issues."
          />
          
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Why Sleep Coaching Works</h3>
                <p className="text-slate-600 mb-6">
                  Our expert sleep coaches combine your personal sleep data with evidence-based sleep science to create customized strategies that address your unique sleep challenges and goals.
                </p>
                <ul className="space-y-3">
                  {[
                    "Personalized sleep improvement plans",
                    "Direct access to certified sleep specialists",
                    "Regular progress tracking and plan adjustments",
                    "Behavioral and environmental recommendations",
                    "Address specific sleep disorders and challenges"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sleep-100 text-sleep-600 flex items-center justify-center mr-3 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-sleep-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <img 
                  src="/lovable-uploads/0d1ffa34-3c02-49c2-9042-0b82a49d2b2d.png" 
                  alt="Sleep coaching session" 
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Coaching Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Our Services"
            title="Sleep Coaching Programs"
            description="Choose from our range of sleep coaching services designed to meet your specific needs and goals."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard 
              icon={Users}
              title="1-on-1 Coaching"
              description="Private sessions with a dedicated sleep coach who will create and monitor your personalized sleep improvement plan."
            />
            <FeatureCard 
              icon={BookOpen}
              title="Sleep Education Courses"
              description="Structured learning modules covering sleep science fundamentals and practical improvement techniques."
            />
            <FeatureCard 
              icon={Award}
              title="Specialist Consultations"
              description="Access to specialized coaches for specific issues like insomnia, sleep apnea, and circadian rhythm disorders."
            />
            <FeatureCard 
              icon={MessageCircle}
              title="Ongoing Support"
              description="Regular check-ins and unlimited messaging with your coach between scheduled sessions."
            />
            <FeatureCard 
              icon={Calendar}
              title="Sleep Habit Building"
              description="Structured programs to help you develop and maintain healthy sleep routines over time."
            />
            <FeatureCard 
              icon={FileText}
              title="Progress Reports"
              description="Detailed analysis of your sleep improvement journey with actionable insights and recommendations."
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <SectionTitle 
            pretitle="Success Stories"
            title="Client Testimonials"
            description="Hear from people who have transformed their sleep quality with our coaching programs."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              quote="My sleep coach identified issues I never knew were affecting my sleep. Following her recommendations, I've gone from 5 hours of restless sleep to 7+ hours of quality rest."
              author="David Reynolds"
              role="Sleep Coaching Client • 4 months"
            />
            <TestimonialCard 
              quote="After years of struggling with insomnia, my sleep coach helped me develop a routine that works with my lifestyle. I'm finally sleeping through the night consistently."
              author="Priya Sharma"
              role="Sleep Coaching Client • 6 months"
            />
            <TestimonialCard 
              quote="The coaching program was transformative. My coach was incredibly knowledgeable and supportive, and the personalized approach made all the difference."
              author="Marcus Johnson"
              role="Sleep Coaching Client • 3 months"
            />
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to Transform Your Sleep?</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Our sleep coaches are ready to help you achieve the quality sleep you deserve. Take the first step today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-8 py-6 rounded-md text-lg transition-all duration-300">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="px-8 py-6 rounded-md text-lg transition-all duration-300">
                    Contact a Coach
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SleepCoaching;
