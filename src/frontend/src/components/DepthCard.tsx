import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface DepthCardProps {
  children: ReactNode;
  className?: string;
}

export default function DepthCard({ children, className }: DepthCardProps) {
  return (
    <div
      className={cn(
        'bg-card rounded-lg p-6 shadow-depth-lg hover:shadow-depth-xl transition-all duration-300 border border-border/50 backdrop-blur-sm',
        'transform hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
}
