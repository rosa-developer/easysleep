
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
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

  return (
    <div className="container-custom py-20">
      <SectionTitle
        pretitle="Get In Touch"
        title="Contact Us"
        description="Have questions about EasySleep? We're here to help. Reach out to our team for support, feedback, or partnership inquiries."
        centered={true}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-sleep-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-slate-800">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-sleep-500 mr-3 h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium text-slate-800">Email Us</p>
                  <a href="mailto:support@easysleep.com" className="text-sleep-600 hover:underline">
                    support@easysleep.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-sleep-500 mr-3 h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium text-slate-800">Call Us</p>
                  <a href="tel:+11234567890" className="text-sleep-600 hover:underline">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-sleep-500 mr-3 h-5 w-5 mt-1" />
                <div>
                  <p className="font-medium text-slate-800">Visit Us</p>
                  <address className="text-slate-600 not-italic">
                    123 Sleep Avenue<br />
                    San Francisco, CA 94107<br />
                    United States
                  </address>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-slate-800">Office Hours</h3>
            <div className="space-y-2 text-slate-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-sleep-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-slate-800">Follow Us</h3>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                <a key={index} href="#" className="p-2 bg-white rounded-full hover:bg-sleep-100 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-sleep-200 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          {formStatus.submitted ? (
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
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-xl font-semibold mb-6 text-slate-800">Send Us a Message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sleep-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sleep-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sleep-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sleep-500"
                  ></textarea>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
