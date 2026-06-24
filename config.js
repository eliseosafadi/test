/* =====================================================================
   ZENTRALE ANPASSUNGS-DATEI
   ---------------------------------------------------------------------
   Hier kannst du ALLE Inhalte der Webseite ändern.
   Farben werden in css/style.css ganz oben (:root) eingestellt.
   ===================================================================== */

window.SITE_CONFIG = {

  /* --- Allgemeine Infos --- */
  name: "Döner Palast",
  slogan: "Frisch. Saftig. Unwiderstehlich.",
  heroText: "Seit über 15 Jahren der beste Döner der Stadt — täglich frisch mariniert, knuspriges Brot aus dem Ofen, hausgemachte Soßen.",

  phone: "+49 123 456789",
  email: "hallo@doener-palast.de",
  address: "Segeberger Str. 29, 23617 Stockelsdorf",

  social: {
    instagram: "#",
    facebook: "#",
    tiktok: "#"
  },

  /* --- Speisekarte ---------------------------------------------------
     badge-Optionen: "Beliebt" | "Vegetarisch" | "Scharf" | "Neu" | null
     ------------------------------------------------------------------ */
  menu: [
    {
      category: "Döner",
      icon: "🥙",
      items: [
        { name: "Döner",                      desc: "Zartes Fleisch vom Spieß mit Salat und Soße im frischen Fladenbrot.",                             price: "7,50 €",        badge: "Beliebt" },
        { name: "Döner mit Weißkäse",         desc: "Klassischer Döner mit extra cremigem Weißkäse, frischem Salat und Soße.",                        price: "8,00 €",        badge: null },
        { name: "Super Döner",                desc: "Etwas mehr Fleisch — für den großen Hunger. Mit Salat und Soße.",                                 price: "8,00 €",        badge: null },
        { name: "Mini Döner",                 desc: "Die kleine Variante — perfekt für zwischendurch.",                                                price: "6,50 €",        badge: null },
        { name: "Döner Vegetarisch",          desc: "Gegrilltes Gemüse, Falafel, frischer Salat und Joghurt-Soße im Fladenbrot.",                     price: "6,50 €",        badge: "Vegetarisch" },
        { name: "Döner Vegetarisch (Vollkorn)", desc: "Vegetarische Füllung im knusprigen Vollkornbrot — leicht und lecker.",                         price: "7,00 €",        badge: "Vegetarisch" },
        { name: "Pomm Döner",                 desc: "Döner mit knusprigen Pommes Frites, Salat und Soße — alles in einem.",                           price: "8,00 €",        badge: null },
        { name: "Dürüm Döner",               desc: "Saftiges Fleisch vom Spieß, eingerollt in dünnem Yufka-Teig mit Salat und Soße.",                price: "9,00 €",        badge: null }
      ]
    },
    {
      category: "Dürüm",
      icon: "🌯",
      items: [
        { name: "Dürüm mit Weißkäse",        desc: "Döner-Fleisch mit cremigem Weißkäse, Salat und Soße im zarten Yufka-Teig.",                      price: "9,50 €",        badge: "Beliebt" },
        { name: "Dürüm Vegetarisch",          desc: "Gegrilltes Gemüse, Falafel und Joghurt-Soße im zarten Yufka-Teig.",                              price: "7,00 €",        badge: "Vegetarisch" },
        { name: "Dürüm Vegetarisch (Vollkorn)", desc: "Vegetarische Füllung im Vollkorn-Yufka — leicht und lecker.",                                  price: "7,50 €",        badge: "Vegetarisch" }
      ]
    },
    {
      category: "Teller",
      icon: "🍽️",
      items: [
        { name: "Döner Teller (mit Pommes)", desc: "Großzügige Portion Döner-Fleisch mit Pommes Frites, buntem Salat und Soße.",                      price: "12,00 €",       badge: "Beliebt" },
        { name: "Döner Teller",              desc: "Döner-Fleisch mit Basmati-Reis, Salat und zwei Soßen nach Wahl.",                                 price: "12,00 €",       badge: null },
        { name: "Döner Teller Spezial",      desc: "Döner-Fleisch mit Pommes, Weißkäse, buntem Salat und Soße — die volle Ladung.",                  price: "12,50 €",       badge: null },
        { name: "Portion Dönerfleisch",      desc: "Pur gegrilltes Dönerfleisch vom Spieß — ohne Beilage.",                                           price: "10,00 €",       badge: null },
        { name: "Große Portion Dönerfleisch", desc: "Extra große Portion frisch gegrilltes Dönerfleisch vom Spieß.",                                  price: "16,00 €",       badge: null }
      ]
    },
    {
      category: "Türk. Pizza",
      icon: "🍕",
      items: [
        { name: "Türkische Pizza (klein)",    desc: "Hauchdünnes Lahmacun mit würzigem Hackfleisch — die kleine Variante.",                           price: "3,00 €",        badge: null },
        { name: "Türkische Pizza",            desc: "Klassisches Lahmacun mit würzigem Hackfleisch, Tomaten und Petersilie.",                          price: "6,50 €",        badge: "Beliebt" },
        { name: "Türkische Pizza mit Salat",  desc: "Lahmacun mit frischem bunten Salat, Zwiebeln und Joghurt-Soße.",                                 price: "7,00 €",        badge: null },
        { name: "Türkische Pizza Spezial",    desc: "Üppig belegtes Lahmacun mit Hackfleisch, Käse und frischem Gemüse.",                             price: "9,00 €",        badge: null },
        { name: "Türk. Pizza Fleisch & Käse", desc: "Lahmacun mit Dönerfleisch, geschmolzenem Käse und hausgemachter Soße.",                          price: "9,50 €",        badge: null }
      ]
    },
    {
      category: "Falafel & Chicken",
      icon: "🧆",
      items: [
        { name: "Chicken Nuggets",            desc: "Knusprige Hähnchenstreifen, goldbraun frittiert, mit Dip nach Wahl.",                            price: "4,50 €",        badge: null },
        { name: "Chicken Nuggets (groß)",     desc: "Große Portion knuspriger Hähnchenstreifen mit Pommes Frites und Soße.",                          price: "7,00 €",        badge: null },
        { name: "Falafel im Brot",            desc: "Hausgemachte Falafel im frischen Fladenbrot mit Joghurt-Dip.",                                   price: "3,00 €",        badge: "Vegetarisch" },
        { name: "Falafel Dürüm",             desc: "Knusprige Falafel-Bällchen im Yufka-Teig mit Salat und Hummus.",                                 price: "5,00 €",        badge: "Vegetarisch" },
        { name: "Falafel Teller",             desc: "Hausgemachte Kichererbsen-Bällchen mit Salat, Hummus und Joghurt-Dip.",                          price: "7,00 €",        badge: "Vegetarisch" }
      ]
    },
    {
      category: "Beilagen",
      icon: "🍟",
      items: [
        { name: "Börek (5 Stück)",            desc: "Hauchdünner Blätterteig gefüllt mit Schafskäse und Petersilie — knusprig gebacken.",             price: "⚠️ Preis folgt", badge: null },
        { name: "Pommes Frites (klein)",      desc: "Goldgelb & knusprig frittiert, mit Ketchup und Mayonnaise.",                                     price: "⚠️ Preis folgt", badge: null },
        { name: "Pommes Frites",              desc: "Goldgelb & knusprig frittiert, mit Ketchup und Mayonnaise.",                                     price: "⚠️ Preis folgt", badge: null },
        { name: "Pommes Frites (groß)",       desc: "Große Portion goldgelb frittierter Pommes, mit Ketchup und Mayonnaise.",                         price: "⚠️ Preis folgt", badge: null },
        { name: "Currywurst",                 desc: "Saftige Currywurst mit würziger Currysauce und Brötchen.",                                       price: "⚠️ Preis folgt", badge: null },
        { name: "Currywurst mit Pommes",      desc: "Currywurst mit würziger Currysauce und einer Portion knuspriger Pommes.",                        price: "⚠️ Preis folgt", badge: null }
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
