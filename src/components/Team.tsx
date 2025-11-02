import { Card } from "@/components/ui/card";
import aurelieImage from "@/assets/aurelie-vang.png";
import aygulImage from "@/assets/aygul-baroche.png";
import aissataImage from "@/assets/aissata-konate.png";

const teamMembers = [
  {
    name: "Dr. Aurélie Vang",
    title: "Dentiste",
    languages: ["Français", "Néerlandais", "Anglais"],
    image: aurelieImage
  },
  {
    name: "Dr. Aygul Baroche",
    title: "Dentiste",
    languages: ["Français", "Turc", "Russe", "Anglais"],
    image: aygulImage
  },
  {
    name: "Dr. Aissata Konate",
    title: "Dentiste",
    languages: ["Français", "Malien", "Anglais"],
    image: aissataImage
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Notre équipe</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des professionnelles passionnées et qualifiées à votre service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden bg-card border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.title}
                </p>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">Langues parlées :</p>
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map((lang, langIndex) => (
                      <span
                        key={langIndex}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
