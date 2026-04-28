import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroBg from "@/assets/hero-bg.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageHero
        title="Contact"
        subtitle="Discuss a development opportunity, investment partnership or strategic requirement"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-heading text-2xl text-navy mb-6">Engage With the Platform</h2>
              <div className="gold-divider-left mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you are a landowner, investor, developer or institution, Wollaston Hanks welcomes the opportunity to discuss how the platform can unlock value in your real estate.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading text-sm text-navy mb-1">Offices</h3>
                    <p className="text-muted-foreground text-sm">London, United Kingdom</p>
                    <p className="text-muted-foreground text-sm">New York, United States</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading text-sm text-navy mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+44 (0)1234 567 890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading text-sm text-navy mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">contact@wollastonhanks.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16 border border-gold/40 bg-card">
                  <h3 className="font-heading text-2xl text-navy mb-4">Thank You</h3>
                  <p className="text-muted-foreground">Your message has been received. The platform will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-navy mb-2 font-medium">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm text-navy mb-2 font-medium">Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-navy mb-2 font-medium">Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm text-navy mb-2 font-medium">Subject *</label>
                      <select name="subject" required value={formData.subject} onChange={handleChange}
                        className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors">
                        <option value="">Select subject</option>
                        <option value="development">Development Opportunity</option>
                        <option value="investment">Investment Partnership</option>
                        <option value="advisory">Strategic Advisory</option>
                        <option value="transaction">Transaction Advisory</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-navy mb-2 font-medium">Message *</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange} rows={6}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Describe your opportunity or requirement." />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="px-10 py-3.5 bg-navy text-gold text-sm tracking-widest uppercase hover:bg-navy-light transition-colors border border-gold/40">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
