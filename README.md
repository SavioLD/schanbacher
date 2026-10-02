# Schanbacher – Karriereseite (Maler m/w/d)

Recruiting-Landingpage der **Schanbacher GmbH**, Filderstadt.
Ausgeschriebene Stelle: **Maler (m/w/d)** – und ausschließlich diese.

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

## Vorfilterung (Screening)

Fünf Fragen, **eine pro Schritt**, danach die Kontaktdaten – insgesamt
6 Schritte. Alle fünf Fragen sind **Pflichtfragen (K.-o.-Kriterien)**:

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

Nachgemessen im Browser (Chromium, Touch-Emulation):

| Viewport | scrollY über alle 6 Schritte | Höhe Fragen 1–5 | Weiter-Button | Karte + Topbar |
|----------|------------------------------|-----------------|---------------|----------------|
| 360 × 640 | konstant | 508 px | fix | 624 px |
| 375 × 667 | konstant | 508 px | fix | 624 px |
| 390 × 844 | konstant | 508 px | fix | 624 px |
| 414 × 896 | konstant | 508 px | fix | 624 px |

Ein Fragenschritt passt damit auf jedem Standard-Handy ohne Scrollen ins Bild.

## Lead Table

Webhook (Variable `WEBHOOK_URL` in `index.html`):
`https://api-v2.lead-table.com/api/webhook/generic/…`

Gesendet wird **nur** bei vollständiger, qualifizierter Bewerbung.
K.-o.-Abbrüche verlassen die Seite nie.

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

- Logo und Hero-Foto in `bilder/` ablegen
- CI-Farben/Schrift gegen den echten Styleguide abgleichen
- Links zu Impressum und Datenschutz (aktuell
  `schanbachergmbh.de/impressum/` und `/datenschutz/`)
- Das Analytics-Snippet am Seitenende (`analytics.laendle-digital.com`,
  `data-website-id="schanbacher_gmbh"`) ist 1:1 von der Referenzseite
  übernommen – bei Bedarf entfernen oder die ID anpassen
