
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
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
            <a href="tel:+15148260430" className="text-sleep-600 hover:underline">
              514-826-0430
            </a>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="text-sleep-500 mr-3 h-5 w-5 mt-1" />
          <div>
            <p className="font-medium text-slate-800">Visit Us</p>
            <address className="text-slate-600 not-italic">
              1200 rue de royan<br />
              H7N 0H8<br />
              Canada
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
  );
};

export default ContactInfo;
