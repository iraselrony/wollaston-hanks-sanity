import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroBg from "@/assets/hero-bg.jpg";

const opportunities = [
  { title: "Strategic Land Promotion — South East", location: "South East, UK", type: "Strategic Development", status: "Active" },
  { title: "Mixed-Use Regeneration Scheme", location: "Northern England", type: "Regeneration", status: "Active" },
  { title: "Hotel Repositioning Opportunity", location: "Coastal Resort, UK", type: "Asset Repositioning", status: "Active" },
  { title: "Development Partnership — Greater London", location: "Greater London", type: "Development Partnership", status: "Active" },
  { title: "Commercial Redevelopment Site", location: "Midlands, UK", type: "Commercial", status: "Pipeline" },
  { title: "Luxury Residential Development", location: "South West, UK", type: "Residential", status: "Pipeline" },
  { title: "Strategic Land — New York Tri-State", location: "New York, US", type: "Strategic Development", status: "Pipeline" },
  { title: "Resort & Spa Repositioning", location: "Florida, US", type: "Hospitality", status: "Pipeline" },
];

const OpportunitiesPage = () => {
  return (
    <Layout>
      <PageHero
        title="Opportunities"
        subtitle="Current development and repositioning opportunities across the UK and United States"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl text-navy mb-6">Opportunity Pipeline</h2>
          <div className="gold-divider mb-8" />
          <p className="text-muted-foreground leading-relaxed">
            Wollaston Hanks maintains a pipeline of strategic development, repositioning and investment opportunities. Opportunities are originated through planning portals, development agents, banks, insolvency practitioners, architects and landowners.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((opp) => (
              <div key={opp.title} className="border border-border p-8 hover:border-gold/40 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs tracking-wider uppercase text-gold">{opp.type}</span>
                  <span className={`text-xs tracking-wider uppercase px-3 py-1 ${opp.status === "Active" ? "bg-gold/10 text-gold" : "bg-muted text-muted-foreground"}`}>
                    {opp.status}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-navy mb-2">{opp.title}</h3>
                <p className="text-muted-foreground text-sm flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold" /> {opp.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-cream mb-4">Submit an Opportunity</h2>
          <p className="text-cream/60 mb-8 max-w-xl mx-auto text-sm">
            Introductions welcomed from landowners, developers, banks, investors and agents.
          </p>
          <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
            Submit Opportunity <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default OpportunitiesPage;
