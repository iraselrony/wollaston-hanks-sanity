import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroBg from "@/assets/hero-bg.jpg";

const CapitalAdvisory = () => {
  return (
    <Layout>
      <PageHero
        title="Capital & Asset Advisory"
        subtitle="Advising investors, banks and asset owners on repositioning, development strategy and unlocking value"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl text-navy mb-6">Institutional-Grade Advisory</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Wollaston Hanks provides strategic advisory to banks, property funds, institutional investors, developers and family offices. The planning-led approach brings unique insight to development appraisal, asset repositioning and investment structuring — positioning the platform as a problem solver for institutions and investors.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl text-navy mb-6">Advisory Capabilities</h2>
              <div className="gold-divider-left mb-8" />
              <ul className="space-y-4">
                {[
                  "Development & Investment Appraisal",
                  "Asset Repositioning Strategy",
                  "Distressed Asset Solutions",
                  "Portfolio Advisory",
                  "Investment Structuring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-3xl text-navy mb-6">Client Profile</h2>
              <div className="gold-divider-left mb-8" />
              <ul className="space-y-4">
                {[
                  { title: "Banks", desc: "Advising on distressed and repossessed development assets." },
                  { title: "Property Funds", desc: "Strategic advisory on portfolio repositioning and development." },
                  { title: "Institutional Investors", desc: "Development appraisal and investment structuring." },
                  { title: "Developers", desc: "Planning strategy and development feasibility." },
                  { title: "Family Offices", desc: "Investment strategy and access to structured development opportunities." },
                ].map((item) => (
                  <li key={item.title} className="border-l-2 border-gold pl-4">
                    <h3 className="font-heading text-lg text-navy mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-cream mb-6">Require Strategic Advisory?</h2>
          <Link to="/contact" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
            Discuss Your Requirements <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CapitalAdvisory;
