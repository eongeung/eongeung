(function () {
  const sections = document.querySelectorAll('[data-include-path]');
  let pending = sections.length;

  if (pending === 0) {
    window.dispatchEvent(new Event('includesLoaded'));
    return;
  }

  sections.forEach(function (section) {
    const path = section.getAttribute('data-include-path');
    fetch(path)
      .then(function (res) { return res.text(); })
      .then(function (html) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        section.innerHTML = doc.body.innerHTML;
      })
      .catch(function () {
        section.innerHTML = '<p>콘텐츠를 불러올 수 없습니다.</p>';
      })
      .finally(function () {
        pending--;
        if (pending === 0) {
          window.dispatchEvent(new Event('includesLoaded'));
        }
      });
  });
})();
