import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowDown, Award, Compass, Utensils } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-cini-panna">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cini-rosa/30 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-cini-petrolio/15 blur-2xl" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-cini-oro/20 blur-3xl" />
      </div>

      {/* Geometric borders/frames editoriali */}
      <div className="absolute inset-x-8 md:inset-x-14 top-24 bottom-12 border border-cini-oro/20 pointer-events-none hidden md:block" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Editorial Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cini-bordeaux/30 bg-white/70 backdrop-blur-sm mb-10 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-cini-oro" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-cini-bordeaux">
            Pasticceria • Boulangerie • Focacceria
          </span>
        </motion.div>

        {/* Central Brand SVG Logo: Logo originale con cerchio in grande scala d'impatto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-10 flex items-center justify-center group"
        >
          <div className="w-64 sm:w-80 md:w-96 lg:w-[440px] flex items-center justify-center filter drop-shadow-sm transition-transform duration-700 group-hover:scale-105">
            <img
              src="/brand/loghi/file con cerchio svg.svg"
              alt="CINÌ Marchio Ufficiale"
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cini-bordeaux tracking-tight max-w-4xl leading-[1.15]"
        >
          L'eleganza del gesto, la verità del profumo.
        </motion.h1>

        {/* Description / Statement */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-cini-marrone/80 max-w-2xl font-light leading-relaxed"
        >
          Un laboratorio artigianale dedicato alla pasticceria contemporanea, ai profumi della boulangerie sfogliata e alla fragranza della focacceria.
        </motion.p>

        {/* CTAs & Navigation Pills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#pasticceria"
            className="px-8 py-4 rounded-full bg-cini-bordeaux text-cini-panna font-bold text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-cini-bordeaux-dark hover:scale-105 transition-all duration-300"
          >
            Le Nostre Creazioni
          </a>
          <a
            href="#filosofia"
            className="px-8 py-4 rounded-full border border-cini-oro bg-transparent text-cini-marrone font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/80 transition-all duration-300"
          >
            La Nostra Filosofia
          </a>
        </motion.div>

        {/* Three Pillars Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl text-left"
        >
          <a
            href="#pasticceria"
            className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-cini-oro/30 flex items-start gap-3.5 shadow-sm hover:border-cini-bordeaux hover:-translate-y-1 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-cini-bordeaux/10 flex items-center justify-center text-cini-bordeaux shrink-0 group-hover:bg-cini-bordeaux group-hover:text-cini-panna transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-cini-bordeaux text-base group-hover:text-cini-oro transition-colors">Pasticceria</h4>
              <p className="text-xs text-cini-marrone/75 mt-1 leading-snug">
                Mignon assortiti, monoporzioni e torte da ricorrenza.
              </p>
            </div>
          </a>

          <a
            href="#boulangerie"
            className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-cini-oro/30 flex items-start gap-3.5 shadow-sm hover:border-cini-petrolio hover:-translate-y-1 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-cini-petrolio/15 flex items-center justify-center text-cini-petrolio-dark shrink-0 group-hover:bg-cini-petrolio group-hover:text-white transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-cini-petrolio-dark text-base group-hover:text-cini-oro transition-colors">Boulangerie</h4>
              <p className="text-xs text-cini-marrone/75 mt-1 leading-snug">
                Croissant sfogliati, viennoiserie e pani da forno.
              </p>
            </div>
          </a>

          <a
            href="#focacceria"
            className="p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-cini-oro/30 flex items-start gap-3.5 shadow-sm hover:border-cini-bordeaux hover:-translate-y-1 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-cini-oro/20 flex items-center justify-center text-cini-marrone shrink-0 group-hover:bg-cini-bordeaux group-hover:text-cini-panna transition-colors">
              <Utensils className="w-5 h-5 text-cini-oro" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-cini-marrone text-base group-hover:text-cini-oro transition-colors">Focacceria</h4>
              <p className="text-xs text-cini-marrone/75 mt-1 leading-snug">
                Focacce all'olio extravergine e teglie croccanti.
              </p>
            </div>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-14"
        >
          <a
            href="#pasticceria"
            className="inline-flex flex-col items-center gap-1.5 text-cini-marrone/50 hover:text-cini-bordeaux transition-colors"
          >
            <span className="text-[10px] uppercase tracking-widest font-semibold">Scopri di più</span>
            <ArrowDown className="w-4 h-4 text-cini-oro" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
