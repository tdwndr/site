/* TW/ds docs: progressive enhancement only. Every page reads fully without this file. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Copy buttons on every code block and token value */
  function copyText(text, btn) {
    var done = function () { btn.setAttribute('data-done', ''); var old = btn.textContent; btn.textContent = 'Copied'; setTimeout(function () { btn.removeAttribute('data-done'); btn.textContent = old; }, 1400); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
    function fallback() { var t = document.createElement('textarea'); t.value = text; t.style.position = 'fixed'; t.style.opacity = '0'; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (e) {} t.remove(); }
  }
  function addCopy() {
    $$('pre.code').forEach(function (pre) {
      if (pre.querySelector('.copy')) return;
      var b = document.createElement('button'); b.type = 'button'; b.className = 'copy'; b.textContent = 'Copy'; b.setAttribute('aria-label', 'Copy code');
      b.addEventListener('click', function () { copyText(pre.querySelector('code').textContent, b); });
      pre.appendChild(b);
    });
    $$('[data-copy]').forEach(function (el) {
      if (el.nextElementSibling && el.nextElementSibling.classList.contains('copy')) return;
      var b = document.createElement('button'); b.type = 'button'; b.className = 'copy copy--inline'; b.textContent = 'Copy'; b.setAttribute('aria-label', 'Copy ' + el.getAttribute('data-copy'));
      b.addEventListener('click', function () { copyText(el.getAttribute('data-copy'), b); });
      el.after(b);
    });
  }

  /* Theme: system, light, dark */
  var themes = ['system', 'light', 'dark'];
  function theme() { try { return localStorage.getItem('tw-theme') || 'system'; } catch (e) { return 'system'; } }
  function applyTheme(t) { if (t === 'system') document.documentElement.removeAttribute('data-theme'); else document.documentElement.dataset.theme = t; $$('[data-theme-toggle]').forEach(function (b) { b.textContent = 'Theme: ' + t; }); }
  $$('[data-theme-toggle]').forEach(function (b) { b.addEventListener('click', function () { var n = themes[(themes.indexOf(theme()) + 1) % 3]; try { n === 'system' ? localStorage.removeItem('tw-theme') : localStorage.setItem('tw-theme', n); } catch (e) {} applyTheme(n); }); });
  applyTheme(theme());

  /* Reveals and pen underlines: content is visible unless this runs and motion is allowed */
  if (motionOK && 'IntersectionObserver' in window) {
    var els = $$('.reveal, .pen');
    els.forEach(function (e) { if (e.classList.contains('pen')) e.classList.add('is-pending'); });
    var io = new IntersectionObserver(function (entries) { entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); en.target.classList.remove('is-pending'); io.unobserve(en.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
    setTimeout(function () { els.forEach(function (e) { e.classList.add('is-in'); e.classList.remove('is-pending'); }); }, 4000);
  }

  /* Search palette (Cmd/Ctrl K, or /) */
  var dlg = $('#cmdk'), input = $('#cmdk-input'), list = $('#cmdk-list'), index = null, sel = 0, shown = [];
  function load() { if (index) return Promise.resolve(); return fetch('/tools/ds/search.json').then(function (r) { return r.json(); }).then(function (j) { index = j; }).catch(function () { index = []; }); }
  function score(e, terms) { var h = (e.t + ' ' + e.s + ' ' + e.x).toLowerCase(), s = 0; for (var i = 0; i < terms.length; i++) { if (h.indexOf(terms[i]) < 0) return 0; s += e.t.toLowerCase().indexOf(terms[i]) >= 0 ? 3 : 1; } if (e.s === 'Page') s += 2; return s; }
  function render() {
    var q = input.value.trim().toLowerCase(), terms = q ? q.split(/\s+/) : [];
    shown = (q ? index.map(function (e) { return { e: e, s: score(e, terms) }; }).filter(function (x) { return x.s; }).sort(function (a, b) { return b.s - a.s; }).map(function (x) { return x.e; }) : index.filter(function (e) { return e.s === 'Page'; })).slice(0, 12);
    sel = 0;
    list.innerHTML = shown.length ? shown.map(function (e, i) { return '<li role="option" aria-selected="' + (i === 0) + '"><a href="' + e.u + '"><span>' + esc(e.t) + '</span><small>' + esc(e.s) + '</small>' + (e.x ? '<em>' + esc(e.x.length > 90 ? e.x.slice(0, 90) + '…' : e.x) + '</em>' : '') + '</a></li>'; }).join('') : '<li class="cmdk__empty">Nothing matches that.</li>';
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function move(d) { var items = $$('#cmdk-list li[role=option]'); if (!items.length) return; items[sel].setAttribute('aria-selected', 'false'); sel = (sel + d + items.length) % items.length; items[sel].setAttribute('aria-selected', 'true'); items[sel].scrollIntoView({ block: 'nearest' }); }
  function open() { if (!dlg || !dlg.showModal) { location.hash = '#index'; return; } load().then(function () { if (!dlg.open) dlg.showModal(); input.value = ''; render(); input.focus(); }); }
  if (dlg) {
    $$('[data-cmdk]').forEach(function (b) { b.addEventListener('click', open); });
    input.addEventListener('input', render);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); } else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Enter') { e.preventDefault(); if (shown[sel]) location.href = shown[sel].u; }
    });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    document.addEventListener('keydown', function (e) {
      var typing = /^(input|textarea|select)$/i.test(document.activeElement.tagName);
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); dlg.open ? dlg.close() : open(); }
      else if (e.key === '/' && !typing && !dlg.open) { e.preventDefault(); open(); }
    });
  }

  /* Live tokens (home page) */
  var live = $('#live');
  if (live) {
    var stage = $('#live-stage', live), out = $('#live-css', live), grades = $('#live-grades', live);
    var D = { accent: '#1A33F5', paper: '#FAF8F3', ink: '#2A211B', ratio: 1.333, base: 16, lh: 1.5, display: 'Schibsted Grotesk', context: 'marketing' };
    var S = JSON.parse(JSON.stringify(D));
    function lum(h) { var n = parseInt(h.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
    function ratio(a, b) { var x = lum(a), y = lum(b); if (x < y) { var t = x; x = y; y = t; } return (x + 0.05) / (y + 0.05); }
    function grade(r) { return r >= 7 ? ['AAA', 'good'] : r >= 4.5 ? ['AA', 'good'] : r >= 3 ? ['Large text only', 'warn'] : ['Fails', 'bad']; }
    function paint() {
      var st = stage.style;
      st.setProperty('--paper', S.paper); st.setProperty('--ink', S.ink); st.setProperty('--accent', S.accent);
      st.setProperty('--on-accent', lum(S.accent) > 0.4 ? '#14161B' : '#FFFFFF');
      st.setProperty('--lv-r', S.ratio); st.setProperty('--lv-base', S.base + 'px'); st.setProperty('--lv-lh', S.lh);
      st.setProperty('--lv-display', '"' + S.display + '", system-ui, sans-serif');
      stage.setAttribute('data-context', S.context);
      var ra = ratio(S.accent, S.paper), ri = ratio(S.ink, S.paper), ga = grade(ra), gi = grade(ri);
      grades.innerHTML = '<span class="tag tag--' + gi[1] + '">Ink ' + ri.toFixed(1) + ':1 ' + gi[0] + '</span><span class="tag tag--' + ga[1] + '">Accent ' + ra.toFixed(1) + ':1 ' + ga[0] + '</span>';
      $$('[data-out]', live).forEach(function (o) { var k = o.getAttribute('data-out'); o.textContent = k === 'ratio' ? S.ratio.toFixed(3) : k === 'base' ? S.base + 'px' : k === 'lh' ? S.lh.toFixed(2) : S[k]; });
      out.textContent = ':root {\n  --paper: ' + S.paper + ';\n  --ink: ' + S.ink + ';\n  --accent: ' + S.accent + ';\n  --font-display: "' + S.display + '";\n  --type-ratio: ' + S.ratio.toFixed(3) + ';\n  --type-base: ' + S.base + 'px;\n  --lh-read: ' + S.lh.toFixed(2) + ';\n}';
    }
    $$('[data-lv]', live).forEach(function (c) { c.addEventListener('input', function () { var k = c.getAttribute('data-lv'); S[k] = c.type === 'range' ? parseFloat(c.value) : c.value; paint(); }); });
    var rs = $('[data-lv-reset]', live); if (rs) rs.addEventListener('click', function () { S = JSON.parse(JSON.stringify(D)); $$('[data-lv]', live).forEach(function (c) { c.value = S[c.getAttribute('data-lv')]; }); paint(); });
    paint();
  }

  /* Context switch on the contexts page */
  $$('[data-ctxswitch]').forEach(function (g) {
    var target = $(g.getAttribute('data-ctxswitch'));
    $$('button', g).forEach(function (b) { b.addEventListener('click', function () { $$('button', g).forEach(function (x) { x.setAttribute('aria-pressed', 'false'); }); b.setAttribute('aria-pressed', 'true'); target.setAttribute('data-context', b.getAttribute('data-ctx')); }); });
  });

  /* Sandboxes: inputs with data-var set a CSS variable on the sandbox stage */
  function lumHex(h) { var n = parseInt(h.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
  $$('[data-sbx]').forEach(function (box) {
    var stage = $('.sbx__stage', box) || box;
    function upd(inp) {
      var v = inp.value + (inp.getAttribute('data-unit') || ''); stage.style.setProperty(inp.getAttribute('data-var'), v);
      $$('[data-show="' + inp.getAttribute('data-var') + '"]', box).forEach(function (o) { o.textContent = inp.value; });
      var c = $('[data-contrast]', box);
      if (c && inp.type === 'color') { var p = c.getAttribute('data-contrast'), a = lumHex(inp.value), b = lumHex(p), r = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05); c.textContent = r.toFixed(1) + ':1 ' + (r >= 4.5 ? 'passes for text' : r >= 3 ? 'large text only' : 'too low'); c.className = 'tag ' + (r >= 4.5 ? 'tag--good' : r >= 3 ? 'tag--warn' : 'tag--bad'); stage.style.setProperty('--on-accent', a > 0.4 ? '#14161B' : '#FFFFFF'); }
    }
    $$('[data-var]', box).forEach(function (inp) { inp.addEventListener('input', function () { upd(inp); }); upd(inp); });
  });
  /* Replay buttons for motion samples */
  $$('[data-replay]').forEach(function (b) {
    var t = $(b.getAttribute('data-replay'));
    function play() { t.classList.remove('is-play'); void t.offsetWidth; requestAnimationFrame(function () { t.classList.add('is-play'); }); }
    var others = (b.getAttribute('data-replay-all') || '').split(',').filter(Boolean).map(function (q) { return $(q.trim()); });
    function playAll() { play(); others.forEach(function (o) { o.classList.remove('is-play'); void o.offsetWidth; requestAnimationFrame(function () { o.classList.add('is-play'); }); }); }
    b.addEventListener('click', playAll); setTimeout(playAll, 300);
  });

  /* Reset a sandbox to Ted's setting */
  $$('[data-sbx]').forEach(function (box) {
    var r = $('.sbx__reset', box); if (!r) return;
    r.addEventListener('click', function () { $$('[data-var]', box).forEach(function (inp) { if (inp.hasAttribute('data-ted')) { inp.value = inp.getAttribute('data-ted'); inp.dispatchEvent(new Event('input')); } }); });
  });
  /* Tabs */
  $$('[data-tabs]').forEach(function (t) {
    var btns = $$('[role=tab]', t), panels = $$('[role=tabpanel]', t);
    function show(id) { btns.forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('aria-controls') === id ? 'true' : 'false'); }); panels.forEach(function (p) { p.hidden = p.id !== id; }); }
    btns.forEach(function (b) { b.addEventListener('click', function () { show(b.getAttribute('aria-controls')); }); });
    if (btns.length) show(location.hash && $(location.hash, t) ? location.hash.slice(1) : btns[0].getAttribute('aria-controls'));
  });

  /* Choice chips: set a data attribute (or a CSS variable) on a sample */
  $$('[data-choose]').forEach(function (g) {
    var target = $(g.getAttribute('data-target')), attr = g.getAttribute('data-choose'), cssVar = g.getAttribute('data-var');
    var btns = $$('button', g);
    function pick(b) {
      btns.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      if (cssVar) target.style.setProperty(cssVar, b.getAttribute('data-value'));
      else target.setAttribute('data-' + attr, b.getAttribute('data-value'));
      if (b.hasAttribute('data-replay-on')) { target.classList.remove('is-play'); void target.offsetWidth; requestAnimationFrame(function () { target.classList.add('is-play'); }); }
    }
    btns.forEach(function (b) { b.type = 'button'; b.addEventListener('click', function () { pick(b); }); });
    pick(btns.filter(function (b) { return b.hasAttribute('data-ted'); })[0] || btns[0]);
  });

  /* Flip cards: woolly copy, then mine */
  $$('[data-flip]').forEach(function (b) {
    var card = b.closest('.flip');
    b.addEventListener('click', function () { var on = card.classList.toggle('is-flipped'); b.textContent = on ? 'Flip back' : 'Flip'; });
  });

  addCopy();
})();
