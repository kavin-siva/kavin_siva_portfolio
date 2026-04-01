import { Section } from './Section';
import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Data Engineer Intern',
    company: 'State Farm',
    date: 'Oct 2025 – Present',
    metrics: [
      'Managed 1000+ customer records',
      'Improved data accuracy + reporting',
      'Analyzed 500+ interactions',
      'Built insights pipelines using Python',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Prompt Mail Solutions',
    date: 'Summer 2025',
    metrics: [
      'Built full-stack email automation system (300+ users)',
      'Processed 2000+ events',
      'Implemented scheduling + personalization logic',
      'Agile Scrum leadership (8+ sprints)',
    ],
  },
  {
    role: 'Research Intern',
    company: 'University of Georgia',
    date: 'Summer 2024',
    metrics: [
      'Bioinformatics + data analysis',
      'Identified evolutionary patterns',
      'Combined wet lab + computational workflows',
    ],
  },
  {
    role: 'DevOps Intern',
    company: 'Assets Edge',
    date: 'Summer 2023',
    metrics: [
      'Improved CI/CD (20% faster deploys)',
      'Debugged 20+ issues',
      'Worked with APIs + backend systems',
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Experience</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
          Impact & Metrics.
        </h3>
      </div>

      <div className="grid gap-8 relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-[15px] top-0 bottom-0 w-px bg-border z-0" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative md:pl-16 group"
          >
            {/* Timeline dot */}
            <div className="hidden md:block absolute left-[11px] top-6 w-[9px] h-[9px] rounded-full bg-border group-hover:bg-primary transition-colors z-10 ring-4 ring-background" />

            <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-colors shadow-lg hover:shadow-primary/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-foreground/5 text-sm font-medium text-foreground/70 w-fit">
                  {exp.date}
                </div>
              </div>

              <ul className="space-y-2 text-foreground/80 list-disc list-outside ml-4">
                {exp.metrics.map((metric, i) => (
                  <li key={i} className="pl-1">{metric}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
