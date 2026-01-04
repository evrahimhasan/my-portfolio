import { GraduationCap, Calendar, MapPin, Mail, Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-card">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-heading font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground font-medium">Years of Experience</div>
                  <div className="text-sm text-muted-foreground mt-1">in Web Development</div>
                </div>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-hover p-6 max-w-xs hidden lg:block">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Currently Studying</h4>
                  <p className="text-sm text-muted-foreground">Diploma in Computer Science</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-primary font-medium mb-2">ABOUT ME</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Passionate Frontend Developer
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a Junior Frontend Web Developer with a passion for creating beautiful, functional, and user-friendly websites. Currently pursuing my Diploma in Engineering (Computer Science and Technology) at Mymensingh Polytechnic Institute.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I specialize in building responsive, performance-optimized UIs using React.js and modern web technologies. I'm actively improving my skills in frontend frameworks and exploring full-stack development with the MERN stack.
            </p>

            {/* Education */}
            <div className="bg-secondary/50 rounded-xl p-6 mb-8">
              <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Diploma in Engineering (CST)</p>
                    <p className="text-sm text-muted-foreground">Mymensingh Polytechnic Institute</p>
                    <p className="text-sm text-muted-foreground">Jan 2022 – Dec 2026</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground pl-7">
                  <p>• Member of Computer Science Club</p>
                  <p>• Class Representative</p>
                  <p>• Semester Project: "Ticket Booking System"</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">evrahimhasanemran@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground">+8801301701330</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:col-span-2">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Mymensingh, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
