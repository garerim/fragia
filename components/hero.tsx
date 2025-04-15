import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "../public/style/components/hero.css";

export function Hero() {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden bg-[#1a2130] min-h-[90vh] flex items-center">
      {/* Image d'arrière-plan CS2 Dust */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dust.jpg"
          alt="CS2 Dust Map"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2130]/10 via-[#1a2130]/50 to-[#1a2130]/95"></div>

        {/* Effets lumineux */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#FF7700]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#00CEDD]/10 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>

        {/* Éléments de style CS2 */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF7700] to-transparent opacity-30"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00CEDD] to-transparent opacity-30"></div>
        <div className="absolute top-16 left-16 w-32 h-32 border-l-2 border-t-2 border-[#FF7700]/30"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 border-r-2 border-b-2 border-[#00CEDD]/30"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col items-center text-center px-4">
        {/* Badge CS2 */}
        <div className="mb-4 bg-[#FF7700]/10 backdrop-blur-sm px-4 py-1 rounded-full border border-[#FF7700]/20">
          <span className="text-[#FF7700] font-medium">
            Powered by CS2 Analytics
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF7700] to-[#FFAA00] title">
            FRAGIA
          </span>
          <span className="block md:inline md:ml-2 text-white">Analytics</span>
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl mb-6 text-gray-300">
          Analyse vos parties de CS2 avec l&apos;IA pour améliorer vos
          performances et atteindre votre plein potentiel.
        </p>

        {/* Stats mini avec style HUD CS2 */}
        <div className="flex justify-center gap-8 mb-10 p-3 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
          <div className="flex flex-col items-center">
            <span className="title text-2xl font-bold text-[#00CEDD]">
              +45%
            </span>
            <span className="text-sm text-gray-400">Précision</span>
          </div>
          <div className="flex flex-col items-center border-l border-r border-white/10 px-8">
            <span className="text-2xl font-bold text-[#00CEDD] title">
              -30%
            </span>
            <span className="text-sm text-gray-400">Erreurs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-[#00CEDD] title">+5</span>
            <span className="text-sm text-gray-400">Ranks</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/analyse">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FF7700] to-[#FFAA00] hover:from-[#FF7700] hover:to-[#FF9900] text-black font-bold button"
            >
              Analyser ma partie
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-[#00CEDD] text-[#00CEDD] hover:bg-[#00CEDD]/10"
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </div>
  );
}
