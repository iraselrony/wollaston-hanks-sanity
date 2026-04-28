import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroBg from "@/assets/hero-bg.jpg";
import founderImg from "@/assets/founder-portrait.jpg";

const AboutPage = () => {
  return (
    <Layout>
      <PageHero
        title="About Wollaston Hanks"
        subtitle="A planning-led strategic development and investment platform"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl text-navy mb-6">The Platform</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Wollaston Hanks is a strategic real estate development and investment platform operating across the United Kingdom and United States. The platform originates, structures and delivers complex real estate opportunities through planning intelligence, development strategy, asset repositioning and capital partnerships.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is not a consultancy. Wollaston Hanks is a development platform that controls and delivers opportunities — working alongside landowners, investors, institutions and developers to unlock significant value in complex real estate.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The planning-led approach means the platform identifies opportunities that others overlook, structures transactions that create value for all stakeholders, and maintains the strategic capability to take projects from origination through to delivery or strategic sale.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <img src={founderImg} alt="Beau Banks" className="w-80 aspect-[4/5] object-cover" loading="lazy" />
                <div className="absolute inset-0 border border-gold/20" />
              </div>
            </div>
            <div>
              <span className="text-gold text-xs tracking-[0.2em] uppercase mb-4 block">Founder & Development Director</span>
              <h2 className="font-heading text-3xl text-navy mb-2">Beau Banks</h2>
              <p className="text-muted-foreground text-sm mb-6">BSc (Hons), MSc (Planning for Major Projects), MRTPI, MNAEA</p>
              <div className="gold-divider-left mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beau Banks founded Wollaston Hanks to originate and deliver complex development opportunities through planning expertise and strategic project delivery. With qualifications in both town planning and real estate, Beau brings institutional-grade strategic thinking to every development opportunity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Member of the Royal Town Planning Institute (MRTPI) and Member of the National Association of Estate Agents (MNAEA), Beau combines deep planning knowledge with commercial acumen — enabling the platform to identify, appraise, structure and deliver opportunities across the full development lifecycle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His vision is to build Wollaston Hanks into the leading planning-led strategic development platform operating across the UK and US markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-wide">
          <h2 className="font-heading text-3xl text-cream mb-4 text-center">What Differentiates the Platform</h2>
          <div className="gold-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Planning-Led Strategy", desc: "Deep planning intelligence drives every opportunity — from site identification through to consent and delivery." },
              { title: "Deal Origination", desc: "The platform originates opportunities through planning portals, agents, banks and landowners — controlling deal flow." },
              { title: "Institutional Approach", desc: "Institutional-grade appraisal, structuring and delivery across all development and investment activities." },
              { title: "Full Lifecycle Capability", desc: "From origination through planning, structuring, delivery and sale — the platform controls the entire value chain." },
              { title: "Cross-Market Operations", desc: "Operating across the UK and US markets with a consistent strategic development approach." },
              { title: "Capital Partnerships", desc: "Structured access to £50M+ development opportunities for investors, institutions and family offices." },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 p-8">
                <h3 className="font-heading text-lg text-cream mb-3">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-navy mb-6">Engage With the Platform</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
              Submit Development Opportunity
            </Link>
            <Link to="/contact" className="px-8 py-3.5 border border-navy text-navy text-sm tracking-widest uppercase hover:bg-navy hover:text-cream transition-all">
              Investor Enquiry <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
