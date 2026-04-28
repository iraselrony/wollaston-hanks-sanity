import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import strategicLand from "@/assets/strategic-land.jpg";
import mixedUse from "@/assets/mixed-use-development.jpg";

const StrategicDevelopment = () => {
  return (
    <Layout>
      <PageHero
        title="Strategic Development"
        subtitle="Planning-led development strategy, land promotion and major project delivery"
        backgroundImage={strategicLand}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl text-navy mb-6">The Primary Wealth Engine</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Strategic Development is the core engine of the Wollaston Hanks platform. The division identifies land and development opportunities with latent potential, applies planning-led strategy to unlock value, and structures transactions that deliver significant returns for all stakeholders.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The approach combines deep planning intelligence with commercial structuring — enabling the platform to take opportunities from initial appraisal through to delivery or strategic sale at the point of maximum value.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl text-navy mb-6">Focus Areas</h2>
              <div className="gold-divider-left mb-8" />
              <ul className="space-y-4">
                {[
                  { title: "Strategic Land Promotion", desc: "Identifying land with development potential and securing planning consent to unlock significant value." },
                  { title: "Mixed-Use Regeneration", desc: "Transforming underutilised sites into vibrant mixed-use developments through planning-led strategy." },
                  { title: "Tourism & Leisure Development", desc: "Resort, hotel and leisure development across the UK and international markets." },
                  { title: "Major Residential Development", desc: "Large-scale residential development schemes requiring planning expertise and strategic delivery." },
                  { title: "Commercial Redevelopment", desc: "Repositioning and redeveloping commercial assets for highest and best use." },
                ].map((item) => (
                  <li key={item.title} className="border-l-2 border-gold pl-4">
                    <h3 className="font-heading text-lg text-navy mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <img src={mixedUse} alt="Mixed-use development" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl text-cream mb-6">Development Lifecycle</h2>
          <div className="gold-divider mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Deal Origination", "Planning Strategy", "Development Structuring", "Capital Partnership", "Project Delivery", "Asset Sale"].map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gold font-heading text-lg">{i + 1}</span>
                </div>
                <p className="text-cream/70 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-navy mb-6">Discuss a Strategic Development Opportunity</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
              Submit Opportunity
            </Link>
            <Link to="/contact" className="px-8 py-3.5 border border-navy text-navy text-sm tracking-widest uppercase hover:bg-navy hover:text-cream transition-all">
              Contact Us <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StrategicDevelopment;
