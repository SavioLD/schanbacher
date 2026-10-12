/* =====================================================================
   Stammdaten, Videos und Schalter – gelten für beide Sprachen.
   Quelle der Firmendaten: E-Mail-Signatur von Stefan Kruck.
   ===================================================================== */

export const FIRMA = {
  name: 'HK-Präzisionstechnik GmbH',
  marke: 'HK‑Präzisionstechnik',            // mit geschütztem Bindestrich (bricht nicht um)
  claim: 'German Precision in Chinese Speed',
  strasse: 'Neckarstraße 1',
  plz: '78727',
  ort: 'Oberndorf am Neckar',
  telefon: '+49 7423 92 94 10',
  telefonLink: '+497423929410',
  fax: '+49 7423 92 94 14',
  email: 'stefan.kruck@hk-prt.de',         // TODO: allgemeine Adresse (info@ …) bevorzugt
  register: 'Amtsgericht Stuttgart, HRB 480751',
  ustid: 'DE 811 567 679',
  geschaeftsfuehrer: 'Stefan Kruck',
  maps: 'https://www.google.com/maps/search/?api=1&query=Neckarstra%C3%9Fe+1%2C+78727+Oberndorf+am+Neckar'
};

/* Videos zu den drei Skripten. Sobald gedreht: YouTube-ID ODER Pfad zur
   MP4-Datei (relativ zum Website-Ordner, z. B. "videos/skript1.mp4").
   Leer = Platzhalter „Video folgt". YouTube lädt erst nach Klick
   (youtube-nocookie) – keine Verbindung beim Seitenaufruf. */
export const VIDEOS = {
  skript1: { youtube: '', mp4: '' },   // Spanntechnik / Simultanes Engineering
  skript2: { youtube: '', mp4: '' },   // Unternehmenspositionierung
  skript3: { youtube: '', mp4: '' }    // Composite-Erwärmungsöfen
};

export const CONFIG = {
  /* true = Designentwurf: Hinweisleiste oben, Platzhalter-Kästen sichtbar,
     noindex. Für den Livegang auf false setzen. */
  entwurf: true,
  stand: '12.10.2026',
  baseUrl: 'https://www.hk-prt.de/',

  /* Ziel für das Anfrage-Tool (POST, JSON). Leer = Entwurfsmodus,
     die Anfrage wird nur in der Browser-Konsole ausgegeben. */
  anfrageZiel: '',

  /* Matomo (cookielos) – URL und Site-ID der Matomo-Instanz des Kunden.
     Leer = kein Tracking-Code. */
  matomo: { url: '', siteId: '' },

  /* Google Search Console: Inhalt des google-site-verification-Tags */
  searchConsole: '',

  /* Social-Media-Kanäle, z. B. { name: 'LinkedIn', url: 'https://…' } */
  social: []
};
