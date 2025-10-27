import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Newspaper } from "lucide-react";

const Blog = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-effect border-border hover:border-primary transition-all duration-300 overflow-hidden group animate-fade-in">
            <div className="relative">
              {/* Gradient overlayBuilding developer tools at CarGurus, contributing to impactful projects at Sandbox, and sharing insights through Tech Unfiltered. Passionate about full-stack development, AI/ML, and creating elegant solutions. */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8 md:p-12 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Newspaper className="text-primary" size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors font-playfair">
                      Tech Unfiltered
                    </h2>
                    <p className="text-muted-foreground">My Tech Blog</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  My corner of the internet where I break down what's happening in the tech world. 
                  I cover everything from AI trends and the latest startups to the future of tech 
                  recruiting and product strategy. This blog is about making complex topics approachable 
                  and sharing my learnings with a community.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Recent Topics:</h3>
                  <div className="flex flex-wrap gap-3">
                    {["AI Trends", "Startups", "Tech Recruiting", "Product Strategy", "Developer Tools"].map((topic) => (
                      <span
                        key={topic}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 text-sm"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="gap-2 bg-primary hover:bg-primary/90 group/btn"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/company/technology-unfiltered"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the Blog
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;
