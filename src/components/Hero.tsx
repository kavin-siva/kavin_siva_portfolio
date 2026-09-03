import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, FileText, ChevronDown, Mail } from 'lucide-react';
import { ResumePreview } from './ResumePreview';

export function Hero() {
  const [showResume, setShowResume] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleToggleResume = () => {
    const nextState = !showResume;
    setShowResume(nextState);
    if (nextState) {
      setTimeout(() => {
        resumeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
              Kavin <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sivasubramanian</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
              Computer Engineering @ Georgia Tech specializing in Cybersecurity + Product Management and Software Design.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                type="button"
                onClick={handleToggleResume}
                className={`px-6 py-3 rounded-full border font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  showResume
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg ring-2 ring-primary/30'
                    : 'bg-card border-border text-foreground hover:bg-card/80'
                }`}
                aria-expanded={showResume}
                aria-controls="resume-preview"
              >
                <FileText size={18} />
                <span>Resume</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${showResume ? 'rotate-180' : ''}`}
                />
              </button>
              <a
                href="#contact"
                className="p-3 rounded-full bg-card border border-border text-foreground hover:bg-card/80 transition-all"
                aria-label="Contact Me"
              >
                <Mail size={20} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50">
              <div>
                <h4 className="text-3xl font-bold text-foreground">4+</h4>
                <p className="text-sm text-foreground/60 mt-1">Internships</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-foreground">300+</h4>
                <p className="text-sm text-foreground/60 mt-1">Users Impacted</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-foreground">1k+</h4>
                <p className="text-sm text-foreground/60 mt-1">Records Optimized</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative mx-auto lg:ml-auto"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl z-10">
              <img
                src="/profile.jpg"
                alt="Kavin Sivasubramanian"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-accent/10 animate-[spin_30s_linear_infinite_reverse]" />
          </motion.div>
        </div>

        {/* Dropdown Resume Preview */}
        <AnimatePresence>
          {showResume && (
            <div ref={resumeRef} id="resume-preview">
              <ResumePreview isOpen={showResume} onClose={() => setShowResume(false)} />
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
