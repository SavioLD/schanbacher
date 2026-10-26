# Schanbacher – Karriereseite

Recruiting-Landingpage der **Schanbacher GmbH**, Filderstadt.
Ausgeschriebene Stellen: **Maler**, **Parkettleger** und **Raumausstatter**
(m/w/d) – und ausschließlich diese drei.

## Inhalt

- `index.html` – die komplette Seite (self-contained, kein Build-Schritt nötig)
- `bilder/` – hier Logo und Hero-Foto ablegen (siehe `bilder/HIER-BILDER-ABLEGEN.txt`)
- `.nojekyll` – sorgt dafür, dass GitHub Pages die Dateien 1:1 ausliefert

## Live schalten (GitHub Pages)

1. Repo-Settings → **Pages** → Source: **Deploy from a branch**, Branch: `main` / `/root`
2. Nach ein paar Minuten unter `https://saviold.github.io/schanbacher/` erreichbar

## CI anpassen

Farben und Schriften stecken **ausschließlich** im `:root`-Block ganz oben in
`index.html`. Dort einmal ändern – die ganze Seite zieht nach.

```css
--brand:#ffda00;      /* Schanbacher-Gelb, aus dem Logo     */
--brand-dark:#e6c400; /* Hover-Zustand                      */
--brand-700:#7d6a00;  /* Gelb-Ton für Text auf Hell         */
--brand-900:#1d1d1b;  /* Anthrazit, aus dem Logo            */
--brand-soft:#fff8d1; /* heller Gelb-Ton für Flächen        */
--on-brand:#1d1d1b;   /* Textfarbe AUF Gelb (Kontrast!)     */
--f-display / --f-body: Figtree
```

> Gelb und Anthrazit sind **direkt aus dem Original-Logo ausgelesen**
> (`bilder/Schanbacher_Logo_weiss_SVG.png`): `#ffda00` und `#1d1d1b`.
> Die Schrift (Figtree) ist weiterhin gesetzt, nicht aus der Website
> übernommen – der Logo-Schriftzug hat eine eigene, schmale Schrift, die
> als Fließtextschrift nicht taugt. Liegt ein Styleguide vor, ist das eine
> Zeile (`--f-display` / `--f-body`).

## Stellen pflegen

Alle drei Stellen stehen in **einer** Config (`var JOBS` im `<script>` am
Seitenende). Sie speist gleichzeitig:

- die Stellenkarten in der Sektion „Offene Stellen"
- die Stellenauswahl im Formular
- den Hero-Text bei `?stelle=…`
- die JobPosting-Structured-Data

Eine Stelle ändern oder ergänzen heißt also: **einen** Eintrag anfassen.

```js
{ key:"maler", title:"Maler (m/w/d)", kurz:"Maler", icon:ICONS.maler,
  teaser:"…",            // Einzeiler unter dem Titel im Formular
  hook:"…",              // Hero-Text bei ?stelle=maler
  aliase:["maler", …],   // weitere Schreibweisen für den Deeplink
  tags:[…], aufgaben:[…], profil:[…], bieten:[…],
  webhook:"https://…"    // optional, eigene Lead-Table-Kachel (s. u.) }
```

`bieten` ist bewusst je Stelle unterschiedlich – Firmenwagen bei Maler und
Raumausstatter, Weiterbildung bei Parkettleger und Raumausstatter,
Weihnachtsgeld bei allen dreien.

Der Block **„Das setzen wir voraus"** ist dagegen für alle Stellen gleich und
steht einmal in `var VORAUSSETZUNGEN`. Er enthält exakt die K.-o.-Kriterien,
die das Screening später prüft – so verlangt die Anzeige nichts anderes als
das Formular.

## Stellen-Deeplinks für die Anzeige

Die Anzeige kann direkt auf eine Stelle verlinken. Die Seite textet dann den
Hero auf die Stelle, wählt sie im Formular vor und **überspringt den
Auswahl-Schritt** – aus 7 Schritten werden 6.

- `…/?stelle=maler`
- `…/?stelle=parkettleger`
- `…/?stelle=raumausstatter`

Ohne Parameter beginnt das Formular mit der Stellenauswahl.

## Vorfilterung (Screening)

Fünf Fragen, **eine pro Schritt**, davor die Stellenauswahl (entfällt beim
Deeplink), danach die Kontaktdaten. Die Screening-Kriterien gelten für alle
drei Stellen gleich. Alle fünf Fragen sind **Pflichtfragen (K.-o.-Kriterien)**:

| # | Frage | Kategorie | Erfüllt bei |
|---|-------|-----------|-------------|
| 1 | Qualifikation | Pflicht | Abgeschlossene Ausbildung im Handwerk **+ mind. 3 Jahre** Erfahrung |
| 2 | Berufsweg | Pflicht | Max. 3 Jahre Industrie **und** keine Lücke über 3 Monate |
| 3 | Führerschein & Arbeitserlaubnis | Pflicht | Klasse B **und** Arbeitserlaubnis ab 2 Jahren |
| 4 | Deutschkenntnisse | Pflicht | Mindestens B2 |
| 5 | Anfahrt | Pflicht | Bis 30 km um Filderstadt |

**Logik**

- **Pflichtfrage nicht erfüllt** → Bewerbung endet sofort. Freundlicher
  Abschlusshinweis, keine weiteren Schritte, **kein Lead an die Lead Table**.
  Es werden bewusst keine anderen Stellen angeboten.
- **Optionale Frage nicht erfüllt** → Bewerber kommt normal weiter, die
  Antwort wird übertragen und im Feld `nicht_erfuellt` als „nicht erfüllt"
  markiert.

**Konfiguration** (im `<script>` am Seitenende):

```js
var QUESTIONS = [
  { field:"qualifikation", label:"Qualifikation", pflicht:true },
  …
];
```

Eine Frage auf optional stellen: `pflicht:false`. Welche Antwort als
„erfüllt" gilt, steht direkt am Radio-Input als `data-ok="1"`.

**Nicht abgefragt:** das Kriterium „zwischen 20 und 45 Jahre alt". Eine
Altersabfrage ist eine unmittelbare Benachteiligung wegen des Alters nach
§ 1 AGG und damit angreifbar – und widerspricht der Projektvorgabe, nur
berufsbezogene Kriterien zu erheben. Alle übrigen Kriterien sind enthalten.

**Kein Lebenslauf-Upload, keine Dateianhänge** – bewusst nicht vorgesehen.

## Mobile Laufruhe

Beim Schrittwechsel passiert ausschließlich ein Klassenwechsel. Es gibt
**kein** `window.scrollTo`, **kein** `scrollIntoView`, **kein** `focus()`,
keinen Reload und keinen Hash-Sprung. Der Formularcontainer hat eine feste
Mindesthöhe (`--form-min` / `--form-min-mobile`), die auch in der
Mobile-Query gesetzt bleibt – dadurch sind die Fragen 1–5 exakt gleich hoch
und der Weiter-Button steht immer an derselben Stelle.

Nachgemessen im Browser (Chromium, Touch-Emulation), jeweils beide Wege –
mit Deeplink (6 Schritte) und ohne (7 Schritte):

| Viewport | scrollY über alle Schritte | Höhe Fragenschritte | Weiter-Button | Karte + Topbar |
|----------|----------------------------|---------------------|---------------|----------------|
| 360 × 640 | konstant | 508 px | fix | 624 px |
| 375 × 667 | konstant | 508 px | fix | 624 px |
| 390 × 844 | konstant | 508 px | fix | 624 px |
| 414 × 896 | konstant | 508 px | fix | 624 px |

Ein Fragenschritt passt damit auf jedem Standard-Handy ohne Scrollen ins Bild.

## Lead Table

**Jede Stelle hat ihre eigene Kachel.** Die URL steht beim jeweiligen
`JOBS`-Eintrag unter `webhook`; `WEBHOOK_URL` ist nur noch der Rückfall,
falls eine Stelle einmal keine eigene URL hat.

| Stelle | `tableID` der Kachel |
|--------|----------------------|
| Maler (m/w/d) | `6abf949ddeef0ef97f14e25f` |
| Parkettleger (m/w/d) | `6abfbaa934cbe614b696bacb` |
| Raumausstatter (m/w/d) | `6abfbaea9fa0d58be73af4a5` |

Alle drei gehören zu `customerID 6abf9480b0110a55c0150242`.

Das Routing ist im Browser geprüft – über die Deeplinks, über die Aliase und
über die Auswahl im Formular landet jede Bewerbung in genau einer und der
richtigen Kachel.

Gesendet wird **nur** bei vollständiger, qualifizierter Bewerbung.
K.-o.-Abbrüche verlassen die Seite nie – auch nicht an die anderen Kacheln.

## E-Mail-Benachrichtigung (Web3Forms)

Parallel zur Lead Table geht bei jeder abgeschlossenen Bewerbung eine Mail
raus. Access Key steht in `index.html` unter `WEB3FORMS_KEY` – er ist laut
Web3Forms öffentlich und ausdrücklich für Client-Code gedacht.

Betreff: `Neue Bewerbung – <Stelle> – <Vorname Nachname>`
`replyto` ist die Adresse des Bewerbers – eine Antwort auf die Mail geht
also direkt an ihn.

Im Mailtext stehen Stelle, Name, Telefon, E-Mail, alle fünf
Screening-Antworten, das Feld „Nicht erfüllt", das Bewerbungsdatum und die
Quell-URL.

**Empfänger, Autoresponder und Spamschutz** stellst du im
Web3Forms-Dashboard unter *Settings* ein – nicht im Code.

Der Aufruf ist bewusst „fire and forget": Fällt Web3Forms aus, merkt der
Bewerber nichts und die Bewerbung geht trotzdem an die Lead Table. Im
Browser gegengeprüft (HTTP 500 und Verbindungsabbruch): In beiden Fällen
sieht der Bewerber die Erfolgsansicht und der Lead kommt an.

K.-o.-Abbrüche lösen **keine** Mail aus.

Payload – **jedes Feld genau einmal**, Vor- und Nachname getrennt, **kein**
kombiniertes `name`/`fullname`/`vollstaendiger_name`:

```json
{
  "vorname": "Max",
  "nachname": "Mustermann",
  "telefon": "0151 23456789",
  "email": "max.mustermann@beispiel.de",
  "stelle": "Maler (m/w/d)",
  "qualifikation": "…",
  "berufsweg": "…",
  "fuehrerschein_arbeitserlaubnis": "…",
  "deutschkenntnisse": "…",
  "anfahrt": "…",
  "nicht_erfuellt": "–",
  "datum": "02.10.2026",
  "datenschutz": "Ja (Einwilligung mit Absenden, Art. 6 Abs. 1 lit. a DSGVO)",
  "quelle": "Karriere-Landingpage Schanbacher",
  "seite": "https://…"
}
```

Die Feldnamen folgen der Konvention der bestehenden Lead-Table-Anbindung
derselben Agentur (`vorname`, `nachname`, `telefon`, `email` als
Standardfelder, alles Weitere als Zusatzfelder).

## Bildmaterial

| Datei | verwendet für |
|-------|---------------|
| `Schanbacher_Logo_weiss_SVG.png` | Topbar, Hero, Footer, alle Creatives, Facebook |
| `IMG_0218.JPG` (Wand spachteln) | Hero allgemein + Maler, Creatives Maler |
| `IMG_0213.jpeg` (Boden schleifen) | Hero + Creatives Parkettleger |
| `IMG_0212.JPG` (Spachtel-/Wandtextur) | Hero + Creatives Raumausstatter |

Die Originale bleiben unverändert im Repo (die Creatives brauchen die volle
Auflösung). Für die Seite liegen daneben web-optimierte Zuschnitte:
`hero.jpg`, `hero-maler.jpg`, `hero-parkettleger.jpg`,
`hero-raumausstatter.jpg` – je 2400 × 1350, 260–950 KB.

Die Topbar ist dunkel, weil nur die **weiße** Logo-Variante vorliegt. Gibt es
eine dunkle Variante, kann die Topbar auch wieder hell werden.

## Noch zu prüfen

- **„Unbefristet"** ist angenommen (Tags, FAQ) – bitte bestätigen.
- Das Foto für **Raumausstatter** ist der schwächste Treffer (Wandtextur
  statt Bodenbelag/Sonnenschutz). Ein passenderes Motiv einfach in
  `creatives/build.mjs` unter `foto:` eintragen.
- Links zu Impressum und Datenschutz (aktuell
  `schanbachergmbh.de/impressum/` und `/datenschutz/`)
- Das Analytics-Snippet am Seitenende (`analytics.laendle-digital.com`,
  `data-website-id="schanbacher_gmbh"`) ist 1:1 von der Referenzseite
  übernommen – bei Bedarf entfernen oder die ID anpassen

## Creatives (Meta Ads) + Facebook-Seite

Alles in `creatives/`. Gerendert wird mit **einem** Befehl:

```bash
node creatives/build.mjs          # je Stelle 1 Creative (9:16) + Facebook
node creatives/build.mjs --alle   # alle Motive in allen Formaten
```

Das Skript baut jede Datei aus HTML/CSS im CI der Karriereseite – gleiche
Farben, gleiche Schrift (Figtree liegt als woff2 in `creatives/fonts/`, damit
offline identisch gerendert wird). Creatives und Facebook-Bilder wirken
dadurch als ein Auftritt.

**Was standardmäßig entsteht**

| Datei | Format |
|-------|--------|
| `maler-9x16.png` | 1080 × 1920 |
| `parkettleger-9x16.png` | 1080 × 1920 |
| `raumausstatter-9x16.png` | 1080 × 1920 |
| `facebook-profilbild.png` | 1080 × 1080, alles Wichtige in der mittigen Kreisfläche |
| `facebook-titelbild.png` | 1640 × 856, Sicherheitszone 1092 × 616, unten rechts frei |

Das Hauptmotiv vereint Stellenbezeichnung, die Qualifikationshürde
(„Ausbildung und mindestens 3 Jahre Erfahrung vorausgesetzt" – filtert auf
Qualität statt Masse), die Benefits der jeweiligen Stelle und den CTA.
Safe Zones für Stories/Reels sind berücksichtigt.

**Weitere Motive** liegen in `MOTIVE` bereit und lassen sich mit `--alle`
rendern: `check` (reiner Qualifizierer mit allen K.-o.-Kriterien) und
`benefit` (Problem → Lösung). Ein zusätzliches Format ist eine Zeile in
`FORMATE` (`1x1` liegt auskommentiert bereit).

**Bildmaterial.** Das Skript verwendet ausschließlich Dateien aus `bilder/`:

- Foto je Stelle: siehe Tabelle unter „Bildmaterial"; die Zuordnung steht
  in `creatives/build.mjs` unter `foto:`
- Logo: `bilder/Schanbacher_Logo_weiss_SVG.png`. Es wird unverändert
  eingesetzt – nicht nachgebaut, nicht eingefärbt, Seitenverhältnis bleibt
  erhalten.

Fehlt eine Datei, rendert das Skript den CI-Farbverlauf bzw. die Wortmarke
und hängt **`-PREVIEW`** an den Dateinamen. Aktuell sind Logo und Fotos
vorhanden – alle Dateien sind final und ohne `-PREVIEW`.

Fehlt ein Textfeld in der `STELLEN`-Config, bricht der Build mit einer
klaren Meldung ab, statt „undefined" ins fertige Creative zu rendern.

## Bildmaterial

| Datei | verwendet für |
|-------|---------------|
| `Schanbacher_Logo_weiss_SVG.png` | Topbar, Hero, Footer, alle Creatives, Facebook |
| `IMG_0218.JPG` (Wand spachteln) | Hero allgemein + Maler, Creatives Maler |
| `IMG_0213.jpeg` (Boden schleifen) | Hero + Creatives Parkettleger |
| `IMG_0212.JPG` (Spachtel-/Wandtextur) | Hero + Creatives Raumausstatter |

Die Originale bleiben unverändert im Repo (die Creatives brauchen die volle
Auflösung). Für die Seite liegen daneben web-optimierte Zuschnitte:
`hero.jpg`, `hero-maler.jpg`, `hero-parkettleger.jpg`,
`hero-raumausstatter.jpg` – je 2400 × 1350, 260–950 KB.

Die Topbar ist dunkel, weil nur die **weiße** Logo-Variante vorliegt. Gibt es
eine dunkle Variante, kann die Topbar auch wieder hell werden.

## Noch zu prüfen

- **„Unbefristet"** ist angenommen (Tags, FAQ) – bitte bestätigen.
- Das Foto für **Raumausstatter** ist der schwächste Treffer (Wandtextur
  statt Bodenbelag/Sonnenschutz). Ein passenderes Motiv einfach in
  `creatives/build.mjs` unter `foto:` eintragen.
- Links zu Impressum und Datenschutz (aktuell
  `schanbachergmbh.de/impressum/` und `/datenschutz/`)
- Das Analytics-Snippet am Seitenende (`analytics.laendle-digital.com`,
  `data-website-id="schanbacher_gmbh"`) ist 1:1 von der Referenzseite
  übernommen – bei Bedarf entfernen oder die ID anpassen

## Creatives (Meta Ads) + Facebook-Seite

Alles in `creatives/`. Gerendert wird mit **einem** Befehl:

```bash
node creatives/build.mjs
```

Das Skript baut jede Datei aus HTML/CSS im CI der Karriereseite – gleiche
Farben, gleiche Schrift (Figtree liegt als woff2 in `creatives/fonts/`, damit
offline identisch gerendert wird). Creatives und Facebook-Bilder wirken
dadurch als ein Auftritt.

**Was erzeugt wird** – 3 Stellen × 3 Motive × 2 Formate + 2 Facebook-Bilder:

| Motiv | Ansatz | CTA |
|-------|--------|-----|
| `stelle` | Stelle direkt ansprechen | In 60 Sekunden bewerben |
| `check` | Qualifizierer – nennt die K.-o.-Kriterien, filtert auf Qualität statt Masse | Dann sollten wir reden |
| `benefit` | Problem → Lösung, Benefits der jeweiligen Stelle | Jetzt bewerben |

Formate: `4x5` (1080 × 1350) und `9x16` (1080 × 1920, Safe Zones für
Stories/Reels berücksichtigt). Ein weiteres Format ist eine Zeile in
`FORMATE` (z. B. `1x1` liegt auskommentiert bereit).

Facebook: `facebook-profilbild.png` (1080 × 1080, alles Wichtige in der
mittigen Kreisfläche) und `facebook-titelbild.png` (1640 × 856,
Sicherheitszone 1092 × 616 mittig, unten rechts für den Button frei).

**Bildmaterial.** Das Skript verwendet ausschließlich Dateien aus `bilder/`:

- Foto je Stelle: siehe Tabelle unter „Bildmaterial"; die Zuordnung steht
  in `creatives/build.mjs` unter `foto:`
- Logo: `bilder/Schanbacher_Logo_weiss_SVG.png`. Es wird unverändert
  eingesetzt – nicht nachgebaut, nicht eingefärbt, Seitenverhältnis bleibt
  erhalten.

Fehlt eine Datei, rendert das Skript den CI-Farbverlauf bzw. die Wortmarke
und hängt **`-PREVIEW`** an den Dateinamen. Aktuell sind Logo und Fotos
vorhanden – alle 20 Dateien sind final und ohne `-PREVIEW`.
