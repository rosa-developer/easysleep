
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  error: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitted: true, error: false });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  if (formStatus.submitted) {
    return (
      <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-700 mb-4">Thank you for contacting us. We'll get back to you shortly.</p>
        <Button 
          onClick={() => setFormStatus({ submitted: false, error: false })}
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <h3 className="text-xl font-semibold mb-6 text-slate-800">Send Us a Message</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-700">
              Your Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="border-slate-200 focus:ring-sleep-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700">
              Your Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border-slate-200 focus:ring-sleep-500"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-slate-700">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleChange}
            className="border-slate-200 focus:ring-sleep-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-slate-700">
            Your Message
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="border-slate-200 focus:ring-sleep-500 resize-none"
          />
        </div>
        <div>
          <Button 
            type="submit" 
            className="bg-sleep-500 hover:bg-sleep-600 text-white w-full py-6"
          >
            Send Message
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
