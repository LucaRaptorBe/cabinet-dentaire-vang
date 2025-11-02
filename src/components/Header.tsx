import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-2xl">🦷</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Cabinet Dentaire Vang</h1>
              <p className="text-xs text-muted-foreground">Limpertsberg, Luxembourg</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection("team")} className="text-foreground hover:text-primary transition-colors">
              Équipe
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
              Prendre RDV
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
