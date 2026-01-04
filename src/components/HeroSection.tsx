import { ArrowRight, Download, Code, Palette, Zap, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';
import { useEffect, useState } from 'react';

const roles = ['Web Developer', 'React Specialist', 'MERN Developer', 'UI Enthusiast'];

const floatingIcons = [
  { icon: '⚛️', delay: 0, position: 'top-20 left-[15%]', size: 'w-12 h-12' },
  { icon: '🚀', delay: 0.5, position: 'top-32 right-[20%]', size: 'w-10 h-10' },
  { icon: '💻', delay: 1, position: 'bottom-40 left-[10%]', size: 'w-14 h-14' },
  { icon: '✨', delay: 1.5, position: 'bottom-32 right-[15%]', size: 'w-8 h-8' },
  { icon: '🎨', delay: 2, position: 'top-48 left-[5%]', size: 'w-10 h-10' },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-background"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Floating decorative icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} ${item.size} hidden lg:flex items-center justify-center text-2xl animate-float-slow opacity-60`}
          style={{ animationDelay: `${item.delay}s` }}
        >
          {item.icon}
        </div>
      ))}

      <div className="container-custom section-padding pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for Freelance</span>
            </div>

            <h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 animate-fade-up opacity-0"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              Hi, I'm{' '}
              <span className="relative">
                <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                  Evrahim
                </span>
              </span>
            </h1>

            <div 
              className="h-16 md:h-20 flex items-center justify-center lg:justify-start animate-fade-up opacity-0"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                a{' '}
                <span className="text-primary relative">
                  {displayText}
                  <span className="animate-blink">|</span>
                </span>
              </h2>
            </div>

            <p 
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up opacity-0"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              I craft <span className="text-foreground font-medium">beautiful</span>, <span className="text-foreground font-medium">responsive</span>, and <span className="text-foreground font-medium">user-friendly</span> web experiences using modern technologies. Let's build something amazing together.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-up opacity-0"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <Button variant="hero" size="xl" asChild className="group">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild className="group">
                <a href="#contact" className="flex items-center gap-2">
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div 
              className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start animate-fade-up opacity-0"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '20+', label: 'Projects Completed' },
                { value: '15+', label: 'Happy Clients' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div 
              className="relative animate-fade-up opacity-0" 
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              {/* Animated ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
              
              {/* Decorative dots */}
              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-1/4 -right-4 w-3 h-3 bg-accent rounded-full animate-pulse animation-delay-500" />
              <div className="absolute bottom-1/4 -left-4 w-3 h-3 bg-primary/60 rounded-full animate-pulse animation-delay-1000" />

              {/* Main image container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-2xl scale-90 opacity-60" />
                
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-card shadow-2xl bg-card">
                  <img
                    src={profilePhoto}
                    alt="Evrahim Hasan Emran - Frontend Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 bg-card rounded-2xl shadow-card p-4 animate-float border border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">Available for work</span>
                  </div>
                </div>

                <div className="absolute -top-2 -left-2 md:top-8 md:-left-8 bg-card rounded-2xl shadow-card p-3 animate-float animation-delay-500 border border-border/50 hidden md:flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Specializing in</div>
                    <div className="text-sm font-semibold text-foreground">React.js</div>
                  </div>
                </div>

                <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-card rounded-2xl shadow-card p-3 animate-float animation-delay-1000 border border-border/50 hidden lg:flex items-center gap-2">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Building</div>
                    <div className="text-sm font-semibold text-foreground">Fast UIs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
