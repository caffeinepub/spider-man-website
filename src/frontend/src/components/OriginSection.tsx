import DepthCard from './DepthCard';

export default function OriginSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background to-spidey-dark/20 web-pattern">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 comic-title text-spidey-red drop-shadow-lg">
          ORIGIN STORY
        </h2>
        <div className="w-24 h-1 bg-spidey-blue mx-auto mb-12 rounded-full shadow-glow-blue" />

        <DepthCard className="mb-8">
          <h3 className="text-3xl font-bold mb-4 text-spidey-blue comic-subtitle">
            Peter Parker
          </h3>
          <p className="text-lg leading-relaxed text-foreground/90 mb-4">
            Peter Parker was an ordinary high school student living in Queens, New York with his Aunt May and Uncle Ben. A brilliant but shy teenager, Peter's life changed forever during a science exhibition.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90">
            Bitten by a radioactive spider, Peter gained incredible abilities: superhuman strength, the ability to cling to walls, and a mysterious "spider-sense" that warns him of danger. But with great power came great responsibility.
          </p>
        </DepthCard>

        <DepthCard className="mb-8">
          <h3 className="text-3xl font-bold mb-4 text-spidey-red comic-subtitle">
            The Tragedy
          </h3>
          <p className="text-lg leading-relaxed text-foreground/90 mb-4">
            Initially using his powers for personal gain, Peter's life took a tragic turn when a burglar he could have stopped murdered his beloved Uncle Ben. This devastating loss taught Peter the most important lesson of his life.
          </p>
          <blockquote className="border-l-4 border-spidey-red pl-6 py-2 italic text-xl text-foreground/80">
            "With great power comes great responsibility."
          </blockquote>
        </DepthCard>

        <DepthCard>
          <h3 className="text-3xl font-bold mb-4 text-spidey-blue comic-subtitle">
            Becoming Spider-Man
          </h3>
          <p className="text-lg leading-relaxed text-foreground/90">
            From that moment forward, Peter Parker dedicated his life to protecting the innocent as the Amazing Spider-Man. Balancing his personal life, relationships, and responsibilities with his duty as a hero, Spider-Man became one of the most beloved superheroes of all time.
          </p>
        </DepthCard>
      </div>
    </section>
  );
}
