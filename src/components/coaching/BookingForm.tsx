
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { toast } from "sonner";

const TimeSlot = ({ time, selected, onClick }: { time: string; selected: boolean; onClick: () => void }) => (
  <button
    type="button"
    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      selected
        ? "bg-sleep-500 text-white"
        : "bg-white border border-slate-200 text-slate-700 hover:bg-sleep-50"
    }`}
    onClick={onClick}
  >
    {time}
  </button>
);

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: ""
  });
  
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const selectTimeSlot = (time: string) => {
    setSelectedTimeSlot(time);
    setFormData(prev => ({ ...prev, timeSlot: time }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.date || !formData.timeSlot) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Form submission success
    toast.success("Consultation booked successfully! We'll contact you soon to confirm.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      timeSlot: ""
    });
    setSelectedTimeSlot(null);
  };
  
  return (
    <Card className="shadow-lg border-sleep-100">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="mt-1" 
                placeholder="Your name"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="mt-1" 
                placeholder="Your email"
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="mt-1" 
                placeholder="Your phone number"
              />
            </div>
            
            <div>
              <Label htmlFor="date">Preferred Date <span className="text-red-500">*</span></Label>
              <div className="relative mt-1">
                <Input 
                  id="date" 
                  name="date" 
                  type="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  className="mt-1 pl-10" 
                  min={new Date().toISOString().split('T')[0]}
                />
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
              </div>
            </div>
            
            <div>
              <Label>Preferred Time <span className="text-red-500">*</span></Label>
              <div className="mt-1 grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <TimeSlot 
                    key={time} 
                    time={time} 
                    selected={selectedTimeSlot === time} 
                    onClick={() => selectTimeSlot(time)} 
                  />
                ))}
              </div>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-sleep-500 hover:bg-sleep-600 text-white py-6"
          >
            Book Free Consultation
          </Button>
          
          <p className="text-xs text-center text-slate-500 mt-4">
            By booking a consultation, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
