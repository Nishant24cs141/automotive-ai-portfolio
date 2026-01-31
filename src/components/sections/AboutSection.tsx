import { Code, Lightbulb, Rocket, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Finding elegant solutions to complex challenges',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies and frameworks',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively in diverse teams',
  },
];

export function AboutSection() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={sectionRef}>
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Avatar */}
          <div className="scroll-animate-left">
            <div className="relative mx-auto lg:mx-0 max-w-md">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl" />
              
              <div className="relative glass rounded-2xl p-2 glow-sm">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-secondary to-card overflow-hidden">
                  {/* Placeholder - Replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-card to-secondary">
                    <div className="text-center p-8">
                      <span className="text-7xl font-display font-bold text-gradient">NJ</span>
                      <p className="text-muted-foreground mt-4 text-sm">Your photo here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass px-6 py-3 rounded-xl animate-float-slow">
                <span className="text-primary font-bold text-2xl">3+</span>
                <span className="text-muted-foreground text-sm block">Years Coding</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="scroll-animate-right">
            <span className="text-primary font-medium mb-2 block">About Me</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Passionate about building <span className="text-gradient">innovative solutions</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                Hi! I'm Nishant, a Computer Science and Engineering student with a deep passion 
                for technology and innovation. My journey in programming started during my early 
                college years, and since then, I've been on an exciting path of continuous learning.
              </p>
              <p>
                I specialize in full-stack development, with a keen interest in AI and machine 
                learning. I love transforming ideas into reality through clean, efficient code 
                and user-centric design. When I'm not coding, you'll find me exploring new 
                technologies or contributing to open-source projects.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`scroll-animate glass glass-hover rounded-xl p-4 delay-${(index + 1) * 100}`}
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
