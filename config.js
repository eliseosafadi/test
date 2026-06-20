/* =====================================================================
   ZENTRALE ANPASSUNGS-DATEI
   ---------------------------------------------------------------------
   Hier kannst du ALLE Inhalte der Webseite ändern, ohne HTML anzufassen.
   Einfach die Texte zwischen den Anführungszeichen austauschen.
   Farben werden in css/style.css ganz oben (:root) eingestellt.
   ===================================================================== */

const SITE_CONFIG = {

  /* --- Allgemeine Infos über den Laden --- */
  name: "Döner Palast",            // Name des Ladens (erscheint im Logo & Titel)
  slogan: "Frisch. Saftig. Unwiderstehlich.",
  heroText: "Der beste Döner der Stadt – täglich frisch zubereitet aus besten Zutaten.",

  // Kontaktdaten
  phone: "+49 123 456789",
  email: "hallo@doener-palast.de",
  address: "Musterstraße 12, 12345 Musterstadt",

  // Social-Media-Links (leer lassen "" wenn nicht gewünscht)
  social: {
    instagram: "#",
    facebook: "#",
    tiktok: "#"
  },

  /* --- Über uns --- */
  about: {
    text: "Seit über 15 Jahren stehen wir für echten Genuss. Unser Fleisch wird " +
          "täglich frisch mariniert, unser Brot kommt warm aus dem Ofen und unser " +
          "Gemüse holen wir jeden Morgen vom Markt. Schmeck den Unterschied!",
    // Kleine Highlight-Badges unter dem Text
    features: [
      "100% Halal",
      "Täglich frisch",
      "Hausgemachte Soßen",
      "Vegetarische Optionen"
    ]
  },

  /* --- Speisekarte ---------------------------------------------------
     Jede Kategorie hat einen Titel und eine Liste von Gerichten.
     Pro Gericht: name, desc (Beschreibung), price.
     Neues Gericht? Einfach eine Zeile { ... } hinzufügen.
     ------------------------------------------------------------------ */
  menu: [
    {
      category: "Döner",
      items: [
        { name: "Döner im Brot",      desc: "Knuspriges Fladenbrot, Salat, Soße nach Wahl", price: "6,50 €" },
        { name: "Döner Teller",        desc: "Mit Pommes oder Reis, Salat und Soße",          price: "11,00 €" },
        { name: "Veggie Döner",        desc: "Gegrilltes Gemüse & Falafel im Brot",           price: "6,00 €" }
      ]
    },
    {
      category: "Dürüm",
      items: [
        { name: "Dürüm Klassik",       desc: "Gerollt im Yufka-Teig mit Salat & Soße",        price: "7,00 €" },
        { name: "Dürüm Käse",          desc: "Mit extra geschmolzenem Käse",                  price: "7,50 €" }
      ]
    },
    {
      category: "Beilagen",
      items: [
        { name: "Pommes Frites",       desc: "Goldgelb & knusprig",                           price: "3,00 €" },
        { name: "Falafel (5 Stück)",   desc: "Hausgemacht, dazu Joghurt-Dip",                 price: "4,00 €" },
        { name: "Türkische Pizza",     desc: "Lahmacun mit frischem Salat",                   price: "4,50 €" }
      ]
    },
    {
      category: "Getränke",
      items: [
        { name: "Ayran",               desc: "Erfrischendes Joghurtgetränk",                  price: "1,80 €" },
        { name: "Softdrinks 0,33l",    desc: "Cola, Fanta, Sprite",                           price: "2,00 €" },
        { name: "Wasser 0,5l",         desc: "Still oder sprudelnd",                          price: "1,50 €" }
      ]
    }
  ],

  /* --- Öffnungszeiten ------------------------------------------------
     Tag + Zeit. "Geschlossen" einfach als Zeit eintragen.
     ------------------------------------------------------------------ */
  hours: [
    { day: "Montag",     time: "11:00 – 22:00" },
    { day: "Dienstag",   time: "11:00 – 22:00" },
    { day: "Mittwoch",   time: "11:00 – 22:00" },
    { day: "Donnerstag", time: "11:00 – 22:00" },
    { day: "Freitag",    time: "11:00 – 23:00" },
    { day: "Samstag",    time: "12:00 – 23:00" },
    { day: "Sonntag",    time: "13:00 – 22:00" }
  ],

  /* --- Chat / FAQ-Bot ------------------------------------------------
     Begrüßung + häufige Fragen. Jede Frage hat:
       q        = Text des Schnellauswahl-Buttons
       keywords = Stichwörter für die Freitext-Erkennung (Kleinbuchstaben)
       a        = Antwort des Bots
     ------------------------------------------------------------------ */
  chat: {
    greeting: "Hallo! 👋 Wie kann ich dir helfen? Wähle eine Frage oder schreib mir einfach.",
    fallback: "Das weiß ich leider nicht genau. 😅 Ruf uns gerne an unter " +
              "{phone} oder nutze das Kontaktformular weiter oben!",
    faqs: [
      {
        q: "Wann habt ihr offen?",
        keywords: ["offen", "öffnung", "öffnungszeit", "zeiten", "wann", "geöffnet"],
        a: "Wir haben Mo–Do 11–22 Uhr, Fr 11–23 Uhr, Sa 12–23 Uhr und So 13–22 Uhr für dich da!"
      },
      {
        q: "Liefert ihr?",
        keywords: ["liefer", "lieferung", "bringen", "nach hause", "bestellen"],
        a: "Ja! Wir liefern im Umkreis von 5 km. Ruf uns an unter {phone} oder bestelle über die gängigen Lieferdienste."
      },
      {
        q: "Gibt es vegetarische Optionen?",
        keywords: ["vegetarisch", "vegan", "veggie", "fleischlos", "falafel", "allergie", "allergen"],
        a: "Klar! Wir haben Veggie Döner, Falafel und gegrilltes Gemüse. Bei Allergien beraten wir dich gerne persönlich."
      },
      {
        q: "Kann ich einen Tisch reservieren?",
        keywords: ["reservier", "tisch", "platz", "buchen", "gruppe"],
        a: "Für größere Gruppen nehmen wir gerne Reservierungen entgegen – ruf uns einfach an unter {phone}."
      },
      {
        q: "Wo finde ich euch?",
        keywords: ["wo", "adresse", "standort", "finden", "parken", "anfahrt"],
        a: "Du findest uns in der {address}. Wir freuen uns auf deinen Besuch!"
      }
    ]
  }
};
