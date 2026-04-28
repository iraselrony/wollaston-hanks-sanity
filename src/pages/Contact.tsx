import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroBg from "@/assets/hero-bg.jpg";
import { useSiteSettings } from "@/sanity/hooks";

const ContactPage = () => {
  const { data: settings } = useSiteSettings();

  const phone = settings?.phone ?? "+44 (0)1234 567 890";
  const email = settings?.email ?? "contact@wollastonhanks.com";
  const offices = settings?.officeLocations ?? [
    { city: "London", country: "United Kingdom" },
    { city: "New York", country: "United States" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `Wollaston Hanks Enquiry: ${formData.subject}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          subject_type: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
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
                    {offices.map((o, i) => (
                      <p key={i} className="text-muted-foreground text-sm">{o.city}, {o.country}</p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading text-sm text-navy mb-1">Phone</h3>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-muted-foreground text-sm hover:text-gold transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-heading text-sm text-navy mb-1">Email</h3>
                    <a href={`mailto:${email}`} className="text-muted-foreground text-sm hover:text-gold transition-colors">
                      {email}
                    </a>
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
                        <option value="Development Opportunity">Development Opportunity</option>
                        <option value="Investment Partnership">Investment Partnership</option>
                        <option value="Strategic Advisory">Strategic Advisory</option>
                        <option value="Transaction Advisory">Transaction Advisory</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-navy mb-2 font-medium">Message *</label>
                    <textarea name="message" required value={formData.message} onChange={handleChange} rows={6}
                      className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Describe your opportunity or requirement." />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm border border-red-200 bg-red-50 px-4 py-3">
                      {error}
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-10 py-3.5 bg-navy text-gold text-sm tracking-widest uppercase hover:bg-navy-light transition-colors border border-gold/40 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending..." : "Send Message"}
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
