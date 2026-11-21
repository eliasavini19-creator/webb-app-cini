import React from 'react';
import { motion } from 'motion/react';
import { PHILOSOPHY_PILLARS } from '../data/content';
import { Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="filosofia" className="py-28 bg-cini-panna relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cini-oro/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-cini-rosa/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cini-oro/30 bg-white/70 backdrop-blur-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cini-oro" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-cini-bordeaux">
              I Nostri Valori
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cini-bordeaux tracking-tight leading-tight">
            Cura, attenzione e passione artigianale.
          </h2>

          <p className="mt-6 text-sm sm:text-base text-cini-marrone/80 leading-relaxed font-light">
            Ogni giorno uniamo metodo e dedizione per offrire prodotti da forno dolci e salati, rispettando i ritmi naturali dell'artigianato e la qualità degli ingredienti.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-white border border-cini-oro/30 shadow-sm hover:shadow-cini-soft hover:border-cini-bordeaux transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="font-serif text-4xl font-bold text-cini-oro/60 group-hover:text-cini-bordeaux transition-colors block mb-4">
                  {pillar.num}
                </span>
                <h3 className="font-serif text-xl font-bold text-cini-bordeaux mb-3 group-hover:text-cini-oro transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-cini-marrone/75 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-cini-panna flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-cini-marrone/40 font-semibold">
                  Laboratorio CINÌ
                </span>
                <ShieldCheck className="w-4 h-4 text-cini-oro" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Quote & Marchio con firma commerciale */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cini-bordeaux to-cini-bordeaux-dark text-cini-panna p-8 sm:p-14 lg:p-16 shadow-2xl">
          <div className="absolute -right-20 -bottom-20 opacity-15 pointer-events-none">
            <img
              src="/brand/loghi/cini logo oro.svg"
              alt="Marchio Cinì Oro"
              className="w-96 h-auto object-contain"
            />
          </div>

          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-2 mb-6 text-cini-oro">
              <HeartHandshake className="w-6 h-6" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold">Il Nostro Impegno</span>
            </div>
            
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl italic leading-snug font-normal text-cini-panna">
              “La qualità artigianale nasce dal rispetto per la materia e dall'armonia quotidiana tra gesto, forno e passione.”
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              {/* Marchio senza cerchio */}
              <div className="w-20 shrink-0 flex items-center justify-center">
                <img
                  src="/brand/loghi/cini logo oro.svg"
                  alt="CINÌ"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="border-l border-white/20 pl-4">
                <div className="text-xs text-cini-rosa tracking-widest uppercase font-bold">Laboratorio Artigianale</div>
                <div className="text-[11px] text-cini-panna/70 tracking-wider uppercase">Pasticceria • Boulangerie • Focacceria</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
