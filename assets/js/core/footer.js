/**
 * Footer Component — inject footer HTML into every page
 */
(function () {
  "use strict";

  /* Kontak WhatsApp — dipakai footer & tombol "Hubungi Kami" */
  const WA_LINK =
    "https://wa.me/6289654223079?text=" +
    encodeURIComponent(
      "Halo, saya ingin bertanya tentang Tradisi Omed-Omedan Banjar Kaja Sesetan."
    );

  const SOCIAL = [
    {
      href: "#",
      label: "Facebook",
      svg: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    },
    {
      href: "#",
      label: "Instagram",
      svg: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    },
    {
      href: "#",
      label: "YouTube",
      svg: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>',
    },
    {
      href: "#",
      label: "TikTok",
      svg: '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>',
    },
  ];

  function t(key) {
    return window.I18n ? window.I18n.t(key) : key;
  }

  function buildSocial() {
    return SOCIAL.map(
      ({ href, label, svg }) => `
      <a href="${href}" class="footer__social-link" aria-label="${label}" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${svg}</svg>
      </a>
    `,
    ).join("");
  }

  function render() {
    const html = `
<footer class="footer" id="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">

      <!-- Brand -->
      <div>
        <div class="footer__brand">
          <img src="assets/images/logo.png" alt="Logo Omed-Omedan" class="footer__logo-img" />
          <p class="footer__brand-sub">Banjar Kaja Sesetan</p>
        </div>
        <p class="footer__desc" data-i18n="footer.desc">${t('footer.desc')}</p>
        <div class="footer__social" data-i18n-attr="aria-label:footer.social" aria-label="${t('footer.social')}">
          ${buildSocial()}
        </div>
      </div>

      <!-- Menu -->
      <div>
        <h3 class="footer__col-title" data-i18n="footer.menu_title">${t('footer.menu_title')}</h3>
        <div class="footer__menu-cols">
          <nav class="footer__links" aria-label="Menu utama">
            <a href="index.html"      class="footer__link" data-i18n="footer.link_home">${t('footer.link_home')}</a>
            <a href="sejarah.html"    class="footer__link" data-i18n="footer.link_history">${t('footer.link_history')}</a>
            <a href="prosesi.html"    class="footer__link" data-i18n="footer.link_procession">${t('footer.link_procession')}</a>
            <a href="galeri.html"     class="footer__link" data-i18n="footer.link_gallery">${t('footer.link_gallery')}</a>
            <a href="edukasi.html"    class="footer__link" data-i18n="footer.link_education">${t('footer.link_education')}</a>
          </nav>
          <nav class="footer__links" aria-label="Menu lainnya">
            <a href="quiz.html"        class="footer__link" data-i18n="footer.link_quiz">${t('footer.link_quiz')}</a>
            <a href="tentang.html"     class="footer__link" data-i18n="footer.link_about">${t('footer.link_about')}</a>
            <a href="narasumber.html"  class="footer__link" data-i18n="footer.link_narrator">${t('footer.link_narrator')}</a>
            <a href="tentang.html"     class="footer__link" data-i18n="footer.link_contact">${t('footer.link_contact')}</a>
          </nav>
        </div>
      </div>

      <!-- Quiz Budaya -->
      <div>
        <h3 class="footer__col-title" data-i18n="footer.quiz_title">${t('footer.quiz_title')}</h3>
        <div class="footer__event">
          <div class="footer__event-name"  data-i18n="footer.quiz_name">${t('footer.quiz_name')}</div>
          <div class="footer__event-date"  data-i18n="footer.quiz_level">${t('footer.quiz_level')}</div>
          <div class="footer__event-loc"   data-i18n="footer.quiz_desc">${t('footer.quiz_desc')}</div>
        </div>
        <a href="quiz.html" class="footer__event-cta" data-i18n="footer.quiz_cta">${t('footer.quiz_cta')}</a>
      </div>

      <!-- Kontak -->
      <div>
        <h3 class="footer__col-title" data-i18n="footer.contact_title">${t('footer.contact_title')}</h3>
        <div class="footer__contact">
          <div class="footer__contact-item">
            <div class="footer__contact-icon" aria-hidden="true">📞</div>
            <div>
              <span class="footer__contact-label" data-i18n="footer.phone">${t('footer.phone')}</span>
              <a class="footer__contact-value footer__contact-link"
                 href="${WA_LINK}" target="_blank" rel="noopener noreferrer"
                 data-i18n-attr="aria-label:footer.wa_label"
                 aria-label="${t('footer.wa_label')}">+62 896-5422-3079</a>
            </div>
          </div>
          <div class="footer__contact-item">
            <div class="footer__contact-icon" aria-hidden="true">✉️</div>
            <div>
              <span class="footer__contact-label" data-i18n="footer.email">${t('footer.email')}</span>
              <a class="footer__contact-value footer__contact-link"
                 href="mailto:widanta12@gmail.com">widanta12@gmail.com</a>
            </div>
          </div>
          <div class="footer__contact-item">
            <div class="footer__contact-icon" aria-hidden="true">📍</div>
            <div>
              <span class="footer__contact-label" data-i18n="footer.address">${t('footer.address')}</span>
              <span class="footer__contact-value" data-i18n="footer.address_val">${t('footer.address_val')}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Copyright Bar -->
  <div class="footer__bottom">
    <div class="container">
      <div class="footer__bottom-inner">
        <span class="footer__copyright" data-i18n="footer.copyright">${t('footer.copyright')}</span>
        <div class="footer__bottom-links">
          <a href="#" class="footer__bottom-link" data-i18n="footer.privacy">${t('footer.privacy')}</a>
          <a href="#" class="footer__bottom-link" data-i18n="footer.terms">${t('footer.terms')}</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    `.trim();

    const target = document.getElementById("footer-placeholder");
    if (target) target.outerHTML = html;
    else document.body.insertAdjacentHTML("beforeend", html);

    window.I18n?.apply();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }

  /* Fallback: re-apply translations after full page load in case of race */
  window.addEventListener("load", function () {
    window.I18n?.apply();
  });
})();
