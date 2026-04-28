import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Landmark, HardHat, Hammer, Zap, Eye, Paintbrush, Users, Cable } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroBg from "@/assets/hero-bg.jpg";

const divisions = [
  {
    icon: Building2,
    title: "Strategic Development",
    subtitle: "Primary Wealth Engine",
    description: "Originating and delivering high-value development opportunities through planning-led strategy. Strategic land promotion, mixed-use regeneration, hospitality and leisure development, major residential development and commercial redevelopment. This is where £5M – £20M+ outcomes occur.",
    focus: ["Strategic Land Promotion", "Mixed-Use Regeneration", "Tourism & Leisure Development", "Major Residential Development", "Commercial Redevelopment"],
    revenue: ["Development fees", "Equity participation", "Profit share"],
    href: "/platform/strategic-development",
  },
  {
    icon: TrendingUp,
    title: "Capital & Asset Advisory",
    subtitle: "Institutional Advisory Division",
    description: "Advising investors, banks and asset owners on repositioning, development strategy and unlocking value from complex real estate. Development appraisal, asset repositioning strategy, distressed asset solutions, investment structuring and portfolio advisory.",
    focus: ["Development & Investment Appraisal", "Asset Repositioning Strategy", "Distressed Asset Solutions", "Portfolio Advisory", "Investment Structuring"],
    revenue: ["Advisory fees", "Asset management roles", "Development partnerships"],
    href: "/platform/capital-advisory",
  },
  {
    icon: Landmark,
    title: "Investment & Development Sales",
    subtitle: "Transaction & Cashflow Engine",
    description: "Strategic acquisition and disposal of development and repositioning opportunities — not volume brokerage. Every transaction is approached as a potential development, repositioning or partnership opportunity ensuring maximum value creation.",
    focus: ["Development Sites", "Strategic Land", "Commercial Investments", "Hospitality Assets", "Luxury Residential Advisory"],
    revenue: ["Brokerage commissions", "Acquisition advisory", "Development sales mandates"],
    href: "/platform/sales",
  },
];

const supportingCapabilities = [
  { icon: HardHat, title: "Development Management", desc: "Full-cycle project oversight from planning through construction and handover." },
  { icon: Hammer, title: "Contractor Coordination", desc: "Strategic procurement and management of specialist contractors and consultants." },
  { icon: Zap, title: "Infrastructure Delivery", desc: "Essential site infrastructure including roads, drainage, utilities and services." },
  { icon: Cable, title: "Commercial Electrical Infrastructure", desc: "Commercial power infrastructure and energy systems for major developments." },
  { icon: Eye, title: "Development Visualisation", desc: "CGI, masterplans, concept design and planning consultation visuals." },
  { icon: Paintbrush, title: "Interior & Spatial Design", desc: "Luxury residential, hospitality and leisure asset spatial design." },
  { icon: Users, title: "Public Consultation & Stakeholder Strategy", desc: "Community engagement strategy and public consultation delivery." },
];

const PlatformPage = () => {
  return (
    <Layout>
      <PageHero
        title="The Platform"
        subtitle="Three core divisions originating, structuring and delivering complex real estate opportunities"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl text-navy mb-6">How We Operate</h2>
          <div className="gold-divider mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed">
            Wollaston Hanks operates as a planning-led strategic development and investment platform. Every division is designed to originate opportunities, structure transactions and deliver development outcomes at scale.
          </p>
        </div>
      </section>

      {divisions.map((division, index) => (
        <section key={division.title} className={index % 2 === 0 ? "py-20 bg-card" : "py-20 bg-navy"}>
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <division.icon className="w-10 h-10 mb-4 text-gold" />
                <span className="text-xs tracking-[0.2em] uppercase mb-2 block text-gold">
                  {division.subtitle}
                </span>
                <h2 className={`font-heading text-3xl md:text-4xl mb-6 ${index % 2 === 0 ? "text-navy" : "text-cream"}`}>
                  {division.title}
                </h2>
                <div className="gold-divider-left mb-6" />
                <p className={`leading-relaxed mb-8 ${index % 2 === 0 ? "text-muted-foreground" : "text-cream/70"}`}>
                  {division.description}
                </p>
                <Link
                  to={division.href}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-sm tracking-wider uppercase hover:bg-gold hover:text-navy transition-all"
                >
                  Explore <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className={`font-heading text-lg mb-4 ${index % 2 === 0 ? "text-navy" : "text-cream"}`}>Focus Areas</h3>
                  <ul className="space-y-2">
                    {division.focus.map((item) => (
                      <li key={item} className={`flex items-start gap-3 text-sm ${index % 2 === 0 ? "text-muted-foreground" : "text-cream/60"}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className={`font-heading text-lg mb-4 ${index % 2 === 0 ? "text-navy" : "text-cream"}`}>Revenue Sources</h3>
                  <ul className="space-y-2">
                    {division.revenue.map((item) => (
                      <li key={item} className={`flex items-start gap-3 text-sm ${index % 2 === 0 ? "text-muted-foreground" : "text-cream/60"}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Supporting Capabilities — Expanded */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Execution Capability</span>
            <h2 className="font-heading text-3xl text-navy mb-4">Development Delivery</h2>
            <div className="gold-divider mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Integrated capabilities that reinforce the platform can actually deliver projects — from concept through to completion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportingCapabilities.map((cap) => (
              <div key={cap.title} className="border border-border p-6 hover:border-gold/40 transition-all">
                <cap.icon className="w-7 h-7 text-gold mb-3" />
                <h3 className="font-heading text-lg text-navy mb-3">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/platform/development-delivery"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-sm tracking-wider uppercase hover:bg-gold hover:text-navy transition-all"
            >
              Explore Delivery Capability <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlatformPage;
