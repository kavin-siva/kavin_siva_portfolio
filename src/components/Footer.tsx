import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-xl font-bold tracking-tighter text-foreground">
            KS<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} Kavin Sivasubramanian. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/kavin-siva/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="mailto:kavinsivasu@gmail.com" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
            Email
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-card border border-border text-foreground hover:bg-card/80 transition-all group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
