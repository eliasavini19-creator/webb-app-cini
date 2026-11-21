import React from 'react';
import { motion } from 'motion/react';
import { FOCACCERIA_PRODUCTS } from '../data/content';
import { Droplet, UtensilsCrossed } from 'lucide-react';

export const FocacceriaSection: React.FC = () => {
  return (
    <section id="focacceria" className="py-28 bg-cini-bordeaux text-cini-panna relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cini-bordeaux-dark rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cini-rosa/10 rounded-full blur-2xl pointer-events-none" />

      {/* Firma commerciale senza cerchio rosa in filigrana */}
      <div className="absolute right-8 top-12 opacity-10 pointer-events-none">
        <img
          src="/brand/loghi/rosa cini logo.svg"
          alt="CINÌ Firma Focacceria"
          className="w-80 h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/20 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-cini-rosa" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-cini-rosa">
                Capitolo 03
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cini-panna tracking-tight">
              Focacceria & Pizze in Pala
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm md:text-base text-cini-panna/80 leading-relaxed font-light">
              La tradizione salata da forno: teglie dorate all'olio extravergine d'oliva, 
              sfoglie calde e pale croccanti farcite con ingredienti freschi.
            </p>
          </div>
        </div>

        {/* Feature Banner: Stesura a mano & Fragranza */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-cini-bordeaux-dark/70 border border-cini-rosa/20 shadow-2xl"
        >
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cini-rosa/20 text-cini-rosa text-[10px] font-bold uppercase tracking-widest mb-6">
                <Droplet className="w-3.5 h-3.5 text-cini-oro" />
                La Fragranza Salata
              </div>

              {/* Firma commerciale senza cerchio */}
              <div className="w-24 h-auto mb-3">
                <img
                  src="/brand/loghi/cini logo oro.svg"
                  alt="CINÌ Firma"
                  className="w-full h-auto object-contain"
                />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cini-panna mb-4">
                La Tradizione della Focaccia all'Olio EVO
              </h3>
              <p className="text-cini-panna/80 text-sm sm:text-base leading-relaxed mb-6 font-light">
                Le nostre focacce vengono stese a mano per preservare la struttura dell'impasto, arricchite con olio extravergine d'oliva e cotte fino a ottenere la caratteristica doratura con superficie croccante e interno soffice.
              </p>
              
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-xs text-cini-panna/90">
                  <div className="w-2 h-2 rounded-full bg-cini-oro" />
                  <span>Stesura artigianale a mano in teglia</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-cini-panna/90">
                  <div className="w-2 h-2 rounded-full bg-cini-oro" />
                  <span>Sfornate calde per la pausa pranzo e gli aperitivi</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-cini-panna/90">
                  <div className="w-2 h-2 rounded-full bg-cini-oro" />
                  <span>Farciture con salumi, verdure e formaggi selezionati</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-cini-oro" />
                <span className="font-serif italic text-cini-rosa text-sm">
                  Proposte provvisorie a scopo illustrativo
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80"
              alt="Focaccia dorata artigianale"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cini-bordeaux-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 bg-cini-oro text-cini-marrone px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
              Esempio Illustrativo
            </div>
          </div>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FOCACCERIA_PRODUCTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-cini-bordeaux-dark/60 rounded-2xl overflow-hidden border border-white/10 hover:border-cini-rosa transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-cini-rosa text-cini-bordeaux text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cini-oro block mb-1">
                    {item.subtitle}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-cini-panna group-hover:text-cini-rosa transition-colors">
                    {item.name}
                  </h4>
                  <p className="mt-2.5 text-xs text-cini-panna/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {item.tags && (
                  <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-white/10 text-cini-rosa"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
