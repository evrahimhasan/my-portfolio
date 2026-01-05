import { GraduationCap, Calendar, MapPin, Mail, Phone, Award, Briefcase, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
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
    <section id="about" className="bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom section-padding relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main card with experience */}
            <div className="relative rounded-3xl overflow-hidden shadow-card group">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center relative">
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
                </div>
                
                <div className="text-center p-8 relative z-10">
                  <div className="relative inline-block">
                    <div className="text-7xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">3+</div>
                    <div className="absolute -top-2 -right-2 text-2xl animate-float">✨</div>
                  </div>
                  <div className="text-foreground font-semibold text-lg">Years of Experience</div>
                  <div className="text-muted-foreground mt-1">in Web Development</div>
                </div>
              </div>
            </div>

            {/* Floating achievement badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-4 -left-4 bg-background rounded-2xl shadow-hover p-4 animate-float hidden lg:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">10+</p>
                <p className="text-xs text-muted-foreground">Projects Done</p>
              </div>
            </motion.div>

            {/* Floating card - Currently studying */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-background rounded-2xl shadow-hover p-5 max-w-xs hidden lg:block animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Currently Studying</h4>
                  <p className="text-sm text-muted-foreground">Diploma in Computer Science</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              ABOUT ME
            </motion.div>
            <motion.h2 variants={itemVariants} className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Passionate <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Frontend Developer</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I am a Junior Frontend Web Developer with a passion for creating beautiful, functional, and user-friendly websites. Currently pursuing my Diploma in Engineering (Computer Science and Technology) at Mymensingh Polytechnic Institute.
            </motion.p>
            <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed mb-8">
              I specialize in building responsive, performance-optimized UIs using React.js and modern web technologies. I'm actively improving my skills in frontend frameworks and exploring full-stack development with the MERN stack.
            </motion.p>

            {/* Education */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-2xl p-6 mb-8 border border-border/50 backdrop-blur-sm">
              <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </div>
                Education
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Diploma in Engineering (CST)</p>
                    <p className="text-sm text-muted-foreground">Mymensingh Polytechnic Institute</p>
                    <p className="text-sm text-primary font-medium">Jan 2022 – Dec 2026</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Computer Science Club', 'Class Representative', 'Ticket Booking System'].map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-background/80 rounded-full text-xs font-medium text-foreground border border-border/50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Mail, label: 'Email', value: 'evrahimhasanemran@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+8801301701330' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/30 hover:border-primary/50 transition-colors group">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/30 hover:border-primary/50 transition-colors group sm:col-span-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Mymensingh, Bangladesh</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
