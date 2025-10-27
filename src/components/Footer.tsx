import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p className="flex items-center gap-2">
            Built with <Heart size={16} className="text-primary fill-primary" /> by Gayatri Kondabathini
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
