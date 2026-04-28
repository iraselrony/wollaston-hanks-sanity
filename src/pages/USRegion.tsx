import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import usRegion from "@/assets/us-region.jpg";

const USRegionPage = () => {
  return (
    <Layout>
      <PageHero
        title="United States"
        subtitle="Asset repositioning, investment transactions and development partnerships"
        backgroundImage={usRegion}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl text-navy mb-6">US Operations</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Wollaston Hanks is expanding operations into the United States, focusing on asset repositioning, investment transactions and strategic development partnerships across key markets including New York, Florida and California.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The US division brings a strategic, institutional-grade approach to the American market — identifying repositioning opportunities and structuring transactions that unlock significant value.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <h2 className="font-heading text-3xl text-navy mb-4 text-center">US Focus Areas</h2>
          <div className="gold-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Asset Repositioning", desc: "Identifying and executing repositioning strategies on underperforming commercial, hospitality and mixed-use assets." },
              { title: "Investment Transactions", desc: "Structuring and executing investment transactions across development sites, commercial assets and hospitality properties." },
              { title: "Development Partnerships", desc: "Strategic development partnerships and joint ventures with US-based developers, landowners and institutions." },
              { title: "Resort & Hospitality", desc: "Luxury resort development and repositioning opportunities in prime coastal and destination markets." },
              { title: "Off-Market Sourcing", desc: "Discreet sourcing of off-market development and investment opportunities for institutional and private capital." },
              { title: "Cross-Border Advisory", desc: "Structuring cross-border investment for UK and international investors entering the US market." },
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
          <h2 className="font-heading text-2xl text-cream mb-6">Discuss a US Opportunity</h2>
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

export default USRegionPage;
