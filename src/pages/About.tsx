
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  return (
    <div className="container-custom py-20">
      <SectionTitle
        pretitle="About Us"
        title="The EasySleep Story"
        description="Learn about our mission to help everyone achieve better sleep and improve their quality of life."
        centered={true}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-slate-800">Our Mission</h3>
          <p className="text-slate-600 mb-6">
            At EasySleep, we believe that quality sleep is fundamental to overall health and wellbeing. 
            Our mission is to provide innovative sleep solutions backed by science that help people 
            understand and improve their sleep patterns.
          </p>
          <p className="text-slate-600 mb-6">
            Founded in 2020 by a team of sleep specialists and technology experts, EasySleep 
            has grown to become a trusted name in sleep health technology, helping thousands 
            of people transform their nights and energize their days.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-slate-800">Our Approach</h3>
          <p className="text-slate-600 mb-6">
            We combine cutting-edge sleep tracking technology with personalized recommendations 
            based on your unique sleep data. Our approach is holistic, looking at all factors 
            that influence sleep quality, from environment to habits to health conditions.
          </p>
        </div>

        <div className="bg-sleep-50 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4 text-slate-800">Our Values</h3>
          <ul className="space-y-4">
            {[
              {
                title: "Scientific Integrity",
                description: "All our sleep solutions are based on peer-reviewed research and clinically validated methods."
              },
              {
                title: "Personalization",
                description: "We recognize that each person's sleep needs are unique and provide tailored recommendations."
              },
              {
                title: "Privacy",
                description: "Your sleep data is private and secure. We maintain the highest standards of data protection."
              },
              {
                title: "Continuous Improvement",
                description: "We're constantly refining our technology based on user feedback and new research."
              }
            ].map((value, index) => (
              <li key={index} className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sleep-100 text-sleep-600 flex items-center justify-center mr-4">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">{value.title}</h4>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <SectionTitle
          title="Meet Our Team"
          description="The sleep experts and technology innovators behind EasySleep"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              name: "Dr. Sarah Johnson",
              role: "Sleep Specialist & Co-Founder",
              bio: "With over 15 years of experience in sleep medicine, Dr. Johnson leads our sleep research initiatives."
            },
            {
              name: "Michael Chen",
              role: "CTO & Co-Founder",
              bio: "A tech innovator with a passion for health applications, Michael oversees all technology development."
            },
            {
              name: "Emma Rodriguez",
              role: "User Experience Director",
              bio: "Emma ensures that our apps and interfaces are intuitive, accessible, and effective for all users."
            }
          ].map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="w-24 h-24 bg-sleep-100 rounded-full mb-4 mx-auto"></div>
              <h4 className="text-xl font-semibold text-center text-slate-800">{member.name}</h4>
              <p className="text-sleep-500 text-center mb-2">{member.role}</p>
              <p className="text-slate-600 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold mb-4 text-slate-800">Ready to Transform Your Sleep?</h3>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          Join thousands of people who have already improved their sleep quality and overall wellbeing with EasySleep.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-sleep-500 hover:bg-sleep-600 text-white px-6 py-6 rounded-md transition-all duration-300">
            Get Started Today
          </Button>
          <Link to="/contact">
            <Button variant="outline" className="px-6 py-6 rounded-md transition-all duration-300">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
