// Light / dark theme. The initial theme is set by a tiny inline script in <head>
// (so there is no flash); this file handles the toggle button and system changes.
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const meta = document.querySelector('meta[name="theme-color"]');
  const colors = { dark: '#070914', light: '#f5f7fc' };

  function apply(theme, persist) {
    root.dataset.theme = theme;
    if (meta) meta.setAttribute('content', colors[theme]);
    btn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    if (persist) { try { localStorage.setItem('theme', theme); } catch (e) { /* storage blocked */ } }
    document.dispatchEvent(new CustomEvent('themechange', { detail: theme }));
  }

  apply(root.dataset.theme || 'dark', false);
  btn.addEventListener('click', () => apply(root.dataset.theme === 'dark' ? 'light' : 'dark', true));

  // Follow the OS setting until the visitor picks a theme manually
  const mq = matchMedia('(prefers-color-scheme: dark)');
  const onSystem = e => {
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (_) { /* ignore */ }
    if (!saved) apply(e.matches ? 'dark' : 'light', false);
  };
  if (mq.addEventListener) mq.addEventListener('change', onSystem);
})();
