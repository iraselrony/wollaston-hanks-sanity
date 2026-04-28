import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroBg from "@/assets/hero-bg.jpg";

const SubmitOpportunity = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    enquiryType: "",
    assetType: "",
    location: "",
    description: "",
    estimatedValue: "",
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
          subject: `New Opportunity Submission: ${formData.enquiryType} — ${formData.assetType || "Type not specified"}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          company: formData.company || "Not provided",
          enquiry_type: formData.enquiryType,
          asset_type: formData.assetType || "Not specified",
          location: formData.location || "Not provided",
          estimated_value: formData.estimatedValue || "Not provided",
          opportunity_description: formData.description,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHero
        title="Submit an Opportunity"
        subtitle="Introduce a development, investment or repositioning opportunity to the platform"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-6">Opportunity Submission</h2>
            <div className="gold-divider mb-8" />
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Wollaston Hanks welcomes introductions from landowners, developers, banks, investors and agents. All submissions are treated with strict confidentiality.
            </p>
          </div>

          {/* CTA Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Submit Land or Property", desc: "Introduce a site, asset or landholding for development appraisal." },
              { title: "Discuss a Development Opportunity", desc: "Explore a development, regeneration or repositioning concept." },
              { title: "Introduce an Opportunity", desc: "Banks, agents and advisors introducing assets or development scenarios." },
            ].map((item) => (
              <div key={item.title} className="border border-gold/30 p-6 text-center bg-card">
                <h3 className="font-heading text-lg text-navy mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="text-center py-16 border border-gold/40 bg-card">
              <h3 className="font-heading text-2xl text-navy mb-4">Thank You</h3>
              <p className="text-muted-foreground">Your opportunity has been submitted. Our team will review and respond within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-12 space-y-6">
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
                <div>
                  <label className="block text-sm text-navy mb-2 font-medium">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-navy mb-2 font-medium">Company / Organisation</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-navy mb-2 font-medium">Enquiry Type *</label>
                  <select name="enquiryType" required value={formData.enquiryType} onChange={handleChange}
                    className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors">
                    <option value="">Select type</option>
                    <option value="Landowner">Landowner</option>
                    <option value="Investor">Investor</option>
                    <option value="Developer">Developer</option>
                    <option value="Bank / Institution">Bank / Institution</option>
                    <option value="Agent">Agent</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-navy mb-2 font-medium">Asset / Opportunity Type</label>
                  <select name="assetType" value={formData.assetType} onChange={handleChange}
                    className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors">
                    <option value="">Select type</option>
                    <option value="Strategic Land">Strategic Land</option>
                    <option value="Development Site">Development Site</option>
                    <option value="Commercial Property">Commercial Property</option>
                    <option value="Hospitality / Hotel">Hospitality / Hotel</option>
                    <option value="Residential">Residential</option>
                    <option value="Distressed Asset">Distressed Asset</option>
                    <option value="Mixed-Use">Mixed-Use</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-navy mb-2 font-medium">Location</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange}
                    className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors"
                    placeholder="City, region or country" />
                </div>
                <div>
                  <label className="block text-sm text-navy mb-2 font-medium">Estimated Value</label>
                  <input type="text" name="estimatedValue" value={formData.estimatedValue} onChange={handleChange}
                    className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors"
                    placeholder="Approximate value or guide price" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-navy mb-2 font-medium">Opportunity Description *</label>
                <textarea name="description" required value={formData.description} onChange={handleChange} rows={6}
                  className="w-full border border-border px-4 py-3 text-sm bg-background focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Provide a brief description of the opportunity, including current status, planning position and any relevant details." />
              </div>

              {error && (
                <p className="text-red-600 text-sm border border-red-200 bg-red-50 px-4 py-3">
                  {error}
                </p>
              )}

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-10 py-3.5 bg-navy text-gold text-sm tracking-widest uppercase hover:bg-navy-light transition-colors border border-gold/40 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Submit Development Opportunity"}
                </button>
              </div>

              <p className="text-muted-foreground text-xs text-center">
                All submissions are treated with strict confidentiality. The platform will respond within 48 hours.
              </p>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SubmitOpportunity;
