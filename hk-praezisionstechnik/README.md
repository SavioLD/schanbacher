# HK‑Präzisionstechnik – Website (Designentwurf)

Neue Website für die **HK-Präzisionstechnik GmbH**, Oberndorf am Neckar
(Geschäftsführer Stefan Kruck). Grundlage:

- die drei **Video-Skripte** von Stefan Kruck (Spanntechnik, Unternehmen, Composite-Öfen)
- das PDF **„Leitlinien Agentur-Briefing“** (Anforderungen an Website, Technik, Qualität)
- die **Ofen-Recherche** im selben PDF (S. 5–6) für den neuen Markt Silikonverguss
- Firmendaten aus der **E-Mail-Signatur**

> **Status: klickbarer Designentwurf.** Laut Leitlinien wird die finale Seite in
> **WordPress** umgesetzt. Dieser Entwurf liefert Design, Seitenstruktur und
> alle Inhalte (DE + EN) als Vorlage dafür. Jeder Abschnittstyp entspricht
> später einem Block bzw. einer Vorlage in WordPress.

## Ansehen

- **Lokal:** im Ordner `python3 -m http.server` starten, dann `http://localhost:8000`
- **GitHub Pages:** nach dem Merge auf `main` unter
  `https://saviold.github.io/schanbacher/hk-praezisionstechnik/`

Der Entwurf ist auf **noindex** gestellt und zeigt oben eine Leiste
„Designentwurf – nicht öffentlich“.

## Seiten

| Seite | Deutsch | Englisch | Inhalt aus |
|-------|---------|----------|------------|
| Startseite | `index.html` | `en/index.html` | Skript 2 + Skript 1 („Drei Wege“) |
| Spanntechnik | `spanntechnik.html` | `en/workholding.html` | Skript 1 |
| Composite-Erwärmungsöfen | `composite-erwaermungsoefen.html` | `en/composite-heating-ovens.html` | Skript 3 |
| Silikonverguss aushärten | `silikonverguss-aushaerten.html` | `en/silicone-curing-ovens.html` | PDF S. 5–6 (**von HK fachlich prüfen lassen**) |
| Diamantdrahtsägen | `diamantdrahtsaegen.html` | `en/diamond-wire-saws.html` | nur Skript 2 – **Texte fehlen noch** |
| Unternehmen | `unternehmen.html` | `en/company.html` | Skript 2 + 3 |
| Karriere | `karriere.html` | `en/careers.html` | Platzhalter, eigenes Briefing folgt |
| Kontakt / Anfrage-Tool | `kontakt.html` | `en/contact.html` | — |
| Impressum, Datenschutz | `impressum.html`, `datenschutz.html` | `en/legal-notice.html`, `en/privacy.html` | Signatur / Gerüst |

**Texte:** Die Skripte sind nahezu wörtlich übernommen. Laut Leitlinien sind
die Texte „im Kern fertig“ und werden umgesetzt, nicht neu geschrieben.
Ergänzt wurden nur Überschriften und Microcopy (Buttons, Formular).
Die englische Fassung ist ein **Übersetzungsentwurf** und muss geprüft werden
(laut Leitlinien von HK selbst oder per DeepL plus menschlichem Review).

## Abgleich mit den Leitlinien

| Anforderung | Im Entwurf | Für WordPress |
|-------------|------------|---------------|
| Struktur aus Wireframes, Design durch Agentur | Design und Struktur aus den Skripten abgeleitet | Wireframes/Miro von HK liegen noch nicht vor – der Entwurf kann als Grundlage dienen |
| Texte umsetzen, nicht neu entwickeln | Skripte 1–3 übernommen | — |
| CI / Stil des Unternehmens | Farben aus dem Logo ausgelesen (s. u.) | mit Styleguide bzw. aktueller Website abgleichen |
| Mehrsprachigkeit | DE + EN, Sprachumschalter, `hreflang`, Inhalte je Sprache getrennt | Polylang (kostenlos) oder WPML (Lizenz) |
| Responsiv | geprüft 360 – 1440 px, kein seitlicher Überlauf | auf echten Geräten testen |
| **PageSpeed mobil ≥ 70** | Lighthouse mobil: **92–100** auf allen Seiten | schlankes Theme, Bilder komprimieren, Caching |
| **Barrierefreiheit** | axe-core: **0 Verstöße** (WCAG 2.2 AA, 20 Seiten × Handy/Desktop), Lighthouse 100. Sprunglink, Tastaturbedienung, Kontraste, Fokus, Formular-Labels. **Ohne Overlay-Plugin**, also keine Jahreslizenz | Struktur und Kontraste beibehalten |
| **SEO** | je Seite Title und Meta-Description, genau eine H1, saubere H2/H3, canonical, `sitemap.xml`, `robots.txt`, strukturierte Daten (Organization, WebPage, Breadcrumb). Live-Probe: SEO **100** | Yoast/Rank Math oder Theme-Funktionen |
| Tracking GA/Matomo, Search Console, Kunde als Inhaber | Matomo **ohne Cookies** vorbereitet, Search-Console-Tag vorbereitet (`_src/firma.mjs`) | Konten auf HK anlegen |
| Rechtssicherheit / DSGVO | Schriften lokal (keine Google-Fonts-Verbindung), Videos laden erst nach Klick, Google Maps nur als Link, keine Cookies | Datenschutztext von HK/DSB |
| Kontaktmöglichkeiten | Telefon, Fax, E-Mail, Adresse mit Anfahrtsbeschreibung | — |
| Interaktives Anfragetool (Leads) | 5 Schritte, Pflichtfelder geprüft, Spam-Falle, Deeplinks `kontakt.html?bereich=…` aus jedem Video-CTA | Ziel festlegen (E-Mail/CRM) |
| Social Media | vorbereitet (`CONFIG.social`), Kanäle noch unbekannt | — |
| Video-Tutorial zur Pflege | — | Teil der WordPress-Phase |

## Was noch von HK gebraucht wird

1. **Original-Logo** (SVG oder PNG, gern auch eine helle Variante). Aktuell ist es aus der
   Mail-Signatur ausgeschnitten (`bilder/hk-logo-aus-signatur.png`). Liegt
   `bilder/hk-logo.svg` oder `bilder/hk-logo.png`, nimmt der Build automatisch diese Datei.
2. **Aktuelle Website / Styleguide:** hk-prt.de war von hier aus nicht erreichbar. Farben sind
   deshalb aus dem Logo ausgelesen: Schiefergrün `#586860`, Steingrau `#d3cbc4`,
   Salbeigrün `#8fb1a0` (Firmenname in der Signatur). Anpassen nur im `:root`-Block
   von `_src/style.css`.
3. **Fotos** (siehe Tabelle unten)
4. **Videos** zu Skript 1–3, sobald gedreht → YouTube-ID oder MP4 in `_src/firma.mjs` (`VIDEOS`)
5. **Texte Diamantdrahtsägen** (Anwendungen, Werkstoffe, Maschinentypen, Daten)
6. **Fachliche Prüfung Silikonverguss:** die Werte sind typische Anforderungen der Anwendung
   aus der Recherche, keine HK-Spezifikation
7. **Impressum vollständig:** Die Signatur war nach „Geschäftsführer:“ abgeschnitten
8. **Datenschutzerklärung** vom Datenschutzbeauftragten. Die Seite listet bereits, was sie abdecken muss.
9. **Allgemeine E-Mail-Adresse** (aktuell `stefan.kruck@hk-prt.de` aus der Signatur)
10. **Ziel für Anfragen** (E-Mail-Postfach oder CRM)
11. **Review der englischen Texte**
12. **Social-Media-Kanäle**
13. **Karriereseite:** eigenes Briefing folgt

## Bildmaterial

Einfach mit genau diesem Namen in `bilder/` legen und neu bauen. Bis dahin
zeigt die Seite einen beschrifteten Platzhalter mit Dateinamen.

| Datei | Verwendet auf |
|-------|---------------|
| `hk-logo.svg` / `hk-logo.png` | Kopf, Fuß, Favicon |
| `spannvorrichtung.jpg` | Spanntechnik – „Das Problem“ |
| `ofen-serie.jpg` | Composite-Öfen – Herkunft |
| `passat.jpg` | Composite-Öfen – Karte Passat (16:10) |
| `scirocco.jpg` | Composite-Öfen – Karte Scirocco (16:10) |
| `monteur.jpg` | Composite-Öfen + Unternehmen – Service |
| `diamantdrahtsaege.jpg` | Diamantdrahtsägen – Seitenkopf (16:10) |
| `standort.jpg` | Unternehmen – Wurzeln |

Empfehlung für PageSpeed: ca. 1600 px breit, JPG/WebP, unter 300 KB.

## Bearbeiten und neu bauen

```bash
node hk-praezisionstechnik/_src/build.mjs
```

Keine Abhängigkeiten, nur Node ≥ 18. Der Build schreibt alle 20 Seiten, die
`sitemap.xml` und die `robots.txt` neu.

| Was | Wo |
|-----|----|
| Texte Deutsch / Englisch | `_src/inhalte/de.mjs`, `_src/inhalte/en.mjs` |
| Firmendaten, Videos, Tracking, Anfrage-Ziel, Entwurf an/aus | `_src/firma.mjs` |
| Farben, Schriften, Layout | `_src/style.css` (CI nur im `:root`-Block) |
| Navigation, Formular-Logik | `_src/app.js` |
| Seitengerüst, Abschnittstypen | `_src/build.mjs` |

**Livegang:** in `_src/firma.mjs` `entwurf: false` setzen. Damit verschwinden
Entwurfsleiste und Platzhalter-Kästen, die Seiten sind indexierbar und die
`robots.txt` gibt die Seite frei.

**Schrift:** Barlow und Barlow Condensed (SIL Open Font License), lokal in
`assets/fonts/` – keine Verbindung zu Google.
