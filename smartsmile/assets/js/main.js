/**
 * SmartSmile — Core Interactive JavaScript
 * Custom Before/After Slider, Sticky Nav, Back to top, Accessibility
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initBackToTop();
    initBeforeAfterSliders();
    initFormValidation();
    initTreatmentFilters();
  });

  /**
   * Navbar dynamic shadow on scroll
   */
  function initNavbarScroll() {
    const navbar = document.querySelector('.smart-navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled', 'shadow-sm');
      } else {
        navbar.classList.remove('scrolled', 'shadow-sm');
      }
    });
  }

  /**
   * Back to top button
   */
  function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * Custom Vanilla JS Before / After Slider
   * Fully responsive with mouse, touch, and keyboard support
   */
  function initBeforeAfterSliders() {
    const containers = document.querySelectorAll('.before-after-container');
    if (!containers.length) return;

    containers.forEach((container) => {
      const overlay = container.querySelector('.before-after-overlay');
      const handle = container.querySelector('.ba-handle');
      if (!overlay || !handle) return;

      const overlayImg = overlay.querySelector('img');
      function syncOverlayImageWidth() {
        if (overlayImg) {
          overlayImg.style.width = `${container.offsetWidth}px`;
        }
      }
      syncOverlayImageWidth();
      window.addEventListener('resize', syncOverlayImageWidth);

      let isDragging = false;

      function updateSliderPosition(clientX) {
        const rect = container.getBoundingClientRect();
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        let positionX = clientX - rect.left;

        if (positionX < 0) positionX = 0;
        if (positionX > rect.width) positionX = rect.width;

        let percentage = (positionX / rect.width) * 100;

        if (isRtl) {
          percentage = 100 - percentage;
        }

        overlay.style.width = `${percentage}%`;
        handle.style.left = isRtl ? `${100 - percentage}%` : `${percentage}%`;
        handle.setAttribute('aria-valuenow', Math.round(percentage));
      }

      // Mouse events
      container.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSliderPosition(e.clientX);
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.clientX);
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });

      // Touch events
      container.addEventListener('touchstart', (e) => {
        isDragging = true;
        if (e.touches && e.touches[0]) {
          updateSliderPosition(e.touches[0].clientX);
        }
      }, { passive: true });

      window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        if (e.touches && e.touches[0]) {
          updateSliderPosition(e.touches[0].clientX);
        }
      }, { passive: true });

      window.addEventListener('touchend', () => {
        isDragging = false;
      });

      // Keyboard accessibility
      handle.setAttribute('tabindex', '0');
      handle.setAttribute('role', 'slider');
      handle.setAttribute('aria-label', 'Orthodontic Before and After Comparison Slider');
      handle.setAttribute('aria-valuemin', '0');
      handle.setAttribute('aria-valuemax', '100');
      handle.setAttribute('aria-valuenow', '50');

      handle.addEventListener('keydown', (e) => {
        let currentVal = parseInt(handle.getAttribute('aria-valuenow') || '50', 10);
        if (e.key === 'ArrowLeft') {
          currentVal = Math.max(0, currentVal - 5);
        } else if (e.key === 'ArrowRight') {
          currentVal = Math.min(100, currentVal + 5);
        } else if (e.key === 'Home') {
          currentVal = 0;
        } else if (e.key === 'End') {
          currentVal = 100;
        } else {
          return;
        }
        e.preventDefault();
        overlay.style.width = `${currentVal}%`;
        handle.style.left = `${currentVal}%`;
        handle.setAttribute('aria-valuenow', currentVal);
      });
    });
  }

  /**
   * Universal Form Input Sanitization & Validation:
   * - Name fields accept only letters, spaces, hyphens, and apostrophes (NO numbers).
   * - Phone / Number / Age fields accept only numbers/digits and allowed symbols (NO letters/words).
   */
  function initFormValidation() {
    document.addEventListener('input', (e) => {
      const target = e.target;
      if (!target || target.tagName.toLowerCase() !== 'input') return;

      const type = (target.getAttribute('type') || 'text').toLowerCase();
      const id = (target.id || '').toLowerCase();
      const name = (target.name || '').toLowerCase();
      const placeholder = (target.placeholder || '').toLowerCase();
      const className = (target.className || '').toLowerCase();

      // Check if this is a name field
      const isName = (
        id.includes('name') ||
        name.includes('name') ||
        placeholder.includes('name') ||
        className.includes('name')
      ) && type !== 'email' && type !== 'password' && type !== 'checkbox' && type !== 'radio';

      if (isName) {
        const sanitized = target.value.replace(/[^A-Za-z\s\.\-']/g, '');
        if (target.value !== sanitized) {
          target.value = sanitized;
        }
        return;
      }

      // Check if this is a phone number, age, or numeric field
      const isPhone = type === 'tel' || id.includes('phone') || name.includes('phone') || placeholder.includes('phone');
      const isAgeOrNumber = type === 'number' || id.includes('age') || name.includes('age') || id.includes('cardnumber') || placeholder.includes('age');

      if (isAgeOrNumber) {
        const sanitized = target.value.replace(/[^0-9]/g, '');
        if (target.value !== sanitized) {
          target.value = sanitized;
        }
      } else if (isPhone) {
        const sanitized = target.value.replace(/[^0-9\+\-\s\(\)]/g, '');
        if (target.value !== sanitized) {
          target.value = sanitized;
        }
      }
    }, true);

    document.addEventListener('paste', (e) => {
      setTimeout(() => {
        const target = e.target;
        if (target && target.tagName && target.tagName.toLowerCase() === 'input') {
          target.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 0);
    });
  }


  /**
   * Filter treatment cards by category
   */
  function initTreatmentFilters() {
    const filterNav = document.getElementById('treatmentFilterNav');
    if (!filterNav) return;

    const filterBtns = filterNav.querySelectorAll('button[data-treatment-filter]');
    const cards = document.querySelectorAll('.col-treatment');
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-treatment-filter');
        cards.forEach((col) => {
          const card = col.querySelector('.smart-card');
          const categories = card ? (card.getAttribute('data-treatment-category') || '') : '';
          if (filter === 'all' || categories.split(' ').includes(filter)) {
            col.style.display = '';
          } else {
            col.style.display = 'none';
          }
        });
      });
    });
  }

  window.SmartSmileMain = {
    initSliders: initBeforeAfterSliders,
    initFormValidation: initFormValidation
  };
})();
