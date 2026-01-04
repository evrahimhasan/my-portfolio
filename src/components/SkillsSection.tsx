import { useEffect, useState, useRef } from 'react';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'HTML5 & CSS3', level: 95 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Node.js', level: 70 },
  { name: 'MongoDB', level: 65 },
];

const technologies = [
  'JavaScript ES6+',
  'React.js',
  'React Router',
  'Tailwind CSS',
  'Bootstrap',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Firebase',
  'REST APIs',
  'Git & GitHub',
  'Responsive Design',
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

  return (
    <section id="skills" className="bg-background" ref={sectionRef}>
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">SKILLSET</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Creative and Professional Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building responsive, performance-optimized UIs with modern web technologies.
            Experienced in frontend frameworks and MERN stack development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill Bars */}
          <div className="space-y-6">
            <h3 className="font-heading font-semibold text-foreground mb-6">Core Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Technology Tags */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Technologies I Use</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground cursor-default ${
                    isVisible ? 'animate-scale-in opacity-0' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animationFillMode: 'forwards',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Areas of Expertise */}
            <div className="mt-10 p-6 bg-card rounded-xl shadow-card">
              <h4 className="font-semibold text-foreground mb-4">Areas of Expertise</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">Building responsive, performance-optimized UIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">Integrating REST APIs with frontend applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">MERN stack development (MongoDB, Express, React, Node)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">Creating clean, scalable web applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
