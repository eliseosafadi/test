/* =====================================================================
   ZENTRALE ANPASSUNGS-DATEI
   ---------------------------------------------------------------------
   Hier kannst du ALLE Inhalte der Webseite ändern.
   Farben werden in css/style.css ganz oben (:root) eingestellt.
   ===================================================================== */

const SITE_CONFIG = {

  /* --- Allgemeine Infos --- */
  name: "Döner Palast",
  slogan: "Frisch. Saftig. Unwiderstehlich.",
  heroText: "Seit über 15 Jahren der beste Döner der Stadt — täglich frisch mariniert, knuspriges Brot aus dem Ofen, hausgemachte Soßen.",

  phone: "+49 123 456789",
  email: "hallo@doener-palast.de",
  address: "Musterstraße 12, 12345 Musterstadt",

  social: {
    instagram: "#",
    facebook: "#",
    tiktok: "#"
  },

  /* --- Statistiken (Zahlen zählen beim Einblenden hoch) --- */
  stats: [
    { number: 15,    suffix: "+",  label: "Jahre Erfahrung",       icon: "🏆" },
    { number: 10000, suffix: "+",  label: "Glückliche Gäste",      icon: "😊" },
    { number: 100,   suffix: "%",  label: "Halal zertifiziert",    icon: "✅" },
    { number: 7,     suffix: "×",  label: "Wöchentlich frisch",    icon: "🌿" }
  ],

  /* --- Speisekarte ---------------------------------------------------
     badge-Optionen: "Beliebt" | "Vegetarisch" | "Scharf" | "Neu" | null
     ------------------------------------------------------------------ */
  menu: [
    {
      category: "Döner",
      icon: "🥙",
      items: [
        {
          name: "Klassischer Döner",
          desc: "Zartes Rindfleisch vom Spieß, knuspriges Fladenbrot, bunter Salat, Zwiebeln, Tomaten und unsere hausgemachte Joghurt-Knoblauch-Soße.",
          price: "6,50 €",
          badge: "Beliebt"
        },
        {
          name: "Hähnchen Döner",
          desc: "Saftiges Hähnchenfleisch, mariniert mit mediterranen Gewürzen, mit frischem Salat und Chili-Soße im warmen Fladenbrot.",
          price: "6,50 €",
          badge: null
        },
        {
          name: "Döner Teller",
          desc: "Großzügige Portion Döner-Fleisch mit Pommes oder Basmati-Reis, buntem Salat, Zwiebeln und zwei Soßen nach Wahl.",
          price: "11,00 €",
          badge: "Beliebt"
        },
        {
          name: "Veggie Döner",
          desc: "Gegrilltes Gemüse (Paprika, Zucchini, Aubergine), Falafel, frischer Salat und Hummus in warmem Fladenbrot.",
          price: "6,00 €",
          badge: "Vegetarisch"
        }
      ]
    },
    {
      category: "Dürüm",
      icon: "🌯",
      items: [
        {
          name: "Dürüm Klassik",
          desc: "Zartes Döner-Fleisch, eingerollt in dünnem Yufka-Teig mit frischem Salat, Tomaten und Joghurt-Soße.",
          price: "7,00 €",
          badge: "Beliebt"
        },
        {
          name: "Dürüm Käse",
          desc: "Döner-Fleisch mit extra geschmolzenem Käse, Salat und würziger Soße — kurz gegrillt für extra Knusprigkeit.",
          price: "7,50 €",
          badge: null
        },
        {
          name: "Hähnchen Dürüm",
          desc: "Saftiges Hähnchenfleisch, Eisbergsalat, rote Zwiebeln und Chili-Soße im gerollten Yufka.",
          price: "7,00 €",
          badge: null
        },
        {
          name: "Veggie Dürüm",
          desc: "Gegrilltes Gemüse, Falafel, Rucola und Hummus im zarten Yufka-Teig — leicht und lecker.",
          price: "6,50 €",
          badge: "Vegetarisch"
        }
      ]
    },
    {
      category: "Beilagen",
      icon: "🍟",
      items: [
        {
          name: "Pommes Frites",
          desc: "Goldgelb & knusprig frittiert, mit Ketchup und Mayonnaise.",
          price: "3,00 €",
          badge: null
        },
        {
          name: "Türkische Pizza",
          desc: "Hauchdünnes Lahmacun mit würzigem Hackfleisch, frischem Salat und Zitronen.",
          price: "4,50 €",
          badge: "Beliebt"
        },
        {
          name: "Falafel (6 Stück)",
          desc: "Hausgemachte Kichererbsen-Bällchen, goldbraun frittiert, mit Joghurt-Dip.",
          price: "4,00 €",
          badge: "Vegetarisch"
        },
        {
          name: "Cacık",
          desc: "Türkischer Joghurt mit Gurke, Knoblauch, Minze und einem Schuss Olivenöl.",
          price: "2,50 €",
          badge: null
        }
      ]
    },
    {
      category: "Getränke",
      icon: "🥤",
      items: [
        {
          name: "Ayran",
          desc: "Erfrischendes türkisches Joghurtgetränk, leicht gesalzen — der perfekte Döner-Begleiter.",
          price: "1,80 €",
          badge: "Beliebt"
        },
        {
          name: "Çay (Türkischer Tee)",
          desc: "Kräftiger schwarzer Tee, im typischen Tulpenglas serviert.",
          price: "1,50 €",
          badge: null
        },
        {
          name: "Softdrinks 0,33l",
          desc: "Cola, Fanta, Sprite — eiskalt.",
          price: "2,00 €",
          badge: null
        },
        {
          name: "Wasser 0,5l",
          desc: "Still oder sprudelnd.",
          price: "1,50 €",
          badge: null
        }
      ]
    }
  ],

  /* --- Foto-Galerie -------------------------------------------------- */
  gallery: [
    { label: "Döner vom Spieß",       desc: "Täglich frisch aufgespießt & mariniert" },
    { label: "Frisches Gemüse",        desc: "Jeden Morgen vom Markt geholt" },
    { label: "Hausgemachte Soßen",     desc: "Nach Familienrezept seit 15 Jahren" },
    { label: "Unser Laden",            desc: "Herzlich willkommen im Döner Palast" },
    { label: "Knuspriges Fladenbrot",  desc: "Frisch gebacken, täglich warm" },
    { label: "Das Team",               desc: "Mit Leidenschaft für jeden Bissen" }
  ],

  /* --- Kundenbewertungen (Slider) ------------------------------------ */
  testimonials: [
    {
      name: "Ahmed K.",
      stars: 5,
      text: "Bester Döner der Stadt! Das Brot ist immer warm und das Fleisch perfekt gewürzt. Ich komme seit Jahren — und es wird nie schlechter. Absolute Empfehlung!",
      date: "Mai 2024"
    },
    {
      name: "Sarah M.",
      stars: 5,
      text: "Der Veggie Döner ist ein Traum. Man vermisst das Fleisch echt nicht. Die hausgemachten Soßen machen den Unterschied. Für mich die beste Adresse in der Stadt.",
      date: "April 2024"
    },
    {
      name: "Markus T.",
      stars: 5,
      text: "Schnell, freundlich, lecker. Mittagspause war noch nie so gut. Der Hähnchen-Dürüm ist unfassbar saftig. Ich bestelle mindestens zweimal die Woche.",
      date: "Juni 2024"
    },
    {
      name: "Fatima A.",
      stars: 5,
      text: "Endlich ein Laden, dem man bei der Zubereitung zusehen kann und dem man vertraut. Halal, frisch, günstig — was will man mehr? Familie ist super nett!",
      date: "März 2024"
    }
  ],

  /* --- Über uns --- */
  about: {
    text: "Was 2009 als kleiner Imbiss begann, ist heute eine Institution. Wir holen unser Gemüse jeden Morgen frisch vom Markt, marinieren unser Fleisch nach einem Familienrezept aus der Türkei und backen unser Brot täglich frisch. Bei uns weißt du, was du kriegst — und das seit über 15 Jahren.",
    features: [
      "100% Halal zertifiziert",
      "Täglich frisch",
      "Hausgemachte Soßen",
      "Vegetarische Optionen",
      "Gluten-Alternativen auf Anfrage",
      "Familienrezepte seit 2009"
    ]
  },

  /* --- Öffnungszeiten --- */
  hours: [
    { day: "Montag",     time: "11:00 – 22:00" },
    { day: "Dienstag",   time: "11:00 – 22:00" },
    { day: "Mittwoch",   time: "11:00 – 22:00" },
    { day: "Donnerstag", time: "11:00 – 22:00" },
    { day: "Freitag",    time: "11:00 – 23:00" },
    { day: "Samstag",    time: "12:00 – 23:00" },
    { day: "Sonntag",    time: "13:00 – 22:00" }
  ],

  /* --- Chat FAQ-Bot --- */
  chat: {
    greeting: "Hallo! 👋 Wie kann ich dir helfen? Wähle eine Frage oder schreib mir einfach.",
    fallback: "Das weiß ich leider nicht genau. 😅 Ruf uns gerne an unter {phone} oder nutze das Kontaktformular!",
    faqs: [
      {
        q: "Wann habt ihr offen?",
        keywords: ["offen", "öffnung", "öffnungszeit", "zeiten", "wann", "geöffnet"],
        a: "Wir haben Mo–Do 11–22 Uhr, Fr 11–23 Uhr, Sa 12–23 Uhr und So 13–22 Uhr für dich da! 🕐"
      },
      {
        q: "Liefert ihr?",
        keywords: ["liefer", "lieferung", "bringen", "nach hause", "bestellen"],
        a: "Ja! Wir liefern im Umkreis von 5 km. Ruf uns an unter {phone} oder bestelle über die gängigen Lieferdienste. 🛵"
      },
      {
        q: "Ist das Fleisch Halal?",
        keywords: ["halal", "zertifiziert", "fleisch", "schwein", "alkohol"],
        a: "Ja, wir sind 100% Halal zertifiziert. Kein Schweinefleisch, kein Alkohol. Unser Zertifikat liegt im Laden aus. ✅"
      },
      {
        q: "Gibt es vegetarische Optionen?",
        keywords: ["vegetarisch", "vegan", "veggie", "fleischlos", "falafel", "allergie"],
        a: "Klar! Wir haben Veggie Döner, Veggie Dürüm, Falafel und Cacık. Bei Allergenen beraten wir dich gerne persönlich. 🥗"
      },
      {
        q: "Kann ich reservieren?",
        keywords: ["reservier", "tisch", "platz", "buchen", "gruppe"],
        a: "Für Gruppen ab 6 Personen gerne — ruf uns an unter {phone}, wir richten alles her! 🪑"
      },
      {
        q: "Wo findet ihr euch?",
        keywords: ["wo", "adresse", "standort", "finden", "parken", "anfahrt"],
        a: "Du findest uns in der {address}. Parkplätze gibt es direkt vor dem Laden. Wir freuen uns! 📍"
      }
    ]
  }
};
