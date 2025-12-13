import ContactSection from "@/components/ContactSection";
import EnvelopeIcon from "@/components/icons/Envelope";
import PhoneIcon from "@/components/icons/Phone";

const ContactPage = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl font-bold text-primary">Contact Me</h1>
          <p className="text-muted-foreground text-lg">
            I’m always open to discussing new projects, ideas, or opportunities.
            Feel free to reach out using the form below or through my contact
            info.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-10">
          {/* Contact Form */}
          <ContactSection />

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-card p-8 rounded-2xl shadow-lg space-y-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-primary mr-4" />
                <a
                  href="mailto:fahimulislam58@gmail.com"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  fahimulislam58@gmail.com
                </a>
              </div>

              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-primary mr-4" />
                <a
                  href="tel:+8801521578288"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  +8801521578288
                </a>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground">
                  Based in Bangladesh 🌏 — available for remote opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
