/* =====================================================================
   CREATIVE-GENERATOR · Schanbacher GmbH
   ---------------------------------------------------------------------
   Rendert alle Meta-Ads-Creatives aus einer Config – im CI der
   Karriereseite (gleiche Farben, gleiche Schrift Figtree).

     node creatives/build.mjs

   Fotos: Das Skript sucht je Stelle nach einer Datei in bilder/ (siehe
   FOTO unten). Fehlt sie, wird der CI-Farbverlauf als Hintergrund
   benutzt – das Ergebnis ist dann ein Layout-Preview, kein finales
   Creative. Sobald die Fotos im Repo liegen, einmal neu rendern.

   Neues Format: einfach in FORMATE ergänzen.
   Neues Motiv:  in MOTIVE ergänzen.
   ===================================================================== */

import { chromium } from '/opt/node-tools/node_modules/playwright/index.mjs';
import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const OUT  = HERE;

/* ---------- CI (identisch mit dem :root-Block in index.html) ---------- */
const CI = {
  brand:     '#f5b400',
  brandDark: '#d99e00',
  ink:       '#1b1d21',
  inkDeep:   '#131418',
  onBrand:   '#1b1d21',
  soft:      '#fff4d6'
};

/* ---------- Schrift lokal einbetten, damit offline identisch gerendert wird ---------- */
const font = (w, f) =>
  `@font-face{font-family:Figtree;font-style:normal;font-weight:${w};font-display:block;` +
  `src:url(data:font/woff2;base64,${readFileSync(join(HERE, 'fonts', f)).toString('base64')}) format('woff2')}`;
const FONTS = [font(500,'figtree-latin-500-normal.woff2'),
               font(700,'figtree-latin-700-normal.woff2'),
               font(900,'figtree-latin-900-normal.woff2')].join('\n');

/* ---------- Logo: Original aus bilder/, sonst Wortmarke ---------- */
const LOGO_KANDIDATEN = [
  'bilder/schanbacher-logo-weiss.png','bilder/schanbacher-logo-weiss.svg',
  'bilder/logo-weiss.png','bilder/logo-weiss.svg',
  'bilder/schanbacher-logo.png','bilder/schanbacher-logo.svg',
  'bilder/logo.png','bilder/logo.svg'
];
function dataUri(relPfad){
  const p = join(ROOT, relPfad);
  if (!existsSync(p)) return null;
  const ext = relPfad.split('.').pop().toLowerCase();
  const mime = ext === 'svg' ? 'image/svg+xml' : ext === 'png' ? 'image/png' : 'image/jpeg';
  return `data:${mime};base64,${readFileSync(p).toString('base64')}`;
}
const LOGO = LOGO_KANDIDATEN.map(dataUri).find(Boolean) || null;

/* ---------- Stellen ---------- */
const STELLEN = [
  {
    key: 'maler', beruf: 'Maler', titel: 'Maler (m/w/d)',
    foto: ['bilder/maler.jpg','bilder/maler.jpeg','bilder/maler.png','bilder/hero.jpg'],
    koennen: 'Spachteltechniken, Oberflächenputze und fugenlose Wände',
    chips: ['Firmenwagen', 'Weihnachtsgeld', 'Eigene Ideen'],
    benefitZeile: 'Firmenwagen, Weihnachtsgeld – und Wände, die deine Handschrift tragen.',
    problem: 'Immer nur weiß streichen?'
  },
  {
    key: 'parkettleger', beruf: 'Parkettleger', titel: 'Parkettleger (m/w/d)',
    foto: ['bilder/parkettleger.jpg','bilder/parkettleger.jpeg','bilder/parkettleger.png','bilder/hero.jpg'],
    koennen: 'Holzböden verlegen, schleifen und veredeln',
    chips: ['Weihnachtsgeld', 'Weiterbildung', 'Eigene Ideen'],
    benefitZeile: 'Weihnachtsgeld, Weiterbildung – und Böden, die man dir ansieht.',
    problem: 'Akkord statt Handwerk?'
  },
  {
    key: 'raumausstatter', beruf: 'Raumausstatter', titel: 'Raumausstatter (m/w/d)',
    foto: ['bilder/raumausstatter.jpg','bilder/raumausstatter.jpeg','bilder/raumausstatter.png','bilder/hero.jpg'],
    koennen: 'Beläge, Holzböden sowie Licht-, Sicht- und Sonnenschutz',
    chips: ['Firmenwagen', 'Weihnachtsgeld', 'Weiterbildung'],
    benefitZeile: 'Firmenwagen, Weihnachtsgeld – und jeden Tag ein anderer Raum.',
    problem: 'Jeden Tag dieselbe Halle?'
  }
];

/* ---------- Motive ---------- */
const MOTIVE = {
  /* 1 · Stelle direkt ansprechen */
  stelle: s => ({
    eyebrow: 'Festanstellung · Filderstadt',
    head:    `${s.beruf} (m/w/d)<br><span class="akzent">gesucht.</span>`,
    sub:     `Familienbetrieb seit 1968. ${s.koennen} – bei Kundschaft, die Qualität sieht.`,
    chips:   s.chips,
    cta:     'In 60 Sekunden bewerben'
  }),
  /* 2 · Qualifizierer: filtert auf Qualität statt Masse */
  check: s => ({
    eyebrow: 'Passt das zu dir?',
    head:    `Du bist <span class="akzent">${s.beruf}</span> mit mindestens 3 Jahren Erfahrung?`,
    liste:   ['Abgeschlossene Ausbildung im Handwerk',
              'Mindestens 3 Jahre Berufserfahrung',
              'Führerschein Klasse B',
              'Max. 30 km um Filderstadt'],
    cta:     'Dann sollten wir reden'
  }),
  /* 3 · Problem → Lösung */
  benefit: s => ({
    eyebrow: `${s.problem}`,
    head:    s.benefitZeile,
    sub:     `${s.titel} in Filderstadt. Dritte Generation, kurze Wege, echtes Handwerk.`,
    chips:   s.chips,
    cta:     'Jetzt bewerben'
  })
};

/* ---------- Formate ---------- */
const FORMATE = {
  '4x5':  { w: 1080, h: 1350, padTop: 80,  padBottom: 96,  padX: 86, headPx: 86, subPx: 34 },
  '9x16': { w: 1080, h: 1920, padTop: 260, padBottom: 360, padX: 86, headPx: 96, subPx: 36 }
  /* '1x1': { w:1080, h:1080, padTop:70, padBottom:70, padX:80, headPx:76, subPx:32 } */
};

/* ---------- Template ---------- */
function html({ stelle, motiv, fmt, inhalt, fotoUri }) {
  const bg = fotoUri
    ? `background-image:linear-gradient(176deg,rgba(19,20,24,.80) 0%,rgba(19,20,24,.52) 42%,rgba(19,20,24,.93) 100%),url('${fotoUri}');background-size:cover;background-position:center`
    : `background-image:linear-gradient(150deg,${CI.inkDeep} 0%,#24262b 48%,#3c4047 100%)`;

  const logo = LOGO
    ? `<img class="logo-img" src="${LOGO}" alt="" />`
    : `<div class="logo-text"><b>SCHANBACHER</b><span>Parkett- und Fußbodentechnik · Raumgestaltung</span></div>`;

  const chips = inhalt.chips
    ? `<div class="chips">${inhalt.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>` : '';

  const liste = inhalt.liste
    ? `<ul class="liste">${inhalt.liste.map(l => `<li><svg viewBox="0 0 24 24" fill="none" stroke="${CI.brand}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>${l}</li>`).join('')}</ul>` : '';

  const sub = inhalt.sub ? `<p class="sub">${inhalt.sub}</p>` : '';

  return `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>
${FONTS}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${fmt.w}px;height:${fmt.h}px}
body{font-family:Figtree,sans-serif;color:#fff;${bg};position:relative;overflow:hidden}
.frame{position:absolute;inset:0;display:flex;flex-direction:column;
  padding:${fmt.padTop}px ${fmt.padX}px ${fmt.padBottom}px}
/* Gelbe Kante als wiedererkennbares CI-Element */
.kante{position:absolute;left:0;right:0;bottom:0;height:14px;background:${CI.brand}}
.logo-img{height:${Math.round(fmt.w*0.085)}px;width:auto;object-fit:contain;object-position:left}
.logo-text b{display:block;font-weight:900;font-size:${Math.round(fmt.w*0.052)}px;letter-spacing:.02em;color:${CI.brand};line-height:1}
.logo-text span{display:block;font-weight:700;font-size:${Math.round(fmt.w*0.0148)}px;letter-spacing:.14em;text-transform:uppercase;color:#dfe1e5;margin-top:9px}
/* Text + CTA unten gruppieren – oben bleibt die Fläche fürs Foto frei. */
.mitte{margin-top:auto;padding:46px 0 44px}
.eyebrow{display:inline-flex;align-items:center;gap:14px;font-weight:900;font-size:26px;
  letter-spacing:.1em;text-transform:uppercase;color:${CI.brand};margin-bottom:26px}
.eyebrow .dot{width:14px;height:14px;border-radius:50%;background:${CI.brand};box-shadow:0 0 0 7px rgba(245,180,0,.26)}
h1{font-weight:900;font-size:${fmt.headPx}px;line-height:1.04;letter-spacing:-.022em;
  text-shadow:0 4px 30px rgba(0,0,0,.45)}
h1 .akzent{color:${CI.brand}}
.sub{margin-top:26px;font-weight:500;font-size:${fmt.subPx}px;line-height:1.42;color:#e4e6ea;max-width:92%;
  text-shadow:0 2px 18px rgba(0,0,0,.5)}
.liste{list-style:none;margin-top:34px;display:grid;gap:19px}
.liste li{display:flex;align-items:flex-start;gap:17px;font-weight:700;font-size:${fmt.subPx+2}px;line-height:1.3;
  text-shadow:0 2px 18px rgba(0,0,0,.5)}
.liste svg{width:${fmt.subPx+6}px;height:${fmt.subPx+6}px;flex:0 0 auto;margin-top:2px}
.chips{display:flex;flex-wrap:wrap;gap:13px;margin-top:34px}
.chip{font-weight:800;font-size:27px;padding:13px 24px;border-radius:999px;
  background:rgba(245,180,0,.14);border:2px solid rgba(245,180,0,.55);color:${CI.soft}}
.cta{display:inline-flex;align-items:center;gap:16px;align-self:flex-start;
  background:${CI.brand};color:${CI.onBrand};font-weight:900;font-size:36px;
  padding:26px 44px;border-radius:16px;box-shadow:0 16px 44px rgba(0,0,0,.4)}
.cta svg{width:34px;height:34px}
.fuss{margin-top:24px;font-weight:700;font-size:24px;color:#b9bdc4;letter-spacing:.04em}
</style></head><body>
<div class="frame">
  ${logo}
  <div class="mitte">
    <div class="eyebrow"><span class="dot"></span>${inhalt.eyebrow}</div>
    <h1>${inhalt.head}</h1>
    ${sub}${liste}${chips}
  </div>
  <div class="cta">${inhalt.cta}
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  </div>
  <div class="fuss">Schanbacher GmbH · Filderstadt · seit 1968</div>
</div>
<div class="kante"></div>
<script>
/* Headline so lange verkleinern, bis der Textblock sicher in den Rahmen passt. */
(function(){
  var h=document.querySelector('h1'), m=document.querySelector('.mitte'), f=document.querySelector('.frame');
  var px=parseFloat(getComputedStyle(h).fontSize);
  var platz=function(){ return f.scrollHeight<=f.clientHeight && m.scrollHeight<=m.clientHeight; };
  var n=0;
  while(!platz() && px>34 && n++<80){ px-=2; h.style.fontSize=px+'px'; }
  document.documentElement.dataset.ready='1';
})();
</script></body></html>`;
}

/* =====================================================================
   FACEBOOK-SEITE · Profilbild + Titelbild
   Profilbild  1080 x 1080, rund beschnitten -> alles Wichtige in die
               mittige Kreisfläche, Ecken bleiben frei.
   Titelbild   1640 x 856, Sicherheitszone 1092 x 616 mittig,
               unten rechts frei (dort liegt der Button).
   Das Logo wird unverändert aus bilder/ übernommen (nicht nachgebaut,
   nicht eingefärbt, Seitenverhältnis bleibt). Fehlt es, rendert das
   Skript die Wortmarke als Platzhalter und hängt -PREVIEW an.
   ===================================================================== */
function fbProfil(){
  const inhalt = LOGO
    ? `<img class="mark" src="${LOGO}" alt="" />`
    : `<div class="wort"><b>SCHANBACHER</b><span>seit 1968</span></div>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
${FONTS}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1080px}
body{font-family:Figtree,sans-serif;background:linear-gradient(150deg,${CI.inkDeep} 0%,#24262b 52%,#3c4047 100%);
  display:grid;place-items:center;position:relative}
/* Hilfskreis = Facebook-Beschnitt; alles Wichtige liegt darin. */
.safe{width:756px;height:756px;display:grid;place-items:center;text-align:center}
.mark{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain}
.wort b{display:block;font-weight:900;font-size:118px;letter-spacing:.01em;color:${CI.brand};line-height:.98}
.wort span{display:block;margin-top:26px;font-weight:700;font-size:38px;letter-spacing:.3em;
  text-transform:uppercase;color:#e4e6ea}
.ring{position:absolute;width:980px;height:980px;border-radius:50%;border:5px solid rgba(245,180,0,.30)}
</style></head><body><div class="ring"></div><div class="safe">${inhalt}</div>
<script>(function(){var w=document.querySelector('.wort b');
if(w){var px=118;while(w.scrollWidth>756&&px>40){px-=2;w.style.fontSize=px+'px';}}
document.documentElement.dataset.ready='1';})();</script></body></html>`;
}

function fbTitel(){
  const mark = LOGO
    ? `<img class="mark" src="${LOGO}" alt="" />`
    : `<div class="wort"><b>SCHANBACHER</b><span>Parkett- und Fußbodentechnik · Raumgestaltung</span></div>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
${FONTS}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1640px;height:856px}
body{font-family:Figtree,sans-serif;background:linear-gradient(150deg,${CI.inkDeep} 0%,#24262b 50%,#3c4047 100%);
  position:relative;overflow:hidden}
/* Sicherheitszone 1092 x 616 mittig – mobil und Desktop wird unterschiedlich beschnitten. */
.safe{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
  width:1092px;height:616px;display:flex;flex-direction:column;justify-content:center;gap:34px}
.mark{max-height:190px;max-width:760px;width:auto;object-fit:contain;object-position:left}
.wort b{display:block;font-weight:900;font-size:104px;letter-spacing:.01em;color:${CI.brand};line-height:1}
.wort span{display:block;margin-top:16px;font-weight:700;font-size:26px;letter-spacing:.17em;
  text-transform:uppercase;color:#dfe1e5}
.claim{font-weight:900;font-size:50px;line-height:1.14;color:#fff;max-width:720px;letter-spacing:-.015em}
.claim em{font-style:normal;color:${CI.brand}}
.meta{display:flex;gap:14px;flex-wrap:wrap}
.meta span{font-weight:800;font-size:23px;padding:12px 22px;border-radius:999px;
  background:rgba(245,180,0,.14);border:2px solid rgba(245,180,0,.5);color:${CI.soft}}
.kante{position:absolute;left:0;right:0;bottom:0;height:12px;background:${CI.brand}}
</style></head><body>
<div class="safe">
  ${mark}
  <div class="claim">Handwerk mit Handschrift –<br><em>seit 1968 in Filderstadt.</em></div>
  <div class="meta"><span>Maler</span><span>Parkettleger</span><span>Raumausstatter</span><span>Wir stellen ein</span></div>
</div>
<div class="kante"></div>
<script>(function(){var w=document.querySelector('.wort b');
if(w){var px=104;while(w.scrollWidth>1092&&px>40){px-=2;w.style.fontSize=px+'px';}}
document.documentElement.dataset.ready='1';})();</script></body></html>`;
}

/* ---------- Rendern ---------- */
const browser = await chromium.launch();
mkdirSync(OUT, { recursive: true });
const erzeugt = [];
let ohneFoto = 0;

for (const s of STELLEN) {
  const fotoUri = s.foto.map(dataUri).find(Boolean) || null;
  for (const [motivName, bauen] of Object.entries(MOTIVE)) {
    for (const [fmtName, fmt] of Object.entries(FORMATE)) {
      const page = await (await browser.newContext({
        viewport: { width: fmt.w, height: fmt.h }, deviceScaleFactor: 1
      })).newPage();
      await page.setContent(html({ stelle: s, motiv: motivName, fmt, inhalt: bauen(s), fotoUri }),
                            { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForFunction(() => document.documentElement.dataset.ready === '1');
      const datei = `${s.key}-${motivName}-${fmtName}${fotoUri ? '' : '-PREVIEW'}.png`;
      await page.screenshot({ path: join(OUT, datei) });
      erzeugt.push(datei);
      await page.context().close();
    }
  }
  if (!fotoUri) ohneFoto++;
}
/* Facebook-Seite */
for (const [name, bauen, w, h] of [['facebook-profilbild', fbProfil, 1080, 1080],
                                   ['facebook-titelbild',  fbTitel, 1640, 856]]) {
  const page = await (await browser.newContext({ viewport:{width:w,height:h}, deviceScaleFactor:1 })).newPage();
  await page.setContent(bauen(), { waitUntil:'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => document.documentElement.dataset.ready === '1');
  const datei = `${name}${LOGO ? '' : '-PREVIEW'}.png`;
  await page.screenshot({ path: join(OUT, datei) });
  erzeugt.push(datei);
  await page.context().close();
}

await browser.close();

console.log(`${erzeugt.length} Dateien gerendert nach creatives/`);
erzeugt.forEach(d => console.log('  ' + d));
console.log(LOGO ? '\nLogo: Original aus bilder/ verwendet.'
                 : '\nHINWEIS: Kein Logo in bilder/ gefunden – Wortmarke als Platzhalter gesetzt.');
if (ohneFoto) console.log(`HINWEIS: Für ${ohneFoto} von ${STELLEN.length} Stellen fehlt das Foto – diese Dateien tragen "-PREVIEW" im Namen und sind reine Layout-Vorschauen.`);
