/**
 * Video page — Main player + thumbnail switcher
 * Reads data-youtube-id attributes from DOM elements.
 */
(function () {
  'use strict';

  function loadIntoWrap(wrap, youtubeId, title) {
    var safe = (title || '').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    wrap.innerHTML =
      '<iframe' +
      ' src="https://www.youtube.com/embed/' + youtubeId + '?autoplay=1&rel=0"' +
      ' title="' + safe + '"' +
      ' frameborder="0"' +
      ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"' +
      ' allowfullscreen' +
      ' style="width:100%;height:100%;border:none;"' +
      '></iframe>';
  }

  function initMainPlayer() {
    var wrap        = document.getElementById('video-wrap');
    var placeholder = document.getElementById('video-placeholder');
    var playBtn     = document.getElementById('video-play-btn');
    if (!wrap || !playBtn) return;

    var youtubeId = wrap.dataset.youtubeId;

    /* Set YouTube thumbnail as placeholder background */
    if (youtubeId && placeholder) {
      placeholder.style.backgroundImage =
        'url(https://img.youtube.com/vi/' + youtubeId + '/maxresdefault.jpg)';
    }

    playBtn.addEventListener('click', function () {
      if (youtubeId) {
        var title = (document.getElementById('video-title') || {}).textContent || 'Dokumenter Omed-Omedan';
        loadIntoWrap(wrap, youtubeId, title);
      } else {
        playBtn.textContent = 'Video akan segera tersedia';
        playBtn.style.cssText += ';width:180px;height:52px;font-size:.75rem;border-radius:4px;padding:.5rem;';
      }
    });
  }

  function initVideoThumbs() {
    var thumbs = document.querySelectorAll('#video-list .video-thumb');
    var wrap   = document.getElementById('video-wrap');
    if (!thumbs.length) return;

    thumbs.forEach(function (thumb) {
      var playBtn = thumb.querySelector('.video-thumb__play');

      function selectVideo() {
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');

        var youtubeId = thumb.dataset.youtubeId || '';
        var title     = thumb.dataset.title    || '';
        var duration  = thumb.dataset.duration || '';
        var year      = thumb.dataset.year     || '';
        var desc      = thumb.dataset.desc     || '';

        /* Update info panel */
        var titleEl = document.getElementById('video-title');
        var descEl  = document.getElementById('video-desc');
        var metaEl  = document.getElementById('video-meta');
        if (titleEl) titleEl.textContent = title;
        if (descEl)  descEl.textContent  = desc;
        if (metaEl) metaEl.innerHTML =
          '<span>Durasi: ' + duration + '</span>' +
          '<span>•</span>' +
          '<span>Banjar Kaja Sesetan, ' + year + '</span>';

        /* Load YouTube video into main player */
        if (wrap && youtubeId) {
          wrap.dataset.youtubeId = youtubeId;
          loadIntoWrap(wrap, youtubeId, title);
        }

        /* Scroll to player */
        var player = document.getElementById('video-main');
        if (player) player.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      thumb.addEventListener('click', selectVideo);
      if (playBtn) {
        playBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          selectVideo();
        });
      }
      thumb.setAttribute('tabindex', '0');
      thumb.setAttribute('role', 'button');
      thumb.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectVideo();
        }
      });
    });
  }

  function init() {
    initMainPlayer();
    initVideoThumbs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
