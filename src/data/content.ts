export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  tags?: string[];
  badge?: string;
}

// Prodotti di esempio a titolo illustrativo (catalogo provvisorio)
export const PASTICC_PRODUCTS: ProductItem[] = [
  {
    id: "p-1",
    name: "Tartelette ai Lamponi",
    subtitle: "Esempio Pasticceria",
    description: "Creazione monoporzione con frolla artigianale, crema delicata e lamponi freschi di stagione.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    badge: "Proposta",
    tags: ["Frolla", "Frutta Fresca"]
  },
  {
    id: "p-2",
    name: "Millefoglie Tradizionale",
    subtitle: "Esempio Pasticceria",
    description: "Sfoglia croccante caramellata alternata a crema chantilly preparata in laboratorio.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    badge: "Classico",
    tags: ["Sfoglia", "Crema"]
  },
  {
    id: "p-3",
    name: "Monoporzione al Cioccolato",
    subtitle: "Esempio Pasticceria",
    description: "Mousse vellutata al cioccolato fondente su base croccante ai cereali.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    tags: ["Cioccolato", "Monoporzione"]
  },
  {
    id: "p-4",
    name: "Assortimento Mignon",
    subtitle: "Esempio Pasticceria",
    description: "Selezione di pasticceria mignon assortita da condividere o per occasioni speciali.",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80",
    badge: "Assortimento",
    tags: ["Mignon", "Vassoio"]
  }
];

export const BOULANGERIE_PRODUCTS: ProductItem[] = [
  {
    id: "b-1",
    name: "Croissant al Burro",
    subtitle: "Esempio Boulangerie",
    description: "Lievitato sfogliato dorato, fragrante all'esterno e soffice all'interno.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    badge: "Colazione",
    tags: ["Burro", "Sfogliato"]
  },
  {
    id: "b-2",
    name: "Pain au Chocolat",
    subtitle: "Esempio Boulangerie",
    description: "Tradizionale sfoglia lievitata farcita con barrette di cioccolato.",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=800&q=80",
    tags: ["Sfoglia", "Cioccolato"]
  },
  {
    id: "b-3",
    name: "Pagnotta Rustica",
    subtitle: "Esempio Boulangerie",
    description: "Pane rustico a lievitazione naturale cotto al forno, crosta spessa e mollica morbida.",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
    badge: "Forno",
    tags: ["Lievitazione Naturale", "Pane"]
  },
  {
    id: "b-4",
    name: "Brioche Intrecciata",
    subtitle: "Esempio Boulangerie",
    description: "Morbido impasto lievitato arricchito con cacao e frutta secca.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
    tags: ["Lievitato", "Artigianale"]
  }
];

export const FOCACCERIA_PRODUCTS: ProductItem[] = [
  {
    id: "f-1",
    name: "Focaccia Classica all'Olio EVO",
    subtitle: "Esempio Focacceria",
    description: "Focaccia dorata preparata con olio extravergine d'oliva e fiocchi di sale in superficie.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    badge: "Classica",
    tags: ["Olio EVO", "Sfornata Calda"]
  },
  {
    id: "f-2",
    name: "Focaccia ai Pomodorini ed Erbe",
    subtitle: "Esempio Focacceria",
    description: "Impasto morbido e profumato con pomodorini datterini e aromi freschi.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    tags: ["Pomodorini", "Erbe Aromatiche"]
  },
  {
    id: "f-3",
    name: "Focaccia con Formaggio Fresco",
    subtitle: "Esempio Focacceria",
    description: "Sottile sfoglia fragrante con ripieno caldo e cremoso di formaggio fuso.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    badge: "Specialità",
    tags: ["Formaggio", "Al Taglio"]
  },
  {
    id: "f-4",
    name: "Pizza in Pala con Verdure",
    subtitle: "Esempio Focacceria",
    description: "Pala romana ad alta digeribilità farcita con verdure di stagione e formaggi freschi.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    tags: ["Pizza in Pala", "Verdure"]
  }
];

// Placeholder per i valori e i principi del brand, facilmente personalizzabili
export const PHILOSOPHY_PILLARS = [
  {
    num: "01",
    title: "Cura delle Lavorazioni",
    desc: "Dedichiamo attenzione a ogni fase di preparazione, rispettando le tempistiche ottimali per ciascun impasto e lievitato."
  },
  {
    num: "02",
    title: "Scelta delle Materie Prime",
    desc: "Selezioniamo ingredienti di qualità per garantire sapori puliti, equilibrio e autenticità nei prodotti dolci e salati."
  },
  {
    num: "03",
    title: "Artigianalità Quotidiana",
    desc: "Il nostro laboratorio produce ogni giorno creazioni fresche per la colazione, la pausa pranzo e le occasioni speciali."
  },
  {
    num: "04",
    title: "Tre Anime Gastronomiche",
    desc: "Un punto d'incontro unico che unisce l'alta pasticceria, la boulangerie sfogliata e la focacceria calda di tradizione."
  }
];
