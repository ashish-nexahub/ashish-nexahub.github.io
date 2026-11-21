// Navbar: mobile menu, scroll progress, scroll-spy, back-to-top
(function () {
  const nav = document.querySelector('nav');
  const menu = document.getElementById('menu');
  const burger = document.getElementById('burger');
  const bar = document.getElementById('progress');
  const toTop = document.getElementById('toTop');

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));

  // Throttled scroll work (one rAF per frame)
  let ticking = false;
  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? h.scrollTop / max : 0) + ')';
    nav.classList.toggle('scrolled', h.scrollTop > 10);
    toTop.classList.toggle('show', h.scrollTop > 700);
    ticking = false;
  }
  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  // Highlight the nav link of the section currently in view
  const links = [...menu.querySelectorAll('a')];
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => l.classList.remove('active'));
      const link = map.get(e.target.id);
      if (link) link.classList.add('active');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  document.querySelectorAll('main section[id]').forEach(s => spy.observe(s));
})();
