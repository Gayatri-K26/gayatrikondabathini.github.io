import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CUDA Cortex Agent",
      description: "An AI agent that answers questions about the NVIDIA CUDA-Samples repository using RAG.",
      tech: ["Python", "Pytorch", "Hugging Face", "LangChain"],
      github: "https://github.com/Gayatri-K26",
      link: "https://github.com/Gayatri-K26",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "MFA Form Automator",
      description: "Form-signing platform for the Museum of Fine Arts, Boston.",
      tech: ["NextJS", "NestJS", "Prisma", "PostgreSQL"],
      github: "https://github.com/Gayatri-K26",
      link: "https://github.com/Gayatri-K26",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Stock Manager",
      description: "A comprehensive stock portfolio management system built with Java, implementing MVC architecture and Command Pattern for various trading operations.",
      tech: ["Java", "MVC", "Command Pattern"],
      github: "https://github.com/Gayatri-K26",
      link: "https://github.com/Gayatri-K26",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Classify_Digits",
      description: "A simple neural network built with PyTorch to classify handwritten digits from the MNIST dataset.",
      tech: ["Python", "PyTorch", "Torchvision", "NumPy", "Matplotlib"],
      github: "https://github.com/Gayatri-K26",
      link: "https://github.com/Gayatri-K26",
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my technical skills and problem-solving approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group relative overflow-hidden glass-effect border-border hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 hover:border-primary hover:text-primary"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 hover:border-primary hover:text-primary glass-effect"
              asChild
            >
              <a href="https://github.com/Gayatri-K26" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
