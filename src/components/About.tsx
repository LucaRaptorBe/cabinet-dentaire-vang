import { Card } from "@/components/ui/card";
import { Award, MapPin, Heart, Languages } from "lucide-react";
import smileImage from "@/assets/dental-office-reception.png";

const features = [
  {
    icon: Award,
    title: "Excellence",
    description: "Équipe de dentistes expérimentées"
  },
  {
    icon: Languages,
    title: "Équipe multilingue",
    description: "FR, EN, NL, TR, RU, Malien"
  },
  {
    icon: MapPin,
    title: "Localisation pratique",
    description: "2 min de Glacis, parking proche"
  },
  {
    icon: Heart,
    title: "Prix accessibles",
    description: "Soins de qualité à tarifs raisonnables"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Un cabinet à votre écoute
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Notre cabinet dentaire allie expertise médicale et approche humaine pour vous offrir des soins de qualité dans un environnement moderne et apaisant. Situé à Limpertsberg, à 2 minutes de Glacis, nous sommes facilement accessibles.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nous croyons que chaque patient mérite une attention personnalisée. Notre équipe multilingue s'engage à vous accompagner avec bienveillance à chaque étape de vos soins.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 bg-muted/50 border-border">
                  <feature.icon className="h-8 w-8 text-primary mb-2" />
                  <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={smileImage} 
                alt="Patient souriant" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-primary to-accent rounded-2xl -z-10 blur-3xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
