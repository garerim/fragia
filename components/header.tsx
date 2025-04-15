"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1a2130]/95 backdrop-blur-md border-b border-[#2a3140]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF7700] to-[#FFAA00]">
              FRAGIA
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/analyse" className="text-gray-300 hover:text-white">
              Analyse
            </Link>
            <Link href="/evolution" className="text-gray-300 hover:text-white">
              Évolution
            </Link>
            <Link href="/tarifs" className="text-gray-300 hover:text-white">
              Tarifs
            </Link>
          </nav>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-[#00CEDD] text-[#00CEDD] hover:bg-[#00CEDD]/10">
              Connexion
            </Button>
            <Button className="bg-[#FF7700] hover:bg-[#FF9900] text-black font-bold">
              S'inscrire
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-[#2a3140]">
            <Link href="#" className="block py-2 text-gray-300 hover:text-white">
              Fonctionnalités
            </Link>
            <Link href="#" className="block py-2 text-gray-300 hover:text-white">
              Tarifs
            </Link>
            <Link href="#" className="block py-2 text-gray-300 hover:text-white">
              Ressources
            </Link>
            <Link href="#" className="block py-2 text-gray-300 hover:text-white">
              Blog
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full border-[#00CEDD] text-[#00CEDD] hover:bg-[#00CEDD]/10">
                Connexion
              </Button>
              <Button className="w-full bg-[#FF7700] hover:bg-[#FF9900] text-black font-bold">
                S'inscrire
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 