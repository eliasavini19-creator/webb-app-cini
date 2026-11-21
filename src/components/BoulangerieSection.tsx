import React from 'react';
import { motion } from 'motion/react';
import { BOULANGERIE_PRODUCTS } from '../data/content';
import { Sparkles, Layers, SunMedium, Flame } from 'lucide-react';

export const BoulangerieSection: React.FC = () => {
  return (
    <section id="boulangerie" className="py-28 bg-cini-petrolio text-cini-panna relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cini-petrolio-dark/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      {/* Firma commerciale senza cerchio turchese in filigrana */}
      <div className="absolute left-6 bottom-8 opacity-10 pointer-events-none">
        <img
          src="/brand/loghi/turchese cini logo.svg"
          alt="CINÌ Firma Boulangerie"
          className="w-72 h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/20 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-cini-oro" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-cini-oro">
                Capitolo 02
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Boulangerie & Viennoiserie
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm md:text-base text-cini-panna/80 leading-relaxed font-light">
              L'arte dei lievitati da colazione e del pane artigianale. 
              Sfoglie dorate, fragranza al morso e cura costante in ogni infornata.
            </p>
          </div>
        </div>

        {/* Feature summary bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3">
            <SunMedium className="w-6 h-6 text-cini-oro shrink-0" />
            <div>
              <div className="font-serif text-lg font-bold text-white">Ogni Mattina</div>
              <div className="text-[10px] uppercase tracking-wider text-cini-panna/70">Produzione Quotidiana</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3">
            <Layers className="w-6 h-6 text-cini-oro shrink-0" />
            <div>
              <div className="font-serif text-lg font-bold text-white">Sfoglia Curata</div>
              <div className="text-[10px] uppercase tracking-wider text-cini-panna/70">Lavorazione a Strati</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-cini-oro shrink-0" />
            <div>
              <div className="font-serif text-lg font-bold text-white">Viennoiserie</div>
              <div className="text-[10px] uppercase tracking-wider text-cini-panna/70">Brioche & Croissant</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3">
            <Flame className="w-6 h-6 text-cini-oro shrink-0" />
            <div>
              <div className="font-serif text-lg font-bold text-white">Pani da Forno</div>
              <div className="text-[10px] uppercase tracking-wider text-cini-panna/70">Cottura Tradizionale</div>
            </div>
          </div>
        </div>

        {/* Featured Editorial Split con firma commerciale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group h-[420px]"
          >
            <img
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80"
              alt="Croissant sfogliato dorato"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cini-petrolio-dark/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cini-oro block mb-1">
                La Colazione Artigianale
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                I Lievitati Sfogliati
              </h3>
              <p className="text-xs text-cini-panna/80 mt-2 font-light max-w-md">
                Superficie dorata e friabile, morbidezza interna e profumo di burro fresco per iniziare la giornata.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:pl-6"
          >
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15">
              {/* Firma commerciale senza cerchio */}
              <div className="w-20 h-auto mb-4">
                <img
                  src="/brand/loghi/cini panna logo.svg"
                  alt="CINÌ Firma"
                  className="w-full h-auto object-contain"
                />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cini-oro block mb-2">
                Panificazione e Formati Rustici
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                La Pagnotta e i Formati Speciali
              </h3>
              <p className="text-sm text-cini-panna/80 leading-relaxed font-light mb-6">
                Accanto alla sfoglia dolce, il nostro banco ospita proposte di panificazione a lievitazione naturale e cotti su pietra, ideali per la tavola quotidiana o per accompagnare taglieri e degustazioni.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cini-oro uppercase tracking-wider">
                <span>Esempi di gamma provvisori per la consultazione</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-cini-bordeaux/40 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cini-oro/20 flex items-center justify-center text-cini-oro font-serif font-bold text-xl">
                  C
                </div>
                <div>
                  <h5 className="font-serif font-bold text-white text-base">La Proposta del Mattino</h5>
                  <p className="text-xs text-cini-panna/70">Pain au chocolat, trecce e prodotti lievitati da forno</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BOULANGERIE_PRODUCTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/15 hover:border-cini-oro transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cini-petrolio/20 group-hover:bg-transparent transition-colors" />
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-cini-oro text-cini-marrone text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cini-oro block mb-1">
                    {item.subtitle}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-cini-oro transition-colors">
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
                        className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md bg-white/10 text-cini-panna"
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
