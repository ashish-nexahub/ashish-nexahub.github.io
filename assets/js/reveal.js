// Scroll reveal and animated counters (each element is observed once, then released)
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function runCounter(n) {
    const end = parseFloat(n.dataset.count);
    const suffix = n.dataset.suffix || '';
    const decimals = end % 1 ? 1 : 0;
    if (reduce) { n.textContent = end.toFixed(decimals) + suffix; return; }
    const t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / 1400, 1);
      n.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('show');
      e.target.querySelectorAll('[data-count]').forEach(runCounter);
      obs.unobserve(e.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(r => io.observe(r));
})();
