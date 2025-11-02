import { Card } from "@/components/ui/card";
import { Sparkles, Shield, Smile, Zap, Heart, Users } from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Soins dentaires",
    description: "Traitement des caries et soins conservateurs pour préserver vos dents naturelles"
  },
  {
    icon: Shield,
    title: "Implants dentaires",
    description: "Consultation et pose d'implants avec les technologies les plus avancées"
  },
  {
    icon: Sparkles,
    title: "Esthétique dentaire",
    description: "Blanchiment et soins esthétiques pour un sourire éclatant"
  },
  {
    icon: Heart,
    title: "Check-ups préventifs",
    description: "Examens réguliers et soins préventifs pour enfants et adultes"
  },
  {
    icon: Shield,
    title: "Dentisterie préventive",
    description: "Détartrage, fluorisation et conseils d'hygiène bucco-dentaire"
  },
  {
    icon: Users,
    title: "Urgences dentaires",
    description: "Intervention rapide pour vos douleurs aiguës et urgences"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nos services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de soins dentaires pour toute la famille
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <service.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
