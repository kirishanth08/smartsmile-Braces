/**
 * SmartSmile — RTL / LTR Direction Manager
 * Ultra-resilient Vanilla JS & localStorage implementation
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'smartsmile_dir';
  const html = document.documentElement;

  function getStoredDir() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'rtl' || stored === 'ltr') {
        return stored;
      }
    } catch (e) {
      console.warn('SmartSmile: LocalStorage is not accessible', e);
    }
    return 'ltr';
  }

  function setStoredDir(dir) {
    try {
      localStorage.setItem(STORAGE_KEY, dir);
    } catch (e) {
      console.warn('SmartSmile: Could not save direction to LocalStorage', e);
    }
  }

  function applyDir(dir) {
    if (!dir) dir = 'ltr';

    html.setAttribute('dir', dir);

    if (document.body) {
      if (dir === 'rtl') {
        document.body.classList.add('rtl');
      } else {
        document.body.classList.remove('rtl');
      }
    }

    updateDirButtons(dir);
  }

  function updateDirButtons(dir) {
    const dirBtns = document.querySelectorAll('.rtl-toggle-btn');
    dirBtns.forEach((btn) => {
      const icon = btn.querySelector('i');
      const text = btn.querySelector('.dir-text');
      if (icon) icon.className = 'bi bi-arrow-left-right text-warning';
      if (dir === 'rtl') {
        if (text) text.textContent = 'LTR';
        btn.setAttribute('aria-label', 'Switch to Left-to-Right Layout');
        btn.setAttribute('title', 'Switch to LTR Layout');
      } else {
        if (text) text.textContent = 'RTL';
        btn.setAttribute('aria-label', 'Switch to Right-to-Left Layout');
        btn.setAttribute('title', 'Switch to RTL Layout');
      }
    });
  }

  function toggleDir() {
    const current = html.getAttribute('dir') || getStoredDir();
    const next = current === 'rtl' ? 'ltr' : 'rtl';
    setStoredDir(next);
    applyDir(next);
  }

  // 1. Initial fast execution to prevent direction flashing
  const initialDir = getStoredDir();
  html.setAttribute('dir', initialDir);

  // 2. Safe execution on DOM readiness
  function init() {
    applyDir(getStoredDir());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 3. Document-level delegated click event listener
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.rtl-toggle-btn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      toggleDir();
    }
  });

  // Expose public API
  window.SmartSmileDir = {
    get: getStoredDir,
    toggle: toggleDir,
    apply: applyDir
  };
})();
