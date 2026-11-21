// Page-level setup
(function () {
  // Footer year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Duplicate the tech marquee content once for a seamless loop
  const track = document.querySelector('.marquee-track');
  if (track) {
    [...track.children].forEach(node => {
      const clone = node.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  }
})();
