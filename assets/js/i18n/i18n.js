/* ══════════════════════════════════════════════════════════
   I18n Core Engine
   window.I18n = { getLang, setLang, toggle, apply, t }
   Depends on: translations.js (loaded before this file)
   ══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const STORAGE_KEY = 'omed-lang';
  const DEFAULT     = 'id';
  const SUPPORTED   = ['id', 'en'];

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(stored) ? stored : DEFAULT;
  }

  function t(key, lang) {
    lang = lang || getLang();
    const src = (typeof TRANSLATIONS !== 'undefined') ? TRANSLATIONS
              : (typeof window.TRANSLATIONS !== 'undefined') ? window.TRANSLATIONS
              : null;
    const dict = src ? src[lang] : null;
    return (dict && dict[key] !== undefined) ? dict[key] : key;
  }

  function apply(root) {
    root = root || document;
    const lang = getLang();

    /* data-i18n="key"  → textContent */
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key, lang);
    });

    /* data-i18n-html="key"  → innerHTML (use only for trusted strings) */
    root.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key, lang);
    });

    /* data-i18n-attr="attrname:key[,attrname2:key2]"  → attribute */
    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const pairs = el.getAttribute('data-i18n-attr').split(',');
      pairs.forEach(pair => {
        const [attr, key] = pair.trim().split(':');
        if (attr && key) el.setAttribute(attr, t(key, lang));
      });
    });

    /* data-i18n-placeholder="key"  → placeholder shortcut */
    root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'), lang);
    });

    document.documentElement.lang = lang;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    apply();
    /* Notify Alpine components and any other listeners */
    window.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
    /* Refresh lang toggle button text */
    _refreshToggleBtn();
  }

  function toggle() {
    setLang(getLang() === 'id' ? 'en' : 'id');
  }

  function _refreshToggleBtn() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    const lang = getLang();
    btn.textContent = lang === 'id' ? 'EN' : 'ID';
    btn.setAttribute('aria-label', t('nav.lang_label', lang));
    btn.setAttribute('lang', lang === 'id' ? 'en' : 'id');
  }

  /* Expose API immediately so navbar/footer can call it even if apply() fails */
  window.I18n = { getLang, setLang, toggle, apply, t };

  /* Run once on script load so lang is applied before first paint */
  try {
    apply();
  } catch (e) {
    /* silent — DOM might not be ready in unusual load orders */
  }
})();
