(function() {
  'use strict';

  function hideRecentSection() {
    const headings = document.querySelectorAll('h3');

    for (const h3 of headings) {
      if (h3.textContent.trim().toLowerCase() === 'recently viewed') {
        const container = h3.parentElement?.parentElement;
        if (container && !container.hasAttribute('data-hidden')) {
          container.setAttribute('data-hidden', 'true');
          return true;
        }
      }
    }
    return false;
  }

  function revealPage() {
    document.documentElement.setAttribute('data-ready', 'true');
  }

  function runCleanup() {
    let attempts = 0;
    const interval = setInterval(function() {
      attempts++;
      if (hideRecentSection() || attempts >= 50) {
        clearInterval(interval);
        revealPage();
      }
    }, 50);
  }

  if (document.body) {
    runCleanup();
  } else {
    document.addEventListener('DOMContentLoaded', runCleanup);
  }

  // Handle SPA navigation
  let lastUrl = location.href;
  setInterval(function() {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      document.documentElement.removeAttribute('data-ready');
      runCleanup();
    }
  }, 200);
})();
