import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import luxuryRes from "@/assets/luxury-residential.jpg";

const SalesPage = () => {
  return (
    <Layout>
      <PageHero
        title="Investment & Development Sales"
        subtitle="Strategic acquisition and disposal of development and repositioning opportunities"
        backgroundImage={luxuryRes}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl text-navy mb-6">Strategic Transaction Advisory</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The Investment & Development Sales division operates as the transaction engine of the Wollaston Hanks platform. This is not volume brokerage — it is the strategic acquisition and disposal of development and repositioning opportunities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every transaction is approached as a potential development, repositioning or partnership opportunity — ensuring maximum value creation beyond a simple sale.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl text-navy mb-6">Commercial</h2>
              <div className="gold-divider-left mb-6" />
              <ul className="space-y-3">
                {["Development Sites", "Strategic Land", "Commercial Investments", "Hospitality Assets", "Office Buildings", "Industrial Sites", "Mixed-Use Buildings"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl text-navy mb-6">Luxury Residential Advisory</h2>
              <div className="gold-divider-left mb-6" />
              <ul className="space-y-3">
                {["Prime Residential Sales", "Buyer Representation", "Discreet Off-Market Sourcing", "Development Sales", "International Property Advisory"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-wide">
          <h2 className="font-heading text-3xl text-cream mb-4 text-center">Acquisition Advisory</h2>
          <div className="gold-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Sourcing off-market opportunities",
              "Advising investors on acquisitions",
              "Strategic site sourcing",
              "Repositioning-led acquisitions",
            ].map((item) => (
              <div key={item} className="border border-gold/20 p-6 text-center">
                <p className="text-cream/70 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-navy mb-6">Acquire or Dispose of a Development Asset?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
              Submit Opportunity
            </Link>
            <Link to="/contact" className="px-8 py-3.5 border border-navy text-navy text-sm tracking-widest uppercase hover:bg-navy hover:text-cream transition-all">
              Discuss a Transaction <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesPage;
