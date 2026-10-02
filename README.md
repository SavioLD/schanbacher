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
--brand:#f5b400;      /* Schanbacher-Gelb (Logo-Schriftzug) */
--brand-dark:#d99e00; /* Hover-Zustand                      */
--brand-700:#8f6800;  /* Gelb-Ton für Text auf Hell         */
--brand-900:#1b1d21;  /* Anthrazit: Headlines, Hero, Footer */
--brand-soft:#fff4d6; /* heller Gelb-Ton für Flächen        */
--on-brand:#1b1d21;   /* Textfarbe AUF Gelb (Kontrast!)     */
--f-display / --f-body: Figtree
```

> **Hinweis:** Diese Werte sind aus den verfügbaren Quellen abgeleitet
> (gelber Logo-Schriftzug + Anthrazit). `schanbachergmbh.de` war aus der
> Build-Umgebung nicht erreichbar, die exakten CI-Werte konnten also nicht
> 1:1 aus der Website gezogen werden. Sobald Logo/Styleguide vorliegen:
> oben die fünf Zeilen ersetzen, fertig.

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

## Noch zu prüfen

- **„Unbefristet"** ist angenommen (Tags, FAQ) – bitte bestätigen.
- Logo und Hero-Foto in `bilder/` ablegen
- CI-Farben/Schrift gegen den echten Styleguide abgleichen
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

- Foto je Stelle: `bilder/maler.jpg`, `bilder/parkettleger.jpg`,
  `bilder/raumausstatter.jpg` – ersatzweise `bilder/hero.jpg`
- Logo: `bilder/schanbacher-logo-weiss.png/.svg` (oder `logo-weiss`,
  `schanbacher-logo`, `logo`). Es wird unverändert eingesetzt – nicht
  nachgebaut, nicht eingefärbt, Seitenverhältnis bleibt erhalten.

Fehlt eine Datei, rendert das Skript den CI-Farbverlauf bzw. die Wortmarke
und hängt **`-PREVIEW`** an den Dateinamen. Diese Dateien sind reine
Layout-Vorschauen und **nicht zum Schalten gedacht**. Sobald die Bilder in
`bilder/` liegen: einmal `node creatives/build.mjs` – dann fallen die
`-PREVIEW`-Dateien weg und die fertigen Creatives stehen da.
