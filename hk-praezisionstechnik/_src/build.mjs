/* =====================================================================
   HK-PRÄZISIONSTECHNIK · Website-Generator
   ---------------------------------------------------------------------
     node _src/build.mjs

   Baut alle Seiten in Deutsch (Website-Ordner) und Englisch (en/).
   Texte stehen ausschließlich in _src/inhalte/de.mjs und en.mjs –
   jede Seite ist dort eine Liste von Abschnitten („typ"). Jeder
   Abschnittstyp entspricht später einem Block bzw. einer Vorlage in
   WordPress.

   Stammdaten, Videos, Tracking und Entwurfs-Schalter: _src/firma.mjs
   Farben und Schriften:                                _src/style.css
   ===================================================================== */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FIRMA, VIDEOS, CONFIG } from './firma.mjs';
import { icon, messkreuz } from './icons.mjs';
import de from './inhalte/de.mjs';
import en from './inhalte/en.mjs';

const SRC = dirname(fileURLToPath(import.meta.url));
const OUT = join(SRC, '..');
const SPRACHEN = [de, en];
const SEITEN = ['start', 'spanntechnik', 'oefen', 'silikon', 'saegen', 'unternehmen', 'karriere', 'kontakt', 'impressum', 'datenschutz'];

/* ---------- Logo: Originaldatei bevorzugt, sonst Ausschnitt aus der Signatur ---------- */
const LOGO = ['bilder/hk-logo.svg', 'bilder/hk-logo.png', 'bilder/hk-logo-aus-signatur.png'].find(p => existsSync(join(OUT, p)));
if (!LOGO) throw new Error('Kein Logo in bilder/ gefunden.');

/* ---------- Pfade ---------- */
const pfad = (spr, id) => spr.ordner + spr.slugs[id];                    // relativ zur Website-Wurzel
const tiefe = spr => (spr.ordner ? '../' : '');
const href = (ctx, id, extra = '') => tiefe(ctx.spr) + pfad(ctx.spr, id) + extra;
const absolut = (spr, id) => CONFIG.baseUrl + spr.ordner + (spr.slugs[id] === 'index.html' ? '' : spr.slugs[id]);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const ohneHtml = s => String(s).replace(/<[^>]+>/g, '');

/* Textbausteine: [Text](seite:kontakt?bereich=x) und {TEL}, {MAIL}, {FAX} */
function txt(ctx, s) {
  if (s == null) return '';
  return String(s)
    .replace(/\[([^\]]+)\]\(seite:([a-z]+)([^)]*)\)/g, (_, t, id, extra) => {
      if (!ctx.spr.slugs[id]) throw new Error(`Unbekannte Seite „${id}" in Text.`);
      return `<a href="${href(ctx, id, extra)}">${t}</a>`;
    })
    .replace(/\{TEL\}/g, `<a href="tel:${FIRMA.telefonLink}">${FIRMA.telefon}</a>`)
    .replace(/\{MAIL\}/g, `<a href="mailto:${FIRMA.email}">${FIRMA.email}</a>`)
    .replace(/\{FAX\}/g, FIRMA.fax);
}

function knopf(ctx, b) {
  const ziel = b.seite ? href(ctx, b.seite, b.extra || '') : b.href;
  return `<a class="btn btn--${b.stil || 'primaer'}" href="${ziel}">${b.text}${b.pfeil === false ? '' : icon('pfeil')}</a>`;
}
const knoepfe = (ctx, liste) => (liste && liste.length ? `<div class="btns">${liste.map(b => knopf(ctx, b)).join('')}</div>` : '');

/* ---------- Bausteine ---------- */
function video(ctx, v) {
  const ui = ctx.spr.ui;
  const c = VIDEOS[v.id] || {};
  const da = c.youtube || c.mp4;
  const knopfAttr = da
    ? `button type="button" class="video__knopf" data-video data-titel="${esc(v.titel)}"${c.youtube ? ` data-youtube="${esc(c.youtube)}"` : ''}${c.mp4 ? ` data-mp4="${esc(ctx.A + c.mp4)}"` : ''} aria-label="${esc(ui.videoAbspielen + ': ' + v.titel)}"`
    : `div class="video__knopf" role="img" aria-label="${esc(ui.videoFolgt + ': ' + v.titel)}"`;
  const tag = da ? 'button' : 'div';
  return `<div class="video">${da ? '' : `<span class="video__marke" aria-hidden="true">${ui.videoFolgt}</span>`}` +
    `<${knopfAttr}><span class="video__play">${icon('play')}</span></${tag}>` +
    `<div class="video__info" aria-hidden="true"><b>${v.titel}</b><span>${v.unterzeile}</span></div></div>` +
    (c.youtube ? `<p class="video__hinweis">${ui.videoYoutube}</p>` : '');
}

function bild(ctx, b) {
  const ar = b.format || '4/3';
  if (existsSync(join(OUT, 'bilder', b.datei))) {
    return `<div class="bild" style="--ar:${ar}"><img src="${ctx.A}bilder/${b.datei}" alt="${esc(b.alt || '')}" loading="lazy" decoding="async"></div>`;
  }
  return `<div class="bild bild--leer" style="--ar:${ar}">${icon('kamera')}<b>${b.text}</b><span>${ctx.spr.ui.bildFolgt} · bilder/${b.datei}</span></div>`;
}

function kopfzeile(ctx, s, id) {
  if (!s.h2) return '';
  return `<div class="kopfzeile">${s.kicker ? `<p class="kicker">${s.kicker}</p>` : ''}<h2 id="${id}">${s.h2}</h2>${s.intro ? `<p>${txt(ctx, s.intro)}</p>` : ''}</div>`;
}
const nachsatz = (ctx, s) => (s.nachsatz ? `<p class="nachsatz">${txt(ctx, s.nachsatz)}</p>` : '');
const sektion = (klasse, id, inhalt, anker) =>
  `<section class="${klasse}"${id ? ` aria-labelledby="${id}"` : ''}${anker ? ` id="${anker}"` : ''}><div class="wrap">${inhalt}</div></section>`;

function kanaele(ctx) {
  const ui = ctx.spr.ui;
  return `<div class="kanal">` +
    `<div class="kanal__karte">${icon('telefon')}<div><b>${ui.telefon}</b><a href="tel:${FIRMA.telefonLink}">${FIRMA.telefon}</a><p>${ui.fax} ${FIRMA.fax}</p></div></div>` +
    `<div class="kanal__karte">${icon('mail')}<div><b>${ui.email}</b><a href="mailto:${FIRMA.email}">${FIRMA.email}</a></div></div>` +
    `<div class="kanal__karte">${icon('pin')}<div><b>${ui.adresse}</b><p>${FIRMA.name}<br>${FIRMA.strasse}<br>${FIRMA.plz} ${FIRMA.ort}</p><p>${ui.anfahrt}</p>` +
    `<p><a href="${FIRMA.maps}" target="_blank" rel="noopener">${ui.route}<span class="sr"> ${ui.neuesFenster}</span></a></p></div></div></div>`;
}

/* ---------- Abschnitte ---------- */
let zaehler = 0;
const R = {
  kopf(ctx, s) {
    const ui = ctx.spr.ui;
    const start = ctx.id === 'start';
    const gruppe = ctx.spr.nav.find(n => n.kinder && n.kinder.includes(ctx.id));
    const krumen = start ? '' :
      `<nav class="krumen" aria-label="${ui.brotkrumen}"><ol><li><a href="${href(ctx, 'start')}">${ui.startseite}</a></li>` +
      (gruppe ? `<li>${gruppe.text}</li>` : '') + `<li aria-current="page">${ctx.seite.name}</li></ol></nav>`;
    const medien = s.video ? video(ctx, s.video) : s.bild ? bild(ctx, s.bild) : '';
    const hinweis = s.hinweis && CONFIG.entwurf ? `<aside class="hinweis"><b>${ui.platzhalter}</b>${txt(ctx, s.hinweis)}</aside>` : '';
    return `<section class="seitenkopf dunkel${start ? ' seitenkopf--start' : ''}${medien ? '' : ' seitenkopf--solo'}" aria-labelledby="h1">${messkreuz()}` +
      `<div class="wrap"><div class="seitenkopf__raster${medien ? '' : ' seitenkopf__raster--solo'}"><div>${krumen}` +
      `${s.kicker ? `<p class="kicker">${s.kicker}</p>` : ''}<h1 id="h1">${s.h1}</h1>` +
      `${s.lead ? `<p class="seitenkopf__lead">${txt(ctx, s.lead)}</p>` : ''}${knoepfe(ctx, s.knoepfe)}${hinweis}</div>` +
      `${medien ? `<div>${medien}</div>` : ''}</div></div></section>`;
  },

  fakten(ctx, s) {
    return `<div class="fakten"><div class="wrap"><ul>${s.liste.map(f => `<li><b>${f.wert}</b><span>${f.text}</span></li>`).join('')}</ul></div></div>`;
  },

  karten(ctx, s) {
    const id = 'h-' + (++zaehler);
    const n = s.spalten || 3;
    const karten = s.liste.map(k => {
      const ic = k.icon ? `<span class="karte__icon">${icon(s.variante === 'vorteile' && !k.icon ? 'check' : k.icon)}</span>` : '';
      const link = k.seite ? `<a class="karte__link" href="${href(ctx, k.seite, k.extra || '')}">${k.link}${icon('pfeil')}</a>` : '';
      return `<article class="karte">${k.bild ? bild(ctx, k.bild) : ''}${ic}${k.tag ? `<p class="karte__tag">${k.tag}</p>` : ''}` +
        `<h3>${k.titel}</h3>${k.text ? `<p>${txt(ctx, k.text)}</p>` : ''}${link}</article>`;
    }).join('');
    const teaser = s.teaser ? `<a class="teaser" href="${href(ctx, s.teaser.seite)}"><span class="teaser__neu">${s.teaser.marke}</span><b>${s.teaser.text}</b>${icon('pfeil')}</a>` : '';
    return sektion(`sec${s.stein ? ' sec--stein' : ''}`, id,
      kopfzeile(ctx, s, id) + `<div class="karten${s.variante ? ' karten--' + s.variante : ''}" style="--spalten:${n}">${karten}</div>${teaser}${nachsatz(ctx, s)}`, s.anker);
  },

  zitat(ctx, s) {
    const id = 'h-' + (++zaehler);
    return sektion(`sec${s.weiss ? '' : ' sec--stein'}`, null,
      `<figure class="zitat"><h2 class="sr" id="${id}">${s.sr}</h2><blockquote><p>${s.text}</p></blockquote>` +
      `<figcaption><span><b>${s.name}</b><span>${s.rolle}</span></span></figcaption></figure>${nachsatz(ctx, s)}`);
  },

  schritte(ctx, s) {
    const id = 'h-' + (++zaehler);
    return sektion(`sec${s.stein ? ' sec--stein' : ''}`, id,
      kopfzeile(ctx, s, id) + `<ol class="schritte">${s.liste.map(p => `<li><h3>${p.titel}</h3><p>${txt(ctx, p.text)}</p></li>`).join('')}</ol>${nachsatz(ctx, s)}`, s.anker);
  },

  wege(ctx, s) {
    const id = 'h-' + (++zaehler);
    const ui = ctx.spr.ui;
    const wege = s.liste.map(w => `<article class="weg${w.hk ? ' weg--hk' : ''}"><p class="weg__nr">${w.nr}</p><h3>${w.titel}</h3>` +
      `${w.claim ? `<span class="weg__claim">${w.claim}</span>` : ''}<ul>` +
      (w.plus || []).map(p => `<li class="plus">${icon('check')}<span><span class="sr">${ui.vorteil}: </span>${p}</span></li>`).join('') +
      (w.minus || []).map(p => `<li class="minus">${icon('kreuz')}<span><span class="sr">${ui.nachteil}: </span>${p}</span></li>`).join('') +
      `</ul></article>`).join('');
    return sektion('sec dunkel', id, kopfzeile(ctx, s, id) + `<div class="wege">${wege}</div>${nachsatz(ctx, s)}`, s.anker);
  },

  achse(ctx, s) {
    const id = 'h-' + (++zaehler);
    const ui = ctx.spr.ui;
    const zeilen = s.zeilen.map(z => {
      const spuren = Math.max(...z.balken.map(b => b.spur || 1));
      const balken = z.balken.map(b =>
        `<div class="balken balken--${b.art}" style="grid-column:${b.von}/${b.bis + 1};grid-row:${b.spur || 1}"><span class="lang">${b.text}</span><span class="kurz">${b.kurz || b.text}</span></div>`).join('');
      const rechts = z.start > 12 ? ' start--rechts' : '';
      return `<div class="achse__zeile"><div class="achse__titel"><b>${z.titel}</b></div>` +
        `<div class="achse__spur" style="grid-template-rows:repeat(${spuren},40px)">${balken}` +
        `<div class="start${rechts}" style="grid-column:${z.start};grid-row:1/${spuren + 1}"><span>${ui.serienstart}</span></div></div>` +
        (z.gewinn ? `<div class="achse__gewinn"><div style="grid-column:${z.gewinn.von}/${z.gewinn.bis + 1}"></div><p>${z.gewinn.text}</p></div>` : '') + `</div>`;
    }).join('');
    return sektion('sec sec--stein', id, kopfzeile(ctx, s, id) +
      `<figure class="achse"><div aria-hidden="true">${zeilen}</div><p class="sr">${s.alternativtext}</p><figcaption>${s.unterschrift}</figcaption></figure>`, s.anker);
  },

  split(ctx, s) {
    const id = 'h-' + (++zaehler);
    const medien = s.video ? video(ctx, s.video) : s.bild ? bild(ctx, s.bild) : s.kanaele ? kanaele(ctx) : '';
    const liste = s.liste ? `<ul class="liste">${s.liste.map(p => `<li>${icon('check')}<span>${txt(ctx, p)}</span></li>`).join('')}</ul>` : '';
    const klasse = `split${s.umgekehrt ? ' split--umgekehrt' : ''}${medien ? '' : ' split--solo'}`;
    const ton = s.dunkel ? ' dunkel' : s.stein ? ' sec--stein' : '';
    return sektion(`sec${ton}`, id,
      `<div class="${klasse}"><div class="fliess">${s.kicker ? `<p class="kicker">${s.kicker}</p>` : ''}<h2 id="${id}">${s.h2}</h2>` +
      `${(s.absaetze || []).map(p => `<p>${txt(ctx, p)}</p>`).join('')}${liste}${knoepfe(ctx, s.knoepfe)}</div>` +
      `${medien ? `<div class="split__medien">${medien}</div>` : ''}</div>`, s.anker);
  },

  tabelle(ctx, s) {
    const id = 'h-' + (++zaehler);
    const ui = ctx.spr.ui;
    const hk = s.hkSpalte ?? -1;
    const zelle = c => {
      if (typeof c === 'string') return c;
      if (c.ok === true) return `<span class="wert ja">${icon('check')}<span><span class="sr">${ui.ja}: </span>${c.text}</span></span>`;
      if (c.ok === false) return `<span class="wert nein">${icon('kreuz')}<span><span class="sr">${ui.nein}: </span>${c.text}</span></span>`;
      return c.text;
    };
    const kopf = s.kopf.map((h, i) => `<th scope="col"${i === hk ? ' class="hk"' : ''}>${h || `<span class="sr">${s.kopfSr || ''}</span>`}</th>`).join('');
    const zeilen = s.zeilen.map(z => `<tr><th scope="row">${z[0]}</th>${z.slice(1).map((c, i) =>
      `<td data-label="${esc(ohneHtml(s.kopf[i + 1]))}"${i + 1 === hk ? ' class="hk"' : ''}>${zelle(c)}</td>`).join('')}</tr>`).join('');
    return sektion(`sec${s.stein ? ' sec--stein' : ''}`, id, kopfzeile(ctx, s, id) +
      `<div class="tabelle"><table>${s.unterschrift ? `<caption>${s.unterschrift}</caption>` : ''}<thead><tr>${kopf}</tr></thead><tbody>${zeilen}</tbody></table></div>${nachsatz(ctx, s)}`, s.anker);
  },

  cta(ctx, s) {
    const id = 'h-' + (++zaehler);
    const ui = ctx.spr.ui;
    return `<section class="cta" aria-labelledby="${id}"><div class="wrap cta__in"><div>${s.kicker ? `<p class="kicker">${s.kicker}</p>` : ''}` +
      `<h2 id="${id}">${s.h2}</h2>${s.text ? `<p>${txt(ctx, s.text)}</p>` : ''}${s.signatur ? `<p class="cta__sig">${s.signatur}</p>` : ''}</div>` +
      `<div>${knoepfe(ctx, s.knoepfe)}${s.telefon === false ? '' : `<p class="cta__tel">${ui.oderAnrufen} <a href="tel:${FIRMA.telefonLink}">${FIRMA.telefon}</a></p>`}</div></div></section>`;
  },

  hinweis(ctx, s) {
    if (!CONFIG.entwurf) return '';
    return `<div class="sec--hinweis"><div class="wrap"><aside class="hinweis"><b>${ctx.spr.ui.platzhalter}</b>${txt(ctx, s.text)}</aside></div></div>`;
  },

  prosa(ctx, s) {
    const hinweis = s.hinweis && CONFIG.entwurf ? `<aside class="hinweis"><b>${ctx.spr.ui.platzhalter}</b>${txt(ctx, s.hinweis)}</aside>` : '';
    return sektion('sec', null, `<div class="prosa">${hinweis}${txt(ctx, s.html)}</div>`);
  },

  anfrage(ctx, s) {
    const f = ctx.spr.ui.form;
    const pf = icon('pfeil');
    const weiter = `<button type="button" class="btn btn--primaer" data-schritt="weiter">${f.weiter}${pf}</button>`;
    const zurueck = `<button type="button" class="btn--zurueck" data-schritt="zurueck">${f.zurueck}</button>`;
    const radios = (name, liste, eins) => `<div class="optionen${eins ? ' optionen--eins' : ''}">` + liste.map(o =>
      `<div class="option"><input type="radio" id="${name}-${o.wert}" name="${name}" value="${o.wert}" data-text="${esc(o.text)}" required>` +
      `<label for="${name}-${o.wert}"><span>${o.text}${o.klein ? `<small>${o.klein}</small>` : ''}</span></label></div>`).join('') + `</div>`;
    const feld = (name, typ, label, pflicht, auto) =>
      `<div class="feld"><label for="f-${name}">${label}${pflicht ? '' : ` <span>(${f.optional})</span>`}</label>` +
      `<input id="f-${name}" name="${name}" type="${typ}"${pflicht ? ' required' : ''}${auto ? ` autocomplete="${auto}"` : ''}></div>`;
    const schritt = (inhalt, nav) => `<div class="schritt"><fieldset>${inhalt}</fieldset><p class="fehler" role="status"></p><div class="schritt__nav">${nav}</div></div>`;
    const anzahl = 5;

    const form =
      `<div class="anfrage"><div class="anfrage__fortschritt"><p id="anfrage-schritt" aria-live="polite">${f.schritt.replace('{n}', 1).replace('{g}', anzahl)}</p>` +
      `<div class="anfrage__balken" aria-hidden="true"><span id="anfrage-balken"></span></div></div>` +
      `<form id="anfrage" novalidate>` +
      schritt(`<legend tabindex="-1">${f.s1}</legend><p class="schritt__hilfe">${f.s1hilfe}</p>${radios('bereich', f.bereiche)}`, weiter) +
      schritt(`<legend tabindex="-1">${f.s2}</legend><p class="schritt__hilfe">${f.s2hilfe}</p>${radios('projektstand', f.stände, true)}`, zurueck + weiter) +
      schritt(`<legend tabindex="-1">${f.s3}</legend><p class="schritt__hilfe">${f.s3hilfe}</p>${radios('zeitrahmen', f.zeiten, true)}`, zurueck + weiter) +
      schritt(`<legend tabindex="-1">${f.s4}</legend><p class="schritt__hilfe">${f.s4hilfe}</p>` +
        `<div class="feld"><label for="f-nachricht">${f.nachricht} <span>(${f.optional})</span></label><textarea id="f-nachricht" name="nachricht" placeholder="${esc(f.nachrichtPlatzhalter)}"></textarea></div>`, zurueck + weiter) +
      schritt(`<legend tabindex="-1">${f.s5}</legend><p class="schritt__hilfe">${f.s5hilfe}</p>` +
        feld('firma', 'text', f.firma, true, 'organization') +
        `<div class="feld-reihe">${feld('vorname', 'text', f.vorname, true, 'given-name')}${feld('nachname', 'text', f.nachname, true, 'family-name')}</div>` +
        `<div class="feld-reihe">${feld('email', 'email', f.email, true, 'email')}${feld('telefon', 'tel', f.telefon, false, 'tel')}</div>` +
        `<div class="honig" aria-hidden="true"><label for="f-website">Website</label><input id="f-website" name="website" type="text" tabindex="-1" autocomplete="off"></div>` +
        `<label class="check"><input type="checkbox" name="datenschutz" required><span>${txt(ctx, f.datenschutz)}</span></label>`,
        zurueck + `<button type="submit" class="btn btn--primaer">${f.senden}${pf}</button>`) +
      `</form>` +
      `<div id="anfrage-danke" class="danke" hidden>${icon('danke')}<h2 tabindex="-1">${f.dankeTitel}</h2><p>${f.dankeText}</p></div>` +
      `<noscript><p class="danke">${txt(ctx, f.ohneJs)}</p></noscript></div>`;
    return sektion('sec sec--stein', null, `<div class="kontakt">${form}<aside aria-label="${ctx.spr.ui.direkt}">${kanaele(ctx)}</aside></div>`);
  }
};

/* ---------- Kopf, Navigation, Fuß ---------- */
function sprachwahl(ctx) {
  return `<ul class="sprache" aria-label="${ctx.spr.ui.sprache}">` + SPRACHEN.map(s2 =>
    `<li><a href="${tiefe(ctx.spr) + pfad(s2, ctx.id)}" lang="${s2.lang}" hreflang="${s2.lang}"${s2 === ctx.spr ? ' aria-current="true"' : ''}>` +
    `<span aria-hidden="true">${s2.kurz}</span><span class="sr">${s2.name}</span></a></li>`).join('') + `</ul>`;
}

function kopf(ctx) {
  const { spr, id } = ctx;
  const ui = spr.ui;
  const punkte = spr.nav.map((n, i) => {
    if (n.kinder) {
      const aktiv = n.kinder.includes(id);
      return `<li class="nav__drop"><span class="nav__gruppe" aria-hidden="true">${n.text}</span>` +
        `<button type="button" class="nav__knopf${aktiv ? ' ist-aktiv' : ''}" aria-expanded="false" aria-controls="sub-${i}">${n.text}${icon('runter')}</button>` +
        `<ul class="nav__sub" id="sub-${i}">${n.kinder.map(k => `<li><a href="${href(ctx, k)}"${k === id ? ' aria-current="page"' : ''}>${spr.seiten[k].name}` +
        `${spr.seiten[k].navInfo ? `<small>${spr.seiten[k].navInfo}</small>` : ''}</a></li>`).join('')}</ul></li>`;
    }
    return `<li><a href="${href(ctx, n.seite)}"${n.seite === id ? ' aria-current="page"' : ''}>${spr.seiten[n.seite].name}</a></li>`;
  }).join('');
  return `<header class="kopf" id="kopf"><div class="wrap kopf__in">` +
    `<a class="marke" href="${href(ctx, 'start')}"><img src="${ctx.A}${LOGO}" alt="" width="31" height="46"><span class="marke__text"><b>${FIRMA.marke}</b><small>${FIRMA.claim}</small></span><span class="sr"> – ${ui.startseite}</span></a>` +
    `<button type="button" class="burger" aria-expanded="false" aria-controls="hauptnav"><span class="burger__box" aria-hidden="true"><span></span></span><span>${ui.menue}</span></button>` +
    `<nav id="hauptnav" class="nav" aria-label="${ui.hauptnavigation}"><ul class="nav__liste">${punkte}</ul>` +
    `<div class="nav__meta">${sprachwahl(ctx)}<a class="btn btn--primaer btn--klein" href="${href(ctx, 'kontakt')}">${ui.anfragen}</a></div></nav>` +
    `</div></header>`;
}

function fuss(ctx) {
  const { spr } = ctx;
  const ui = spr.ui;
  const li = id => `<li><a href="${href(ctx, id)}">${spr.seiten[id].name}</a></li>`;
  const social = CONFIG.social.length ? `<ul>${CONFIG.social.map(s => `<li><a href="${s.url}" rel="noopener" target="_blank">${s.name}<span class="sr"> ${ui.neuesFenster}</span></a></li>`).join('')}</ul>` : '';
  return `<footer class="fuss"><div class="wrap"><div class="fuss__raster">` +
    `<div><a class="fuss__marke" href="${href(ctx, 'start')}"><img src="${ctx.A}${LOGO}" alt="" width="31" height="46"><b>${FIRMA.marke}</b></a>` +
    `<p class="fuss__claim">${FIRMA.claim}</p><p>${ui.fussText}</p>${social}</div>` +
    `<nav aria-labelledby="f-bereiche"><h2 id="f-bereiche">${ui.bereiche}</h2><ul>${['spanntechnik', 'oefen', 'silikon', 'saegen'].map(li).join('')}</ul></nav>` +
    `<nav aria-labelledby="f-firma"><h2 id="f-firma">${ui.unternehmen}</h2><ul>${['unternehmen', 'karriere', 'kontakt'].map(li).join('')}</ul></nav>` +
    `<div><h2>${ui.kontakt}</h2><address>${FIRMA.name}<br>${FIRMA.strasse}<br>${FIRMA.plz} ${FIRMA.ort}<br>` +
    `<a href="tel:${FIRMA.telefonLink}">${FIRMA.telefon}</a><br><a href="mailto:${FIRMA.email}">${FIRMA.email}</a></address></div>` +
    `</div><div class="fuss__unten"><p>© ${new Date().getFullYear()} ${FIRMA.name}</p><ul>${li('impressum')}${li('datenschutz')}</ul>${sprachwahl(ctx)}</div></div></footer>`;
}

/* ---------- Strukturierte Daten ---------- */
function jsonLd(ctx) {
  const { spr, id, seite } = ctx;
  const base = CONFIG.baseUrl;
  const graph = [{
    '@type': 'Organization', '@id': base + '#firma', name: FIRMA.name, url: base, logo: base + LOGO,
    slogan: FIRMA.claim, email: FIRMA.email, telephone: FIRMA.telefon, faxNumber: FIRMA.fax, vatID: FIRMA.ustid.replace(/\s/g, ''),
    address: { '@type': 'PostalAddress', streetAddress: FIRMA.strasse, postalCode: FIRMA.plz, addressLocality: FIRMA.ort, addressCountry: 'DE' },
    ...(CONFIG.social.length ? { sameAs: CONFIG.social.map(s => s.url) } : {})
  }, {
    '@type': 'WebPage', '@id': absolut(spr, id), url: absolut(spr, id), name: seite.title, description: seite.description,
    inLanguage: spr.lang, isPartOf: { '@type': 'WebSite', '@id': base + '#website', url: base, name: FIRMA.marke.replace('‑', '-') },
    about: { '@id': base + '#firma' }
  }];
  if (id !== 'start') {
    graph.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: spr.ui.startseite, item: absolut(spr, 'start') },
      { '@type': 'ListItem', position: 2, name: ohneHtml(seite.name), item: absolut(spr, id) }] });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

/* ---------- Seite zusammensetzen ---------- */
const CSS_ROH = readFileSync(join(SRC, 'style.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '').replace(/\s{2,}/g, ' ');
const JS = readFileSync(join(SRC, 'app.js'), 'utf8');

function seiteBauen(spr, id) {
  const seite = spr.seiten[id];
  if (!seite) throw new Error(`Seite „${id}" fehlt in ${spr.lang}.mjs`);
  for (const feld of ['name', 'title', 'description', 'abschnitte']) if (!seite[feld]) throw new Error(`${spr.lang}/${id}: Feld „${feld}" fehlt.`);
  zaehler = 0;
  const A = tiefe(spr);
  const ctx = { spr, id, seite, A };
  const ui = spr.ui;
  const inhalt = seite.abschnitte.map(s => {
    if (!R[s.typ]) throw new Error(`${spr.lang}/${id}: Abschnittstyp „${s.typ}" unbekannt.`);
    return R[s.typ](ctx, s);
  }).join('\n');
  const alternates = SPRACHEN.map(s2 => `<link rel="alternate" hreflang="${s2.lang}" href="${absolut(s2, id)}">`).join('') +
    `<link rel="alternate" hreflang="x-default" href="${absolut(SPRACHEN[0], id)}">`;
  const matomo = CONFIG.matomo.url && CONFIG.matomo.siteId
    ? `<script>var _paq=window._paq=window._paq||[];_paq.push(['disableCookies']);_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);` +
      `(function(){var u=${JSON.stringify(CONFIG.matomo.url.replace(/\/?$/, '/'))};_paq.push(['setTrackerUrl',u+'matomo.php']);_paq.push(['setSiteId',${JSON.stringify(String(CONFIG.matomo.siteId))}]);` +
      `var d=document,g=d.createElement('script'),s=d.getElementsByTagName('script')[0];g.async=true;g.src=u+'matomo.js';s.parentNode.insertBefore(g,s);})();</script>` : '';

  return `<!doctype html>
<html lang="${spr.htmlLang}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${seite.title}</title>
<meta name="description" content="${esc(seite.description)}">
<meta name="robots" content="${CONFIG.entwurf ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}">
<link rel="canonical" href="${absolut(spr, id)}">
${alternates}
<meta name="theme-color" content="#1f2925">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${FIRMA.name}">
<meta property="og:locale" content="${spr.og}">
<meta property="og:title" content="${esc(seite.title)}">
<meta property="og:description" content="${esc(seite.description)}">
<meta property="og:url" content="${absolut(spr, id)}">
${CONFIG.searchConsole ? `<meta name="google-site-verification" content="${esc(CONFIG.searchConsole)}">` : ''}
<link rel="icon" href="${A}${LOGO}">
<link rel="preload" href="${A}assets/fonts/barlow-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${A}assets/fonts/barlow-condensed-latin-700-normal.woff2" as="font" type="font/woff2" crossorigin>
<script>document.documentElement.className='js'</script>
<style>${CSS_ROH.replace(/\{\{A\}\}/g, A)}</style>
<script type="application/ld+json">${jsonLd(ctx)}</script>
</head>
<body>
<a class="skip" href="#inhalt">${ui.zumInhalt}</a>
${CONFIG.entwurf ? `<aside class="entwurf" aria-label="${ui.platzhalter}"><b>${ui.entwurf}</b> · ${ui.stand} ${CONFIG.stand}</aside>` : ''}
${kopf(ctx)}
<main id="inhalt" tabindex="-1">
${inhalt}
</main>
${fuss(ctx)}
<script>window.HK=${JSON.stringify({ anfrageZiel: CONFIG.anfrageZiel, form: ui.form.js })}</script>
<script>${JS}</script>
${matomo}
</body>
</html>
`;
}

/* ---------- Schreiben ---------- */
let anzahl = 0;
for (const spr of SPRACHEN) {
  for (const feld of ['lang', 'htmlLang', 'og', 'name', 'kurz', 'ui', 'nav', 'slugs', 'seiten']) if (spr[feld] == null) throw new Error(`Sprachdatei: Feld „${feld}" fehlt.`);
  if (spr.ordner) mkdirSync(join(OUT, spr.ordner), { recursive: true });
  for (const id of SEITEN) {
    writeFileSync(join(OUT, pfad(spr, id)), seiteBauen(spr, id));
    anzahl++;
  }
}

/* Sitemap mit Sprachverweisen + robots.txt */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${SPRACHEN.flatMap(spr => SEITEN.map(id => `  <url><loc>${absolut(spr, id)}</loc>${SPRACHEN.map(s2 => `<xhtml:link rel="alternate" hreflang="${s2.lang}" href="${absolut(s2, id)}"/>`).join('')}</url>`)).join('\n')}
</urlset>
`;
writeFileSync(join(OUT, 'sitemap.xml'), sitemap);
writeFileSync(join(OUT, 'robots.txt'), CONFIG.entwurf
  ? `# Entwurf – nicht indexieren\nUser-agent: *\nDisallow: /\n`
  : `User-agent: *\nAllow: /\n\nSitemap: ${CONFIG.baseUrl}sitemap.xml\n`);

console.log(`✓ ${anzahl} Seiten gebaut (${SPRACHEN.map(s => s.kurz).join(' + ')})${CONFIG.entwurf ? ' – Entwurfsmodus' : ''}. Logo: ${LOGO}`);
