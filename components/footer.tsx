import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#151c28] py-12 border-t border-[#2a3140]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF7700] to-[#FFAA00]">
                FRAGIA
              </span>
            </Link>
            <p className="text-gray-400">
              Propulsez vos performances CS2 avec l'analyse IA intelligente.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-white">Produit</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00CEDD] title-hover"
                >
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00CEDD] title-hover"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00CEDD] title-hover"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-white">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00CEDD] title-hover"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00CEDD] title-hover"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00CEDD] title-hover"
                >
                  Communauté
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-white">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00CEDD] title-hover"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00CEDD] title-hover"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00CEDD] title-hover"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a3140] mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} FRAGIA. Tous droits réservés.
          </p>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-[#FF7700] title-hover"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-[#FF7700] title-hover"
            >
              <span className="sr-only">Discord</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 7.5V9h6V7.5A4.5 4.5 0 0 0 10.5 3h-.433A4.5 4.5 0 0 0 9 7.5Z"></path>
                <path d="M4.5 14.5c-1.5 0-3 .8-3 2.5s1.5 2.5 3 2.5c1.5 0 3-.8 3-2.5s-1.5-2.5-3-2.5Z"></path>
                <path d="M19.5 14.5c-1.5 0-3 .8-3 2.5s1.5 2.5 3 2.5c1.5 0 3-.8 3-2.5s-1.5-2.5-3-2.5Z"></path>
                <path d="M9 10.5c-1.5 0-3 .8-3 2.5s1.5 2.5 3 2.5c1.5 0 3-.8 3-2.5"></path>
                <path d="M9 15.5V11a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-[#FF7700] title-hover"
            >
              <span className="sr-only">YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
