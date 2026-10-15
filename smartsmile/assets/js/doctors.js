/**
 * SmartSmile — Doctors Specialty Filter & Search
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initDoctorFilter();
  });

  function initDoctorFilter() {
    const filterButtons = document.querySelectorAll('[data-doctor-filter]');
    const searchInput = document.getElementById('doctorSearchInput');
    const doctorCards = document.querySelectorAll('[data-doctor-specialty]');

    if (!doctorCards.length) return;

    let activeFilter = 'all';
    let searchQuery = '';

    function applyFilters() {
      doctorCards.forEach((card) => {
        const specialty = card.getAttribute('data-doctor-specialty') || '';
        const name = card.getAttribute('data-doctor-name') || '';

        const matchesFilter = activeFilter === 'all' || specialty.toLowerCase().includes(activeFilter.toLowerCase());
        const matchesSearch = !searchQuery || name.toLowerCase().includes(searchQuery.toLowerCase()) || specialty.toLowerCase().includes(searchQuery.toLowerCase());

        const wrapper = card.closest('.col-doctor');
        if (matchesFilter && matchesSearch) {
          if (wrapper) wrapper.classList.remove('d-none');
        } else {
          if (wrapper) wrapper.classList.add('d-none');
        }
      });
    }

    if (filterButtons.length) {
      filterButtons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          activeFilter = btn.getAttribute('data-doctor-filter');

          filterButtons.forEach((b) => {
            b.classList.remove('active', 'btn-smart-primary');
            b.classList.add('btn-smart-secondary');
          });
          btn.classList.add('active', 'btn-smart-primary');
          btn.classList.remove('btn-smart-secondary');

          applyFilters();
        });
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        applyFilters();
      });
    }
  }
})();
