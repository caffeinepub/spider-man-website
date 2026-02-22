import { Heart } from 'lucide-react';

export default function Footer() {
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'spider-man-hub';

  return (
    <footer className="relative bg-spidey-dark border-t-4 border-spidey-red py-12 px-4 web-pattern">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-foreground/80 mb-4">
            Built with <Heart className="inline w-4 h-4 text-spidey-red fill-spidey-red" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-spidey-red hover:text-spidey-blue transition-colors font-bold"
            >
              caffeine.ai
            </a>
          </p>
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Spider-Man Hub. All Spider-Man characters and content are property of Marvel Comics.
          </p>
        </div>
      </div>
    </footer>
  );
}
