import DepthCard from './DepthCard';
import { Book, Film, Tv } from 'lucide-react';

const appearances = [
  {
    type: 'comic',
    icon: Book,
    title: 'Amazing Fantasy #15',
    year: '1962',
    description: 'The first appearance of Spider-Man, introducing Peter Parker and his origin story.',
  },
  {
    type: 'comic',
    icon: Book,
    title: 'The Amazing Spider-Man',
    year: '1963-Present',
    description: 'The flagship Spider-Man comic series with over 900 issues spanning decades.',
  },
  {
    type: 'film',
    icon: Film,
    title: 'Spider-Man Trilogy',
    year: '2002-2007',
    description: 'Sam Raimi\'s groundbreaking trilogy starring Tobey Maguire as the web-slinger.',
  },
  {
    type: 'film',
    icon: Film,
    title: 'The Amazing Spider-Man',
    year: '2012-2014',
    description: 'Andrew Garfield\'s take on the character in a rebooted film series.',
  },
  {
    type: 'film',
    icon: Film,
    title: 'MCU Spider-Man',
    year: '2016-Present',
    description: 'Tom Holland\'s Spider-Man integrated into the Marvel Cinematic Universe.',
  },
  {
    type: 'film',
    icon: Film,
    title: 'Spider-Verse Films',
    year: '2018-Present',
    description: 'Animated masterpieces exploring the multiverse with Miles Morales.',
  },
  {
    type: 'tv',
    icon: Tv,
    title: 'Spider-Man: The Animated Series',
    year: '1994-1998',
    description: 'Beloved animated series that defined Spider-Man for a generation.',
  },
  {
    type: 'tv',
    icon: Tv,
    title: 'Spectacular Spider-Man',
    year: '2008-2009',
    description: 'Critically acclaimed animated series praised for its storytelling.',
  },
];

export default function AppearancesSection() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'comic':
        return 'from-spidey-red to-red-700';
      case 'film':
        return 'from-spidey-blue to-blue-700';
      default:
        return 'from-purple-600 to-purple-800';
    }
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-spidey-dark/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-4 comic-title text-spidey-blue drop-shadow-lg">
          NOTABLE APPEARANCES
        </h2>
        <div className="w-24 h-1 bg-spidey-red mx-auto mb-12 rounded-full shadow-glow-red" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appearances.map((appearance, index) => (
            <DepthCard
              key={index}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${getTypeColor(appearance.type)} rounded-lg flex items-center justify-center flex-shrink-0 shadow-depth-md group-hover:shadow-glow-blue transition-shadow`}
                >
                  <appearance.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold comic-subtitle text-spidey-red">
                      {appearance.title}
                    </h3>
                    <span className="text-sm font-bold text-spidey-blue">
                      {appearance.year}
                    </span>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {appearance.description}
                  </p>
                </div>
              </div>
            </DepthCard>
          ))}
        </div>
      </div>
    </section>
  );
}
