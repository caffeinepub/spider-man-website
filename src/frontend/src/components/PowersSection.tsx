import DepthCard from './DepthCard';
import { Zap, Eye, Droplets, Dumbbell, Wind, Brain } from 'lucide-react';

const powers = [
  {
    icon: Dumbbell,
    title: 'Superhuman Strength',
    description: 'Can lift up to 10 tons and deliver devastating punches to his enemies.',
  },
  {
    icon: Wind,
    title: 'Wall-Crawling',
    description: 'Ability to adhere to any surface, allowing him to climb walls and ceilings effortlessly.',
  },
  {
    icon: Eye,
    title: 'Spider-Sense',
    description: 'Precognitive ability that alerts him to danger, giving him split-second reaction time.',
  },
  {
    icon: Zap,
    title: 'Enhanced Agility',
    description: 'Incredible reflexes, balance, and coordination far beyond human capability.',
  },
  {
    icon: Droplets,
    title: 'Web-Slinging',
    description: 'Uses web-shooters to swing through the city and create various web constructs.',
  },
  {
    icon: Brain,
    title: 'Genius Intellect',
    description: 'Brilliant scientist and inventor, creating his own web-fluid and technology.',
  },
];

export default function PowersSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-spidey-dark/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 comic-title text-spidey-blue drop-shadow-lg">
          POWERS & ABILITIES
        </h2>
        <div className="w-24 h-1 bg-spidey-red mx-auto mb-12 rounded-full shadow-glow-red" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {powers.map((power, index) => (
            <DepthCard
              key={index}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-spidey-red to-spidey-blue rounded-full flex items-center justify-center mb-4 shadow-depth-md group-hover:shadow-glow-red transition-shadow">
                  <power.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 comic-subtitle text-spidey-red">
                  {power.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {power.description}
                </p>
              </div>
            </DepthCard>
          ))}
        </div>
      </div>
    </section>
  );
}
