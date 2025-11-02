import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    text: "Une équipe exceptionnelle ! J'avais très peur du dentiste et ils ont su me rassurer. Les soins sont indolores et le résultat est magnifique.",
    rating: 5
  },
  {
    name: "Thomas B.",
    text: "Cabinet moderne avec des équipements de pointe. Le Dr. Martin a fait un travail remarquable sur mes implants. Je recommande vivement.",
    rating: 5
  },
  {
    name: "Sophie D.",
    text: "Parfait pour toute la famille. Mes enfants adorent y aller ! L'équipe est patiente et bienveillante. Nous sommes ravis.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Témoignages</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ce que disent nos patients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
