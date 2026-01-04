import { Heart, Github, Linkedin, ArrowUp, Code2, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-background/10">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2 font-heading text-2xl font-bold mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              Evrahim<span className="text-primary">.</span>
            </a>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Junior Frontend Developer passionate about creating beautiful, functional, and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-background/70 hover:text-primary transition-colors text-sm py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <a 
              href="mailto:evrahimhasanemran@gmail.com" 
              className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm mb-4"
            >
              <Mail className="w-4 h-4" />
              evrahimhasanemran@gmail.com
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/evrahim-hasan-emran/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/evrahimhasan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-center text-sm text-background/70 flex items-center gap-1.5">
            © {currentYear} Evrahim Hasan Emran. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> 
            in Bangladesh
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm group"
          >
            Back to top
            <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
