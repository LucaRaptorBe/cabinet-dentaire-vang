import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contactez-nous</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prenez rendez-vous ou posez-nous vos questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="p-8 bg-card border-border mb-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Votre nom" 
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="votre@email.com" 
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="06 12 34 56 78" 
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Décrivez votre demande..." 
                    rows={4}
                    className="bg-background"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Envoyer la demande
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    19 Avenue de la Faïencerie<br />
                    L-1510 Limpertsberg, Luxembourg
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">+352 26 26 20 46</p>
                  <p className="text-sm text-red-600 dark:text-red-400 mt-1">Urgence: +352 621 961 991</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@cabinetdentairevang.lu</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Lundi - Vendredi: 10h00 - 18h30</p>
                    <p>Samedi: 10h00 - 14h00</p>
                    <p>Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
