// Scroll reveal, animated counters and skill bar fills
(function () {
  const counted = new WeakSet();

  function runCounter(n) {
    if (counted.has(n)) return;
    counted.add(n);
    const end = parseFloat(n.dataset.count);
    const suffix = n.dataset.suffix || '';
    const decimals = end % 1 ? 1 : 0;
    const t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / 1600, 1);
      n.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('show');
      e.target.querySelectorAll('[data-count]').forEach(runCounter);
      if (e.target.id === 'bars') {
        e.target.querySelectorAll('.fill').forEach(f => f.style.width = f.dataset.w + '%');
      }
    });
  }, { threshold: .15 });

  document.querySelectorAll('.reveal').forEach(r => io.observe(r));
})();
