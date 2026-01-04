import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-hero-gradient relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom section-padding pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Hello There 👋
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              I'm Evrahim Hasan Emran
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              a <span className="text-primary">Web Developer</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              I am a Junior Frontend Web Developer passionate about building clean, responsive, and user-friendly web applications. I enjoy turning ideas into real-world products using modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              {/* Decorative circle */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-hover bg-card">
                  <img
                    src={profilePhoto}
                    alt="Evrahim Hasan Emran - Frontend Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-card rounded-2xl shadow-card p-4 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
