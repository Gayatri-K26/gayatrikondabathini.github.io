import { Code2, Briefcase, GraduationCap, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Honors CS & Business at Northeastern University",
    },
    {
      icon: Briefcase,
      title: "Current Role",
      description: "Developer Tools Engineer at CarGurus",
    },
    {
      icon: Code2,
      title: "Interests",
      description: "Full-stack, AI/ML, Microservices",
    },
    {
      icon: Coffee,
      title: "Beyond Code",
      description: "Painting, content creation, coffee shops",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm a second-year Honors student passionate about building impactful software 
              and exploring the intersection of technology and business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="p-6 glass-effect border-border hover:border-primary transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="glass-effect rounded-2xl p-8 md:p-12 border border-border animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm currently building developer tools at <span className="text-foreground font-semibold">CarGurus</span>, 
                  where I contribute to creating solutions that improve the development experience for engineering teams.
                </p>
                <p>
                  At Northeastern's software consultancy, <span className="text-foreground font-semibold">Sandbox</span>, 
                  I work on impactful projects that solve real-world problems while collaborating with talented peers.
                </p>
                <p>
                  Through my blog, <span className="text-foreground font-semibold">Tech Unfiltered</span>, I share my 
                  perspectives on AI trends, startups, and the evolving tech landscape, making complex topics accessible 
                  to a broader audience.
                </p>
                <p>
                  My technical interests span <span className="text-primary">full-stack development</span>, 
                  <span className="text-primary"> object-oriented design</span>, 
                  <span className="text-primary"> AI/ML-powered solutions</span>, and 
                  <span className="text-primary"> microservices architecture</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
