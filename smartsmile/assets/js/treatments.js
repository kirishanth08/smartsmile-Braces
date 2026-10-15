/**
 * SmartSmile — Treatments Filtering & Interaction
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initTreatmentFilter();
  });

  function initTreatmentFilter() {
    const filterButtons = document.querySelectorAll('[data-treatment-filter]');
    const cards = document.querySelectorAll('[data-treatment-category]');

    if (!filterButtons.length || !cards.length) return;

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const category = btn.getAttribute('data-treatment-filter');

        // Update active class
        filterButtons.forEach((b) => b.classList.remove('active', 'btn-smart-primary'));
        filterButtons.forEach((b) => b.classList.add('btn-smart-secondary'));
        btn.classList.add('active', 'btn-smart-primary');
        btn.classList.remove('btn-smart-secondary');

        // Filter cards
        cards.forEach((card) => {
          const cardCat = card.getAttribute('data-treatment-category');
          if (category === 'all' || cardCat.includes(category)) {
            card.closest('.col-treatment')?.classList.remove('d-none');
          } else {
            card.closest('.col-treatment')?.classList.add('d-none');
          }
        });
      });
    });
  }
})();
