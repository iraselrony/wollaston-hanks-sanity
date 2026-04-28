interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative min-h-[45vh] flex items-center justify-center text-center">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative z-10 px-6 animate-fade-in-up">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="gold-divider mt-6" />
      </div>
    </section>
  );
};

export default PageHero;
