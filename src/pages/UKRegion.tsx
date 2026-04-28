import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import ukRegion from "@/assets/uk-region.jpg";

const UKRegionPage = () => {
  return (
    <Layout>
      <PageHero
        title="United Kingdom"
        subtitle="Planning-led strategic development across England, Scotland and Wales"
        backgroundImage={ukRegion}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl text-navy mb-6">UK Operations</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The United Kingdom is the primary operating territory for Wollaston Hanks. Deep understanding of the UK planning system, development economics and institutional investor landscape enables the platform to originate and deliver complex opportunities across all regions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The UK division focuses on planning-led development, strategic land promotion and major schemes — controlling the value chain from origination through to delivery.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <h2 className="font-heading text-3xl text-navy mb-4 text-center">UK Focus Areas</h2>
          <div className="gold-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Planning-Led Development", desc: "Originating development opportunities through planning intelligence and strategic site identification across all UK regions." },
              { title: "Strategic Land Promotion", desc: "Securing planning consent on land with development potential across the South East, Midlands and Northern England." },
              { title: "Major Schemes", desc: "Large-scale mixed-use regeneration, residential and commercial development schemes requiring institutional-level structuring." },
              { title: "Tourism & Leisure Development", desc: "Coastal resort, spa and boutique hotel developments across prime UK locations." },
              { title: "Distressed Asset Solutions", desc: "Working with banks and receivers on stalled or distressed development sites to unlock value." },
              { title: "Development Partnerships", desc: "Joint ventures and development partnerships with landowners, institutions and developers." },
            ].map((item) => (
              <div key={item.title} className="border border-border p-6 hover:border-gold/40 transition-all">
                <h3 className="font-heading text-lg text-navy mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-cream mb-6">Discuss a UK Development Opportunity</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
              Submit Opportunity
            </Link>
            <Link to="/contact" className="px-8 py-3.5 border border-cream/30 text-cream/80 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all">
              Contact Us <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UKRegionPage;
