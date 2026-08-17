/**
 * Homepage — Hero animations, scroll reveal, counter
 */
(function () {
  'use strict';

  // ─── Hero Ken Burns (image subtle zoom) ──────────────
  function initHero() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    setTimeout(() => hero.classList.add('loaded'), 100);
  }

  // ─── Scroll Reveal ────────────────────────────────────
  function initScrollReveal() {
    const targets = document.querySelectorAll('.card, .prosesi-preview__item, .section-header, .faq__item');
    if (!targets.length || !('IntersectionObserver' in window)) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('page-enter');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    });

    targets.forEach(el => {
      el.style.opacity = '0';
      obs.observe(el);
    });
  }

  // ─── FAQ Accordion ────────────────────────────────────
  // <details> tidak bisa dianimasikan sendiri: saat tertutup isinya
  // tidak dirender. JS di sini hanya menunda penutupan sampai
  // transisi CSS selesai — tanpa mengukur tinggi elemen sama sekali.
  function initFaq() {
    const items = document.querySelectorAll('.faq__item');
    if (!items.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    items.forEach(item => {
      const summary = item.querySelector('.faq__q');
      const wrap    = item.querySelector('.faq__wrap');
      if (!summary || !wrap) return;

      if (item.open) item.classList.add('is-open');

      summary.addEventListener('click', (e) => {
        e.preventDefault();

        if (reduced) {
          item.open = !item.open;
          item.classList.toggle('is-open', item.open);
          return;
        }

        if (item.open) {
          // Tutup: lepas class dulu, baru sembunyikan setelah transisi
          item.classList.remove('is-open');

          let done = false;
          const finish = () => {
            if (done) return;
            done = true;
            item.open = false;
          };

          wrap.addEventListener('transitionend', (ev) => {
            if (ev.propertyName === 'grid-template-rows') finish();
          }, { once: true });

          setTimeout(finish, 400); // jaring pengaman bila transitionend tak terpicu
        } else {
          // Buka: render isi dulu, beri 1 frame agar transisi punya titik awal
          item.open = true;
          requestAnimationFrame(() => item.classList.add('is-open'));
        }
      });
    });
  }

  // ─── Event Countdown ─────────────────────────────────
  // Tanggal target: Ngembak Geni (hari setelah Nyepi) — perbarui tiap tahun
  function initCountdown() {
    const TARGET = new Date('2027-03-10T07:00:00+08:00'); // WITA

    const els = {
      days:  document.getElementById('cd-days'),
      hours: document.getElementById('cd-hours'),
      mins:  document.getElementById('cd-mins'),
      secs:  document.getElementById('cd-secs'),
    };
    if (!els.days) return;

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
      const diff = TARGET - Date.now();
      if (diff <= 0) {
        els.days.textContent  = '00';
        els.hours.textContent = '00';
        els.mins.textContent  = '00';
        els.secs.textContent  = '00';
        return;
      }
      const total = Math.floor(diff / 1000);
      els.days.textContent  = String(Math.floor(total / 86400));
      els.hours.textContent = pad(Math.floor((total % 86400) / 3600));
      els.mins.textContent  = pad(Math.floor((total % 3600) / 60));
      els.secs.textContent  = pad(total % 60);
    }

    tick();
    setInterval(tick, 1000);
  }

  // ─── Smooth scroll for hero scroll indicator ─────────
  function initScrollIndicator() {
    const indicator = document.querySelector('.hero__scroll');
    if (!indicator) return;

    indicator.addEventListener('click', () => {
      const next = document.getElementById('mengenal');
      if (next) next.scrollIntoView({ behavior: 'smooth' });
    });

    indicator.style.cursor = 'pointer';
  }

  function init() {
    initHero();
    initScrollReveal();
    initScrollIndicator();
    initCountdown();
    initFaq();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
