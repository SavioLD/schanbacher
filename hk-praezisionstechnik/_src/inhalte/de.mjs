/* =====================================================================
   INHALTE DEUTSCH
   ---------------------------------------------------------------------
   Grundlage: die drei Video-Skripte von Stefan Kruck (Texte „im Kern
   fertig" laut Agentur-Leitlinien – nur umgesetzt, nicht neu getextet;
   ergänzt wurden Überschriften und Microcopy) sowie die Ofen-Recherche
   aus dem Leitlinien-PDF (S. 5–6) für die Seite Silikonverguss.

   Jede Seite = Liste von Abschnitten. Typen: kopf, fakten, karten,
   zitat, schritte, wege, achse, split, tabelle, cta, hinweis, prosa,
   anfrage. Links im Text: [Text](seite:kontakt?bereich=spanntechnik)
   ===================================================================== */

const VIDEO_UNTERZEILE = 'Stefan Kruck, Geschäftsführer';

const WEGE = {
  typ: 'wege',
  kicker: 'Der dritte Weg',
  h2: 'Sie hatten bisher zwei Wege. Wir haben einen dritten.',
  liste: [
    { nr: 'Weg 1', titel: 'Deutsche Qualität', plus: ['Präzise, prozesssicher, langlebig'], minus: ['Aber langsam – Änderungsschleifen inklusive'] },
    { nr: 'Weg 2', titel: 'Asiatische Anbieter', plus: ['Prinzipiell schnell'], minus: ['Aber häufig nicht präzise genug für Ihre Anforderungen', 'Was Sie an Zeit gewinnen, verlieren Sie durch Nacharbeit oder instabile Prozesse in der laufenden Produktion'] },
    { nr: 'Weg 3', titel: 'HK‑Präzisionstechnik', hk: true, claim: 'German Precision in Chinese Speed', plus: ['Präzise und prozesssicher – Systeme, die über Jahrzehnte laufen', 'Schnell entwickelt – weil Ihre Time-to-Market über Marktanteile entscheidet', 'Eine belastbare Richtung innerhalb weniger Tage'] }
  ],
  nachsatz: 'Beide Wege kosten Sie am Ende mehr als geplant – in Zeit oder in Qualität. <strong>Wir haben einen dritten Weg.</strong>'
};

const ARBEITSWEISE = {
  typ: 'schritte',
  anker: 'arbeitsweise',
  kicker: 'So arbeiten wir',
  h2: 'Keine Warteschlange. Eine klare Richtung.',
  liste: [
    { titel: 'Direkt beim Kernteam', text: 'Wenn eine Anfrage bei uns ankommt, landet sie nicht in einer Warteschlange. Sie landet direkt bei einem kleinen Kernteam aus Konstruktion und Anwendungstechnik – bei Menschen, die fachlich entscheiden können und den Auftrag haben, das auch zu tun.' },
    { titel: 'In wenigen Tagen eine belastbare Richtung', text: 'Keine Absichtserklärung, keine Zwischenstände, sondern eine konkrete Aussage, mit der Sie intern weiterplanen können. Während andere Anbieter noch intern abstimmen, haben Sie bei uns bereits eine Grundlage.' },
    { titel: 'Nach Ihrer Zusage fangen wir an', text: 'Ohne zu warten, bis jede Vertragsklausel bis ins letzte Detail ausverhandelt ist. Denn Ihr Projekt hat einen Termin.' }
  ],
  nachsatz: 'Ein verpasster Serienstart, eine verschobene OEM-Abnahme oder ein verzögerter Markteinführungstermin hat Konsequenzen, die sich nicht durch einen guten Lieferantenvertrag wieder einholen lassen.'
};

const ZITAT_20_JAHRE = {
  typ: 'zitat',
  sr: 'Stefan Kruck über langjährige Kunden',
  text: 'Wir haben Kunden, die uns anrufen und nach einer Vorrichtung fragen, die wir vor 20 Jahren geliefert haben. Und wir können ihnen oft genauer sagen, in welcher Linie sie heute noch läuft, als die aktuelle Mannschaft vor Ort.',
  name: 'Stefan Kruck',
  rolle: 'Geschäftsführer, HK-Präzisionstechnik',
  nachsatz: 'Diese Situation ist kein Zufall. Das ist die Konsequenz aus einer Arbeitsweise, die wir von Anfang an bewusst gewählt haben.'
};

export default {
  lang: 'de',
  htmlLang: 'de-DE',
  og: 'de_DE',
  name: 'Deutsch',
  kurz: 'DE',
  ordner: '',

  slugs: {
    start: 'index.html',
    spanntechnik: 'spanntechnik.html',
    oefen: 'composite-erwaermungsoefen.html',
    silikon: 'silikonverguss-aushaerten.html',
    saegen: 'diamantdrahtsaegen.html',
    unternehmen: 'unternehmen.html',
    karriere: 'karriere.html',
    kontakt: 'kontakt.html',
    impressum: 'impressum.html',
    datenschutz: 'datenschutz.html'
  },

  nav: [
    { seite: 'spanntechnik' },
    { text: 'Öfen', kinder: ['oefen', 'silikon'] },
    { seite: 'saegen' },
    { seite: 'unternehmen' },
    { seite: 'karriere' }
  ],

  ui: {
    zumInhalt: 'Zum Inhalt springen',
    entwurf: 'Designentwurf HK‑Präzisionstechnik – nicht öffentlich',
    stand: 'Stand',
    menue: 'Menü',
    hauptnavigation: 'Hauptnavigation',
    sprache: 'Sprache wählen',
    anfragen: 'Projekt anfragen',
    startseite: 'Startseite',
    brotkrumen: 'Brotkrumen-Navigation',
    videoFolgt: 'Video folgt',
    videoAbspielen: 'Video abspielen',
    videoYoutube: 'Beim Abspielen wird eine Verbindung zu YouTube hergestellt.',
    bildFolgt: 'Bildmaterial von HK',
    platzhalter: 'Platzhalter · nur im Entwurf sichtbar',
    vorteil: 'Vorteil',
    nachteil: 'Nachteil',
    ja: 'Ja',
    nein: 'Nein',
    serienstart: 'Serienstart',
    oderAnrufen: 'Oder direkt anrufen:',
    telefon: 'Telefon',
    fax: 'Fax',
    email: 'E-Mail',
    adresse: 'Adresse & Anfahrt',
    anfahrt: 'Navi: Aldi Süd, Neckarstraße 1. Vor dem Aldi-Parkplatz rechts unter der Brücke durch – Gebäude 4.',
    route: 'Route in Google Maps öffnen',
    neuesFenster: '(öffnet neues Fenster)',
    direkt: 'Direkter Kontakt',
    bereiche: 'Bereiche',
    unternehmen: 'Unternehmen',
    kontakt: 'Kontakt',
    fussText: 'Spannvorrichtungen, Composite-Erwärmungsöfen und Diamantdrahtsägen aus Oberndorf am Neckar – im Einsatz in Serienproduktionen weltweit.',

    form: {
      schritt: 'Schritt {n} von {g}',
      weiter: 'Weiter',
      zurueck: 'Zurück',
      optional: 'optional',
      s1: 'Worum geht es?',
      s1hilfe: 'Wählen Sie den Bereich, zu dem Sie eine Einschätzung möchten.',
      bereiche: [
        { wert: 'spanntechnik', text: 'Spanntechnik / Vorrichtung' },
        { wert: 'composite', text: 'Composite-Erwärmungsofen' },
        { wert: 'silikon', text: 'Ofen für Silikonverguss' },
        { wert: 'saegen', text: 'Diamantdrahtsäge' },
        { wert: 'service', text: 'Service für eine bestehende Anlage' },
        { wert: 'sonstiges', text: 'Etwas anderes' }
      ],
      s2: 'Wo steht Ihr Projekt?',
      s2hilfe: 'Je früher wir einsteigen, desto mehr können wir für Ihren Serienstart tun.',
      stände: [
        { wert: 'entwicklung', text: 'Das Bauteil ist noch in der Entwicklung', klein: 'Ideal für Simultanes Engineering' },
        { wert: 'definiert', text: 'Das Bauteil ist definiert – Spanntechnik oder Anlage fehlt' },
        { wert: 'stabilisieren', text: 'Der Prozess läuft und soll stabilisiert werden' },
        { wert: 'bestand', text: 'Es geht um eine bestehende Anlage', klein: 'Service, Wartung, Erweiterung' }
      ],
      s3: 'Wann soll es losgehen?',
      s3hilfe: 'Ihr Projekt hat einen Termin – sagen Sie uns, welchen.',
      zeiten: [
        { wert: 'sofort', text: 'So schnell wie möglich – der Termin brennt' },
        { wert: '3m', text: 'In den nächsten 3 Monaten' },
        { wert: '12m', text: 'In 3 bis 12 Monaten' },
        { wert: 'offen', text: 'Noch offen' }
      ],
      s4: 'Erzählen Sie uns kurz von Ihrem Projekt.',
      s4hilfe: 'Ein paar Stichworte reichen. Zeichnungen und Details klären wir im Gespräch.',
      nachricht: 'Ihr Projekt',
      nachrichtPlatzhalter: 'z. B. Bauteil, Werkstoff, Stückzahl, geplanter Serienstart …',
      s5: 'Wohin dürfen wir Ihre Einschätzung schicken?',
      s5hilfe: 'Sie erhalten innerhalb weniger Tage eine konkrete Einschätzung von uns.',
      firma: 'Firma',
      vorname: 'Vorname',
      nachname: 'Nachname',
      email: 'E-Mail',
      telefon: 'Telefon',
      datenschutz: 'Ich bin einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. Details in der [Datenschutzerklärung](seite:datenschutz).',
      senden: 'Anfrage senden',
      dankeTitel: 'Danke – Ihre Anfrage ist da.',
      dankeText: 'Sie landet direkt bei unserem Kernteam aus Konstruktion und Anwendungstechnik. Sie erhalten innerhalb weniger Tage eine konkrete Einschätzung. Kein Zwischenstand. Eine klare Richtung.',
      ohneJs: 'Das Anfrage-Tool braucht JavaScript. Schreiben Sie uns einfach an {MAIL} oder rufen Sie an: {TEL}.',
      js: {
        schritt: 'Schritt {n} von {g}',
        wahl: 'Bitte wählen Sie eine Option.',
        pflicht: 'Bitte füllen Sie dieses Feld aus.',
        email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        datenschutz: 'Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu.',
        senden: 'Das hat leider nicht geklappt. Bitte versuchen Sie es noch einmal oder rufen Sie uns an.',
        ja: 'Ja'
      }
    }
  },

  seiten: {
    /* ================================================================ START (Skript 2 + Skript 1) */
    start: {
      name: 'Startseite',
      title: 'Spanntechnik, Composite-Öfen & Drahtsägen | HK-Präzisionstechnik',
      description: 'Spannvorrichtungen, Composite-Öfen und Diamantdrahtsägen aus Oberndorf – prozesssicher, langlebig, schnell entwickelt. Ihre Einschätzung in wenigen Tagen.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Spanntechnik · Composite-Öfen · Drahtsägen',
          h1: 'German Precision <em>in Chinese Speed.</em>',
          lead: 'Wir entwickeln Spannvorrichtungen, Composite-Erwärmungsöfen und Diamantdrahtsägen – Systeme, die in anspruchsvollen Produktionsumgebungen über Jahrzehnte laufen müssen. Prozesssicher, reproduzierbar, langlebig. Und schnell entwickelt.',
          knoepfe: [{ text: 'Projekt anfragen', seite: 'kontakt' }, { text: 'So arbeiten wir', seite: 'start', extra: '#arbeitsweise', stil: 'rahmen' }],
          video: { id: 'skript2', titel: 'Nicht nur ein Claim. Ein Arbeitsprinzip.', unterzeile: VIDEO_UNTERZEILE }
        },
        {
          typ: 'fakten',
          liste: [
            { wert: 'Wenige Tage', text: 'bis zu Ihrer belastbaren Einschätzung' },
            { wert: 'Seit den 1980ern', text: 'Entwicklung in der Composite-Erwärmung' },
            { wert: '25+ Jahre', text: 'laufen viele unserer Anlagen im Serieneinsatz' },
            { wert: 'Weltweit', text: 'Installation und Wartung durch eigene Monteure' }
          ]
        },
        {
          typ: 'karten',
          kicker: 'Was wir bauen',
          h2: 'Systeme, die über Jahrzehnte laufen müssen.',
          intro: 'Prozesssicher, reproduzierbar, langlebig – und schnell entwickelt, weil Ihre Time-to-Market über Marktanteile entscheidet, nicht über akademische Kennzahlen.',
          liste: [
            { icon: 'spann', titel: 'Spanntechnik & Vorrichtungen', text: 'Simultanes Engineering: Die Spanntechnik entsteht parallel zu Ihrem Bauteil – und Ihr Serienstart rückt um Monate nach vorn.', seite: 'spanntechnik', link: 'Zur Spanntechnik' },
            { icon: 'ofen', titel: 'Composite-Erwärmungsöfen', text: 'Passat und Scirocco: gleichmäßige Durchwärmung bis in den Kern – auf kleiner Stellfläche und in Taktzeiten für die Serie.', seite: 'oefen', link: 'Zu den Öfen' },
            { icon: 'saege', titel: 'Diamantdrahtsägen', text: 'Prozesssicher, reproduzierbar, langlebig – für anspruchsvolle Produktionsumgebungen.', seite: 'saegen', link: 'Zu den Diamantdrahtsägen' }
          ],
          teaser: { seite: 'silikon', marke: 'Neu', text: 'Öfen zum Aushärten von Silikonverguss' }
        },
        ZITAT_20_JAHRE,
        ARBEITSWEISE,
        WEGE,
        {
          typ: 'cta',
          kicker: 'German Precision in Chinese Speed',
          h2: 'Sie suchen einen Partner, der Ihre Produktion wirklich versteht?',
          text: 'Nicht nur Ihr Lastenheft liest? Dann freue ich mich auf das Gespräch.',
          signatur: 'Stefan Kruck, Geschäftsführer',
          knoepfe: [{ text: 'Projekt anfragen', seite: 'kontakt' }]
        }
      ]
    },

    /* ================================================================ SPANNTECHNIK (Skript 1) */
    spanntechnik: {
      name: 'Spanntechnik',
      navInfo: 'Simultanes Engineering',
      title: 'Spanntechnik & Vorrichtungen – Simultanes Engineering | HK',
      description: 'Spannvorrichtungen, die parallel zu Ihrem Bauteil entstehen. Simultanes Engineering verkürzt die Vorlaufzeit bis zum Serienstart regelmäßig um mehrere Monate.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Spanntechnik · Simultanes Engineering',
          h1: 'Ihr nächstes Werkstück soll in Serie – und der Termin brennt schon?',
          lead: 'Das Bauteil ist fast fertig – aber die Spanntechnik fängt erst dann an. Und plötzlich verschiebt sich der Serienstart um Wochen, manchmal Monate. Wir haben dafür einen anderen Weg.',
          knoepfe: [{ text: 'Einschätzung anfragen', seite: 'kontakt', extra: '?bereich=spanntechnik' }],
          video: { id: 'skript1', titel: 'Simultanes Engineering in 2 Minuten', unterzeile: VIDEO_UNTERZEILE }
        },
        {
          typ: 'split',
          kicker: 'Das Problem',
          h2: 'Kein Einzelfall. Ein strukturelles Problem.',
          absaetze: [
            'Wir sprechen täglich mit Entwicklungs- und Produktionsverantwortlichen, die dasselbe Problem kennen: Das Bauteil ist fast fertig – aber die Spanntechnik fängt erst dann an. Und plötzlich verschiebt sich der Serienstart um Wochen, manchmal Monate.',
            'Das ist kein Einzelfall. Das ist ein strukturelles Problem im klassischen Entwicklungsprozess.'
          ],
          bild: { datei: 'spannvorrichtung.jpg', text: 'Foto: Spannvorrichtung aus einem Kundenprojekt', alt: 'Spannvorrichtung von HK-Präzisionstechnik' }
        },
        WEGE,
        {
          typ: 'achse',
          kicker: 'Simultanes Engineering',
          h2: 'Wir steigen ein, bevor das Bauteil fertig definiert ist.',
          intro: 'Während Ihr Werkstück konkretisiert wird, entwickelt sich die Spanntechnik bei uns parallel weiter.',
          zeilen: [
            { titel: 'Klassischer Entwicklungsprozess', start: 16, balken: [
              { art: 'bauteil', von: 1, bis: 5, text: 'Bauteilentwicklung', kurz: 'Bauteil' },
              { art: 'vorr', von: 6, bis: 11, text: 'Vorrichtungsentwicklung', kurz: 'Vorrichtung' },
              { art: 'aend', von: 12, bis: 15, text: 'Änderungsschleifen', kurz: 'Änderungen' }] },
            { titel: 'Simultanes Engineering mit HK', start: 8, gewinn: { von: 8, bis: 15, text: 'Monate früher in Serie' }, balken: [
              { art: 'bauteil', von: 1, bis: 5, text: 'Bauteilentwicklung', kurz: 'Bauteil' },
              { art: 'hk', von: 2, bis: 7, spur: 2, text: 'Spanntechnik – parallel entwickelt', kurz: 'Spanntechnik' }] }
          ],
          alternativtext: 'Vergleich: Im klassischen Prozess folgen Bauteilentwicklung, Vorrichtungsentwicklung und Änderungsschleifen nacheinander, der Serienstart kommt spät. Beim Simultanen Engineering läuft die Spanntechnik parallel zur Bauteilentwicklung, der Serienstart ist Monate früher.',
          unterschrift: 'Schematische Darstellung. In unseren Projekten hat dieser parallele Ansatz die Vorlaufzeit bis zum Serienstart regelmäßig um mehrere Monate verkürzt.'
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          kicker: 'Ihr Vorteil',
          h2: 'Was das für Sie konkret bedeutet.',
          liste: [
            { icon: 'uhr', titel: 'Keine Wartezeiten', text: 'zwischen Bauteilfreigabe und Vorrichtungsentwicklung.' },
            { icon: 'schleife', titel: 'Keine späten Änderungsschleifen', text: 'weil wir von Anfang an dabei waren.' },
            { icon: 'weniger', titel: 'Häufig sogar eingesparte Vorrichtungen', text: 'weil wir durch kleine Anpassungen am Bauteil ganze Spannschritte eliminieren können, bevor sie gebaut werden müssen.' },
            { icon: 'kalender', titel: 'Monate Vorsprung', text: 'Monate, in denen Ihre Wettbewerber noch entwickeln – während Sie bereits liefern.' },
            { icon: 'flagge', titel: 'Erstlieferant statt zweite Wahl', text: 'Monate, in denen Sie beim OEM als Erstlieferant feststehen, statt als zweite Wahl nachzurücken.' },
            { icon: 'stabil', titel: 'Stabil ab dem ersten Serienteil', text: 'weil die Spanntechnik nicht nachträglich angepasst, sondern von Anfang an für Ihr Bauteil entwickelt worden ist.' }
          ]
        },
        {
          typ: 'cta',
          kicker: 'Simultanes Engineering',
          h2: 'Passt das zu Ihrem nächsten Projekt?',
          text: 'Sie erhalten innerhalb weniger Tage eine konkrete Einschätzung von uns. Kein Zwischenstand. Eine klare Richtung.',
          knoepfe: [{ text: 'Einschätzung anfragen', seite: 'kontakt', extra: '?bereich=spanntechnik' }]
        }
      ]
    },

    /* ================================================================ COMPOSITE-ÖFEN (Skript 3) */
    oefen: {
      name: 'Composite-Erwärmungsöfen',
      navInfo: 'Passat und Scirocco',
      title: 'Composite-Erwärmungsöfen Passat & Scirocco | HK-Präzisionstechnik',
      description: 'Gleichmäßige Durchwärmung thermoplastischer Compositehalbzeuge bis in den Kern – auf kleiner Stellfläche, in Serientaktzeiten. Viele Anlagen laufen seit 25+ Jahren.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Composite-Erwärmungsöfen',
          h1: 'Die Taktzeit stimmt – aber der Kern wird nicht warm?',
          lead: 'Oder die Oberfläche verbrennt, bevor der Kern die Temperatur erreicht? Dann kennen Sie das Problem, das wir mit unseren Öfen lösen.',
          knoepfe: [{ text: 'Prozess besprechen', seite: 'kontakt', extra: '?bereich=composite' }],
          video: { id: 'skript3', titel: 'Gleichmäßig bis in den Kern', unterzeile: VIDEO_UNTERZEILE }
        },
        {
          typ: 'tabelle',
          kicker: 'Das Problem',
          h2: 'Standardlösungen stoßen an dieselbe Grenze.',
          intro: 'In der Erwärmung thermoplastischer Compositehalbzeuge stoßen die meisten Standardlösungen an dieselbe Grenze. Keiner dieser Wege bringt Sie wirklich weiter.',
          kopf: ['', 'Infrarotofen', 'Herkömmlicher Umluftofen', 'HK Passat · Scirocco'],
          kopfSr: 'Kriterium',
          hkSpalte: 3,
          zeilen: [
            ['Gleichmäßige Durchwärmung bis in den Kern', { ok: false, text: 'Erwärmt schnell, aber ungleichmäßig: Der Kern bleibt kalt, die Oberfläche überhitzt' }, { ok: true, text: 'Löst das Problem der gleichmäßigen Durchwärmung' }, { ok: true, text: 'Gleichmäßig bis in den Kern' }],
            ['Stellfläche', { text: '–' }, { ok: false, text: 'Große Stellfläche' }, { ok: true, text: 'Passat: kleine Stellfläche' }],
            ['Taktzeit im Serienprozess', { ok: true, text: 'Schnell' }, { ok: false, text: 'Für einen echten Serienprozess zu lang' }, { ok: true, text: 'Scirocco: ausgelegt für Anwendungen, in denen die Taktzeit nicht verhandelbar ist' }]
          ],
          nachsatz: 'Das Ergebnis in beiden Fällen: Ausschuss, Nacharbeit oder ein Prozess, der nie wirklich stabil läuft.'
        },
        {
          typ: 'split',
          stein: true,
          kicker: 'Unsere Herkunft',
          h2: 'Seit den 1980er-Jahren an genau diesem Problem.',
          absaetze: [
            'Wir beschäftigen uns mit diesem Problem seit den 1980er-Jahren – damals noch unter dem Dach von Heckler & Koch, mit erheblichem Entwicklungsbudget und dem Ziel, eine Lösung zu bauen, die in der Serienproduktion jahrzehntelang stabil läuft.',
            'Aus dieser Arbeit sind zwei Ofenklassen entstanden, die heute in Serienproduktionen weltweit im Einsatz sind.'
          ],
          bild: { datei: 'ofen-serie.jpg', text: 'Foto: Ofenanlage im Serieneinsatz', alt: 'Composite-Erwärmungsofen von HK im Serieneinsatz' }
        },
        {
          typ: 'karten',
          spalten: 2,
          kicker: 'Zwei Ofenklassen',
          h2: 'Passat und Scirocco.',
          liste: [
            { bild: { datei: 'passat.jpg', text: 'Foto: Ofen Passat', alt: 'Composite-Erwärmungsofen Passat', format: '16/10' }, tag: 'Kompakt & prozesssicher', titel: 'Passat', text: 'Gleichmäßige Durchwärmung bis in den Kern, auf kleiner Stellfläche, prozesssicher über die gesamte Laufzeit.' },
            { bild: { datei: 'scirocco.jpg', text: 'Foto: Ofen Scirocco', alt: 'Composite-Erwärmungsofen Scirocco', format: '16/10' }, tag: 'Für kurze Taktzeiten', titel: 'Scirocco', text: 'Dieselbe Qualität der Erwärmung – ausgelegt für Anwendungen, in denen die Taktzeit nicht verhandelbar ist.' }
          ]
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          stein: true,
          spalten: 4,
          kicker: 'Ihr Vorteil',
          h2: 'Was das für Ihre Produktion konkret bedeutet.',
          liste: [
            { icon: 'ausschuss', titel: 'Kein Ausschuss', text: 'durch ungleichmäßige Erwärmung.' },
            { icon: 'zyklus', titel: 'Planbare Zykluszeiten', text: 'stabil und planbar – Tag für Tag.' },
            { icon: 'stabil', titel: 'Läuft auch nach Jahren', text: 'ein Prozess, der nicht nach drei Jahren anfängt, Probleme zu machen.' },
            { icon: 'kalender', titel: 'Investition, die trägt', text: 'über einen gesamten Produktlebenszyklus – nicht nur wenige Jahre.' }
          ],
          nachsatz: 'Viele unserer Anlagen laufen seit über 25 Jahren im Serieneinsatz. <strong>Das ist kein Marketingversprechen</strong> – das bedeutet für Sie, dass Ihre Investition nicht nach wenigen Jahren abgeschrieben ist, sondern über einen gesamten Produktlebenszyklus trägt.'
        },
        {
          typ: 'split',
          umgekehrt: true,
          kicker: 'Service',
          h2: 'Ein Ansprechpartner, der Ihre Anlage kennt.',
          absaetze: [
            'Unsere eigenen Monteure installieren und warten diese Systeme – international, über die gesamte Laufzeit der Anlage.',
            'Sie haben einen Ansprechpartner, der Ihre Anlage kennt. Nicht ein Servicecenter, das jedes Mal neu eingearbeitet werden muss.'
          ],
          liste: ['Installation durch eigene Monteure', 'Wartung über die gesamte Laufzeit', 'International im Einsatz'],
          knoepfe: [{ text: 'Neu: Öfen für Silikonverguss', seite: 'silikon', stil: 'rahmen' }],
          bild: { datei: 'monteur.jpg', text: 'Foto: Monteur bei Installation oder Wartung', alt: 'HK-Monteur bei der Wartung einer Ofenanlage' }
        },
        {
          typ: 'cta',
          kicker: 'Composite-Erwärmung',
          h2: 'Sie bauen gerade einen Prozess auf – oder wollen einen bestehenden stabilisieren?',
          text: 'Wir schauen uns Ihre Anforderungen an und sagen Ihnen direkt, welche Lösung für Ihren Prozess Sinn macht.',
          knoepfe: [{ text: 'Anforderungen schicken', seite: 'kontakt', extra: '?bereich=composite' }]
        }
      ]
    },

    /* ================================================================ SILIKONVERGUSS (PDF S. 5–6, neuer Markt) */
    silikon: {
      name: 'Silikonverguss aushärten',
      navInfo: 'Neu: Temper- und Umluftöfen',
      title: 'Öfen zum Aushärten von Silikonverguss | HK-Präzisionstechnik',
      description: 'Silikon-Vergussmassen prozesssicher aushärten: Temperaturhomogenität, gleichmäßige Umluft, Abluft, Vakuumoption. Sprechen Sie mit uns über Ihren Prozess.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Öfen · Neue Anwendung',
          h1: 'Silikonverguss prozesssicher aushärten.',
          lead: 'Für das Aushärten von Silikon-Vergussmassen brauchen Sie keinen klassischen „Backofen“, sondern einen präzisen Industrie-Umluftofen bzw. Temperofen mit guter Temperaturhomogenität. Gleichmäßige Durchwärmung ist seit den 1980er-Jahren unser Thema.',
          knoepfe: [{ text: 'Prozess besprechen', seite: 'kontakt', extra: '?bereich=silikon' }],
          hinweis: 'Neuer Markt laut Briefing. Inhalte stammen aus der Marktrecherche im Leitlinien-PDF (S. 5–6) – die technischen Angaben sind <em>typische Anforderungen der Anwendung</em>, keine HK-Spezifikation. Bitte fachlich von HK prüfen lassen.'
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          spalten: 4,
          kicker: 'Worauf es ankommt',
          h2: 'Die entscheidenden Kriterien.',
          intro: 'Entscheidend sind vor allem Temperaturgenauigkeit, gleichmäßige Umluft und Abluftführung – gerade bei additionsvernetzenden 2K-Silikonen.',
          liste: [
            { icon: 'thermo', titel: 'Temperaturhomogenität', text: 'typisch ±1–2 K im Nutzraum.' },
            { icon: 'ziel', titel: 'Regelbereich', text: 'typisch 40–200 °C.' },
            { icon: 'umluft', titel: 'Gleichmäßige Umluft', text: 'für eine gleichmäßige Aushärtung im ganzen Nutzraum.' },
            { icon: 'abluft', titel: 'Abluftführung', text: 'wichtig bei kondensationsvernetzenden Systemen.' },
            { icon: 'vakuum', titel: 'Vakuumoption', text: 'reduziert Lufteinschlüsse.' },
            { icon: 'glanz', titel: 'Edelstahl-Innenraum', text: 'leichter zu reinigen.' },
            { icon: 'daten', titel: 'Datenerfassung', text: 'für Automotive- und ISO-Prozesse.' },
            { icon: 'gas', titel: 'Stickstoffoption', text: 'falls Sauerstoff oder Feuchte kritisch sind.' }
          ],
          nachsatz: 'Je nach Prozess kommen <strong>ATEX- oder Reinraum-Eignung</strong> hinzu.'
        },
        {
          typ: 'tabelle',
          stein: true,
          kicker: 'Einordnung',
          h2: 'Welcher Ofentyp zu welcher Anwendung passt.',
          kopf: ['Anwendung', 'Typischer Ofen'],
          zeilen: [
            ['Prototypen / Labor', 'Kleiner Umluft-Laborofen'],
            ['Elektronikverguss', 'Präzisions-Temperofen'],
            ['Blasenfreier Verguss', 'Vakuumofen oder Kombination aus Vakuumkammer und Umluftofen'],
            ['Wärmeleitfähige Silikone', 'Umluftofen mit hoher Homogenität'],
            ['Hoher Durchsatz', 'Durchlaufofen'],
            ['Automotive / Serienfertigung', 'SPS-gesteuerte Industrieanlage']
          ]
        },
        {
          typ: 'cta',
          kicker: 'Silikonverguss',
          h2: 'Sie härten Silikonverguss aus – oder planen es?',
          text: 'Nennen Sie uns Vergussmasse, Bauteilgröße und Stückzahl. Wir sagen Ihnen direkt, welche Lösung für Ihren Prozess Sinn macht.',
          knoepfe: [{ text: 'Prozess besprechen', seite: 'kontakt', extra: '?bereich=silikon' }]
        }
      ]
    },

    /* ================================================================ DIAMANTDRAHTSÄGEN (noch kein Skript) */
    saegen: {
      name: 'Diamantdrahtsägen',
      title: 'Diamantdrahtsägen | HK-Präzisionstechnik',
      description: 'Diamantdrahtsägen von HK-Präzisionstechnik: entwickelt für anspruchsvolle Produktionsumgebungen – prozesssicher, reproduzierbar, langlebig.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Diamantdrahtsägen',
          h1: 'Diamantdrahtsägen für anspruchsvolle Produktionen.',
          lead: 'Systeme, die in anspruchsvollen Produktionsumgebungen über Jahrzehnte laufen müssen: prozesssicher, reproduzierbar, langlebig – und schnell entwickelt.',
          knoepfe: [{ text: 'Anfrage stellen', seite: 'kontakt', extra: '?bereich=saegen' }],
          bild: { datei: 'diamantdrahtsaege.jpg', text: 'Foto: Diamantdrahtsäge', alt: 'Diamantdrahtsäge von HK-Präzisionstechnik', format: '16/10' }
        },
        {
          typ: 'hinweis',
          text: 'Für die Diamantdrahtsägen liegt noch kein Skript vor. Benötigt von HK: Text (Anwendungen, Werkstoffe, Maschinentypen), Fotos und ggf. technische Daten. Bis dahin steht hier nur, was aus Skript 2 belegt ist.'
        },
        {
          typ: 'split',
          kicker: 'Unser Anspruch',
          h2: 'Auch hier gilt: eine klare Richtung in wenigen Tagen.',
          absaetze: [
            'Ihre Anfrage landet nicht in einer Warteschlange, sondern direkt bei einem kleinen Kernteam aus Konstruktion und Anwendungstechnik.',
            'Sie bekommen innerhalb weniger Tage eine belastbare Richtung – keine Absichtserklärung, sondern eine konkrete Aussage, mit der Sie intern weiterplanen können.'
          ],
          liste: ['Prozesssicher', 'Reproduzierbar', 'Langlebig'],
          knoepfe: [{ text: 'So arbeiten wir', seite: 'start', extra: '#arbeitsweise', stil: 'rahmen' }]
        },
        {
          typ: 'cta',
          h2: 'Sie planen einen Sägeprozess?',
          text: 'Schildern Sie uns Ihre Anwendung. Sie erhalten innerhalb weniger Tage eine konkrete Einschätzung.',
          knoepfe: [{ text: 'Anfrage stellen', seite: 'kontakt', extra: '?bereich=saegen' }]
        }
      ]
    },

    /* ================================================================ UNTERNEHMEN (Skript 2 + 3) */
    unternehmen: {
      name: 'Unternehmen',
      title: 'Über uns – HK-Präzisionstechnik in Oberndorf am Neckar',
      description: 'Kleines Kernteam aus Konstruktion und Anwendungstechnik, Wurzeln bei Heckler & Koch, eigene Monteure weltweit. German Precision in Chinese Speed als Arbeitsprinzip.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Unternehmen',
          h1: 'Nicht nur ein Claim. Ein Arbeitsprinzip.',
          lead: 'German Precision in Chinese Speed: Wir entwickeln Systeme, die in anspruchsvollen Produktionsumgebungen über Jahrzehnte laufen müssen. Und wir entwickeln sie schnell – weil Ihre Time-to-Market über Marktanteile entscheidet, nicht über akademische Kennzahlen.',
          knoepfe: [{ text: 'Projekt anfragen', seite: 'kontakt' }],
          video: { id: 'skript2', titel: 'Nicht nur ein Claim. Ein Arbeitsprinzip.', unterzeile: VIDEO_UNTERZEILE }
        },
        ZITAT_20_JAHRE,
        ARBEITSWEISE,
        {
          typ: 'split',
          stein: true,
          kicker: 'Unsere Wurzeln',
          h2: 'Entwickelt unter dem Dach von Heckler & Koch.',
          absaetze: [
            'Seit den 1980er-Jahren arbeiten wir an Lösungen, die in der Serienproduktion jahrzehntelang stabil laufen – damals noch unter dem Dach von Heckler & Koch, mit erheblichem Entwicklungsbudget.',
            'Heute sind unsere Systeme in Serienproduktionen weltweit im Einsatz. Viele unserer Anlagen laufen seit über 25 Jahren.'
          ],
          bild: { datei: 'standort.jpg', text: 'Foto: Team oder Fertigung in Oberndorf', alt: 'Das Team von HK-Präzisionstechnik in Oberndorf am Neckar' }
        },
        {
          typ: 'split',
          umgekehrt: true,
          kicker: 'Service weltweit',
          h2: 'Eigene Monteure. Über die gesamte Laufzeit.',
          absaetze: [
            'Unsere eigenen Monteure installieren und warten unsere Systeme – international, über die gesamte Laufzeit der Anlage.',
            'Sie haben einen Ansprechpartner, der Ihre Anlage kennt. Nicht ein Servicecenter, das jedes Mal neu eingearbeitet werden muss.'
          ],
          bild: { datei: 'monteur.jpg', text: 'Foto: Monteur bei Installation oder Wartung', alt: 'HK-Monteur bei der Installation einer Anlage' }
        },
        {
          typ: 'split',
          stein: true,
          kicker: 'Standort',
          h2: 'Oberndorf am Neckar.',
          absaetze: ['Von hier aus entwickeln, bauen und betreuen wir unsere Systeme für Kunden weltweit. Arbeiten Sie mit uns? Unsere [offenen Stellen](seite:karriere) finden Sie auf der Karriereseite.'],
          kanaele: true
        },
        {
          typ: 'cta',
          h2: 'Sie suchen einen Partner, der Ihre Produktion wirklich versteht?',
          text: 'Nicht nur Ihr Lastenheft liest? Dann freue ich mich auf das Gespräch.',
          signatur: 'Stefan Kruck, Geschäftsführer',
          knoepfe: [{ text: 'Projekt anfragen', seite: 'kontakt' }]
        }
      ]
    },

    /* ================================================================ KARRIERE (Briefing folgt) */
    karriere: {
      name: 'Karriere',
      title: 'Karriere bei HK-Präzisionstechnik | Jobs in Oberndorf am Neckar',
      description: 'Arbeiten bei HK-Präzisionstechnik in Oberndorf: kleines Kernteam, fachliche Entscheidungen, Systeme, die weltweit über Jahrzehnte laufen.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Karriere',
          h1: 'Arbeiten, wo Entscheidungen fachlich fallen.',
          lead: 'Bei uns landen Anfragen direkt bei einem kleinen Kernteam aus Konstruktion und Anwendungstechnik – bei Menschen, die fachlich entscheiden können und den Auftrag haben, das auch zu tun.',
          knoepfe: [{ text: 'Kontakt aufnehmen', seite: 'kontakt' }]
        },
        {
          typ: 'hinweis',
          text: 'Hier entsteht die Karriereseite mit Stellenanzeigen und Bewerbungsformular. Das Briefing dafür folgt separat.'
        },
        {
          typ: 'split',
          kicker: 'Was Sie erwartet',
          h2: 'Systeme, die weltweit über Jahrzehnte laufen.',
          absaetze: [
            'Wir entwickeln Spannvorrichtungen, Composite-Erwärmungsöfen und Diamantdrahtsägen für anspruchsvolle Produktionsumgebungen – und betreuen sie mit eigenen Monteuren international, über die gesamte Laufzeit.'
          ],
          liste: ['Kleines Kernteam, kurze Wege', 'Fachliche Entscheidungen statt Warteschlange', 'Projekte für Serienproduktionen weltweit']
        },
        {
          typ: 'cta',
          h2: 'Keine passende Stelle dabei?',
          text: 'Melden Sie sich trotzdem – wir freuen uns über Ihre Initiativbewerbung.',
          knoepfe: [{ text: 'Kontakt aufnehmen', seite: 'kontakt' }]
        }
      ]
    },

    /* ================================================================ KONTAKT / ANFRAGE-TOOL */
    kontakt: {
      name: 'Kontakt',
      title: 'Kontakt & Projektanfrage | HK-Präzisionstechnik',
      description: 'Schildern Sie uns Ihr Projekt in wenigen Schritten. Ihre Anfrage landet direkt beim Kernteam – Sie erhalten innerhalb weniger Tage eine konkrete Einschätzung.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Kontakt',
          h1: 'Ihre Anfrage landet direkt beim Kernteam.',
          lead: 'Schildern Sie uns Ihr Projekt in wenigen Schritten. Sie erhalten innerhalb weniger Tage eine konkrete Einschätzung. Kein Zwischenstand. Eine klare Richtung.'
        },
        { typ: 'anfrage' }
      ]
    },

    /* ================================================================ IMPRESSUM */
    impressum: {
      name: 'Impressum',
      title: 'Impressum | HK-Präzisionstechnik',
      description: 'Impressum der HK-Präzisionstechnik GmbH, Neckarstraße 1, 78727 Oberndorf am Neckar.',
      abschnitte: [
        { typ: 'kopf', h1: 'Impressum' },
        {
          typ: 'prosa',
          hinweis: 'Angaben aus der E-Mail-Signatur übernommen – die Signatur war nach „Geschäftsführer:“ abgeschnitten. Bitte vollständige Angaben von HK bestätigen lassen.',
          html: `
<h2>Angaben gemäß § 5 DDG</h2>
<p>HK-Präzisionstechnik GmbH<br>Neckarstraße 1<br>78727 Oberndorf am Neckar</p>
<h2>Vertreten durch</h2>
<p>Stefan Kruck, Geschäftsführender Gesellschafter</p>
<h2>Kontakt</h2>
<p>Telefon: {TEL}<br>Fax: {FAX}<br>E-Mail: {MAIL}</p>
<h2>Registereintrag</h2>
<p>Registergericht: Amtsgericht Stuttgart<br>Registernummer: HRB 480751</p>
<h2>Umsatzsteuer-ID</h2>
<p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE 811 567 679</p>`
        }
      ]
    },

    /* ================================================================ DATENSCHUTZ */
    datenschutz: {
      name: 'Datenschutz',
      title: 'Datenschutzerklärung | HK-Präzisionstechnik',
      description: 'Datenschutzerklärung der HK-Präzisionstechnik GmbH: welche Daten diese Website verarbeitet und welche Rechte Sie haben.',
      abschnitte: [
        { typ: 'kopf', h1: 'Datenschutzerklärung' },
        {
          typ: 'prosa',
          hinweis: 'Der rechtsverbindliche Text kommt von HK bzw. dem Datenschutzbeauftragten. Unten steht, was diese Website technisch verarbeitet – genau das muss die Erklärung abdecken.',
          html: `
<h2>Verantwortlicher</h2>
<p>HK-Präzisionstechnik GmbH, Neckarstraße 1, 78727 Oberndorf am Neckar, Telefon {TEL}, E-Mail {MAIL}</p>
<h2>Was diese Website verarbeitet</h2>
<ul>
<li><strong>Hosting / Server-Logfiles:</strong> beim Aufruf übermittelte Zugriffsdaten (IP-Adresse, Zeitpunkt, Browser).</li>
<li><strong>Anfrage-Tool:</strong> Firma, Name, E-Mail, optional Telefon und Projektangaben – zur Bearbeitung Ihrer Anfrage.</li>
<li><strong>Webanalyse:</strong> Matomo ohne Cookies (empfohlen) oder Google Analytics (dann mit Einwilligungsbanner).</li>
<li><strong>Videos:</strong> werden erst nach Klick geladen; vorher besteht keine Verbindung zu YouTube.</li>
<li><strong>Schriften:</strong> lokal gehostet – keine Verbindung zu Google Fonts.</li>
<li><strong>Karten:</strong> Google Maps nur als Link, nicht eingebettet.</li>
</ul>
<h2>Ihre Rechte</h2>
<p>Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie Beschwerde bei einer Aufsichtsbehörde.</p>`
        }
      ]
    }
  }
};
