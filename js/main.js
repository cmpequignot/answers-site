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

// RE: in_coding glitch reveal: plays once when the artwork scrolls into view,
// then a short glitch replays whenever it's hovered.
(function () {
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
