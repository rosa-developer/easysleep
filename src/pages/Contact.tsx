
import SectionTitle from "@/components/SectionTitle";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import SocialLinks from "@/components/contact/SocialLinks";

const Contact = () => {
  return (
    <div className="container-custom py-20">
      <ContactHeader />

      <SectionTitle
        pretitle="Get In Touch"
        title="Contact Us"
        description="Have questions about EasySleep? We're here to help. Reach out to our team for support, feedback, or partnership inquiries."
        centered={true}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
        <div className="lg:col-span-1 space-y-8">
          <ContactInfo />
          <SocialLinks />
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
