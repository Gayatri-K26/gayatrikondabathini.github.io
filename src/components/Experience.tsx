import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "CarGurus",
      role: "Backend Software Engineer Co-op",
      period: "Jan 2025 - Jun 2025",
      tech: ["Java", "CI/CD", "Microservices", "Spring Boot"],
    },
    {
      company: "Sandbox at Northeastern",
      role: "Full-stack Developer",
      period: "Aug 2024 - Present",
      description: "Contributing to impactful client projects while collaborating with talented peers in Northeastern's software consultancy club.",
      tech: ["Full-Stack", "Agile", "Team Collaboration"],
    },
    {
      company: "Northeastern",
      role: "Object Oriented Programming Teaching Assistant",
      period: "Aug 2024 - Dec 2024",
      tech: ["Java", "Object Oriented Programming", "JUnit"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building impactful solutions and contributing to innovative projects.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={exp.company}
                className="group glass-effect border-border hover:border-primary transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Briefcase className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={18} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed pl-0 md:pl-15">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pl-0 md:pl-15">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
