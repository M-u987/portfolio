import ContactHeader from "../components/Contact/ContectHeader";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import { contactInfo } from "../Data/ContactData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white flex items-center justify-center px-4 py-9"
    >
      <div className="max-w-5xl w-full">
        <ContactHeader />

        <div className="grid md:grid-cols-2 gap-10 rounded-2xl shadow-lg p-1 md:p-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p >
              Want a website built?{" "}
              <span className="text-blue-600 font-medium">
                Contact Me!
              </span>
            </p>

            <ContactInfo info={contactInfo} />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
