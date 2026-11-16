// ANSWERS — small site behaviours

// Mobile menu
(function () {
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.menu-toggle');
  if (!header || !toggle) return;
  toggle.addEventListener('click', function () {
    var open = header.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  });
})();

// Typed-in text: <p data-type="full text">fallback text</p>
(function () {
  var el = document.querySelector('[data-type]');
  if (!el) return;
  var text = el.getAttribute('data-type');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var cursor = document.createElement('span');
  cursor.className = 'ric-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  var out = document.createElement('span');
  out.setAttribute('aria-hidden', 'true');
  var sr = document.createElement('span');
  sr.className = 'sr-only';
  sr.textContent = text;
  el.textContent = '';
  el.append(sr, out, cursor);
  var i = 0;
  (function tick() {
    out.textContent = text.slice(0, ++i);
    if (i < text.length) setTimeout(tick, text[i - 1] === ',' ? 160 : 24 + Math.random() * 30);
  })();
})();

// RE:in_coding glitch reveal: plays once when the artwork scrolls into view,
// then a short glitch replays whenever it's hovered.
(function () {
  // A .glitch can be written as just <div class="glitch"><img ...></div>;
  // the colour-channel and slice layers are built here from that one image.
  document.querySelectorAll('.glitch').forEach(function (el) {
    if (el.querySelector('.glitch__stack')) return;
    var src = el.querySelector('img');
    if (!src) return;
    if (!el.hasAttribute('role')) {
      el.setAttribute('role', 'img');
      el.setAttribute('aria-label', src.alt);
    }
    var stack = document.createElement('div');
    stack.className = 'glitch__stack';
    ['glitch__layer glitch__layer--r', 'glitch__layer glitch__layer--g', 'glitch__layer glitch__layer--b',
     'glitch__slice glitch__slice--1', 'glitch__slice glitch__slice--2', 'glitch__slice glitch__slice--3']
      .forEach(function (cls) {
        var img = src.cloneNode();
        img.className = cls;
        img.alt = '';
        stack.appendChild(img);
      });
    src.remove();
    el.appendChild(stack);
  });

  var items = document.querySelectorAll('.glitch');
  if (!items.length) return;

  var REVEAL_MS = 1900;   // keep in sync with the longest reveal animation in style.css
  var REPLAY_MS = 600;

  var reveal = function (el) {
    el.classList.add('is-revealed');
    setTimeout(function () { el.classList.add('is-done'); }, REVEAL_MS + 50);
  };

  if (!('IntersectionObserver' in window)) {
    items.forEach(reveal);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    items.forEach(function (el) { io.observe(el); });
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  items.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      if (!el.classList.contains('is-done') || el.classList.contains('is-replaying')) return;
      el.classList.add('is-replaying');
      setTimeout(function () { el.classList.remove('is-replaying'); }, REPLAY_MS + 50);
    });
  });
})();
