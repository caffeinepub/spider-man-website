import DepthCard from './DepthCard';

const villains = [
  {
    name: 'Green Goblin',
    realName: 'Norman Osborn',
    description: 'A brilliant industrialist driven mad by an experimental serum, becoming Spider-Man\'s most personal and dangerous enemy.',
    threat: 'Extreme',
  },
  {
    name: 'Doctor Octopus',
    realName: 'Otto Octavius',
    description: 'A nuclear physicist with four mechanical tentacles fused to his body, possessing both genius intellect and devastating power.',
    threat: 'High',
  },
  {
    name: 'Venom',
    realName: 'Eddie Brock',
    description: 'An alien symbiote bonded with a vengeful journalist, granting superhuman abilities and immunity to Spider-Sense.',
    threat: 'Extreme',
  },
  {
    name: 'Sandman',
    realName: 'Flint Marko',
    description: 'A criminal transformed into living sand, able to shape-shift and become nearly invulnerable to physical attacks.',
    threat: 'Medium',
  },
  {
    name: 'Electro',
    realName: 'Max Dillon',
    description: 'A living electrical generator capable of manipulating and projecting massive amounts of electricity.',
    threat: 'High',
  },
  {
    name: 'Mysterio',
    realName: 'Quentin Beck',
    description: 'A master of illusion and special effects who uses advanced technology to create elaborate deceptions.',
    threat: 'Medium',
  },
];

export default function VillainsSection() {
  const getThreatColor = (threat: string) => {
    switch (threat) {
      case 'Extreme':
        return 'text-red-500 border-red-500';
      case 'High':
        return 'text-orange-500 border-orange-500';
      default:
        return 'text-yellow-500 border-yellow-500';
    }
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background to-spidey-dark/20 web-pattern">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 comic-title text-spidey-red drop-shadow-lg">
          ROGUES GALLERY
        </h2>
        <div className="w-24 h-1 bg-spidey-blue mx-auto mb-12 rounded-full shadow-glow-blue" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {villains.map((villain, index) => (
            <DepthCard
              key={index}
              className="group hover:scale-105 transition-transform duration-300 border-l-4 border-spidey-red"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold comic-subtitle text-spidey-blue">
                  {villain.name}
                </h3>
                <span
                  className={`text-xs font-bold px-2 py-1 border rounded ${getThreatColor(villain.threat)}`}
                >
                  {villain.threat}
                </span>
              </div>
              <p className="text-sm text-foreground/60 mb-3 italic">
                {villain.realName}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                {villain.description}
              </p>
            </DepthCard>
          ))}
        </div>
      </div>
    </section>
  );
}
