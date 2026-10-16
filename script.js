/**
 * Anger-Driven Development (AAD) — Interactive Client Logic
 * Handles accessible clipboard copying with fallback, ARIA live feedback,
 * mobile navigation, and active scroll spy navigation.
 */

(function () {
  'use strict';

  // DOM Elements
  const announcements = document.getElementById('sr-announcements');
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const copyButtons = document.querySelectorAll('.btn-copy');
  const copyPledgeBtn = document.getElementById('btn-copy-pledge');
  const themeToggle = document.getElementById('theme-toggle');

  /**
   * Announce message to assistive technology screen readers
   * @param {string} message
   */
  function announce(message) {
    if (!announcements) return;
    announcements.textContent = '';
    // Small timeout ensures screen readers catch the text mutation
    setTimeout(function () {
      announcements.textContent = message;
    }, 50);
  }

  /**
   * Copy text to clipboard with modern API and reliable legacy fallback
   * @param {string} text
   * @returns {Promise<boolean>}
   */
  async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (err) {
        // Fall back to execCommand if permission denied or failed
      }
    }

    // Fallback using temporary textarea
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '-9999px';
      textarea.setAttribute('aria-hidden', 'true');
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
      return success;
    } catch (e) {
      return false;
    }
  }

  /**
   * Bind Phrase Copy Buttons
   */
  copyButtons.forEach(function (button) {
    const textToCopy = button.getAttribute('data-copy');
    const labelSpan = button.querySelector('.copy-label');
    const originalLabel = labelSpan ? labelSpan.textContent : 'COPY';

    button.addEventListener('click', async function () {
      const ok = await copyToClipboard(textToCopy);

      if (ok) {
        button.classList.add('copied');
        button.classList.remove('copy-error');
        if (labelSpan) labelSpan.textContent = 'COPIED!';
        announce('Copied to clipboard: ' + textToCopy);

        setTimeout(function () {
          button.classList.remove('copied');
          if (labelSpan) labelSpan.textContent = originalLabel;
        }, 2000);
      } else {
        button.classList.add('copy-error');
        if (labelSpan) labelSpan.textContent = 'FAILED';
        announce('Failed to copy to clipboard.');

        setTimeout(function () {
          button.classList.remove('copy-error');
          if (labelSpan) labelSpan.textContent = originalLabel;
        }, 2000);
      }
    });
  });

  /**
   * Bind Pledge Copy Button
   */
  if (copyPledgeBtn) {
    const pledgeText = [
      'I acknowledge that an AI-generated explanation is not proof of correctness.',
      '',
      'I will not accept \'fixed\' without verification.',
      '',
      'I will inspect the diff before approving dangerous changes.',
      '',
      'I will not confuse confidence with evidence.',
      '',
      'I reserve the right to express my frustration when the regression is real.',
      '',
      'But when the incident is over, I will turn the lesson into a test, a guardrail, or a better specification.',
      '',
      'I am an Anger-Driven Developer.',
      '',
      'I vibe responsibly. I rage selectively. I verify everything.'
    ].join('\n');

    const labelSpan = copyPledgeBtn.querySelector('.copy-pledge-label');
    const originalLabel = labelSpan ? labelSpan.textContent : 'COPY COMPLETE PLEDGE';

    copyPledgeBtn.addEventListener('click', async function () {
      const ok = await copyToClipboard(pledgeText);

      if (ok) {
        copyPledgeBtn.classList.add('copied');
        copyPledgeBtn.classList.remove('copy-error');
        if (labelSpan) labelSpan.textContent = 'PLEDGE COPIED!';
        announce('The complete AAD Pledge was copied to clipboard.');

        setTimeout(function () {
          copyPledgeBtn.classList.remove('copied');
          if (labelSpan) labelSpan.textContent = originalLabel;
        }, 2500);
      } else {
        copyPledgeBtn.classList.add('copy-error');
        if (labelSpan) labelSpan.textContent = 'COPY FAILED';
        announce('Failed to copy the AAD Pledge to clipboard.');

        setTimeout(function () {
          copyPledgeBtn.classList.remove('copy-error');
          if (labelSpan) labelSpan.textContent = originalLabel;
        }, 2500);
      }
    });
  }

  /**
   * Mobile Navigation Toggle
   */
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      primaryNav.classList.toggle('nav-open', !isExpanded);
    });

    // Close mobile nav when clicking any nav link
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (primaryNav.classList.contains('nav-open')) {
          navToggle.setAttribute('aria-expanded', 'false');
          primaryNav.classList.remove('nav-open');
        }
      });
    });
  }

  /**
   * Active Section Scroll Spy via IntersectionObserver
   */
  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinkMap = {};

    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        navLinkMap[href.substring(1)] = link;
      }
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              link.classList.remove('active');
            });
            if (navLinkMap[id]) {
              navLinkMap[id].classList.add('active');
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px'
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /**
   * Theme Management (System default / Light / Dark)
   */
  function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem('aad-theme'); // null, 'light', or 'dark'
    } catch (e) {
      return null;
    }
  }

  function updateThemeUI(theme) {
    if (!themeToggle) return;
    const activeSetting = theme || 'system';
    const effectiveTheme = activeSetting === 'system' ? getSystemPreference() : activeSetting;

    themeToggle.setAttribute('data-current-theme', activeSetting);

    const textSpan = themeToggle.querySelector('.theme-toggle-text');
    if (textSpan) {
      textSpan.textContent = activeSetting === 'system' ? 'System' : (activeSetting === 'light' ? 'Light' : 'Dark');
    }

    const titleText = activeSetting === 'system'
      ? 'Theme: System (Auto: ' + (effectiveTheme === 'dark' ? 'Dark' : 'Light') + ')'
      : 'Theme: ' + (activeSetting === 'light' ? 'Light mode' : 'Dark mode');

    themeToggle.setAttribute('title', titleText);
    themeToggle.setAttribute('aria-label', titleText + '. Click to cycle theme.');
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      try { localStorage.setItem('aad-theme', 'light'); } catch (e) {}
    } else if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('aad-theme', 'dark'); } catch (e) {}
    } else {
      document.documentElement.removeAttribute('data-theme');
      try { localStorage.removeItem('aad-theme'); } catch (e) {}
    }
    updateThemeUI(theme);
  }

  // Initialize theme UI
  const initialTheme = getStoredTheme();
  updateThemeUI(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = getStoredTheme() || 'system';
      let next;

      if (current === 'system') {
        // From system, switch to the opposite of current resolved system preference
        next = getSystemPreference() === 'dark' ? 'light' : 'dark';
      } else if (current === 'light') {
        next = 'dark';
      } else {
        // From dark, return to system default
        next = 'system';
      }

      applyTheme(next);
      announce('Theme set to ' + (next === 'system' ? 'System preference' : next + ' mode'));
    });
  }

  // Listen to OS system color-scheme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if (!getStoredTheme()) {
        updateThemeUI('system');
      }
    });
  }
})();
