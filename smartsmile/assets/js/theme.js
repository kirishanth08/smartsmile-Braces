/**
 * SmartSmile — Theme Manager (Dark / Light Mode)
 * Ultra-resilient Vanilla JS & localStorage implementation
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'smartsmile_theme';
  const html = document.documentElement;

  function getStoredTheme() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'dark' || stored === 'light') {
        return stored;
      }
    } catch (e) {
      console.warn('SmartSmile: LocalStorage is not accessible', e);
    }
    // Check system preference if no stored theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      console.warn('SmartSmile: Could not save theme to LocalStorage', e);
    }
  }

  function applyTheme(theme) {
    if (!theme) theme = 'light';

    html.setAttribute('data-bs-theme', theme);

    if (document.body) {
      if (theme === 'dark') {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
      } else {
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
      }
    }

    updateToggleButtons(theme);
  }

  function updateToggleButtons(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach((btn) => {
      const icon = btn.querySelector('i');
      const text = btn.querySelector('.theme-text');

      if (theme === 'dark') {
        if (icon) {
          icon.className = 'bi bi-sun-fill text-warning';
        }
        if (text) text.textContent = 'Light';
        btn.setAttribute('aria-label', 'Switch to Light Mode');
        btn.setAttribute('title', 'Switch to Light Mode');
      } else {
        if (icon) {
          icon.className = 'bi bi-moon-stars-fill text-primary';
        }
        if (text) text.textContent = 'Dark';
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
        btn.setAttribute('title', 'Switch to Dark Mode');
      }
    });
  }

  function toggleTheme() {
    const current = html.getAttribute('data-bs-theme') || getStoredTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setStoredTheme(next);
    applyTheme(next);
  }

  // 1. Initial fast execution to prevent theme flashing
  const initialTheme = getStoredTheme();
  html.setAttribute('data-bs-theme', initialTheme);

  // 2. Safe execution on DOM readiness
  function init() {
    applyTheme(getStoredTheme());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 3. Document-level delegated click event listener
  // Works 100% of the time regardless of script loading order or dynamic DOM nodes
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.theme-toggle-btn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      toggleTheme();
    }
  });

  // Expose public API
  window.SmartSmileTheme = {
    get: getStoredTheme,
    toggle: toggleTheme,
    apply: applyTheme
  };
})();
