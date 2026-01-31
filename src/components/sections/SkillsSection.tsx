import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 70 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 70 },
      { name: 'Linux', level: 80 },
    ],
  },
];

const techIcons = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 
  'MongoDB', 'Docker', 'Git', 'AWS', 'Tailwind CSS'
];

export function SkillsSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="skills" className="py-20 md:py-32 relative" ref={sectionRef}>
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-animate">
          <span className="text-primary font-medium mb-2 block">Skills</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies.
          </p>
        </div>

        {/* Skills Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`scroll-animate delay-${(categoryIndex + 1) * 100} glass rounded-2xl p-6`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <h3 className="text-lg font-display font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-orange-400 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          transitionDelay: `${(categoryIndex * 5 + skillIndex) * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="scroll-animate">
          <h3 className="text-center text-lg font-display font-bold text-foreground mb-8">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techIcons.map((tech, index) => (
              <div
                key={tech}
                className={`scroll-animate delay-${(index % 5 + 1) * 100} glass glass-hover rounded-xl px-6 py-3 hover:glow-sm transition-all duration-300`}
              >
                <span className="text-sm font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '3+', label: 'Years Experience' },
            { value: '1000+', label: 'Commits on GitHub' },
            { value: '10+', label: 'Technologies' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`scroll-animate delay-${(index + 1) * 100} text-center glass rounded-xl p-6 hover:glow-sm transition-all duration-300`}
            >
              <span className="text-3xl md:text-4xl font-display font-bold text-gradient">
                {stat.value}
              </span>
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
