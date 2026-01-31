import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nishant@example.com', label: 'Email' },
];

const roles = ['CSE Student', 'Developer', 'Problem Solver', 'Tech Enthusiast'];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];
    
    if (isTyping) {
      if (displayText.length < role.length) {
        const timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentRole]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4 animate-slide-up">
              Hey, I am{' '}
              <span className="text-gradient">Nishant</span>
            </h1>

            {/* Typing Animation */}
            <div className="h-12 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-2xl md:text-3xl text-muted-foreground font-light">
                {displayText}
                <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-pulse" />
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Passionate about crafting elegant solutions to complex problems. 
              I specialize in building modern web applications and exploring 
              the frontiers of AI and machine learning.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow group"
              >
                <Sparkles className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Hire me
              </Button>
              <Button
                onClick={() => scrollToSection('#experience')}
                size="lg"
                variant="outline"
                className="border-border hover:border-primary/50 hover:bg-primary/5"
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:glow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 glass px-4 py-2 rounded-lg animate-float z-10">
                <span className="text-sm font-medium text-foreground">🎓 CSE Student</span>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-lg animate-float-slow z-10" style={{ animationDelay: '0.5s' }}>
                <span className="text-sm font-medium text-foreground">💻 Full Stack</span>
              </div>

              <div className="absolute top-1/2 -right-8 glass px-4 py-2 rounded-lg animate-float z-10" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium text-foreground">🤖 AI/ML</span>
              </div>

              {/* Avatar Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-2xl animate-pulse-glow" />
                
                {/* Avatar Circle */}
                <div className="relative w-full h-full rounded-full glass border-2 border-primary/30 overflow-hidden animate-float-slow">
                  {/* Placeholder Avatar - Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                    <span className="text-8xl font-display font-bold text-gradient">N</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
