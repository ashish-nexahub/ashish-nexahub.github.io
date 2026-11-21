// Copy-to-clipboard for the email address and code samples
(function () {
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); return true; }
    catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (_) { /* ignore */ }
      ta.remove();
      return ok;
    }
  }

  document.querySelectorAll('[data-copy], [data-copy-target]').forEach(btn => {
    btn.addEventListener('click', async () => {
      let text = btn.dataset.copy;
      if (!text) {
        const el = document.querySelector(btn.dataset.copyTarget);
        text = el ? (el.dataset.raw || el.textContent) : '';
      }
      const label = btn.dataset.label || btn.textContent;
      btn.dataset.label = label;
      btn.textContent = (await copy(text)) ? 'Copied ✓' : 'Press Ctrl+C';
      setTimeout(() => { btn.textContent = label; }, 1800);
    });
  });
})();
