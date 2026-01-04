import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: '✨ Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'evrahimhasanemran@gmail.com',
      href: 'mailto:evrahimhasanemran@gmail.com',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+8801301701330',
      href: 'tel:+8801301701330',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mymensingh, Bangladesh',
      href: '#',
      gradient: 'from-blue-500 to-purple-500',
    },
  ];

  const socials = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/evrahim-hasan-emran/',
      color: 'hover:bg-blue-600 hover:border-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/evrahimhasan',
      color: 'hover:bg-gray-800 hover:border-gray-800',
    },
  ];

  return (
    <section id="contact" className="bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute top-40 left-20 text-4xl animate-float opacity-20">💬</div>
      <div className="absolute bottom-40 right-20 text-3xl animate-float opacity-20" style={{ animationDelay: '1s' }}>📧</div>
      
      <div className="container-custom section-padding relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            CONTACT
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Got a Project? <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Let's Talk!</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background rounded-3xl shadow-card p-8 border border-border/30 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />
            
            <div className="flex items-center gap-3 mb-8 relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Send className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Send Me a Message
                </h3>
                <p className="text-sm text-muted-foreground">I'll respond within 24 hours</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary h-12 rounded-xl"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary h-12 rounded-xl"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none rounded-xl"
                />
              </div>
              <Button type="submit" variant="hero" size="xl" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 mb-10">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-5 bg-background rounded-2xl shadow-soft border border-border/30 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-background rounded-2xl p-6 border border-border/30">
              <p className="text-foreground font-medium mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Connect with me
              </p>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-secondary rounded-xl flex items-center justify-center text-foreground border border-border/50 ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <p className="text-foreground font-medium">Currently available for freelance work</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
