import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import marinaDev from "@/assets/marina-development.jpg";
import { useDevelopments } from "@/sanity/hooks";
import { urlFor } from "@/sanity/client";

const DevelopmentsPage = () => {
  const { data: developments, isLoading, isError } = useDevelopments();

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
          {isLoading && (
            <div className="space-y-16">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-pulse">
                  <div className="space-y-4">
                    <div className="h-4 bg-muted rounded w-1/4" />
                    <div className="h-8 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="h-24 bg-muted rounded" />
                  </div>
                  <div className="aspect-[16/10] bg-muted rounded" />
                </div>
              ))}
            </div>
          )}

          {isError && (
            <p className="text-center text-muted-foreground py-12">
              Unable to load developments. Please try again shortly.
            </p>
          )}

          {!isLoading && !isError && developments && (
            <div className="space-y-16">
              {developments.map((project, index) => (
                <div
                  key={project._id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex gap-3 mb-4">
                      <span className="text-xs tracking-wider uppercase text-gold border border-gold/40 px-3 py-1">
                        {project.typeBadge}
                      </span>
                      {project.statusBadge && (
                        <span className="text-xs tracking-wider uppercase text-muted-foreground border border-border px-3 py-1">
                          {project.statusBadge}
                        </span>
                      )}
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl text-navy mb-3">{project.title}</h2>
                    {project.location && (
                      <p className="text-muted-foreground text-sm flex items-center gap-2 mb-6">
                        <MapPin className="w-3.5 h-3.5 text-gold" /> {project.location}
                      </p>
                    )}
                    <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                    {project.bulletPoints && project.bulletPoints.length > 0 && (
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        {project.bulletPoints.map((point, pi) => (
                          <li key={pi} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    {project.image ? (
                      <img
                        src={urlFor(project.image).width(900).height(563).url()}
                        alt={project.image.alt ?? project.title}
                        className="w-full aspect-[16/10] object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full aspect-[16/10] bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">No image uploaded</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && !isError && developments?.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No developments listed yet. Add case studies in the CMS.
            </p>
          )}
        </div>
      </section>

      <section className="py-16 bg-navy text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl text-cream mb-6">Have a Development Opportunity?</h2>
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

export default DevelopmentsPage;
