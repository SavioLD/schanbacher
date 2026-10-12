/* Linien-Icons (24 × 24, Strichstärke 1,7) – alle in currentColor. */

const P = {
  pfeil: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  runter: '<path d="M6 9l6 6 6-6"/>',
  play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  kreuz: '<path d="M6 6l12 12M18 6L6 18"/>',
  strich: '<path d="M6 12h12"/>',
  spann: '<path d="M2 20h20M3 20v-4h18v4"/><path d="M4 16V8h4v8M20 16V8h-4v8"/><rect x="8" y="10" width="8" height="6"/><path d="M1.5 12h2M20.5 12h2"/>',
  ofen: '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 7h18"/><rect x="6" y="10" width="12" height="8"/><path d="M9.5 16.5c.9-.9.9-1.9 0-2.8s-.9-1.9 0-2.7M14.5 16.5c.9-.9.9-1.9 0-2.8s-.9-1.9 0-2.7"/>',
  saege: '<circle cx="5" cy="9" r="3"/><circle cx="19" cy="9" r="3"/><path d="M5 6h14M5 12h14"/><path d="M8 12v.01M11 12v.01M14 12v.01M17 12v.01" stroke-width="2.8"/><path d="M7 15h10v6H7z"/>',
  tropfen: '<path d="M12 3s6 6.4 6 10.5a6 6 0 0 1-12 0C6 9.4 12 3 12 3z"/><path d="M9 14a3 3 0 0 0 3 3"/>',
  thermo: '<path d="M10 14.5V5a2 2 0 1 1 4 0v9.5a4 4 0 1 1-4 0z"/><path d="M12 9v7.5"/>',
  umluft: '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7"/>',
  abluft: '<path d="M8 21V6M5 9l3-3 3 3M16 21V6M13 9l3-3 3 3"/>',
  vakuum: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',
  glanz: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
  daten: '<path d="M4 20V4M4 20h16"/><path d="M7 15l4-4 3 3 5-6"/>',
  gas: '<rect x="8" y="6" width="8" height="15" rx="3"/><path d="M10 6V3h4v3"/>',
  schild: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/>',
  stabil: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  uhr: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  ziel: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/><path d="M12 1.5v5M12 17.5v5M1.5 12h5M17.5 12h5"/>',
  team: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2c2.9.3 5 2.6 5 5.8"/>',
  service: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
  globus: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/>',
  telefon: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  fax: '<path d="M7 9V3h10v6M7 17H4v-7h16v7h-3"/><rect x="7" y="14" width="10" height="7"/>',
  kamera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/>',
  blitz: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  flagge: '<path d="M5 21V4M5 4h12l-2.5 4L17 12H5"/>',
  schleife: '<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
  weniger: '<rect x="3" y="6" width="18" height="12" rx="1"/><path d="M8 12h8"/>',
  kalender: '<rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M8.5 15.5l2 2 4-4"/>',
  ausschuss: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/><path d="M10 11l4 5M14 11l-4 5"/>',
  zyklus: '<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4v5h-5"/><path d="M12 8v4l2.5 1.5"/>',
  danke: '<circle cx="12" cy="12" r="10"/><path d="M7.5 12.5l3 3 6-6.5"/>'
};

export function icon(name, extra = '') {
  const pfad = P[name];
  if (!pfad) throw new Error(`Icon „${name}" gibt es nicht.`);
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"${extra}>${pfad}</svg>`;
}

/* Großes Messkreuz als Hintergrund im Seitenkopf – Motiv „Präzision". */
export function messkreuz() {
  let striche = '';
  for (let g = 0; g < 360; g += 5) {
    const lang = g % 30 === 0 ? 22 : 10;
    const r = Math.PI * g / 180;
    const x1 = 320 + Math.cos(r) * 300, y1 = 320 + Math.sin(r) * 300;
    const x2 = 320 + Math.cos(r) * (300 - lang), y2 = 320 + Math.sin(r) * (300 - lang);
    striche += `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }
  return `<svg class="seitenkopf__ziel" viewBox="0 0 640 640" fill="none" stroke="currentColor" aria-hidden="true" focusable="false">` +
    `<circle cx="320" cy="320" r="300" stroke-width="1.5"/><circle cx="320" cy="320" r="220"/><circle cx="320" cy="320" r="140"/><circle cx="320" cy="320" r="60" stroke-width="1.5"/>` +
    `<path d="M320 0v640M0 320h640" stroke-dasharray="6 8"/><path d="${striche}"/></svg>`;
}
