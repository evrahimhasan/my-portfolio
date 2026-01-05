import { Code, Palette, Smartphone, Server, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building interactive and dynamic user interfaces using React.js and JavaScript ES6+ with modern best practices.',
    gradient: 'from-blue-500 to-cyan-500',
    emoji: '💻',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive designs focused on user experience with Tailwind CSS and responsive layouts.',
    gradient: 'from-purple-500 to-pink-500',
    emoji: '🎨',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Developing mobile-first, responsive websites that look and work great on all devices and screen sizes.',
    gradient: 'from-orange-500 to-red-500',
    emoji: '📱',
  },
  {
    icon: Server,
    title: 'API Integration',
    description: 'Seamlessly integrating REST APIs and building full-stack applications with Node.js and Express.',
    gradient: 'from-green-500 to-emerald-500',
    emoji: '🔌',
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="services" className="bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            SERVICES
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What I <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I offer a range of web development services to help bring your ideas to life with clean, modern, and functional solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative bg-background rounded-2xl p-6 shadow-soft border border-border/30 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Floating emoji */}
              <div className="absolute -top-4 -right-4 text-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2">
                {service.emoji}
              </div>
              
              {/* Icon container */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-heading font-semibold text-foreground mb-3 text-xl">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              
              {/* Learn more link */}
              <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              
              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '10+', label: 'Projects Completed', emoji: '🚀' },
            { number: '3+', label: 'Years Experience', emoji: '⚡' },
            { number: '100%', label: 'Client Satisfaction', emoji: '😊' },
            { number: '24/7', label: 'Support Available', emoji: '💬' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-background/50 border border-border/30 group hover:border-primary/30 transition-all duration-300">
              <div className="text-2xl mb-2">{stat.emoji}</div>
              <div className="text-3xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
