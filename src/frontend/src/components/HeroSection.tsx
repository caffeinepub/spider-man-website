import { useParallax } from '../hooks/useParallax';

export default function HeroSection() {
  const cityOffset = useParallax(0.3);
  const webOffset = useParallax(0.5);
  const heroOffset = useParallax(0.7);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-spidey-blue via-spidey-dark to-background">
      {/* Background City Layer */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${cityOffset}px)`,
          backgroundImage: 'url(/assets/generated/city-background.dim_1600x900.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Web Pattern Layer */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${webOffset}px)`,
          backgroundImage: 'url(/assets/generated/web-pattern.dim_800x800.png)',
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Hero Content */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `translateY(${heroOffset}px)` }}
      >
        <div className="text-center z-10 px-4">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white comic-title mb-6 drop-shadow-hero animate-float">
            SPIDER-MAN
          </h2>
          <p className="text-xl md:text-3xl text-spidey-red font-bold comic-subtitle drop-shadow-lg">
            YOUR FRIENDLY NEIGHBORHOOD HERO
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="w-16 h-1 bg-spidey-red rounded-full shadow-glow-red" />
            <div className="w-16 h-1 bg-spidey-blue rounded-full shadow-glow-blue" />
            <div className="w-16 h-1 bg-spidey-red rounded-full shadow-glow-red" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
