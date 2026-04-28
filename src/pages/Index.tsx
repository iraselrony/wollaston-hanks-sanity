import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingUp, Landmark, MapPin, Hammer, Eye, Paintbrush, Users, Zap, HardHat } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import marinaDev from "@/assets/marina-development.jpg";
import mixedUse from "@/assets/mixed-use-development.jpg";
import hotelRepo from "@/assets/hotel-repositioning.jpg";
import strategicLand from "@/assets/strategic-land.jpg";
import luxuryRes from "@/assets/luxury-residential.jpg";
import urbanRedev from "@/assets/urban-redevelopment.jpg";
import ukRegion from "@/assets/uk-region.jpg";
import usRegion from "@/assets/us-region.jpg";
import founderImg from "@/assets/founder-portrait.jpg";
import heroVideo from "@/assets/Luxury Real Estate - Luma_5.mp4";

const platformDivisions = [
  {
    icon: Building2,
    title: "Strategic Development",
    description: "Originating and delivering high-value development opportunities across strategic land, mixed-use regeneration and major schemes.",
    href: "/platform/strategic-development",
  },
  {
    icon: TrendingUp,
    title: "Capital & Asset Advisory",
    description: "Advising investors, banks and asset owners on repositioning, development strategy and unlocking value from complex real estate.",
    href: "/platform/capital-advisory",
  },
  {
    icon: Landmark,
    title: "Investment & Development Sales",
    description: "Strategic acquisition and disposal of development and repositioning opportunities, including off-market and institutional transactions.",
    href: "/platform/sales",
  },
];

const deliveryCapabilities = [
  { icon: HardHat, title: "Development Management", desc: "Full-cycle project oversight from planning through construction and handover." },
  { icon: Hammer, title: "Contractor Coordination", desc: "Strategic procurement and management of specialist contractors and consultants." },
  { icon: Zap, title: "Infrastructure Delivery", desc: "Commercial power infrastructure and energy systems for major developments." },
  { icon: Eye, title: "Development Visualisation", desc: "CGI, masterplans, concept design and planning consultation visuals." },
  { icon: Paintbrush, title: "Interior & Spatial Design", desc: "Luxury residential, hospitality and leisure asset spatial design." },
  { icon: Users, title: "Public Consultation", desc: "Stakeholder engagement strategy and public consultation delivery." },
];

const opportunityTypes = [
  { title: "Strategic Land", image: strategicLand, href: "/opportunities" },
  { title: "Mixed-Use Regeneration", image: mixedUse, href: "/opportunities" },
  { title: "Asset Repositioning", image: hotelRepo, href: "/opportunities" },
  { title: "Hospitality Development", image: marinaDev, href: "/opportunities" },
  { title: "Urban Redevelopment", image: urbanRedev, href: "/opportunities" },
  { title: "Luxury Residential", image: luxuryRes, href: "/opportunities" },
];

const clientTypes = [
  {
    title: "Landowners",
    description: "Unlock the development potential of your land through planning-led strategy and strategic land promotion.",
    href: "/submit-opportunity",
  },
  {
    title: "Investors",
    description: "Access structured development opportunities, co-investment partnerships and institutional-level real estate strategy.",
    href: "/contact",
  },
  {
    title: "Developers",
    description: "Partner on complex development opportunities requiring planning expertise and strategic project delivery.",
    href: "/contact",
  },
];

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Force defaultMuted to satisfy iOS Safari strict autoplay policies
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed (Low Power Mode or strict Safari policy):", error);
      });
    }
  }, []);

  return (
    <Layout>
      {/* Section 1 — Hero with Video */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          poster={heroBg}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy-dark/75" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block border border-gold/40 px-4 py-1.5 text-gold text-xs tracking-[0.3em] uppercase">
              WH
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-cream mb-2 leading-tight">
            WOLLASTON HANKS
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.25em] uppercase">Strategic Development</span>
            <div className="w-12 h-px bg-gold/60" />
          </div>
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-4">
            Planning-Led Strategic Development & Investment Platform
          </p>
          <p className="text-cream/60 text-base max-w-2xl mx-auto mb-10">
            Wollaston Hanks originates, structures and delivers complex real estate opportunities through planning intelligence, development strategy, asset repositioning and capital partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all"
            >
              Discuss a Development Opportunity
            </Link>
            <Link
              to="/submit-opportunity"
              className="px-8 py-3.5 border border-cream/30 text-cream/80 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
            >
              Submit Land or Property
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2 — Platform Positioning */}
      <section className="py-20 bg-cream">
        <div className="container-narrow text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">
            Unlocking Complex Property & Land Opportunities
          </h2>
          <div className="gold-divider mb-8" />
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            Unlocking complex property and land opportunities across strategic land, distressed assets and underperforming real estate.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We work with landowners, investors, developers and institutions to identify opportunity, design strategy and deliver outcomes.
          </p>
        </div>
      </section>

      {/* Section 3 — Platform Overview (3 Divisions) */}
      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">The Platform</h2>
            <div className="gold-divider mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three core divisions originating, structuring and delivering complex real estate opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platformDivisions.map((division) => (
              <Link
                key={division.title}
                to={division.href}
                className="group border border-border p-10 hover:border-gold/40 transition-all bg-card hover:shadow-lg"
              >
                <division.icon className="w-8 h-8 text-gold mb-5" />
                <h3 className="font-heading text-xl text-navy mb-3 group-hover:text-gold transition-colors">
                  {division.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {division.description}
                </p>
                <span className="text-gold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Development Delivery */}
      <section className="py-20 bg-navy">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Execution Capability</span>
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">Development Delivery</h2>
            <div className="gold-divider mb-6" />
            <p className="text-cream/60 max-w-2xl mx-auto">
              Wollaston Hanks provides full-cycle capability from concept through to execution — reinforcing that the platform controls and delivers projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryCapabilities.map((cap) => (
              <div key={cap.title} className="border border-gold/20 p-8 hover:border-gold/40 transition-all">
                <cap.icon className="w-7 h-7 text-gold mb-4" />
                <h3 className="font-heading text-lg text-cream mb-2">{cap.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/platform/development-delivery"
              className="inline-flex items-center gap-2 text-gold text-sm tracking-wider uppercase hover:gap-3 transition-all"
            >
              Explore Delivery Capability <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5 — Featured Case Study */}
      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold text-xs tracking-[0.2em] uppercase mb-4 block">Featured Deal</span>
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-6">
                Marina Resort & Spa Development
              </h2>
              <div className="gold-divider-left mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                A transformative acquisition and development opportunity — from strategic site identification through planning uplift to significant value creation. This project exemplifies the Wollaston Hanks approach to originating and delivering complex real estate.
              </p>
              <ul className="space-y-3 text-muted-foreground text-sm mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Acquisition strategy and site secured for £2M
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Planning uplift delivered through strategic land promotion
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Transformation from underperforming asset to major resort development
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  Estimated project value now in the billions
                </li>
              </ul>
              <Link
                to="/developments"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-sm tracking-wider uppercase hover:bg-gold hover:text-navy transition-all"
              >
                View Developments <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={marinaDev}
                alt="Marina Resort Development"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
              <div className="absolute inset-0 border border-gold/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Opportunity Types */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">Opportunity Types</h2>
            <div className="gold-divider mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complex real estate opportunities requiring planning expertise, strategic vision and capital structuring.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunityTypes.map((type) => (
              <Link key={type.title} to={type.href} className="group relative overflow-hidden aspect-[3/2]">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-lg text-cream group-hover:text-gold transition-colors">
                    {type.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Current Opportunities */}
      <section className="py-20 bg-navy">
        <div className="container-wide">
          <div className="text-center mb-14">
            <span className="text-gold text-xs tracking-[0.2em] uppercase mb-3 block">Current Pipeline</span>
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">Active Opportunities</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Strategic Land Promotion", location: "South East, UK", type: "Development" },
              { title: "Mixed-Use Regeneration Site", location: "Northern England", type: "Regeneration" },
              { title: "Hotel Repositioning", location: "Coastal Resort", type: "Repositioning" },
              { title: "Development Partnership", location: "Greater London", type: "Partnership" },
            ].map((opp) => (
              <div key={opp.title} className="border border-gold/20 p-6 hover:border-gold/40 transition-all">
                <span className="text-gold text-xs tracking-wider uppercase">{opp.type}</span>
                <h3 className="font-heading text-lg text-cream mt-3 mb-2">{opp.title}</h3>
                <p className="text-cream/50 text-sm flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> {opp.location}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-sm tracking-wider uppercase hover:bg-gold hover:text-navy transition-all"
            >
              View Opportunities <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/submit-opportunity"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cream/30 text-cream/70 text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-all"
            >
              Submit an Opportunity <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8 — Client Types */}
      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">Who We Work With</h2>
            <div className="gold-divider mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((item) => (
              <div key={item.title} className="border border-border p-8 text-center hover:border-gold/40 transition-all">
                <h3 className="font-heading text-xl text-navy mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.description}</p>
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-2 text-gold text-sm hover:gap-3 transition-all"
                >
                  Enquire <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 — Regions */}
      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-4">Operating Regions</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "United Kingdom", image: ukRegion, href: "/regions/united-kingdom" },
              { title: "United States", image: usRegion, href: "/regions/united-states" },
            ].map((region) => (
              <Link key={region.title} to={region.href} className="group relative overflow-hidden aspect-[16/9]">
                <img
                  src={region.image}
                  alt={region.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-heading text-3xl text-cream group-hover:text-gold transition-colors">
                    {region.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10 — Founder */}
      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-gold text-xs tracking-[0.2em] uppercase mb-4 block">Leadership</span>
              <h2 className="font-heading text-3xl md:text-4xl text-navy mb-2">Beau Banks</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Founder & Development Director<br />
                BSc (Hons), MSc (Planning for Major Projects), MRTPI, MNAEA
              </p>
              <div className="gold-divider-left mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Beau Banks founded Wollaston Hanks to originate and deliver complex development opportunities through planning expertise and strategic project delivery. With qualifications spanning town planning and real estate, Beau brings institutional-grade thinking to every development opportunity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His approach combines deep planning knowledge with commercial acumen, enabling Wollaston Hanks to identify, structure and deliver opportunities that others overlook.
              </p>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  src={founderImg}
                  alt="Beau Banks - Founder & Development Director"
                  className="w-80 aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-gold/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11 — Final CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
            Unlock Value in Complex Real Estate
          </h2>
          <div className="gold-divider mb-8" />
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you are a landowner, investor, developer or institution — Wollaston Hanks provides the strategic capability to originate, structure and deliver £50M+ development opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/submit-opportunity"
              className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all"
            >
              Submit Development Opportunity
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-cream/30 text-cream/80 text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
            >
              Investor Enquiry
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
