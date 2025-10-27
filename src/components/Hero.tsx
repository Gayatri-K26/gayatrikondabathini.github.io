import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshot from "@/assets/headshot.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
              <img 
                src={headshot} 
                alt="Gayatri Kondabathini" 
                className="relative w-full h-full rounded-full object-cover border-2 border-primary/30 shadow-lg"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground animate-fade-in font-playfair italic" style={{ animationDelay: "0.2s" }}>
              Hi, I'm
            </p>
            <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-fade-in font-playfair" style={{ animationDelay: "0.4s" }}>
              Gayatri Kondabathini
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
              Computer Science & Business Student
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.8s" }}>
          I'm studying computer science and business administration at Northeastern's Honors program. 
          My interests span artificial intelligence, machine learning, and backend engineering, and I’m eager to keep building expertise in these areas.
          I approach every team with a dedicated, kind, and open-minded attitude, always making sure to enjoy the process along the way!
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in" style={{ animationDelay: "1s" }}>
            <Button size="lg" className="gap-2 group bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 hover:border-primary hover:text-primary">
              <a href="#projects" className="flex items-center gap-2">
                View Work
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <a
              href="https://github.com/Gayatri-K26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/gayatri-kondabathini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://substack.com/@gayatrikondabathini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="Substack Blog"
            >
              <FileText size={24} />
            </a>
            <a
              href="mailto:kondabathini.g@northeastern.edu"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="#experience"
            className="inline-block animate-bounce cursor-pointer mt-8"
          >
            <ArrowDown size={32} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
