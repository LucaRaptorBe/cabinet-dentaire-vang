import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import heroImage from "@/assets/dental-office-interior.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cabinet dentaire moderne" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Des soins dentaires de qualité à Limpertsberg
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Cabinet situé à 2 minutes de Glacis, Luxembourg. Notre équipe multilingue vous accueille pour des soins de qualité dans un environnement moderne et accessible. Soins pour toute la famille.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8"
              onClick={scrollToContact}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Prendre rendez-vous
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary text-primary hover:bg-primary/10"
              onClick={() => window.location.href = 'tel:+35226262046'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
