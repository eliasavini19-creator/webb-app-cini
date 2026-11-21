import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PasticceriaSection } from './components/PasticceriaSection';
import { BoulangerieSection } from './components/BoulangerieSection';
import { FocacceriaSection } from './components/FocacceriaSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cini-panna selection:bg-cini-oro selection:text-white overflow-x-hidden">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Pasticceria Artigianale (Sfondo Chiaro / Panna) */}
        <PasticceriaSection />

        {/* 3. Boulangerie & Croissant (Sfondo Blu Petrolio) */}
        <BoulangerieSection />

        {/* 4. Focacceria all'Olio EVO (Sfondo Bordeaux Elegante) */}
        <FocacceriaSection />

        {/* 5. Filosofia del Marchio & Pilastri (Sfondo Panna con dettagli Oro e Rosa) */}
        <PhilosophySection />

        {/* 6. Contatti & Dove Trovarci */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

export default App;
