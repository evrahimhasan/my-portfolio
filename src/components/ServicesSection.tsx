import { Code, Palette, Smartphone, Server } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building interactive and dynamic user interfaces using React.js and JavaScript ES6+ with modern best practices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive designs focused on user experience with Tailwind CSS and responsive layouts.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Developing mobile-first, responsive websites that look and work great on all devices and screen sizes.',
  },
  {
    icon: Server,
    title: 'API Integration',
    description: 'Seamlessly integrating REST APIs and building full-stack applications with Node.js and Express.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-card">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">SERVICES</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a range of web development services to help bring your ideas to life with clean, modern, and functional solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-xl p-6 shadow-soft card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3 text-lg">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
