import { Section } from './Section';
import { motion } from 'motion/react';
import { Users, Award, BookOpen, Trophy } from 'lucide-react';

const leadership = [
  {
    role: 'VP of AI/ML Club',
    org: 'Georgia Tech',
    metrics: ['Led 60+ members', 'Organized weekly workshops', 'Mentored 15+ projects'],
    icon: <Users size={24} />,
  },
  {
    role: 'Admin',
    org: 'Tamil Sangam',
    metrics: ['Managed 150+ members', 'Completed 175+ volunteer hours', 'Coordinated large-scale cultural events'],
    icon: <Users size={24} />,
  },
];

const awards = [
  {
    title: '1st Place',
    event: 'UGA Research Symposium',
    desc: 'Awarded for outstanding bioinformatics research and computational workflows.',
    icon: <Trophy size={24} />,
  },
  {
    title: 'AP Scholar with Distinction',
    event: 'College Board',
    desc: 'Recognized for exceptional performance on Advanced Placement exams.',
    icon: <Award size={24} />,
  },
  {
    title: 'Georgia Seal of Biliteracy (Tamil)',
    event: 'State of Georgia',
    desc: 'Recognized for high level of proficiency in speaking, reading, and writing in Tamil in addition to English.',
    icon: <Award size={24} />,
  },
  {
    title: 'Certifications',
    event: 'Technical & Professional',
    desc: 'Certified in Java Programming and Microsoft Office Suite.',
    icon: <BookOpen size={24} />,
  },
];

export function LeadershipAwards() {
  return (
    <Section id="leadership" className="bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Leadership */}
          <div>
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Leadership</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Community & Mentorship.
              </h3>
            </div>

            <div className="space-y-8">
              {leadership.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 p-6 rounded-3xl bg-background border border-border hover:border-accent/50 transition-colors shadow-lg"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex-shrink-0 flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{item.role}</h4>
                    <p className="text-accent font-medium mb-4">{item.org}</p>
                    <ul className="space-y-2">
                      {item.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/80 text-sm">
                          <span className="text-primary mt-1 text-[10px]">▶</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Awards</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Recognition & Honors.
              </h3>
            </div>

            <div className="space-y-8">
              {awards.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6 p-6 rounded-3xl bg-background border border-border hover:border-primary/50 transition-colors shadow-lg"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{item.title}</h4>
                    <p className="text-primary font-medium mb-2">{item.event}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
