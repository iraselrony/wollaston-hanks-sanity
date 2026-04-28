import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroBg from "@/assets/hero-bg.jpg";
import { useOpportunities } from "@/sanity/hooks";

const OpportunitiesPage = () => {
  const { data: opportunities, isLoading, isError } = useOpportunities();

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
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="border border-border p-8 animate-pulse">
                  <div className="h-4 bg-muted rounded w-1/3 mb-4" />
                  <div className="h-6 bg-muted rounded w-2/3 mb-2" />
                  <div className="h-4 bg-muted rounded w-1/2" />
                </div>
              ))}
            </div>
          )}

          {isError && (
            <p className="text-center text-muted-foreground py-12">
              Unable to load opportunities. Please try again shortly.
            </p>
          )}

          {!isLoading && !isError && opportunities && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {opportunities.map((opp) => (
                <div key={opp._id} className="border border-border p-8 hover:border-gold/40 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs tracking-wider uppercase text-gold">{opp.type}</span>
                    <span
                      className={`text-xs tracking-wider uppercase px-3 py-1 ${
                        opp.status === "Active"
                          ? "bg-gold/10 text-gold"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {opp.status}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-navy mb-2">{opp.title}</h3>
                  {opp.location && (
                    <p className="text-muted-foreground text-sm flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gold" /> {opp.location}
                    </p>
                  )}
                  {opp.description && (
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{opp.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {!isLoading && !isError && opportunities?.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No opportunities currently listed. Check back soon.
            </p>
          )}
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-cream mb-4">Submit an Opportunity</h2>
          <p className="text-cream/60 mb-8 max-w-xl mx-auto text-sm">
            Introductions welcomed from landowners, developers, banks, investors and agents.
          </p>
          <Link
            to="/submit-opportunity"
            className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all"
          >
            Submit Opportunity <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default OpportunitiesPage;
