import { Button } from "@/components/ui/button";
import { CpuArchitecture } from "./ui/cpu-architecture";

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-[#151c28] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#FF7700]/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00CEDD]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Prêt à faire passer votre jeu au niveau supérieur?
        </h2>
        
        <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-300">
          Rejoignez des milliers de joueurs qui améliorent leurs performances grâce à l'analyse IA de leurs parties CS2.
        </p>

        <CpuArchitecture width="50%" height="50%" className="mx-auto" />
        
        <Button size="lg" className="bg-gradient-to-r from-[#FF7700] to-[#FFAA00] hover:from-[#FF7700] hover:to-[#FF9900] text-black font-bold px-8">
          Commencer gratuitement
        </Button>
        
        <p className="mt-4 text-sm text-gray-400">
          Pas besoin de carte de crédit. Essai gratuit de 7 jours.
        </p>
      </div>
    </section>
  );
} 