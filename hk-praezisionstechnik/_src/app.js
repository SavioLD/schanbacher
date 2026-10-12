/* HK-Präzisionstechnik · Seitenlogik (Navigation, Video, Anfrage-Tool).
   Konfiguration kommt aus window.HK (wird beim Build gesetzt). */
(function () {
  var HK = window.HK || {};
  var doc = document.documentElement;

  /* ---------- Kopf: Schatten beim Scrollen ---------- */
  var kopf = document.getElementById('kopf');
  if (kopf) {
    var gescrollt = false;
    window.addEventListener('scroll', function () {
      var jetzt = window.scrollY > 8;
      if (jetzt !== gescrollt) { gescrollt = jetzt; kopf.classList.toggle('ist-gescrollt', jetzt); }
    }, { passive: true });
  }

  /* ---------- Mobile Navigation ---------- */
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('hauptnav');
  function navSetzen(offen) {
    burger.setAttribute('aria-expanded', String(offen));
    nav.classList.toggle('ist-offen', offen);
    doc.classList.toggle('nav-offen', offen);
    if (offen) nav.style.setProperty('--nav-top', Math.max(0, kopf.getBoundingClientRect().bottom) + 'px');
  }
  if (burger && nav) {
    burger.addEventListener('click', function () { navSetzen(burger.getAttribute('aria-expanded') !== 'true'); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') { navSetzen(false); burger.focus(); }
    });
    window.matchMedia('(min-width:1141px)').addEventListener('change', function (m) { if (m.matches) navSetzen(false); });
  }

  /* ---------- Dropdown ---------- */
  document.querySelectorAll('.nav__drop').forEach(function (li) {
    var knopf = li.querySelector('.nav__knopf');
    function setzen(offen) { li.classList.toggle('ist-offen', offen); knopf.setAttribute('aria-expanded', String(offen)); }
    knopf.addEventListener('click', function () { setzen(knopf.getAttribute('aria-expanded') !== 'true'); });
    li.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setzen(false); knopf.focus(); } });
    li.addEventListener('focusout', function (e) { if (!li.contains(e.relatedTarget)) setzen(false); });
    document.addEventListener('click', function (e) { if (!li.contains(e.target)) setzen(false); });
  });

  /* ---------- Video: erst nach Klick laden (Datenschutz + Ladezeit) ---------- */
  document.querySelectorAll('[data-video]').forEach(function (knopf) {
    knopf.addEventListener('click', function () {
      var box = knopf.closest('.video');
      var yt = knopf.getAttribute('data-youtube');
      var mp4 = knopf.getAttribute('data-mp4');
      var titel = knopf.getAttribute('data-titel') || '';
      if (yt) {
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(yt) + '?autoplay=1&rel=0';
        f.title = titel;
        f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        f.allowFullscreen = true;
        box.replaceChildren(f);
      } else if (mp4) {
        var v = document.createElement('video');
        v.src = mp4; v.controls = true; v.autoplay = true; v.playsInline = true;
        v.setAttribute('aria-label', titel);
        box.replaceChildren(v);
        v.focus();
      }
    });
  });

  /* ---------- Anfrage-Tool ---------- */
  var form = document.getElementById('anfrage');
  if (!form) return;
  var T = HK.form || {};
  var schritte = Array.prototype.slice.call(form.querySelectorAll('.schritt'));
  var gesamt = schritte.length;
  var akt = 0;
  var fortText = document.getElementById('anfrage-schritt');
  var fortBalken = document.getElementById('anfrage-balken');

  function zeigen(i, fokus) {
    schritte.forEach(function (s, n) { s.hidden = n !== i; });
    akt = i;
    fortText.textContent = (T.schritt || 'Schritt {n} von {g}').replace('{n}', i + 1).replace('{g}', gesamt);
    fortBalken.style.width = ((i + 1) / gesamt * 100) + '%';
    if (fokus) {
      var lg = schritte[i].querySelector('legend');
      lg.focus({ preventScroll: true });
      var oben = form.getBoundingClientRect().top;
      if (oben < (kopf ? kopf.offsetHeight : 0)) form.scrollIntoView({ block: 'start' });
    }
  }

  function fehler(s, text, feld, ruhig) {
    var box = s.querySelector('.fehler');
    box.textContent = text || '';
    s.querySelectorAll('[aria-invalid]').forEach(function (el) { el.removeAttribute('aria-invalid'); });
    if (feld) { feld.setAttribute('aria-invalid', 'true'); if (!ruhig) feld.focus(); }
  }

  function pruefen(s, ruhig) {
    var radios = s.querySelectorAll('input[type=radio][required]');
    if (radios.length && !s.querySelector('input[type=radio]:checked')) { fehler(s, T.wahl, null, ruhig); return false; }
    var felder = s.querySelectorAll('input[required]:not([type=radio]):not([type=checkbox]), textarea[required]');
    for (var i = 0; i < felder.length; i++) {
      var f = felder[i];
      if (!f.value.trim()) { fehler(s, T.pflicht, f, ruhig); return false; }
      if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.value.trim())) { fehler(s, T.email, f, ruhig); return false; }
    }
    var cb = s.querySelector('input[type=checkbox][required]');
    if (cb && !cb.checked) { fehler(s, T.datenschutz, cb, ruhig); return false; }
    fehler(s, '');
    return true;
  }

  form.addEventListener('click', function (e) {
    var b = e.target.closest('[data-schritt]');
    if (!b) return;
    e.preventDefault();
    if (b.getAttribute('data-schritt') === 'weiter') { if (pruefen(schritte[akt])) zeigen(akt + 1, true); }
    else zeigen(Math.max(0, akt - 1), true);
  });

  /* Fehlermeldung verschwindet, sobald korrigiert wird */
  form.addEventListener('change', function () { var s = schritte[akt]; if (s.querySelector('.fehler').textContent) pruefen(s, true); });

  /* Enter in einem Textfeld = Weiter, nicht Absenden */
  form.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT' && akt < gesamt - 1) {
      e.preventDefault();
      if (pruefen(schritte[akt])) zeigen(akt + 1, true);
    }
  });

  function wert(name) {
    var el = form.querySelector('[name="' + name + '"]:checked') || form.querySelector('[name="' + name + '"]:not([type=radio])');
    if (!el) return '';
    if (el.type === 'radio') return el.getAttribute('data-text') || el.value;
    if (el.type === 'checkbox') return el.checked ? (T.ja || 'Ja') : '';
    return el.value.trim();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var s = schritte[akt];
    if (!pruefen(s)) return;
    if (form.querySelector('[name=website]').value) return;           // Spam-Falle
    var d = new Date();
    var daten = {
      firma: wert('firma'), vorname: wert('vorname'), nachname: wert('nachname'),
      email: wert('email'), telefon: wert('telefon'),
      bereich: wert('bereich'), projektstand: wert('projektstand'), zeitrahmen: wert('zeitrahmen'),
      nachricht: wert('nachricht'),
      datenschutz: wert('datenschutz'),
      sprache: doc.lang, seite: location.href,
      datum: ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear()
    };
    var senden = form.querySelector('[type=submit]');
    senden.disabled = true;
    function fertig() {
      form.closest('.anfrage').querySelector('.anfrage__fortschritt').hidden = true;
      form.hidden = true;
      var danke = document.getElementById('anfrage-danke');
      danke.hidden = false;
      danke.querySelector('h2').focus({ preventScroll: true });
    }
    if (!HK.anfrageZiel) {                                            // Entwurf: kein Ziel hinterlegt
      if (window.console) console.info('[Entwurf] Anfrage würde gesendet:', daten);
      fertig();
      return;
    }
    fetch(HK.anfrageZiel, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(daten) })
      .then(function (r) { if (!r.ok) throw new Error(r.status); fertig(); })
      .catch(function () { senden.disabled = false; fehler(s, T.senden); });
  });

  /* Deeplink: kontakt.html?bereich=spanntechnik wählt den Bereich vor und springt zu Schritt 2 */
  var start = 0;
  var m = /[?&]bereich=([a-z-]+)/.exec(location.search);
  if (m) {
    var opt = form.querySelector('input[name=bereich][value="' + m[1] + '"]');
    if (opt) { opt.checked = true; start = 1; }
  }
  form.classList.add('ist-aktiv');
  zeigen(start, false);
})();
