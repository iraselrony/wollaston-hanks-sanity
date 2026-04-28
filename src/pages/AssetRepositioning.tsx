import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import hotelImg from "@/assets/hotel-repositioning.jpg";

const AssetRepositioning = () => {
  return (
    <Layout>
      <PageHero
        title="Asset Repositioning"
        subtitle="Unlocking value in underperforming and distressed real estate assets"
        backgroundImage={hotelImg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl text-navy mb-6">Strategic Asset Transformation</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Asset repositioning is a core capability of the Wollaston Hanks platform. The division advises on the strategic transformation of underperforming, underutilised or distressed real estate assets — identifying the highest and best use through planning intelligence and development strategy.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The planning-led approach identifies repositioning opportunities that others overlook — turning distressed situations into significant development and investment outcomes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <h2 className="font-heading text-3xl text-navy mb-4 text-center">Repositioning Capabilities</h2>
          <div className="gold-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Hotel to Resort Repositioning", desc: "Transforming underperforming hotel assets into high-value resort and spa developments through planning-led strategy." },
              { title: "Office to Residential Conversion", desc: "Identifying and executing permitted development and full planning routes for commercial to residential conversions." },
              { title: "Estate Diversification", desc: "Strategic repositioning of landed estates through planning-led development diversification." },
              { title: "Distressed Asset Transformation", desc: "Working with banks, receivers and institutions to restructure and reposition stalled or distressed development assets." },
            ].map((item) => (
              <div key={item.title} className="border border-border p-8 hover:border-gold/40 transition-all">
                <h3 className="font-heading text-xl text-navy mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-cream mb-6">Own an Underperforming Asset?</h2>
          <p className="text-cream/60 mb-8 max-w-xl mx-auto">
            The platform advises on strategy, planning and repositioning to unlock the full potential of complex real estate.
          </p>
          <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
            Submit Your Asset <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AssetRepositioning;
