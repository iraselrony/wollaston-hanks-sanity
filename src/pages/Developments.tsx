import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import marinaDev from "@/assets/marina-development.jpg";
import mixedUse from "@/assets/mixed-use-development.jpg";
import strategicLand from "@/assets/strategic-land.jpg";
import hotelRepo from "@/assets/hotel-repositioning.jpg";

const caseStudies = [
  {
    title: "Marina Resort & Spa Development",
    location: "Coastal UK",
    type: "Hospitality & Leisure",
    status: "Case Study",
    description: "Transformative coastal regeneration project. Site acquired for £2M with planning consent secured for a major resort and spa development. Estimated project value now in the billions.",
    image: marinaDev,
  },
  {
    title: "Mixed-Use Urban Regeneration",
    location: "Northern England",
    type: "Regeneration",
    status: "Illustrative Opportunity",
    description: "A major urban regeneration scheme combining residential, commercial and public realm improvements on a former industrial site.",
    image: mixedUse,
  },
  {
    title: "Strategic Land Promotion — South East",
    location: "South East England",
    type: "Strategic Development",
    status: "Development Investment Thesis",
    description: "Strategic land promotion opportunity on green belt land adjacent to a major settlement. Planning strategy developed to secure allocation and outline consent.",
    image: strategicLand,
  },
  {
    title: "Hotel to Luxury Resort Repositioning",
    location: "South West England",
    type: "Asset Repositioning",
    status: "Illustrative Opportunity",
    description: "Repositioning an underperforming coastal hotel into a luxury boutique resort through planning-led development strategy.",
    image: hotelRepo,
  },
];

const DevelopmentsPage = () => {
  return (
    <Layout>
      <PageHero
        title="Developments & Projects"
        subtitle="Case studies, development concepts and strategic project opportunities"
        backgroundImage={marinaDev}
      />

      <section className="py-8 bg-cream">
        <div className="container-narrow text-center">
          <p className="text-muted-foreground text-sm italic">
            Projects include real case studies, illustrative opportunities and development investment theses demonstrating strategic capability.
          </p>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-wide">
          <div className="space-y-16">
            {caseStudies.map((project, index) => (
              <div key={project.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex gap-3 mb-4">
                    <span className="text-xs tracking-wider uppercase text-gold border border-gold/40 px-3 py-1">{project.type}</span>
                    <span className="text-xs tracking-wider uppercase text-muted-foreground border border-border px-3 py-1">{project.status}</span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl text-navy mb-3">{project.title}</h2>
                  <p className="text-muted-foreground text-sm flex items-center gap-2 mb-6">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {project.location}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img src={project.image} alt={project.title} className="w-full aspect-[16/10] object-cover" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-cream mb-6">Have a Development Opportunity?</h2>
          <Link to="/submit-opportunity" className="px-8 py-3.5 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all">
            Submit Opportunity <ArrowRight className="w-4 h-4 inline ml-2" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default DevelopmentsPage;
