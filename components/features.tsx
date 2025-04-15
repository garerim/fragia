import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const featuresList = [
  {
    title: "Analyse de mouvements",
    description:
      "L'IA analyse vos déplacements et vous suggère des améliorations tactiques pour optimiser vos positions.",
    icon: "🎯",
  },
  {
    title: "Économie et loadouts",
    description:
      "Obtenez des recommandations personnalisées sur la gestion de votre économie et vos choix d'équipement.",
    icon: "💰",
  },
  {
    title: "Stats de précision",
    description:
      "Visualisez votre précision par arme et recevez des conseils pour améliorer votre aim à chaque partie.",
    icon: "📊",
  },
  {
    title: "Suivi de progression",
    description:
      "Suivez votre évolution au fil du temps et identifiez les domaines qui nécessitent votre attention.",
    icon: "📈",
  },
  {
    title: "Analyse des heatmaps",
    description:
      "Visualisez vos zones de force et de faiblesse sur chaque carte pour améliorer votre stratégie.",
    icon: "🗺️",
  },
  {
    title: "Intégration VOD",
    description:
      "Téléchargez vos VODs pour une analyse approfondie et des moments clés commentés par l'IA.",
    icon: "🎬",
  },
];

export function Features() {
  return (
    <section className="py-16 bg-[#151c28]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Fonctionnalités avancées
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-[#2a3140] bg-[#1a2130] hover:border-[#FF7700]/50 transition-colors"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{feature.icon}</span>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
