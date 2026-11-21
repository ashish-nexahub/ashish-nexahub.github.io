// Light deterrents for the profile photo: no right-click menu, drag, selection or long-press save.
// Note: a browser must download an image to show it, so this cannot fully prevent copying.
(function () {
  const el = document.getElementById('avatar');
  if (!el) return;
  ['contextmenu', 'dragstart', 'selectstart'].forEach(type =>
    el.addEventListener(type, e => e.preventDefault())
  );
})();
