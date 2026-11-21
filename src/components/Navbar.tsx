import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Pasticceria', href: '#pasticceria' },
    { name: 'Boulangerie', href: '#boulangerie' },
    { name: 'Focacceria', href: '#focacceria' },
    { name: 'Filosofia', href: '#filosofia' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cini-panna/90 backdrop-blur-md shadow-cini-soft py-3 border-b border-cini-oro/20'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Logo Brand in Header - Senza cerchio, pulito e coordinato */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none py-1">
            <div className="w-20 md:w-24 flex items-center transition-transform duration-300 group-hover:scale-105">
              <img
                src="/brand/loghi/bordeaux logo cini.svg"
                alt="CINÌ"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="hidden sm:flex flex-col border-l border-cini-bordeaux/20 pl-3">
              <span className="text-[9px] tracking-[0.25em] uppercase text-cini-marrone/70 font-bold">
                Artisan Lab
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-bold text-cini-marrone hover:text-cini-bordeaux transition-all relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cini-oro transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button & Contacts CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cini-bordeaux bg-cini-bordeaux text-cini-panna text-xs uppercase tracking-widest font-bold hover:bg-transparent hover:text-cini-bordeaux transition-all duration-300 shadow-sm group"
            >
              <span>Vieni a Trovarci</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cini-oro group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-cini-bordeaux hover:bg-cini-bordeaux/5 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cini-bordeaux text-cini-panna pt-24 px-8 pb-10 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex flex-col gap-2 pb-6 border-b border-cini-rosa/20">
                <div className="w-28">
                  <img
                    src="/brand/loghi/cini logo oro.svg"
                    alt="CINÌ"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-cini-rosa font-bold">
                  Pasticceria • Boulangerie • Focacceria
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-2xl tracking-wider text-cini-panna hover:text-cini-oro transition-colors py-2 flex items-center justify-between border-b border-white/5"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 text-cini-oro" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cini-rosa/20 space-y-4">
              <div className="flex items-center gap-3 text-sm text-cini-rosa">
                <Clock className="w-4 h-4 text-cini-oro shrink-0" />
                <span>Mar - Dom: 07:00 — 20:30</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-cini-rosa">
                <Phone className="w-4 h-4 text-cini-oro shrink-0" />
                <span>+39 02 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-cini-rosa">
                <MapPin className="w-4 h-4 text-cini-oro shrink-0" />
                <span>Laboratorio & Store Artigianale</span>
              </div>
              <a
                href="#contatti"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center block py-3.5 rounded-full bg-cini-oro text-cini-marrone font-bold text-xs uppercase tracking-widest shadow-cini-gold mt-6"
              >
                Scopri Orari e Indicazioni
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
