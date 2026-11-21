import React from 'react';
import { ArrowUp, Heart, Share2, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cini-marrone text-cini-panna pt-20 pb-12 border-t-2 border-cini-oro relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-cini-bordeaux/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Footer with Logo and Statement */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Presentation con Logo senza cerchio */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col gap-2">
              <div className="w-28 sm:w-32 flex items-center">
                <img
                  src="/brand/loghi/cini logo oro.svg"
                  alt="CINÌ"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-cini-rosa font-bold mt-1">
                Pasticceria • Boulangerie • Focacceria
              </p>
            </div>

            <p className="text-xs sm:text-sm text-cini-panna/75 font-light leading-relaxed max-w-sm">
              Laboratorio artigianale dedicato all'alta pasticceria, alla boulangerie da colazione e alla tradizione della focaccia da forno.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#filosofia"
                className="px-4 py-2 rounded-full bg-white/10 flex items-center gap-2 text-cini-oro hover:bg-cini-bordeaux hover:text-white transition-colors text-xs font-semibold"
                aria-label="Filosofia Laboratorio"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>La Nostra Filosofia</span>
              </a>
              <a
                href="#contatti"
                className="px-4 py-2 rounded-full bg-white/10 flex items-center gap-2 text-cini-oro hover:bg-cini-bordeaux hover:text-white transition-colors text-xs font-semibold"
                aria-label="Contatti"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Contatti & Orari</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-serif text-base font-bold text-cini-oro tracking-wide">
              Navigazione
            </h5>
            <ul className="space-y-2.5 text-xs text-cini-panna/80 uppercase tracking-widest font-medium">
              <li>
                <a href="#pasticceria" className="hover:text-cini-oro transition-colors">
                  Pasticceria
                </a>
              </li>
              <li>
                <a href="#boulangerie" className="hover:text-cini-oro transition-colors">
                  Boulangerie
                </a>
              </li>
              <li>
                <a href="#focacceria" className="hover:text-cini-oro transition-colors">
                  Focacceria
                </a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-cini-oro transition-colors">
                  Filosofia
                </a>
              </li>
              <li>
                <a href="#contatti" className="hover:text-cini-oro transition-colors">
                  Contatti & Orari
                </a>
              </li>
            </ul>
          </div>

          {/* Laboratorio & Note con placeholder trasparente */}
          <div className="lg:col-span-4 space-y-4">
            <h5 className="font-serif text-base font-bold text-cini-oro tracking-wide">
              Laboratorio & Informazioni
            </h5>
            <p className="text-xs text-cini-panna/70 font-light leading-relaxed">
              [Testo informativo o descrittivo sul laboratorio e sui servizi disponibili da inserire qui].
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-cini-rosa">
              <span className="font-semibold block text-white mb-1">Informazioni Allergeni</span>
              [Spazio riservato per le indicazioni su allergeni, intolleranze o certificazioni specifiche].
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cini-panna/60 font-light">
          <div>
            © {new Date().getFullYear()} CINÌ. Tutti i diritti riservati. [P.IVA / Dati Societari].
          </div>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1">
              Fatto con cura <Heart className="w-3.5 h-3.5 text-cini-rosa fill-cini-rosa inline" /> per l'artigianato
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-cini-oro hover:text-cini-marrone text-cini-panna transition-all shadow-sm focus:outline-none"
              aria-label="Torna in alto"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
