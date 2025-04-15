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
  UserX 
} from "lucide-react";
import { AnimatedList } from "@/components/ui/animated-list";
import GameEvent from "@/components/game-event";

export default function AnalysePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file && file.name.endsWith(".demo")) {
      setSelectedFile(file);
    } else if (file) {
      alert("Veuillez sélectionner un fichier .demo");
      setSelectedFile(null);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Will handle the upload logic in the future
      console.log("File selected:", selectedFile.name);
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
    if (file && file.name.endsWith(".demo")) {
      setSelectedFile(file);
    } else if (file) {
      alert("Veuillez sélectionner un fichier .demo");
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
              <div className="flex flex-col items-center justify-center">
                <UploadCloud className={`w-12 h-12 ${isDragging ? 'text-[#00CEDD]' : 'text-gray-400'} mb-4 transition-colors`} />
                <p className="mb-4 text-gray-300">
                  {selectedFile 
                    ? `Fichier sélectionné: ${selectedFile.name}` 
                    : "Glissez un fichier .demo ici ou cliquez pour parcourir"}
                </p>
                <input
                  type="file"
                  accept=".demo"
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
            </div>
          </Card>

          <Card className="p-6 lg:col-span-3 bg-[#2a3140] border-[#3a4150] shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">Événements de jeu</h2>
            {selectedFile ? (
              <div className="h-64 overflow-y-auto">
                <p className="text-gray-400">
                  Les événements de jeu s'afficheront ici une fois le fichier analysé.
                </p>
              </div>
            ) : (
              <div className="overflow-y-auto pr-2 h-[440px]">
                <AnimatedList className="w-full">
                    {notifications.map((item, idx) => (
                      <GameEvent {...item} key={idx} />
                    ))}
                </AnimatedList>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
} 
