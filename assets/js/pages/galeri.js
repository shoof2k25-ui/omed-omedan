/**
 * Gallery page — Filter + Batch Load More + Lightbox
 */
(function () {
  "use strict";

  const BATCH = 8;
  let activeFilter = "semua";
  let shownCount = BATCH;
  let allItems = [];

  // ─── Helpers ──────────────────────────────────────────
  function getFiltered() {
    return activeFilter === "semua"
      ? allItems
      : allItems.filter((el) => el.dataset.category === activeFilter);
  }

  function refreshGrid() {
    const filtered = getFiltered();

    allItems.forEach((el) => {
      const inCat =
        activeFilter === "semua" || el.dataset.category === activeFilter;
      if (!inCat) {
        el.classList.add("hidden");
        el.classList.remove("load-hidden");
      } else {
        el.classList.remove("hidden");
        if (filtered.indexOf(el) < shownCount) {
          el.classList.remove("load-hidden");
        } else {
          el.classList.add("load-hidden");
        }
      }
    });

    refreshLoadMoreBtn(filtered.length);
  }

  function refreshLoadMoreBtn(filteredTotal) {
    const btn = document.getElementById("load-more-btn");
    const counter = document.getElementById("load-more-counter");
    if (!btn) return;

    const shown = Math.min(shownCount, filteredTotal);
    if (counter) counter.textContent = shown + " / " + filteredTotal;
    btn.hidden = shown >= filteredTotal;
  }

  // ─── Filter ───────────────────────────────────────────
  function initFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    if (!filterBtns.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeFilter = btn.dataset.filter;
        shownCount = BATCH;
        refreshGrid();
      });
    });
  }

  // ─── Load More ────────────────────────────────────────
  function initLoadMore() {
    const btn = document.getElementById("load-more-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const prevShown = shownCount;
      shownCount += BATCH;
      refreshGrid();

      /* Animate newly revealed items */
      getFiltered()
        .slice(prevShown, shownCount)
        .forEach((el) => {
          el.classList.add("fade-in");
          setTimeout(() => el.classList.remove("fade-in"), 400);
        });
    });
  }

  // ─── Lightbox ─────────────────────────────────────────
  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const backdrop = document.getElementById("lightbox-backdrop");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");
    const caption = document.getElementById("lightbox-caption");

    if (!lightbox) return;

    let currentIndex = 0;

    function getVisible() {
      return allItems.filter(
        (el) =>
          !el.classList.contains("hidden") &&
          !el.classList.contains("load-hidden"),
      );
    }

    function setLightboxImage(item) {
      const srcImg = item.querySelector(".gallery-img");
      const lightboxImg = document.getElementById("lightbox-img");
      if (lightboxImg && srcImg) {
        lightboxImg.src = srcImg.src;
        lightboxImg.alt = srcImg.alt;
      }
      if (caption) {
        caption.textContent =
          item.querySelector(".card__gallery-caption")?.textContent || "";
      }
    }

    function openLightbox(index) {
      currentIndex = index;
      setLightboxImage(allItems[index]);
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      lightbox.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.style.overflow = "";
    }

    function navigate(dir) {
      const visible = getVisible();
      const pos = visible.indexOf(allItems[currentIndex]);
      const newPos = (pos + dir + visible.length) % visible.length;
      const newItem = visible[newPos];
      currentIndex = allItems.indexOf(newItem);
      setLightboxImage(newItem);
    }

    allItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        if (
          !item.classList.contains("hidden") &&
          !item.classList.contains("load-hidden")
        ) {
          openLightbox(index);
        }
      });
      item.setAttribute("tabindex", "0");
      item.setAttribute("role", "button");
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (
            !item.classList.contains("hidden") &&
            !item.classList.contains("load-hidden")
          ) {
            openLightbox(index);
          }
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (backdrop) backdrop.addEventListener("click", closeLightbox);
    if (prevBtn) prevBtn.addEventListener("click", () => navigate(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => navigate(1));

    document.addEventListener("keydown", (e) => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    });
  }

  // ─── Init ─────────────────────────────────────────────
  function init() {
    allItems = Array.from(
      document.querySelectorAll("#gallery-grid .card--gallery"),
    );
    refreshGrid();
    initFilter();
    initLoadMore();
    initLightbox();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
