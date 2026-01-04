import { ExternalLink, Github, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'PawMart',
    description: 'A modern pet adoption and pet supply platform where users can browse pets, purchase products, and manage listings. Features secure authentication, advanced filtering, dynamic routing, and order management with a clean, responsive UI.',
    role: 'Full-stack development; backend API design and integration with frontend.',
    technologies: ['React', 'React Router DOM', 'Tailwind CSS', 'DaisyUI', 'Axios', 'SweetAlert2', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth'],
    image: '/placeholder.svg',
    github: 'https://github.com/evrahimhasan',
    live: '#',
    featured: true,
  },
  {
    title: 'Ticket Booking System',
    description: 'A semester project featuring a complete ticket booking solution with seat selection, payment processing, and booking management.',
    role: 'Frontend development and UI design',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    image: '/placeholder.svg',
    github: 'https://github.com/evrahimhasan',
    live: '#',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio showcasing projects, skills, and professional experience with modern design and animations.',
    role: 'Design and Development',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/placeholder.svg',
    github: 'https://github.com/evrahimhasan',
    live: '#',
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-background">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">PORTFOLIO</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Some Of My Recent Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents my commitment to clean code, beautiful design, and user-focused development.
          </p>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project) => (
          <div key={project.title} className="bg-card rounded-2xl shadow-card overflow-hidden mb-12 card-hover">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🐾</span>
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-foreground">{project.title}</h4>
                  <p className="text-muted-foreground mt-2">Featured Project</p>
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <span className="text-primary text-sm font-medium mb-3 block">Featured Project</span>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <p className="text-sm text-muted-foreground mb-6">
                  <span className="font-medium text-foreground">Role:</span> {project.role}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="default" size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <div key={project.title} className="bg-card rounded-xl shadow-soft overflow-hidden card-hover group">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
