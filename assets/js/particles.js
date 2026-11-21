// Animated particle-network background that reacts to the mouse
(function () {
  const cv = document.getElementById('bg');
  const ctx = cv.getContext('2d');
  let W, H, pts = [];
  const mouse = { x: -999, y: -999 };

  function resize() {
    W = cv.width = innerWidth;
    H = cv.height = innerHeight;
    const count = Math.min(90, Math.floor(W * H / 16000));
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5
    }));
  }
  addEventListener('resize', resize);
  addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  resize();

  function line(x1, y1, x2, y2, color) {
    ctx.strokeStyle = color;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
  }

  (function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.fillStyle = 'rgba(124,92,255,.8)';
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 7); ctx.fill();

      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 130) line(p.x, p.y, q.x, q.y, `rgba(34,211,238,${.22 * (1 - d / 130)})`);
      }
      const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (dm < 160) line(p.x, p.y, mouse.x, mouse.y, `rgba(244,114,182,${.4 * (1 - dm / 160)})`);
    });
    requestAnimationFrame(draw);
  })();
})();
