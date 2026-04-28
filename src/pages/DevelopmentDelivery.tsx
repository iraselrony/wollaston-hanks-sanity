import { Link } from "react-router-dom";
import { ArrowRight, HardHat, Hammer, Zap, Eye, Paintbrush, Users, Cable } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import heroBg from "@/assets/hero-bg.jpg";

const capabilities = [
  {
    icon: HardHat,
    title: "Development Management",
    description: "Full-cycle project management from planning consent through construction and practical completion. Wollaston Hanks controls the development process to ensure quality, programme and budget targets are met.",
  },
  {
    icon: Hammer,
    title: "Contractor Coordination",
    description: "Strategic procurement and management of specialist contractors, consultants and professional teams. Coordinating complex multi-disciplinary delivery across major development schemes.",
  },
  {
    icon: Zap,
    title: "Infrastructure Delivery",
    description: "Delivery of essential site infrastructure including roads, drainage, utilities and services. Ensuring developments are technically viable and construction-ready.",
  },
  {
    icon: Cable,
    title: "Commercial Electrical Infrastructure",
    description: "Specialist capability in commercial power infrastructure and energy systems for major developments — from grid connections to on-site generation and distribution.",
  },
  {
    icon: Eye,
    title: "Development Visualisation",
    description: "CGI, masterplan visualisation, concept design imagery and planning consultation materials. Creating compelling visual narratives that support planning applications and investor engagement.",
  },
  {
    icon: Paintbrush,
    title: "Interior & Spatial Design",
    description: "Luxury residential, hospitality and leisure asset interior and spatial design. Ensuring developments achieve the highest standards of design quality and market positioning.",
  },
  {
    icon: Users,
    title: "Public Consultation & Stakeholder Strategy",
    description: "Designing and delivering public consultation strategies that build community support and satisfy planning requirements. Stakeholder engagement at every level from local communities to institutional partners.",
  },
];

const DevelopmentDelivery = () => {
  return (
    <Layout>
      <PageHero
        title="Development Delivery"
        subtitle="Full-cycle execution capability from concept through to completion"
        backgroundImage={heroBg}
      />

      <section className="py-20 bg-cream">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl text-navy mb-6">Execution Capability</h2>
          <div className="gold-divider-left mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Wollaston Hanks is not an advisory business that hands off at the point of consent. The platform maintains full-cycle development delivery capability — from concept and planning through construction, fit-out and completion.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These capabilities reinforce that Wollaston Hanks controls and delivers projects — differentiating the platform from conventional advisory firms and positioning it as a genuine development operator.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="space-y-8">
            {capabilities.map((cap, index) => (
              <div key={cap.title} className={`grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 items-start border border-border p-8 hover:border-gold/40 transition-all ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}>
                <cap.icon className="w-10 h-10 text-gold" />
                <div>
                  <h3 className="font-heading text-xl text-navy mb-3">{cap.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl text-cream mb-6">Integrated Platform Delivery</h2>
          <div className="gold-divider mb-8" />
          <p className="text-cream/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Every development capability is integrated within the platform — ensuring that strategic vision, planning intelligence and execution capability operate as a single coordinated system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
              Submit Development Opportunity
            </Link>
            <Link to="/contact" className="px-8 py-3.5 border border-cream/30 text-cream/80 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all">
              Discuss a Project <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DevelopmentDelivery;
