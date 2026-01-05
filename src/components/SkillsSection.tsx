import { useEffect, useState, useRef } from 'react';
import { Sparkles, Zap, Code2, Database, Palette, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
  { name: 'React.js', level: 85, color: 'from-cyan-400 to-blue-500' },
  { name: 'HTML5 & CSS3', level: 95, color: 'from-orange-400 to-red-500' },
  { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-cyan-500' },
  { name: 'Node.js', level: 70, color: 'from-green-400 to-emerald-500' },
  { name: 'MongoDB', level: 65, color: 'from-green-500 to-green-600' },
];

const technologies = [
  { name: 'JavaScript ES6+', icon: '⚡' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'React Router', icon: '🔀' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Bootstrap', icon: '🅱️' },
  { name: 'Node.js', icon: '💚' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'REST APIs', icon: '🔌' },
  { name: 'Git & GitHub', icon: '📦' },
  { name: 'Responsive Design', icon: '📱' },
];

const expertiseAreas = [
  { icon: Code2, text: 'Building responsive, performance-optimized UIs' },
  { icon: Globe, text: 'Integrating REST APIs with frontend applications' },
  { icon: Database, text: 'MERN stack development' },
  { icon: Palette, text: 'Creating clean, scalable web applications' },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="skills" className="bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute top-40 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Floating icons */}
      <div className="absolute top-20 right-20 text-4xl animate-float opacity-20">⚛️</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}>💻</div>
      <div className="absolute top-1/2 right-10 text-2xl animate-float opacity-20" style={{ animationDelay: '1s' }}>🚀</div>

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
            SKILLSET
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Creative and <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Professional Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building responsive, performance-optimized UIs with modern web technologies.
            Experienced in frontend frameworks and MERN stack development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">Core Skills</h3>
            </motion.div>
            
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                variants={itemVariants}
                className="group p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex justify-between mb-3">
                  <span className="font-medium text-foreground flex items-center gap-2">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-secondary/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Technology Tags */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground">Technologies I Use</h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-3 bg-card border border-border/50 text-foreground rounded-xl font-medium text-sm transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 cursor-default flex items-center gap-2"
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>

            {/* Areas of Expertise */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 shadow-card"
            >
              <h4 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="text-xl">🎯</span>
                Areas of Expertise
              </h4>
              <ul className="space-y-4">
                {expertiseAreas.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-muted-foreground pt-2">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
