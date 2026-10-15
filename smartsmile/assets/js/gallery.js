/**
 * SmartSmile — Smile Gallery Filtering & Lightbox Viewer
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initGalleryFilter();
    initGalleryModal();
  });

  function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('[data-gallery-filter]');
    const galleryItems = document.querySelectorAll('[data-gallery-category]');

    if (!filterButtons.length || !galleryItems.length) return;

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const category = btn.getAttribute('data-gallery-filter');

        filterButtons.forEach((b) => {
          b.classList.remove('active', 'btn-smart-primary');
          b.classList.add('btn-smart-secondary');
        });
        btn.classList.add('active', 'btn-smart-primary');
        btn.classList.remove('btn-smart-secondary');

        galleryItems.forEach((item) => {
          const itemCat = item.getAttribute('data-gallery-category');
          const wrapper = item.closest('.col-gallery-item');
          if (category === 'all' || itemCat.includes(category)) {
            if (wrapper) wrapper.classList.remove('d-none');
          } else {
            if (wrapper) wrapper.classList.add('d-none');
          }
        });
      });
    });
  }

  function initGalleryModal() {
    const modalEl = document.getElementById('galleryCaseModal');
    if (!modalEl || !window.bootstrap) return;

    const modal = new window.bootstrap.Modal(modalEl);
    const viewButtons = document.querySelectorAll('.view-case-btn');

    viewButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = btn.closest('[data-gallery-category]');
        if (!card) return;

        const title = card.querySelector('.case-title')?.textContent || 'Smile Transformation';
        const treatment = card.querySelector('.case-treatment')?.textContent || 'Clear Aligners';
        const duration = card.querySelector('.case-duration')?.textContent || '14 Months';
        const beforeSrc = card.querySelector('.case-before-img')?.getAttribute('src') || '';
        const afterSrc = card.querySelector('.case-after-img')?.getAttribute('src') || '';
        const description = card.querySelector('.case-description')?.textContent || 'Patient achieved healthy dental alignment and a confident smile through customized orthodontic care.';

        document.getElementById('modalCaseTitle').textContent = title;
        document.getElementById('modalCaseTreatment').textContent = treatment;
        document.getElementById('modalCaseDuration').textContent = duration;
        document.getElementById('modalCaseDescription').textContent = description;
        document.getElementById('modalBeforeImg').setAttribute('src', beforeSrc);
        document.getElementById('modalAfterImg').setAttribute('src', afterSrc);

        modal.show();
      });
    });
  }
})();
