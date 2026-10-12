/* =====================================================================
   CONTENT ENGLISH – DRAFT TRANSLATION
   ---------------------------------------------------------------------
   Same structure as de.mjs. Translation is a working draft; per the
   agency guidelines it needs a review by HK (or DeepL + human review)
   before going live.
   ===================================================================== */

const VIDEO_SUB = 'Stefan Kruck, Managing Director';

const WAYS = {
  typ: 'wege',
  kicker: 'The third way',
  h2: 'Until now, you had two options. We offer a third.',
  liste: [
    { nr: 'Option 1', titel: 'German quality', plus: ['Precise, process-reliable, durable'], minus: ['But slow – change loops included'] },
    { nr: 'Option 2', titel: 'Asian suppliers', plus: ['Fast, in principle'], minus: ['But often not precise enough for your requirements', 'What you gain in time, you lose in rework or unstable processes in ongoing production'] },
    { nr: 'Option 3', titel: 'HK‑Präzisionstechnik', hk: true, claim: 'German Precision in Chinese Speed', plus: ['Precise and process-reliable – systems that run for decades', 'Developed fast – because your time-to-market decides market share', 'A reliable direction within a few days'] }
  ],
  nachsatz: 'Both options end up costing you more than planned – in time or in quality. <strong>We offer a third way.</strong>'
};

const HOW_WE_WORK = {
  typ: 'schritte',
  anker: 'arbeitsweise',
  kicker: 'How we work',
  h2: 'No queue. A clear direction.',
  liste: [
    { titel: 'Straight to the core team', text: 'When an enquiry reaches us, it doesn’t end up in a queue. It goes straight to a small core team of design and application engineers – people who can make technical decisions and are mandated to do so.' },
    { titel: 'A reliable direction within a few days', text: 'No declaration of intent, no interim status – a concrete statement you can use for your internal planning. While other suppliers are still aligning internally, you already have a basis to work with.' },
    { titel: 'Once you commit, we start', text: 'Without waiting until every contract clause has been negotiated down to the last detail. Because your project has a deadline.' }
  ],
  nachsatz: 'A missed start of production, a postponed OEM approval or a delayed market launch has consequences that no good supplier contract can make up for.'
};

const QUOTE_20_YEARS = {
  typ: 'zitat',
  sr: 'Stefan Kruck on long-standing customers',
  text: 'We have customers who call us about a fixture we delivered 20 years ago. And we can often tell them more precisely which line it is still running on today than the current team on site.',
  name: 'Stefan Kruck',
  rolle: 'Managing Director, HK-Präzisionstechnik',
  nachsatz: 'That is no coincidence. It is the result of a way of working we deliberately chose from the very beginning.'
};

export default {
  lang: 'en',
  htmlLang: 'en',
  og: 'en_GB',
  name: 'English',
  kurz: 'EN',
  ordner: 'en/',

  slugs: {
    start: 'index.html',
    spanntechnik: 'workholding.html',
    oefen: 'composite-heating-ovens.html',
    silikon: 'silicone-curing-ovens.html',
    saegen: 'diamond-wire-saws.html',
    unternehmen: 'company.html',
    karriere: 'careers.html',
    kontakt: 'contact.html',
    impressum: 'legal-notice.html',
    datenschutz: 'privacy.html'
  },

  nav: [
    { seite: 'spanntechnik' },
    { text: 'Ovens', kinder: ['oefen', 'silikon'] },
    { seite: 'saegen' },
    { seite: 'unternehmen' },
    { seite: 'karriere' }
  ],

  ui: {
    zumInhalt: 'Skip to content',
    entwurf: 'Design draft HK‑Präzisionstechnik – not public',
    stand: 'Version',
    menue: 'Menu',
    hauptnavigation: 'Main navigation',
    sprache: 'Choose language',
    anfragen: 'Request a project',
    startseite: 'Home',
    brotkrumen: 'Breadcrumb',
    videoFolgt: 'Video coming soon',
    videoAbspielen: 'Play video',
    videoYoutube: 'Playing the video connects to YouTube.',
    bildFolgt: 'Image material from HK',
    platzhalter: 'Placeholder · visible in draft only',
    vorteil: 'Advantage',
    nachteil: 'Drawback',
    ja: 'Yes',
    nein: 'No',
    serienstart: 'SOP',
    oderAnrufen: 'Or call us directly:',
    telefon: 'Phone',
    fax: 'Fax',
    email: 'Email',
    adresse: 'Address & directions',
    anfahrt: 'Sat nav: Aldi Süd, Neckarstraße 1. Before the Aldi car park, turn right under the bridge – Building 4.',
    route: 'Open route in Google Maps',
    neuesFenster: '(opens in a new window)',
    direkt: 'Direct contact',
    bereiche: 'Products',
    unternehmen: 'Company',
    kontakt: 'Contact',
    fussText: 'Workholding fixtures, composite heating ovens and diamond wire saws from Oberndorf am Neckar, Germany – in series production worldwide.',

    form: {
      schritt: 'Step {n} of {g}',
      weiter: 'Next',
      zurueck: 'Back',
      optional: 'optional',
      s1: 'What is it about?',
      s1hilfe: 'Choose the area you would like an assessment for.',
      bereiche: [
        { wert: 'spanntechnik', text: 'Workholding / fixture' },
        { wert: 'composite', text: 'Composite heating oven' },
        { wert: 'silikon', text: 'Oven for silicone potting' },
        { wert: 'saegen', text: 'Diamond wire saw' },
        { wert: 'service', text: 'Service for an existing system' },
        { wert: 'sonstiges', text: 'Something else' }
      ],
      s2: 'Where does your project stand?',
      s2hilfe: 'The earlier we get involved, the more we can do for your start of production.',
      stände: [
        { wert: 'entwicklung', text: 'The part is still in development', klein: 'Ideal for simultaneous engineering' },
        { wert: 'definiert', text: 'The part is defined – workholding or system still missing' },
        { wert: 'stabilisieren', text: 'The process is running and needs to be stabilised' },
        { wert: 'bestand', text: 'It concerns an existing system', klein: 'Service, maintenance, extension' }
      ],
      s3: 'When do you want to start?',
      s3hilfe: 'Your project has a deadline – tell us which one.',
      zeiten: [
        { wert: 'sofort', text: 'As soon as possible – the deadline is pressing' },
        { wert: '3m', text: 'Within the next 3 months' },
        { wert: '12m', text: 'In 3 to 12 months' },
        { wert: 'offen', text: 'Not decided yet' }
      ],
      s4: 'Tell us briefly about your project.',
      s4hilfe: 'A few keywords are enough. We will clarify drawings and details in a conversation.',
      nachricht: 'Your project',
      nachrichtPlatzhalter: 'e.g. part, material, quantity, planned start of production …',
      s5: 'Where should we send your assessment?',
      s5hilfe: 'You will receive a concrete assessment from us within a few days.',
      firma: 'Company',
      vorname: 'First name',
      nachname: 'Last name',
      email: 'Email',
      telefon: 'Phone',
      datenschutz: 'I agree that my details will be processed to handle my enquiry. Details in the [privacy policy](seite:datenschutz).',
      senden: 'Send enquiry',
      dankeTitel: 'Thank you – we have received your enquiry.',
      dankeText: 'It goes straight to our core team of design and application engineers. You will receive a concrete assessment within a few days. No interim status. A clear direction.',
      ohneJs: 'The enquiry tool requires JavaScript. Simply email us at {MAIL} or call {TEL}.',
      js: {
        schritt: 'Step {n} of {g}',
        wahl: 'Please choose an option.',
        pflicht: 'Please fill in this field.',
        email: 'Please enter a valid email address.',
        datenschutz: 'Please agree to the processing of your details.',
        senden: 'Sorry, that didn’t work. Please try again or give us a call.',
        ja: 'Yes'
      }
    }
  },

  seiten: {
    /* ================================================================ HOME */
    start: {
      name: 'Home',
      title: 'Workholding, Composite Ovens & Wire Saws | HK-Präzisionstechnik',
      description: 'Workholding fixtures, composite heating ovens and diamond wire saws from Germany – process-reliable, durable, developed fast. Your assessment within days.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Workholding · Composite ovens · Wire saws',
          h1: 'German Precision <em>in Chinese Speed.</em>',
          lead: 'We develop workholding fixtures, composite heating ovens and diamond wire saws – systems that have to run for decades in demanding production environments. Process-reliable, reproducible, durable. And developed fast.',
          knoepfe: [{ text: 'Request a project', seite: 'kontakt' }, { text: 'How we work', seite: 'start', extra: '#arbeitsweise', stil: 'rahmen' }],
          video: { id: 'skript2', titel: 'Not just a claim. A working principle.', unterzeile: VIDEO_SUB }
        },
        {
          typ: 'fakten',
          liste: [
            { wert: 'A few days', text: 'until your reliable assessment' },
            { wert: 'Since the 1980s', text: 'developing composite heating technology' },
            { wert: '25+ years', text: 'many of our systems have been in series production' },
            { wert: 'Worldwide', text: 'installation and maintenance by our own technicians' }
          ]
        },
        {
          typ: 'karten',
          kicker: 'What we build',
          h2: 'Systems that have to run for decades.',
          intro: 'Process-reliable, reproducible, durable – and developed fast, because your time-to-market decides market share, not academic metrics.',
          liste: [
            { icon: 'spann', titel: 'Workholding & fixtures', text: 'Simultaneous engineering: your workholding is developed in parallel with your part – bringing your start of production forward by months.', seite: 'spanntechnik', link: 'Explore workholding' },
            { icon: 'ofen', titel: 'Composite heating ovens', text: 'Passat and Scirocco: uniform heating right through to the core – on a small footprint and at cycle times fit for series production.', seite: 'oefen', link: 'Explore the ovens' },
            { icon: 'saege', titel: 'Diamond wire saws', text: 'Process-reliable, reproducible, durable – for demanding production environments.', seite: 'saegen', link: 'Explore diamond wire saws' }
          ],
          teaser: { seite: 'silikon', marke: 'New', text: 'Ovens for curing silicone potting compounds' }
        },
        QUOTE_20_YEARS,
        HOW_WE_WORK,
        WAYS,
        {
          typ: 'cta',
          kicker: 'German Precision in Chinese Speed',
          h2: 'Looking for a partner who really understands your production?',
          text: 'Not just one who reads your specifications? Then I look forward to talking to you.',
          signatur: 'Stefan Kruck, Managing Director',
          knoepfe: [{ text: 'Request a project', seite: 'kontakt' }]
        }
      ]
    },

    /* ================================================================ WORKHOLDING (script 1) */
    spanntechnik: {
      name: 'Workholding',
      navInfo: 'Simultaneous engineering',
      title: 'Workholding & Fixtures – Simultaneous Engineering | HK',
      description: 'Workholding fixtures developed in parallel with your part. Simultaneous engineering regularly shortens the lead time to start of production by several months.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Workholding · Simultaneous engineering',
          h1: 'Your next workpiece is going into series production – and the deadline is already pressing?',
          lead: 'The part is almost finished – but workholding development is only just starting. Suddenly the start of production slips by weeks, sometimes months. We have a different approach.',
          knoepfe: [{ text: 'Request an assessment', seite: 'kontakt', extra: '?bereich=spanntechnik' }],
          video: { id: 'skript1', titel: 'Simultaneous engineering in 2 minutes', unterzeile: VIDEO_SUB }
        },
        {
          typ: 'split',
          kicker: 'The problem',
          h2: 'Not an isolated case. A structural problem.',
          absaetze: [
            'Every day we talk to development and production managers who know the same problem: the part is almost finished – but workholding only starts then. And suddenly the start of production slips by weeks, sometimes months.',
            'This is not an isolated case. It is a structural problem in the conventional development process.'
          ],
          bild: { datei: 'spannvorrichtung.jpg', text: 'Photo: workholding fixture from a customer project', alt: 'Workholding fixture by HK-Präzisionstechnik' }
        },
        WAYS,
        {
          typ: 'achse',
          kicker: 'Simultaneous engineering',
          h2: 'We get involved before the part is fully defined.',
          intro: 'While your workpiece is being finalised, we develop the workholding in parallel.',
          zeilen: [
            { titel: 'Conventional development process', start: 16, balken: [
              { art: 'bauteil', von: 1, bis: 5, text: 'Part development', kurz: 'Part' },
              { art: 'vorr', von: 6, bis: 11, text: 'Fixture development', kurz: 'Fixture' },
              { art: 'aend', von: 12, bis: 15, text: 'Change loops', kurz: 'Changes' }] },
            { titel: 'Simultaneous engineering with HK', start: 8, gewinn: { von: 8, bis: 15, text: 'Months earlier in production' }, balken: [
              { art: 'bauteil', von: 1, bis: 5, text: 'Part development', kurz: 'Part' },
              { art: 'hk', von: 2, bis: 7, spur: 2, text: 'Workholding – developed in parallel', kurz: 'Workholding' }] }
          ],
          alternativtext: 'Comparison: in the conventional process, part development, fixture development and change loops follow one another and the start of production comes late. With simultaneous engineering, workholding is developed in parallel with the part and production starts months earlier.',
          unterschrift: 'Schematic illustration. In our projects, this parallel approach has regularly shortened the lead time to start of production by several months.'
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          kicker: 'Your benefit',
          h2: 'What this means for you.',
          liste: [
            { icon: 'uhr', titel: 'No waiting times', text: 'between part approval and fixture development.' },
            { icon: 'schleife', titel: 'No late change loops', text: 'because we were involved from the start.' },
            { icon: 'weniger', titel: 'Often fewer fixtures', text: 'because small adjustments to the part let us eliminate entire clamping steps before they have to be built.' },
            { icon: 'kalender', titel: 'Months ahead', text: 'Months in which your competitors are still developing – while you are already delivering.' },
            { icon: 'flagge', titel: 'Lead supplier, not second choice', text: 'Months in which you are confirmed as lead supplier at the OEM instead of moving up as second choice.' },
            { icon: 'stabil', titel: 'Stable from the first production part', text: 'because the workholding was not adapted afterwards but developed for your part from the very start.' }
          ]
        },
        {
          typ: 'cta',
          kicker: 'Simultaneous engineering',
          h2: 'Does this fit your next project?',
          text: 'You will receive a concrete assessment from us within a few days. No interim status. A clear direction.',
          knoepfe: [{ text: 'Request an assessment', seite: 'kontakt', extra: '?bereich=spanntechnik' }]
        }
      ]
    },

    /* ================================================================ COMPOSITE OVENS (script 3) */
    oefen: {
      name: 'Composite heating ovens',
      navInfo: 'Passat and Scirocco',
      title: 'Composite Heating Ovens Passat & Scirocco | HK-Präzisionstechnik',
      description: 'Uniform heating of thermoplastic composite blanks right through to the core – on a small footprint, at series cycle times. Many systems have run for 25+ years.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Composite heating ovens',
          h1: 'Your cycle time is right – but the core won’t heat up?',
          lead: 'Or the surface burns before the core reaches temperature? Then you know the problem our ovens solve.',
          knoepfe: [{ text: 'Discuss your process', seite: 'kontakt', extra: '?bereich=composite' }],
          video: { id: 'skript3', titel: 'Uniform right through to the core', unterzeile: VIDEO_SUB }
        },
        {
          typ: 'tabelle',
          kicker: 'The problem',
          h2: 'Standard solutions hit the same limit.',
          intro: 'When heating thermoplastic composite blanks, most standard solutions hit the same limit. None of these options really gets you further.',
          kopf: ['', 'Infrared oven', 'Conventional convection oven', 'HK Passat · Scirocco'],
          kopfSr: 'Criterion',
          hkSpalte: 3,
          zeilen: [
            ['Uniform heating right through to the core', { ok: false, text: 'Heats quickly but unevenly: the core stays cold, the surface overheats' }, { ok: true, text: 'Solves the problem of uniform heating' }, { ok: true, text: 'Uniform right through to the core' }],
            ['Footprint', { text: '–' }, { ok: false, text: 'Large footprint' }, { ok: true, text: 'Passat: small footprint' }],
            ['Cycle time in series production', { ok: true, text: 'Fast' }, { ok: false, text: 'Too long for true series production' }, { ok: true, text: 'Scirocco: designed for applications where cycle time is non-negotiable' }]
          ],
          nachsatz: 'The result in both cases: scrap, rework or a process that never really runs stably.'
        },
        {
          typ: 'split',
          stein: true,
          kicker: 'Our origins',
          h2: 'Working on exactly this problem since the 1980s.',
          absaetze: [
            'We have been working on this problem since the 1980s – back then under the umbrella of Heckler & Koch, with a substantial development budget and the goal of building a solution that runs stably in series production for decades.',
            'This work produced two oven classes that are in use in series production worldwide today.'
          ],
          bild: { datei: 'ofen-serie.jpg', text: 'Photo: oven system in series production', alt: 'HK composite heating oven in series production' }
        },
        {
          typ: 'karten',
          spalten: 2,
          kicker: 'Two oven classes',
          h2: 'Passat and Scirocco.',
          liste: [
            { bild: { datei: 'passat.jpg', text: 'Photo: Passat oven', alt: 'Passat composite heating oven', format: '16/10' }, tag: 'Compact & process-reliable', titel: 'Passat', text: 'Uniform heating right through to the core, on a small footprint, process-reliable over the entire service life.' },
            { bild: { datei: 'scirocco.jpg', text: 'Photo: Scirocco oven', alt: 'Scirocco composite heating oven', format: '16/10' }, tag: 'For short cycle times', titel: 'Scirocco', text: 'The same heating quality – designed for applications where cycle time is non-negotiable.' }
          ]
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          stein: true,
          spalten: 4,
          kicker: 'Your benefit',
          h2: 'What this means for your production.',
          liste: [
            { icon: 'ausschuss', titel: 'No scrap', text: 'caused by uneven heating.' },
            { icon: 'zyklus', titel: 'Predictable cycle times', text: 'stable and predictable – day after day.' },
            { icon: 'stabil', titel: 'Still running after years', text: 'a process that doesn’t start causing problems after three years.' },
            { icon: 'kalender', titel: 'An investment that lasts', text: 'across an entire product life cycle – not just a few years.' }
          ],
          nachsatz: 'Many of our systems have been in series production for over 25 years. <strong>That is not a marketing promise</strong> – it means your investment isn’t written off after a few years but pays off over an entire product life cycle.'
        },
        {
          typ: 'split',
          umgekehrt: true,
          kicker: 'Service',
          h2: 'One contact who knows your system.',
          absaetze: [
            'Our own technicians install and maintain these systems – internationally, over the entire service life of the system.',
            'You have one contact who knows your system. Not a service centre that has to get up to speed every time.'
          ],
          liste: ['Installation by our own technicians', 'Maintenance over the entire service life', 'Deployed internationally'],
          knoepfe: [{ text: 'New: ovens for silicone potting', seite: 'silikon', stil: 'rahmen' }],
          bild: { datei: 'monteur.jpg', text: 'Photo: technician during installation or maintenance', alt: 'HK technician maintaining an oven system' }
        },
        {
          typ: 'cta',
          kicker: 'Composite heating',
          h2: 'Setting up a new process – or stabilising an existing one?',
          text: 'We look at your requirements and tell you directly which solution makes sense for your process.',
          knoepfe: [{ text: 'Send your requirements', seite: 'kontakt', extra: '?bereich=composite' }]
        }
      ]
    },

    /* ================================================================ SILICONE POTTING (new market) */
    silikon: {
      name: 'Curing silicone potting',
      navInfo: 'New: curing and convection ovens',
      title: 'Ovens for Curing Silicone Potting Compounds | HK-Präzisionstechnik',
      description: 'Cure silicone potting compounds reliably: temperature uniformity, even air circulation, exhaust, vacuum option. Talk to us about your process.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Ovens · New application',
          h1: 'Cure silicone potting – reliably.',
          lead: 'Curing silicone potting compounds doesn’t call for a conventional “baking oven” but for a precise industrial convection or curing oven with good temperature uniformity. Uniform heating has been our field since the 1980s.',
          knoepfe: [{ text: 'Discuss your process', seite: 'kontakt', extra: '?bereich=silikon' }],
          hinweis: 'New market according to the briefing. Content is based on the market research in the guidelines PDF (pp. 5–6) – technical values are <em>typical requirements of the application</em>, not HK specifications. Please have HK review.'
        },
        {
          typ: 'karten',
          variante: 'vorteile',
          spalten: 4,
          kicker: 'What matters',
          h2: 'The decisive criteria.',
          intro: 'Temperature accuracy, even air circulation and exhaust management matter most – especially with addition-curing 2K silicones.',
          liste: [
            { icon: 'thermo', titel: 'Temperature uniformity', text: 'typically ±1–2 K in the working space.' },
            { icon: 'ziel', titel: 'Control range', text: 'typically 40–200 °C.' },
            { icon: 'umluft', titel: 'Even air circulation', text: 'for uniform curing throughout the working space.' },
            { icon: 'abluft', titel: 'Exhaust management', text: 'important for condensation-curing systems.' },
            { icon: 'vakuum', titel: 'Vacuum option', text: 'reduces air entrapment.' },
            { icon: 'glanz', titel: 'Stainless-steel interior', text: 'easier to clean.' },
            { icon: 'daten', titel: 'Data logging', text: 'for automotive and ISO processes.' },
            { icon: 'gas', titel: 'Nitrogen option', text: 'if oxygen or moisture are critical.' }
          ],
          nachsatz: 'Depending on the process, <strong>ATEX or cleanroom suitability</strong> may also be required.'
        },
        {
          typ: 'tabelle',
          stein: true,
          kicker: 'Overview',
          h2: 'Which oven type suits which application.',
          kopf: ['Application', 'Typical oven'],
          zeilen: [
            ['Prototypes / lab', 'Small laboratory convection oven'],
            ['Electronics potting', 'Precision curing oven'],
            ['Bubble-free potting', 'Vacuum oven or a combination of vacuum chamber and convection oven'],
            ['Thermally conductive silicones', 'Convection oven with high uniformity'],
            ['High throughput', 'Continuous (conveyor) oven'],
            ['Automotive / series production', 'PLC-controlled industrial system']
          ]
        },
        {
          typ: 'cta',
          kicker: 'Silicone potting',
          h2: 'Curing silicone potting – or planning to?',
          text: 'Tell us the potting compound, part size and quantity. We will tell you directly which solution makes sense for your process.',
          knoepfe: [{ text: 'Discuss your process', seite: 'kontakt', extra: '?bereich=silikon' }]
        }
      ]
    },

    /* ================================================================ DIAMOND WIRE SAWS (no script yet) */
    saegen: {
      name: 'Diamond wire saws',
      title: 'Diamond Wire Saws | HK-Präzisionstechnik',
      description: 'Diamond wire saws from HK-Präzisionstechnik: developed for demanding production environments – process-reliable, reproducible, durable.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Diamond wire saws',
          h1: 'Diamond wire saws for demanding production.',
          lead: 'Systems that have to run for decades in demanding production environments: process-reliable, reproducible, durable – and developed fast.',
          knoepfe: [{ text: 'Send an enquiry', seite: 'kontakt', extra: '?bereich=saegen' }],
          bild: { datei: 'diamantdrahtsaege.jpg', text: 'Photo: diamond wire saw', alt: 'Diamond wire saw by HK-Präzisionstechnik', format: '16/10' }
        },
        {
          typ: 'hinweis',
          text: 'There is no script for the diamond wire saws yet. Needed from HK: text (applications, materials, machine types), photos and technical data if available. Until then, this page only states what is backed by script 2.'
        },
        {
          typ: 'split',
          kicker: 'Our standard',
          h2: 'Here too: a clear direction within a few days.',
          absaetze: [
            'Your enquiry doesn’t end up in a queue but goes straight to a small core team of design and application engineers.',
            'Within a few days you receive a reliable direction – not a declaration of intent but a concrete statement you can use for your internal planning.'
          ],
          liste: ['Process-reliable', 'Reproducible', 'Durable'],
          knoepfe: [{ text: 'How we work', seite: 'start', extra: '#arbeitsweise', stil: 'rahmen' }]
        },
        {
          typ: 'cta',
          h2: 'Planning a sawing process?',
          text: 'Describe your application. You will receive a concrete assessment within a few days.',
          knoepfe: [{ text: 'Send an enquiry', seite: 'kontakt', extra: '?bereich=saegen' }]
        }
      ]
    },

    /* ================================================================ COMPANY */
    unternehmen: {
      name: 'Company',
      title: 'About us – HK-Präzisionstechnik in Oberndorf am Neckar, Germany',
      description: 'A small core team of design and application engineers, roots at Heckler & Koch, our own technicians worldwide. German Precision in Chinese Speed as a working principle.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Company',
          h1: 'Not just a claim. A working principle.',
          lead: 'German Precision in Chinese Speed: we develop systems that have to run for decades in demanding production environments. And we develop them fast – because your time-to-market decides market share, not academic metrics.',
          knoepfe: [{ text: 'Request a project', seite: 'kontakt' }],
          video: { id: 'skript2', titel: 'Not just a claim. A working principle.', unterzeile: VIDEO_SUB }
        },
        QUOTE_20_YEARS,
        HOW_WE_WORK,
        {
          typ: 'split',
          stein: true,
          kicker: 'Our roots',
          h2: 'Developed under the umbrella of Heckler & Koch.',
          absaetze: [
            'Since the 1980s we have been working on solutions that run stably in series production for decades – back then under the umbrella of Heckler & Koch, with a substantial development budget.',
            'Today our systems are in use in series production worldwide. Many of our systems have been running for over 25 years.'
          ],
          bild: { datei: 'standort.jpg', text: 'Photo: team or production in Oberndorf', alt: 'The HK-Präzisionstechnik team in Oberndorf am Neckar' }
        },
        {
          typ: 'split',
          umgekehrt: true,
          kicker: 'Worldwide service',
          h2: 'Our own technicians. Over the entire service life.',
          absaetze: [
            'Our own technicians install and maintain our systems – internationally, over the entire service life of the system.',
            'You have one contact who knows your system. Not a service centre that has to get up to speed every time.'
          ],
          bild: { datei: 'monteur.jpg', text: 'Photo: technician during installation or maintenance', alt: 'HK technician installing a system' }
        },
        {
          typ: 'split',
          stein: true,
          kicker: 'Location',
          h2: 'Oberndorf am Neckar, Germany.',
          absaetze: ['This is where we develop, build and support our systems for customers worldwide. Want to work with us? You’ll find our [open positions](seite:karriere) on the careers page.'],
          kanaele: true
        },
        {
          typ: 'cta',
          h2: 'Looking for a partner who really understands your production?',
          text: 'Not just one who reads your specifications? Then I look forward to talking to you.',
          signatur: 'Stefan Kruck, Managing Director',
          knoepfe: [{ text: 'Request a project', seite: 'kontakt' }]
        }
      ]
    },

    /* ================================================================ CAREERS (briefing to follow) */
    karriere: {
      name: 'Careers',
      title: 'Careers at HK-Präzisionstechnik | Jobs in Oberndorf am Neckar',
      description: 'Working at HK-Präzisionstechnik in Oberndorf: a small core team, technical decisions, systems that run worldwide for decades.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Careers',
          h1: 'Work where decisions are made on technical grounds.',
          lead: 'Here, enquiries go straight to a small core team of design and application engineers – people who can make technical decisions and are mandated to do so.',
          knoepfe: [{ text: 'Get in touch', seite: 'kontakt' }]
        },
        {
          typ: 'hinweis',
          text: 'This is where the careers page with job ads and application form will go. The briefing for it will follow separately.'
        },
        {
          typ: 'split',
          kicker: 'What to expect',
          h2: 'Systems that run worldwide for decades.',
          absaetze: [
            'We develop workholding fixtures, composite heating ovens and diamond wire saws for demanding production environments – and support them with our own technicians internationally, over their entire service life.'
          ],
          liste: ['Small core team, short paths', 'Technical decisions instead of queues', 'Projects for series production worldwide']
        },
        {
          typ: 'cta',
          h2: 'No suitable position?',
          text: 'Get in touch anyway – we welcome speculative applications.',
          knoepfe: [{ text: 'Get in touch', seite: 'kontakt' }]
        }
      ]
    },

    /* ================================================================ CONTACT */
    kontakt: {
      name: 'Contact',
      title: 'Contact & Project Enquiry | HK-Präzisionstechnik',
      description: 'Describe your project in a few steps. Your enquiry goes straight to the core team – you will receive a concrete assessment within a few days.',
      abschnitte: [
        {
          typ: 'kopf',
          kicker: 'Contact',
          h1: 'Your enquiry goes straight to the core team.',
          lead: 'Describe your project in a few steps. You will receive a concrete assessment within a few days. No interim status. A clear direction.'
        },
        { typ: 'anfrage' }
      ]
    },

    /* ================================================================ LEGAL NOTICE */
    impressum: {
      name: 'Legal notice',
      title: 'Legal Notice | HK-Präzisionstechnik',
      description: 'Legal notice of HK-Präzisionstechnik GmbH, Neckarstraße 1, 78727 Oberndorf am Neckar, Germany.',
      abschnitte: [
        { typ: 'kopf', h1: 'Legal notice' },
        {
          typ: 'prosa',
          hinweis: 'Details taken from the email signature, which was cut off after “Managing director:”. Please have HK confirm the complete details.',
          html: `
<h2>Information pursuant to Section 5 DDG</h2>
<p>HK-Präzisionstechnik GmbH<br>Neckarstraße 1<br>78727 Oberndorf am Neckar<br>Germany</p>
<h2>Represented by</h2>
<p>Stefan Kruck, Managing Partner</p>
<h2>Contact</h2>
<p>Phone: {TEL}<br>Fax: {FAX}<br>Email: {MAIL}</p>
<h2>Commercial register</h2>
<p>Register court: Amtsgericht Stuttgart (Stuttgart Local Court)<br>Registration number: HRB 480751</p>
<h2>VAT ID</h2>
<p>VAT identification number pursuant to Section 27a of the German VAT Act: DE 811 567 679</p>`
        }
      ]
    },

    /* ================================================================ PRIVACY */
    datenschutz: {
      name: 'Privacy',
      title: 'Privacy Policy | HK-Präzisionstechnik',
      description: 'Privacy policy of HK-Präzisionstechnik GmbH: which data this website processes and what rights you have.',
      abschnitte: [
        { typ: 'kopf', h1: 'Privacy policy' },
        {
          typ: 'prosa',
          hinweis: 'The legally binding text will be supplied by HK or its data protection officer. Below is what this website processes technically – exactly what the policy needs to cover.',
          html: `
<h2>Controller</h2>
<p>HK-Präzisionstechnik GmbH, Neckarstraße 1, 78727 Oberndorf am Neckar, Germany, phone {TEL}, email {MAIL}</p>
<h2>What this website processes</h2>
<ul>
<li><strong>Hosting / server log files:</strong> access data transmitted when the site is called up (IP address, time, browser).</li>
<li><strong>Enquiry tool:</strong> company, name, email, optional phone and project details – to handle your enquiry.</li>
<li><strong>Web analytics:</strong> Matomo without cookies (recommended) or Google Analytics (then with a consent banner).</li>
<li><strong>Videos:</strong> loaded only after a click; until then there is no connection to YouTube.</li>
<li><strong>Fonts:</strong> hosted locally – no connection to Google Fonts.</li>
<li><strong>Maps:</strong> Google Maps only as a link, not embedded.</li>
</ul>
<h2>Your rights</h2>
<p>Access, rectification, erasure, restriction of processing, data portability, objection, and the right to lodge a complaint with a supervisory authority.</p>`
        }
      ]
    }
  }
};
