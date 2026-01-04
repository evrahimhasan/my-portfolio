import { Heart, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="font-heading text-xl font-bold">
            Evrahim<span className="text-primary">.</span>
          </a>

          {/* Copyright */}
          <p className="text-center text-sm opacity-80 flex items-center gap-1">
            © {currentYear} Evrahim Hasan Emran. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> 
            in Bangladesh
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/evrahim-hasan-emran/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/evrahimhasan"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
