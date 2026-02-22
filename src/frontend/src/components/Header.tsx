import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-spidey-red/95 backdrop-blur-sm border-b-4 border-spidey-blue shadow-depth-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-spidey-blue rounded-full flex items-center justify-center shadow-depth-md transform hover:scale-110 transition-transform relative overflow-hidden">
            <div className="absolute inset-0 web-icon-pattern opacity-30" />
            <Sparkles className="w-7 h-7 text-white relative z-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white comic-title tracking-tight">
            SPIDER-MAN HUB
          </h1>
        </div>
      </div>
    </header>
  );
}
