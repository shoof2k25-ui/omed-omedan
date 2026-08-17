/**
 * Navbar Component — White navbar, transparent PNG logo, merah aktif
 */
(function () {
  "use strict";

  const NAV_LINKS = [
    { href: "index.html",   key: "nav.home" },
    { href: "sejarah.html", key: "nav.history" },
    { href: "prosesi.html", key: "nav.procession" },
    { href: "galeri.html",  key: "nav.gallery" },
    { href: "edukasi.html", key: "nav.education" },
    { href: "quiz.html",    key: "nav.quiz" },
    { href: "tentang.html", key: "nav.about" },
  ];

  function t(key) {
    return window.I18n ? window.I18n.t(key) : key;
  }

  function getCurrentPage() {
    return window.location.pathname.split("/").pop() || "index.html";
  }

  function buildNavLinks(isMobile) {
    const current = getCurrentPage();
    return NAV_LINKS.map(({ href, key }) => {
      const active = href === current ? " active" : "";
      const label  = t(key);
      if (isMobile) {
        return `<a href="${href}" class="navbar__mobile-link${active}" data-i18n="${key}">${label}</a>`;
      }
      return `<a href="${href}" class="navbar__link${active}" data-i18n="${key}">${label}</a>`;
    }).join("");
  }

  function render() {
    const lang    = window.I18n ? window.I18n.getLang() : "id";
    const nextLbl = lang === "id" ? "EN" : "ID";

    const html = `
<a href="#main-content" class="skip-link" data-i18n="nav.skip">${t("nav.skip")}</a>

<header class="navbar" id="navbar" role="banner">
  <div class="navbar__inner">

    <a href="index.html" class="navbar__logo"
       data-i18n-attr="aria-label:nav.logo_label"
       aria-label="${t("nav.logo_label")}">
      <img src="assets/images/logo.png"
           alt="Logo Omed-Omedan"
           class="navbar__logo-img" />
    </a>

    <nav class="navbar__nav" aria-label="Navigasi utama">
      ${buildNavLinks(false)}
    </nav>

    <a href="sejarah.html" class="btn btn--sm navbar__cta" data-i18n="nav.cta">${t("nav.cta")}</a>

    <!-- Lang toggle -->
    <button class="lang-toggle" id="lang-toggle"
            aria-label="${t("nav.lang_label")}"
            data-i18n-attr="aria-label:nav.lang_label"
            lang="${lang === "id" ? "en" : "id"}"
            title="Switch language">${nextLbl}</button>

    <!-- Theme toggle -->
    <button class="theme-toggle" id="theme-toggle"
            aria-label="Ganti tema"
            title="Ganti tema">
      <svg class="t-icon t-icon-sun" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      </svg>
      <svg class="t-icon t-icon-moon" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </button>

    <!-- Hamburger -->
    <button class="hamburger" id="hamburger"
            data-i18n-attr="aria-label:nav.open_menu"
            aria-label="${t("nav.open_menu")}"
            aria-expanded="false"
            aria-controls="mobile-menu">
      <span></span>
      <span></span>
      <span></span>
    </button>

  </div>
</header>

<nav class="navbar__mobile" id="mobile-menu"
     aria-label="Navigasi mobile"
     aria-hidden="true">

  <div class="navbar__mobile-logo">
    <img src="assets/images/logo.png"
         alt="Logo Omed-Omedan"
         class="navbar__logo-img" />
    <div class="navbar__logo-sub">
      <span class="navbar__logo-sub-name">Omed-Omedan</span>
      <span class="navbar__logo-sub-place">Banjar Kaja Sesetan</span>
    </div>
  </div>

  ${buildNavLinks(true)}

  <a href="sejarah.html" class="btn btn--lg navbar__mobile-cta" data-i18n="nav.cta">${t("nav.cta")}</a>
</nav>
    `.trim();

    document.body.insertAdjacentHTML("afterbegin", html);
    window.I18n?.apply();
  }

  function initLangToggle() {
    const btn = document.getElementById("lang-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => window.I18n?.toggle());
  }

  function initScroll() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    const onScroll = () =>
      navbar.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initMobileMenu() {
    const hamburger = document.getElementById("hamburger");
    const menu      = document.getElementById("mobile-menu");
    if (!hamburger || !menu) return;

    function toggle(open) {
      hamburger.classList.toggle("open", open);
      menu.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", String(open));
      menu.setAttribute("aria-hidden", String(!open));
      document.body.style.overflow = open ? "hidden" : "";
    }

    hamburger.addEventListener("click", () =>
      toggle(!hamburger.classList.contains("open"))
    );

    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => toggle(false))
    );

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") toggle(false);
    });

    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !menu.contains(e.target))
        toggle(false);
    });
  }

  function init() {
    render();
    initLangToggle();
    initScroll();
    initMobileMenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.addEventListener("load", function () {
    window.I18n?.apply();
  });
})();
