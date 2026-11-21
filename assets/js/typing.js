// Hero typing effect: edit the words array to change the phrases
(function () {
  const words = ['secure REST APIs', 'ASP.NET Core backends', 'optimized SQL Server queries', 'clean, maintainable code'];
  const el = document.getElementById('typed');
  if (!el) return;

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = words[0]; return; }

  let w = 0, c = 0, del = false;
  (function type() {
    const word = words[w];
    el.textContent = word.slice(0, c);
    if (!del && c === word.length) { del = true; return setTimeout(type, 1500); }
    if (del && c === 0) { del = false; w = (w + 1) % words.length; }
    c += del ? -1 : 1;
    setTimeout(type, del ? 40 : 80);
  })();
})();
