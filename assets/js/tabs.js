// Accessible tabs ([data-tabs]) and the architecture layer selector ([data-layers])
(function () {
  // Tabs
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const tabs = [...group.querySelectorAll('[role="tab"]')];
    const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));

    function select(i, focus) {
      tabs.forEach((t, k) => {
        const on = k === i;
        t.setAttribute('aria-selected', on);
        t.tabIndex = on ? 0 : -1;
        panels[k].hidden = !on;
      });
      if (focus) tabs[i].focus();
    }
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(i));
      t.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') { e.preventDefault(); select((i + 1) % tabs.length, true); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); select((i - 1 + tabs.length) % tabs.length, true); }
      });
    });
  });

  // Architecture layers: hovering/clicking a ring or a list item syncs both
  document.querySelectorAll('[data-layers]').forEach(group => {
    const items = group.querySelectorAll('[data-layer]');
    function activate(layer) {
      items.forEach(el => el.classList.toggle('active', el.dataset.layer === layer));
    }
    items.forEach(el => {
      el.addEventListener('click', () => activate(el.dataset.layer));
      el.addEventListener('mouseenter', () => activate(el.dataset.layer));
      el.addEventListener('focus', () => activate(el.dataset.layer));
    });
  });
})();
