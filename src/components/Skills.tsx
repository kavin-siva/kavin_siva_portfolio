import { Section } from './Section';
import { motion } from 'motion/react';
import { Code2, Wrench, Lightbulb } from 'lucide-react';

const skills = [
  {
    category: 'Languages',
    icon: <Code2 size={24} />,
    items: ['Java', 'Python', 'SQL', 'JavaScript/TypeScript'],
  },
  {
    category: 'Tools & Infrastructure',
    icon: <Wrench size={24} />,
    items: ['Git', 'Docker', 'AWS', 'Postman', 'JIRA', 'Linux', 'CI/CD'],
  },
  {
    category: 'Core Concepts',
    icon: <Lightbulb size={24} />,
    items: [
      'Data Structures & Algorithms',
      'Distributed Systems',
      'Cybersecurity',
      'REST APIs',
      'System Design',
      'Agile Methodology',
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="max-w-7xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Technical Arsenal</h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
          Skills & Technologies.
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-colors shadow-lg"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
              {skillGroup.icon}
            </div>
            <h4 className="text-xl font-bold mb-6">{skillGroup.category}</h4>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground/80 hover:text-foreground hover:border-accent transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
