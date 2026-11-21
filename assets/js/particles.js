// Theme-aware particle network background.
// Performance: capped particle count, DPR-aware, paused when the tab is hidden,
// no mouse lines on touch devices, static frame when reduced motion is on.
(function () {
  const cv = document.getElementById('bg');
  const ctx = cv.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = matchMedia('(pointer: coarse)').matches;

  let W = 0, H = 0, pts = [], raf = 0;
  let c1, c2, c3, dotA, lineA;
  const mouse = { x: -999, y: -999 };

  function readTheme() {
    const s = getComputedStyle(document.documentElement);
    c1 = s.getPropertyValue('--p1').trim();
    c2 = s.getPropertyValue('--p2').trim();
    c3 = s.getPropertyValue('--p3').trim();
    dotA = parseFloat(s.getPropertyValue('--p-dot')) || .8;
    lineA = parseFloat(s.getPropertyValue('--p-line')) || .22;
  }

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(touch ? 32 : 60, Math.floor(W * H / 18000));
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .45, vy: (Math.random() - .5) * .45
    }));
    if (reduce) frame(true);
  }

  function line(x1, y1, x2, y2, rgb, a) {
    ctx.strokeStyle = 'rgba(' + rgb + ',' + a + ')';
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  }

  function frame(still) {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(' + c1 + ',' + dotA + ')';
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      if (!still) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 6.2832); ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
        if (d2 < 16900) line(p.x, p.y, q.x, q.y, c2, lineA * (1 - Math.sqrt(d2) / 130));
      }
      if (!touch) {
        const mx = p.x - mouse.x, my = p.y - mouse.y, m2 = mx * mx + my * my;
        if (m2 < 25600) line(p.x, p.y, mouse.x, mouse.y, c3, .4 * (1 - Math.sqrt(m2) / 160));
      }
    }
    if (!still) raf = requestAnimationFrame(frame);
  }

  function start() { if (!reduce && !raf) raf = requestAnimationFrame(frame); }
  function stop() { cancelAnimationFrame(raf); raf = 0; }

  readTheme();
  resize();
  start();

  let rt;
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
  if (!touch) addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  document.addEventListener('themechange', () => { readTheme(); if (reduce) frame(true); });
})();
