import { Section } from './Section';
import { Terminal, Database, Shield } from 'lucide-react';

export function About() {
  return (
    <Section id="about" className="bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">About Me</h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              I am a Computer Engineering student at Georgia Tech, deeply focused on building scalable backend systems, optimizing data pipelines, and ensuring robust cybersecurity. I thrive at the intersection of complex engineering challenges and product-minded solutions, aiming to build software that is not only fast and secure but also highly impactful.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px bg-border flex-1" />
              <span className="text-sm font-medium text-foreground/50 uppercase tracking-widest">Core Focus</span>
              <div className="h-px bg-border flex-1" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Database size={24} />
                </div>
                <h4 className="font-semibold">Data Engineering</h4>
                <p className="text-sm text-foreground/60">Optimizing pipelines and managing large-scale records.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <Terminal size={24} />
                </div>
                <h4 className="font-semibold">Distributed Systems</h4>
                <p className="text-sm text-foreground/60">Architecting resilient and scalable backend services.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center text-foreground">
                  <Shield size={24} />
                </div>
                <h4 className="font-semibold">Cybersecurity</h4>
                <p className="text-sm text-foreground/60">Implementing secure software design principles.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border border-border bg-card p-8 shadow-2xl relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="font-mono text-sm text-foreground/80 space-y-4">
                <p><span className="text-primary">const</span> <span className="text-accent">student</span> = {'{'}</p>
                <p className="pl-4">name: <span className="text-green-400">'Kavin Sivasubramanian'</span>,</p>
                <p className="pl-4">university: <span className="text-green-400">'Georgia Tech'</span>,</p>
                <p className="pl-4">major: <span className="text-green-400">'Computer Engineering'</span>,</p>
                <p className="pl-4">gradYear: <span className="text-orange-400">2027</span>,</p>
                <p className="pl-4">location: <span className="text-green-400">'Cumming, GA'</span>,</p>
                <p className="pl-4">interests: [</p>
                <p className="pl-8 text-green-400">'Cybersecurity',</p>
                <p className="pl-8 text-green-400">'Distributed Systems',</p>
                <p className="pl-8 text-green-400">'Software Design'</p>
                <p className="pl-4">]</p>
                <p>{'};'}</p>
                <p className="mt-4"><span className="text-primary">student</span>.<span className="text-accent">buildFuture</span>();</p>
              </div>
            </div>
            {/* Decorative blur */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10 opacity-50" />
          </div>
        </div>
      </div>
    </Section>
  );
}
