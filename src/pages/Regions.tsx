import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import ukRegion from "@/assets/uk-region.jpg";
import usRegion from "@/assets/us-region.jpg";

const RegionsPage = () => {
  return (
    <Layout>
      <PageHero
        title="Operating Regions"
        subtitle="Strategic development and investment across the United Kingdom and United States"
        backgroundImage={ukRegion}
      />

      <section className="py-20 bg-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "United Kingdom", image: ukRegion, href: "/regions/united-kingdom", desc: "Strategic land promotion, mixed-use regeneration, asset repositioning and development partnerships across England, Scotland and Wales." },
              { title: "United States", image: usRegion, href: "/regions/united-states", desc: "Development opportunities, hospitality repositioning, luxury residential and investment advisory across key US markets." },
            ].map((region) => (
              <Link key={region.title} to={region.href} className="group">
                <div className="relative overflow-hidden aspect-[16/10] mb-6">
                  <img src={region.image} alt={region.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="font-heading text-3xl text-cream group-hover:text-gold transition-colors">{region.title}</h2>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{region.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RegionsPage;
