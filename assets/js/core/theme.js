/**
 * Theme Manager — Light / Dark toggle.
 *
 * Fix timing: gunakan event delegation sehingga tidak perlu
 * menunggu button di-inject oleh navbar.js.
 * Ikon dikendalikan via CSS [data-theme] — tidak ada JS manipulation.
 */
(function () {
  'use strict';

  const KEY     = 'omed-theme';
  const DEFAULT = 'dark';

  // ── Terapkan tema segera (cegah FOUC) ──────────────────────
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
  }

  function getTheme() {
    return localStorage.getItem(KEY) || DEFAULT;
  }

  function toggleTheme() {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  }

  // Terapkan langsung saat script diload
  applyTheme(getTheme());

  // ── Event delegation — bekerja meski button belum ada ──────
  // Tidak perlu tunggu DOMContentLoaded; listen di document.
  document.addEventListener('click', function (e) {
    if (e.target.closest('#theme-toggle')) {
      toggleTheme();
    }
  });

})();
