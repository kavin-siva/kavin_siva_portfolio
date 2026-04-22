import { Section } from './Section';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Fake News Detector',
    type: 'Full-Stack Software',
    problem: 'The rapid spread of misinformation makes it difficult for readers to manually verify article credibility.',
    solution: 'Built an NLP-powered engine using text analysis and signal processing concepts to output a 0-100 authenticity score.',
    tech: ['React', 'Python', 'NLP', 'Digital Signal Processing (DSP) Concepts', 'Hardware-Accelerated ML'],
    impact: 'Helps users instantly filter deceptive articles with detailed reasoning and bias breakdowns.',
    link: 'https://ai-fake-news-beryl.vercel.app/',
    images: ['/fake-news-1.jpg', '/fake-news-2.jpg'],
  },
  {
    title: 'From Zero to Python Hero',
    type: 'Publication',
    problem: 'Beginners lack a structured, hands-on approach to learning Python.',
    solution: 'Authored a comprehensive book guiding users from basics to advanced concepts.',
    tech: ['Python', 'Technical Writing', 'Education'],
    impact: 'Published and distributed to aspiring developers.',
    link: 'https://www.lulu.com/shop/nithilan-sundaram-and-kavin-sivasubramanian/from-zero-to-python-hero-mastering-the-basics-of-python/ebook/product-45v9p92.html?q=&page=1&pageSize=4',
  },
  {
    title: 'AI/ML Fundamentals Book',
    type: 'Publication',
    problem: 'Complex AI/ML concepts are often inaccessible to students.',
    solution: 'Co-authored a guide simplifying machine learning algorithms and applications.',
    tech: ['Machine Learning', 'AI', 'Data Science'],
    impact: 'Used as a resource for the AI/ML Club (60+ members).',
    link: 'https://www.lulu.com/shop/nithilan-sundaram-and-kavin-sivasubramanian/the-future-of-intelligence-understanding-artificial-intelligence-and-machine-learning/ebook/product-ym4jd7.html?q=&page=1&pageSize=4',
  },
];

export function Projects() {
  return (
    <Section id="projects" className="bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Projects & Publications</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Engineering & Research.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background border border-border rounded-3xl p-8 hover:border-accent/50 transition-all shadow-lg hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold tracking-widest text-accent uppercase px-3 py-1 bg-accent/10 rounded-full">
                  {project.type}
                </span>
                <div className="flex gap-3 text-foreground/50">
                  {project.link && (
                    <a href={project.link} className="hover:text-foreground transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h4>

              {project.images && (
                <div className="flex flex-col gap-4 mb-6">
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} preview ${i + 1}`}
                      className="w-full h-40 md:h-48 object-cover object-left-top rounded-xl border border-border shadow-sm bg-black/10 transition-transform hover:scale-[1.02]"
                    />
                  ))}
                </div>
              )}

              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <span className="text-sm font-bold text-foreground/50 uppercase tracking-wider block mb-1">Problem</span>
                  <p className="text-foreground/80 text-sm">{project.problem}</p>
                </div>
                <div>
                  <span className="text-sm font-bold text-foreground/50 uppercase tracking-wider block mb-1">Solution</span>
                  <p className="text-foreground/80 text-sm">{project.solution}</p>
                </div>
                <div>
                  <span className="text-sm font-bold text-primary uppercase tracking-wider block mb-1">Impact</span>
                  <p className="text-foreground font-medium text-sm">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/50">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium text-foreground/60 bg-foreground/5 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
