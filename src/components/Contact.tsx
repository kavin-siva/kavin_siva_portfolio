import { Section } from './Section';
import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact" className="max-w-7xl mx-auto px-6">
      <div className="bg-card border border-border rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">What's Next?</h2>
            <p className="text-lg text-foreground/70 mb-12 leading-relaxed">
              I'm currently looking for new opportunities in software engineering, data engineering, and distributed systems. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:kavinsivasu@gmail.com"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground text-background font-bold hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 group"
              >
                <Mail size={20} />
                Say Hello
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/kavin-siva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-background border border-border text-foreground hover:border-accent hover:text-accent transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
