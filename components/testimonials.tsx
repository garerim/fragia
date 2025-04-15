import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Après seulement deux semaines d'utilisation, mon aim s'est nettement amélioré. Les conseils personnalisés de l'IA sont incroyablement précis.",
    author: "Max_Frageur, Global Elite"
  },
  {
    quote: "Les analyses de mes parties m'ont aidé à comprendre mes erreurs récurrentes. Mon rank est passé de MG2 à LE en un mois seulement.",
    author: "HeadshotPro, Legendary Eagle"
  },
  {
    quote: "L'outil d'analyse des heatmaps m'a montré que je négligeais certaines zones cruciales. J'ai corrigé ce problème et maintenant je contrôle beaucoup mieux la map.",
    author: "NovaBurster, Master Guardian Elite"
  },
  {
    quote: "Je ne connaissais rien aux stratégies d'économie avant d'utiliser cette plateforme. Maintenant, je sais exactement quand investir et quand économiser.",
    author: "Eco_Warrior, Supreme Master"
  },
  {
    quote: "En tant que IGL, les insights stratégiques de l'IA m'ont permis d'améliorer considérablement les performances de mon équipe. Un outil incontournable!",
    author: "TacticMaster, FACEIT lvl 10"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-[#1a2130]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Ce que disent nos utilisateurs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full bg-[#151c28] border-[#2a3140]">
              <CardContent className="p-6 flex flex-col h-full">
                <blockquote className="text-lg italic mb-4 flex-grow text-gray-300">
                  "{testimonial.quote}"
                </blockquote>
                <footer className="font-medium text-[#00CEDD]">
                  {testimonial.author}
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}