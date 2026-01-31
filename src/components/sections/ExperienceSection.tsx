import { ExternalLink, Github, Folder } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AI-Powered Task Manager',
    description: 'A smart task management application that uses machine learning to prioritize and categorize tasks automatically. Features include natural language processing for task input and intelligent deadline suggestions.',
    image: null,
    tech: ['React', 'Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and an admin dashboard for analytics and order management.',
    image: null,
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    title: 'Real-time Chat Application',
    description: 'Scalable messaging platform with end-to-end encryption, file sharing, and video calling capabilities. Supports both private and group conversations.',
    image: null,
    tech: ['React', 'Socket.io', 'Node.js', 'Redis', 'WebRTC'],
    github: 'https://github.com',
    demo: null,
    featured: true,
  },
  {
    title: 'Portfolio Generator',
    description: 'Automated tool that generates beautiful portfolio websites from a simple configuration file.',
    image: null,
    tech: ['TypeScript', 'React', 'Vite'],
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'Interactive weather application with location-based forecasts and beautiful visualizations.',
    image: null,
    tech: ['React', 'D3.js', 'OpenWeather API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    title: 'Code Snippet Manager',
    description: 'A developer tool for organizing and sharing code snippets with syntax highlighting.',
    image: null,
    tech: ['Vue.js', 'Firebase', 'Monaco Editor'],
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
];

export function ExperienceSection() {
  const sectionRef = useScrollAnimation();
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="experience" className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <span className="text-primary font-medium mb-2 block">My Work</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for building impactful solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`scroll-animate delay-${(index + 1) * 100}`}
            >
              <div className={`glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className={`relative h-64 lg:h-auto bg-gradient-to-br from-secondary to-card ${
                    index % 2 !== 0 ? 'lg:order-2' : ''
                  }`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Folder className="w-16 h-16 text-primary/30" />
                    </div>
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent lg:bg-gradient-to-r" />
                  </div>

                  {/* Project Content */}
                  <div className={`p-6 md:p-8 flex flex-col justify-center ${
                    index % 2 !== 0 ? 'lg:order-1' : ''
                  }`}>
                    <span className="text-primary text-sm font-medium mb-2">Featured Project</span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={22} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View Demo"
                        >
                          <ExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="scroll-animate">
          <h3 className="text-xl font-display font-bold text-foreground text-center mb-8">
            Other Noteworthy Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`scroll-animate delay-${(index + 1) * 100} glass glass-hover rounded-xl p-6 group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 scroll-animate">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/5"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
