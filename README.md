# 🥙 Döner-Laden Webseiten-Vorlage

Eine moderne, dunkle und vollständig anpassbare Webseiten-Vorlage für einen
Döner-Laden (oder jedes andere Restaurant). Reines HTML/CSS/JS – **kein Setup,
kein Build, keine Installation nötig**.

## 🚀 Loslegen

Öffne einfach die Datei **`index.html`** im Browser. Fertig.

## 🎨 Was kann ich anpassen?

Alles Wichtige liegt an zwei zentralen Stellen:

### 1. Inhalte → `config.js`
Hier änderst du **ohne HTML-Kenntnisse** alle Texte:
- **Name, Slogan, Hero-Text**
- **Kontaktdaten** (Telefon, E-Mail, Adresse) und Social-Media-Links
- **Über-uns-Text** und die Highlight-Badges
- **Speisekarte** – Kategorien, Gerichte, Beschreibungen und Preise
  (neues Gericht? einfach eine Zeile `{ name, desc, price }` ergänzen)
- **Öffnungszeiten** (der heutige Tag wird automatisch hervorgehoben)
- **Chat-Bot** – Begrüßung, häufige Fragen und Antworten

### 2. Farben & Design → `css/style.css` (ganz oben im `:root`-Block)
Ändere eine Farbe und die ganze Seite passt sich an:

```css
--color-primary: #0a0a0a;   /* Schwarz – Hintergrund   */
--color-accent:  #7cb342;   /* Salatgrün – Akzentfarbe */
```

Auch Eckenrundung, maximale Breite, Abstände und Animationsgeschwindigkeit
lassen sich dort einstellen. Die Schriftart tauschst du über den Google-Fonts-Link
im `<head>` der `index.html`.

## 🖼 Bilder einfügen

Aktuell sind überall **Platzhalter** (gestrichelte/gemusterte Flächen mit Beschriftung).
So ersetzt du sie durch echte Bilder:
- **Hero-Hintergrund:** im `.hero`-Block in `style.css` ein `background-image` setzen
  und `.hero-img-placeholder` entfernen.
- **Menü-/Über-uns-/Karten-Platzhalter:** `<img>`-Tags einsetzen bzw. `background-image`
  in den entsprechenden CSS-Klassen ergänzen.

## 💬 Chat & Kontaktformular

- Der **Chat-Bot** (unten rechts) funktioniert komplett im Browser. Antworten und
  Schnellfragen pflegst du im `chat`-Abschnitt von `config.js`.
- Das **Kontaktformular** zeigt aktuell eine Bestätigung an. Für echten Versand
  die markierte Stelle in `js/script.js` (Abschnitt 7) an ein Backend oder einen
  Dienst wie Formspree anbinden.

## 📁 Dateien

| Datei            | Zweck                                            |
|------------------|--------------------------------------------------|
| `index.html`     | Seitenstruktur                                   |
| `config.js`      | **Alle Inhalte** (hier am meisten anpassen)      |
| `css/style.css`  | Design & Farben (`:root` ganz oben)              |
| `js/script.js`   | Logik (Rendering, Chat, Formular, Animationen)   |
