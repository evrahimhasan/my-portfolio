import { ExternalLink, Github, Code, Folder, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'PawMart',
    description: 'A modern pet adoption and pet supply platform where users can browse pets, purchase products, and manage listings. Features secure authentication, advanced filtering, dynamic routing, and order management with a clean, responsive UI.',
    role: 'Full-stack development; backend API design and integration with frontend.',
    technologies: ['React', 'React Router DOM', 'Tailwind CSS', 'DaisyUI', 'Axios', 'SweetAlert2', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth'],
    image: '/placeholder.svg',
    github: 'https://github.com/evrahimhasan/PawMart-Client-Assignment.git',
    live: 'https://hilarious-unicorn-e9a47f.netlify.app/',
    featured: true,
    emoji: '🐾',
    color: 'from-orange-500 to-pink-500',
  },
  {
    title: 'Blood Donation',
    description: 'A semester project featuring a complete ticket booking solution with seat selection, payment processing, and booking management.',
    role: 'Full-stack development; backend API design and integration with frontend.',
    technologies: ['React', 'React Router DOM', 'JavaScript', 'Tailwind CSS', 'DaisyUI', 'Axios', 'SweetAlert2', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth'],
    image: '/placeholder.svg',
    github: 'https://github.com/evrahimhasan/blood-dontaion-client.git',
    live: 'https://animated-gumption-14cb8d.netlify.app/',
    featured: true,
    emoji: '🎫',
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Green Nest',
    description: 'A responsive personal portfolio showcasing projects, skills, and professional experience with modern design and animations.',
    role: 'Design and Development',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    image: '/placeholder.svg',
    github: 'https://github.com/evrahimhasan',
    live: 'https://gentle-chaja-fbdfee.netlify.app/',
    featured: true,
    emoji: '💼',
    color: 'from-green-500 to-teal-500',
  },
];

const ProjectsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="projects" className="bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Folder className="w-4 h-4" />
            PORTFOLIO
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Some Of My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Recent Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are some of the projects I've worked on. Each project represents my commitment to clean code, beautiful design, and user-focused development.
          </p>
        </motion.div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="bg-card rounded-3xl shadow-card overflow-hidden mb-12 group hover:shadow-xl transition-all duration-500 border border-border/30"
          >
            <div className="grid lg:grid-cols-2">
              <div className={`aspect-video lg:aspect-auto bg-gradient-to-br ${project.color} flex items-center justify-center p-8 relative overflow-hidden`}>
                {/* Animated background */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-float" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                </div>

                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-5xl">{project.emoji}</span>
                  </div>
                  <h4 className="font-heading font-bold text-3xl text-white">{project.title}</h4>
                  <div className="flex items-center justify-center gap-4 mt-4 text-white/80">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">Featured</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span className="text-sm">MERN Stack</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-3">
                  <Star className="w-4 h-4 fill-primary" />
                  Featured Project
                </span>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <p className="text-sm text-muted-foreground mb-6">
                  <span className="font-medium text-foreground">Role:</span> {project.role}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium border border-border/50 hover:border-primary/50 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="hero" size="lg" asChild className="group/btn">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      View Project
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-card rounded-2xl shadow-soft overflow-hidden border border-border/30 hover:border-primary/30 transition-all duration-500 group hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-5 right-5 w-16 h-16 bg-white/20 rounded-full animate-float" />
                </div>
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">{project.emoji}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-lg text-xs border border-border/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
