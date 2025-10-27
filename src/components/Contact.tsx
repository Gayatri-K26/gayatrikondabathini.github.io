import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "kondabathini.g@northeastern.edu",
      href: "mailto:kondabathini.g@northeastern.edu",
      color: "text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Gayatri-K26",
      href: "https://github.com/Gayatri-K26",
      color: "text-purple-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "gayatri-kondabathini",
      href: "https://linkedin.com/in/gayatri-kondabathini",
      color: "text-cyan-400",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about tech.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <Card
                key={link.label}
                className="p-6 glass-effect border-border hover:border-primary transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-y-4 block"
                >
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors`}>
                    <link.icon className={link.color} size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{link.label}</h3>
                    <p className="text-muted-foreground text-sm break-all">
                      {link.value}
                    </p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="glass-effect rounded-2xl p-8 border border-border">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're looking to discuss a project, explore collaboration opportunities, 
                or just connect over shared interests in tech, I'd love to hear from you.
              </p>
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 group"
                asChild
              >
                <a href="mailto:kondabathini.g@northeastern.edu">
                  <Mail size={18} />
                  Send a Message
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </Button>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="gap-2 hover:border-primary hover:text-primary"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FileText size={18} />
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
