// Navbar: mobile menu toggle and scroll progress bar
(function () {
  const menu = document.getElementById('menu');
  document.getElementById('burger').onclick = () => menu.classList.toggle('open');
  menu.querySelectorAll('a').forEach(a => a.onclick = () => menu.classList.remove('open'));

  const bar = document.getElementById('progress');
  addEventListener('scroll', () => {
    const h = document.documentElement;
    bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  });
})();
