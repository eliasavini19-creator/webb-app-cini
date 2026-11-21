import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    email: '',
    richiesta: 'torta',
    messaggio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nome: '',
        telefono: '',
        email: '',
        richiesta: 'torta',
        messaggio: ''
      });
    }, 4000);
  };

  return (
    <section id="contatti" className="py-28 bg-cini-panna-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cini-bordeaux/30 bg-white/70 backdrop-blur-sm mb-4">
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-cini-bordeaux">
              Contatti & Informazioni
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cini-bordeaux tracking-tight">
            Vieni a trovarci o contattaci
          </h2>
          <p className="mt-4 text-sm sm:text-base text-cini-marrone/80 font-light leading-relaxed">
            Siamo a tua disposizione per colazioni, pause pranzo, forniture ed eventi con creazioni su misura.
          </p>
        </div>

        {/* Content Layout: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Practical Info Card con placeholder chiaramente indicati */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Hours Box */}
            <div className="p-8 rounded-3xl bg-white border border-cini-oro/30 shadow-cini-soft">
              <h3 className="font-serif text-2xl font-bold text-cini-bordeaux mb-6 flex items-center gap-2">
                <span>Informazioni & Orari</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cini-bordeaux/10 text-cini-bordeaux flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cini-bordeaux" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-cini-marrone">Indirizzo Laboratorio</h5>
                    <p className="text-sm text-cini-marrone/80 mt-1 font-light">
                      [Indirizzo da definire, Numero Civico]<br />
                      [Città, CAP, Provincia]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cini-petrolio/15 text-cini-petrolio-dark flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-cini-petrolio-dark" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-cini-marrone">Orari di Apertura</h5>
                    <p className="text-sm text-cini-marrone/80 mt-1 font-light">
                      <strong className="font-semibold text-cini-marrone">Da Lunedì a Sabato:</strong> [07:00 — 20:00]<br />
                      <strong className="font-semibold text-cini-marrone">Domenica:</strong> [Orario da definire]<br />
                      <span className="text-xs text-cini-marrone/60">[Eventuale giorno di riposo]</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cini-oro/20 text-cini-marrone flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cini-oro" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-cini-marrone">Telefono & WhatsApp</h5>
                    <p className="text-sm text-cini-marrone/80 mt-1 font-light">
                      <a href="#contatti" className="hover:text-cini-bordeaux transition-colors font-medium">
                        [Inserire recapito telefonico]
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cini-rosa/30 text-cini-bordeaux flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cini-bordeaux" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-cini-marrone">Email & Informazioni</h5>
                    <p className="text-sm text-cini-marrone/80 mt-1 font-light">
                      <a href="#contatti" className="hover:text-cini-bordeaux transition-colors">
                        [Inserire email aziendale]
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="mt-8 pt-6 border-t border-cini-panna">
                <a
                  href="#contatti"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-cini-petrolio text-white font-bold text-xs uppercase tracking-widest hover:bg-cini-petrolio-dark shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contattaci via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Visual badge card con logo istituzionale con cerchio */}
            <div className="p-6 rounded-3xl bg-cini-bordeaux text-cini-panna flex items-center gap-4 border border-cini-oro/30">
              <div className="w-14 h-14 shrink-0 p-1 bg-white/10 rounded-full flex items-center justify-center">
                <img
                  src="/brand/loghi/file con cerchio svg.svg"
                  alt="CINÌ Marchio Istituzionale"
                  className="w-full h-full object-contain filter invert opacity-95"
                />
              </div>
              <div>
                <h6 className="font-serif font-bold text-sm text-cini-oro">Ordini & Prenotazioni</h6>
                <p className="text-xs text-cini-panna/80 mt-0.5 font-light">
                  Contattaci con anticipo per concordare dettagli, quantità o richieste specifiche.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Reservation / Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-cini-oro/30 shadow-cini-soft">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cini-bordeaux mb-2">
              Richiedi Informazioni o Prenota
            </h3>
            <p className="text-xs sm:text-sm text-cini-marrone/70 font-light mb-8">
              Compila il modulo per qualsiasi informazione, prenotazione o richiesta per eventi e ricorrenze.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-cini-panna border border-cini-oro text-center flex flex-col items-center"
              >
                <CheckCircle2 className="w-12 h-12 text-cini-bordeaux mb-3" />
                <h4 className="font-serif text-2xl font-bold text-cini-bordeaux">Messaggio Ricevuto</h4>
                <p className="text-sm text-cini-marrone/80 mt-2 max-w-md">
                  Grazie per averci contattato. Riceverai un riscontro nel più breve tempo possibile.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-cini-marrone mb-2">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="es. Mario Rossi"
                      className="w-full px-4 py-3 rounded-xl border border-cini-oro/30 focus:border-cini-bordeaux focus:ring-1 focus:ring-cini-bordeaux outline-none text-sm bg-cini-panna-light/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-cini-marrone mb-2">
                      Recapito Telefonico *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      placeholder="es. +39 333 ..."
                      className="w-full px-4 py-3 rounded-xl border border-cini-oro/30 focus:border-cini-bordeaux focus:ring-1 focus:ring-cini-bordeaux outline-none text-sm bg-cini-panna-light/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-cini-marrone mb-2">
                      Indirizzo Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="esempio@dominio.it"
                      className="w-full px-4 py-3 rounded-xl border border-cini-oro/30 focus:border-cini-bordeaux focus:ring-1 focus:ring-cini-bordeaux outline-none text-sm bg-cini-panna-light/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-cini-marrone mb-2">
                      Tipologia Richiesta
                    </label>
                    <select
                      value={formData.richiesta}
                      onChange={(e) => setFormData({ ...formData, richiesta: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-cini-oro/30 focus:border-cini-bordeaux focus:ring-1 focus:ring-cini-bordeaux outline-none text-sm bg-cini-panna-light/50 transition-colors"
                    >
                      <option value="pasticceria">Pasticceria & Torte</option>
                      <option value="boulangerie">Boulangerie & Lievitati</option>
                      <option value="focacceria">Focacceria & Salato</option>
                      <option value="evento">Eventi o Forniture</option>
                      <option value="altro">Altra informazione</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-cini-marrone mb-2">
                    Dettagli del messaggio o della richiesta *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.messaggio}
                    onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                    placeholder="Scrivi qui la tua richiesta o le informazioni che desideri..."
                    className="w-full px-4 py-3 rounded-xl border border-cini-oro/30 focus:border-cini-bordeaux focus:ring-1 focus:ring-cini-bordeaux outline-none text-sm bg-cini-panna-light/50 transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-cini-bordeaux text-cini-panna font-bold text-xs uppercase tracking-[0.2em] shadow-md hover:bg-cini-bordeaux-dark hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Invia Messaggio</span>
                    <Send className="w-4 h-4 text-cini-oro group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
