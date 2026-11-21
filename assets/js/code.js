// Tiny C# syntax highlighter for the code showcase (no external library)
(function () {
  const KEYWORDS = 'public|private|protected|internal|class|interface|record|using|new|return|await|async|var|void|null|string|int|bool|if|throw|static|readonly|override|get|set|namespace|this|is';
  const RE = new RegExp(
    '(\\/\\/[^\\n]*)' +                    // 1: comment
    '|("(?:[^"\\\\\\n]|\\\\.)*")' +        // 2: string
    '|\\b(' + KEYWORDS + ')\\b' +          // 3: keyword
    '|(\\[[A-Za-z]+(?:\\([^)]*\\))?\\])' + // 4: attribute
    '|\\b([A-Z][A-Za-z0-9_]*)\\b',         // 5: type / PascalCase
    'g'
  );
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  document.querySelectorAll('code[data-lang="csharp"]').forEach(el => {
    const src = el.textContent.replace(/^\n/, '').replace(/\s+$/, '');
    el.dataset.raw = src; // used by the copy button
    el.innerHTML = esc(src).replace(RE, (m, cm, str, kw, attr, ty) => {
      if (cm) return '<span class="tok-cm">' + cm + '</span>';
      if (str) return '<span class="tok-str">' + str + '</span>';
      if (kw) return '<span class="tok-kw">' + kw + '</span>';
      if (attr) return '<span class="tok-ty">' + attr + '</span>';
      return '<span class="tok-ty">' + ty + '</span>';
    });
  });
})();
