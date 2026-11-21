import React from 'react';
import { motion } from 'motion/react';
import { PASTICC_PRODUCTS } from '../data/content';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const PasticceriaSection: React.FC = () => {
  return (
    <section id="pasticceria" className="py-28 bg-cini-panna-light relative overflow-hidden">
      {/* Firma commerciale senza cerchio in filigrana di sfondo */}
      <div className="absolute right-0 top-12 opacity-5 pointer-events-none translate-x-1/4">
        <img
          src="/brand/loghi/file svg cinì.svg"
          alt="CINÌ Firma Commerciale"
          className="w-[500px] h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-cini-bordeaux/15 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-cini-bordeaux" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-cini-bordeaux">
                Capitolo 01
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cini-bordeaux tracking-tight">
              Pasticceria Artigianale
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm md:text-base text-cini-marrone/80 leading-relaxed font-light">
              Armonia di consistenze, dolcezze equilibrate e cura del dettaglio. 
              Creazioni pensate per accompagnare i momenti speciali e la quotidianità.
            </p>
          </div>
        </div>

        {/* Feature Focus Banner con firma commerciale e composizione asimmetrica */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-cini-panna border border-cini-oro/30 shadow-cini-soft"
        >
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cini-rosa/30 text-cini-bordeaux text-[10px] font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3 text-cini-oro" />
                Il Banco Dolce
              </div>

              {/* Firma commerciale integrata sopra il titolo */}
              <div className="w-24 h-auto mb-3">
                <img
                  src="/brand/loghi/bordeaux logo cini.svg"
                  alt="CINÌ Firma"
                  className="w-full h-auto object-contain"
                />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cini-bordeaux mb-4">
                La Cura della Frolla e delle Farce
              </h3>
              <p className="text-cini-marrone/85 text-sm sm:text-base leading-relaxed mb-6 font-light">
                Le preparazioni dolci del laboratorio nascono da ricette attente all'armonia dei sapori. Basi friabili, creme vellutate e frutta fresca si combinano per offrire un'esperienza gustativa curata e autentica.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-cini-oro/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-cini-marrone">
                  <CheckCircle2 className="w-4 h-4 text-cini-oro shrink-0" />
                  <span>Preparazioni quotidiane da laboratorio</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-cini-marrone">
                  <CheckCircle2 className="w-4 h-4 text-cini-oro shrink-0" />
                  <span>Mignon assortiti e monoporzioni</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-cini-marrone">
                  <CheckCircle2 className="w-4 h-4 text-cini-oro shrink-0" />
                  <span>Ingredienti selezionati con cura</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-cini-marrone">
                  <CheckCircle2 className="w-4 h-4 text-cini-oro shrink-0" />
                  <span>Torte su prenotazione</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center justify-between border-t border-cini-oro/15">
              <span className="font-serif italic text-cini-bordeaux text-sm">
                Proposte provvisorie a scopo illustrativo
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=80"
              alt="Pasticceria Cinì Creazione"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cini-bordeaux/60 via-transparent to-transparent lg:hidden" />
            <div className="absolute top-4 right-4 bg-cini-bordeaux text-cini-panna px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
              Esempio Illustrativo
            </div>
          </div>
        </motion.div>

        {/* Product Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PASTICC_PRODUCTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-cini-oro/20 shadow-sm hover:shadow-cini-soft transition-all duration-300 group flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-cini-panna">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-cini-bordeaux text-cini-panna text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cini-oro block mb-1">
                    {item.subtitle}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-cini-bordeaux group-hover:text-cini-oro transition-colors">
                    {item.name}
                  </h4>
                  <p className="mt-2.5 text-xs text-cini-marrone/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {item.tags && (
                  <div className="mt-4 pt-4 border-t border-cini-panna flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-cini-panna text-cini-marrone/80"
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
