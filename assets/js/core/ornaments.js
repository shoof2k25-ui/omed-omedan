/**
 * Ornaments Bali — injects corner ukiran elements into sections
 * and adds lotus border to hero sections.
 *
 * Targets:
 *  - [data-ornament]       → all 4 corners
 *  - [data-ornament="top"] → top corners only
 *  - .hero, .page-hero     → hero bottom border
 */
(function () {
  'use strict';

  const CORNER_CLASSES = ['tl', 'tr', 'bl', 'br'];

  function injectCorners(el, mode) {
    // Ensure parent is positioned
    const pos = getComputedStyle(el).position;
    if (pos === 'static') el.style.position = 'relative';

    const which = mode === 'top' ? ['tl', 'tr'] : CORNER_CLASSES;

    which.forEach(pos => {
      const span = document.createElement('span');
      span.className = `bali-corner bali-corner--${pos}`;
      span.setAttribute('aria-hidden', 'true');
      el.appendChild(span);
    });
  }

  function injectHeroBorder(el) {
    const border = document.createElement('span');
    border.className = 'hero-border hero-border--bottom';
    border.setAttribute('aria-hidden', 'true');
    el.appendChild(border);
  }

  function initScrollReveal() {
    const corners = document.querySelectorAll('.bali-corner');
    if (!corners.length || !('IntersectionObserver' in window)) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { threshold: 0.1 });

    corners.forEach(c => obs.observe(c));
  }

  function init() {
    // Inject corners into all [data-ornament] elements
    document.querySelectorAll('[data-ornament]').forEach(el => {
      const mode = el.dataset.ornament;
      injectCorners(el, mode);
    });

    // Hero sections get a bottom border
    document.querySelectorAll('.hero, .page-hero').forEach(el => {
      injectHeroBorder(el);
    });

    // Scroll reveal for subtle fade-in
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
