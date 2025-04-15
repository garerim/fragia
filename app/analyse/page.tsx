"use client";

import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  UploadCloud,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  Crosshair,
  Move,
  Shield,
  UserX,
  Loader2
} from "lucide-react";
import { AnimatedList } from "@/components/ui/animated-list";
import GameEvent, { Item } from "@/components/game-event";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { div } from "framer-motion/client";

export default function AnalysePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showAnalyse, setShowAnalyse] = useState(false);
  const [eventSelected, setEventSelected] = useState<Item | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file && file.name.endsWith(".dem")) {
      setSelectedFile(file);
    } else if (file) {
      alert("Veuillez sélectionner un fichier .dem");
      setSelectedFile(null);
    }
  };

  const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (selectedFile) {
      // Démarrer le traitement
      setIsProcessing(true);
      setProgress(0);

      try {
        // Créer un FormData pour envoyer le fichier
        const formData = new FormData();
        formData.append('file', selectedFile);

        // Simuler l'avancement pendant l'upload
        const progressInterval = setInterval(() => {
          setProgress(prev => {
            const increment = Math.random() * 1.5 + 0.5; // Entre 0.5 et 2 par étape
            return Math.min(prev + increment, 95); // On s'arrête à 95% pour la simulation
          });
        }, 500);

        // Appeler notre API d'upload
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        // Arrêter la simulation de progression
        clearInterval(progressInterval);

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Erreur lors de l\'upload');
        }

        // Upload terminé avec succès
        setProgress(100);

        // Afficher la réussite
        const data = await response.json();
        console.log('Fichier uploadé avec succès:', data);
        setShowAnalyse(true);


        // Fermer la fenêtre de progression après un court délai
        setTimeout(() => {
          setIsProcessing(false);
          // Ici, vous pourriez rediriger vers une page de résultats d'analyse
          // ou mettre à jour l'UI pour afficher les résultats
        }, 1000);
      } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de l\'upload du fichier');
        setIsProcessing(false);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0] || null;
    if (file && file.name.endsWith(".dem")) {
      setSelectedFile(file);
    } else if (file) {
      alert("Veuillez sélectionner un fichier .dem");
    }
  };

  let notifications = [
    {
      name: "Bonne Action",
      description: "Positionnement parfait lors du rush",
      time: "Round 5",
      icon: ThumbsUp,
      color: "#00C9A7",
    },
    {
      name: "Mauvaise Décision",
      description: "Peek inutile en désavantage numérique",
      time: "Round 8",
      icon: ThumbsDown,
      color: "#FFB800",
    },
    {
      name: "Grosse Erreur",
      description: "Rotation trop lente sur le site B",
      time: "Round 12",
      icon: AlertTriangle,
      color: "#FF3D71",
    },
    {
      name: "Bon Tir",
      description: "Headshot sur adversaire en mouvement",
      time: "Round 15",
      icon: Crosshair,
      color: "#1E86FF",
    },
    {
      name: "Problème de Mouvement",
      description: "Counter-strafing inefficace en duel",
      time: "Round 17",
      icon: Move,
      color: "#9747FF",
    },
    {
      name: "Bonne Défense",
      description: "Hold efficace du site A en infériorité",
      time: "Round 19",
      icon: Shield,
      color: "#47A3FF",
    },
    {
      name: "Élimination précoce",
      description: "Mort en entrée sans trade",
      time: "Round 22",
      icon: UserX,
      color: "#FF5274",
    },
  ];

  notifications = Array.from({ length: 2 }, () => notifications).flat();

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <main className="container mx-auto p-4 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF7700] to-[#FFAA00]">Analyse de partie</h1>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          <Card className="p-6 lg:col-span-7 bg-[#2a3140] border-[#3a4150] shadow-lg flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-white">Importer un fichier .demo</h2>
            <div
              className={`border-2 flex-1 border-dashed ${isDragging ? 'border-[#00CEDD] bg-[#00CEDD]/5' : 'border-[#3a4150]'} rounded-lg p-8 text-center transition-colors`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              {eventSelected ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="flex items-center mb-4">
                    <eventSelected.icon className="w-12 h-12 text-white mr-4" style={{ backgroundColor: eventSelected.color }} />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{eventSelected.name}</h3>
                      <p className="text-gray-300">{eventSelected.time}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{eventSelected.description}</p>
                  <Button
                    onClick={() => setEventSelected(null)}
                    className="mt-4 bg-[#FF7700] hover:bg-[#FF9900] text-black font-bold"
                  >
                    Retour
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <UploadCloud className={`w-12 h-12 ${isDragging ? 'text-[#00CEDD]' : 'text-gray-400'} mb-4 transition-colors`} />
                  <p className="mb-4 text-gray-300">
                    {selectedFile
                      ? `Fichier sélectionné: ${selectedFile.name}`
                      : "Glissez un fichier .dem ici ou cliquez pour parcourir"}
                  </p>
                  <input
                    type="file"
                    accept=".dem"
                    onChange={handleFileChange}
                    className="hidden"
                    id="demo-file"
                    ref={fileInputRef}
                  />
                  <label htmlFor="demo-file" className="cursor-pointer">
                    <Button
                      type="button"
                      className="border-[#00CEDD] text-[#00CEDD] hover:bg-[#00CEDD]/10"
                      variant="outline"
                    >
                      Parcourir les fichiers
                    </Button>
                  </label>
                  {selectedFile && (
                    <Button
                      onClick={handleUpload}
                      className="mt-4 bg-[#FF7700] hover:bg-[#FF9900] text-black font-bold"
                    >
                      Analyser le fichier
                    </Button>
                  )}
                </div>
              )}
            </div>
          </Card>

          <Card className="p-6 lg:col-span-3 bg-[#2a3140] border-[#3a4150] shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">Événements de jeu</h2>
            {selectedFile ? (
              <div className="h-64 overflow-y-auto">
                {showAnalyse ? (
                  <div className="overflow-y-auto pr-2 h-[440px]">
                    <AnimatedList className="w-full">
                      {notifications.map((item, idx) => (
                        <GameEvent onClickEvent={() => setEventSelected(item)} {...item} key={idx} />
                      ))}
                    </AnimatedList>
                  </div>
                ) : (
                  <p className="text-gray-400">
                    Les événements de jeu s'afficheront ici une fois le fichier analysé.
                  </p>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-gray-400">
                  Veuillez sélectionner un fichier .dem pour afficher les événements de jeu.
                </p>
              </div>
            )}
          </Card>
        </div>
      </main >

      {/* Processing Dialog */}
      <Dialog open={isProcessing} onOpenChange={(open) => setIsProcessing(open)
      }>
        <DialogContent className="sm:max-w-md bg-[#2a3140] border-[#3a4150] [&>button]:hidden">
          <DialogHeader>
            <DialogTitle className="text-white">Analyse en cours</DialogTitle>
            <DialogDescription className="text-gray-300">
              Analyse de {selectedFile?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center py-6 space-y-6">
            <div className="flex justify-center">
              <Loader2 className="h-10 w-10 text-[#FF7700] animate-spin" />
            </div>
            <div className="w-full space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-center text-sm text-gray-300">{Math.round(progress)}%</p>
            </div>
            <p className="text-center text-sm text-gray-300">
              Veuillez patienter pendant l'analyse de votre démo...
            </p>
          </div>
        </DialogContent>
      </Dialog >
    </div >
  );
} 
