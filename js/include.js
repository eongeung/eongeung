window.addEventListener('load', function () {
  const allElements = document.getElementsByTagName('*');
  let includeCount = 0;
  let totalIncludes = 0;

  Array.prototype.forEach.call(allElements, function (el) {
    const includePath = el.dataset.includePath;
    if (includePath) {
      totalIncludes++;

      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          el.outerHTML = this.responseText;
          includeCount++;

          // include 완료 후 해시 스크롤 처리
          if (includeCount === totalIncludes && window.location.hash) {
            const target = document.querySelector(window.location.hash);
            if (target) {
              setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }
          }
        }
      };

      xhttp.open('GET', includePath, true);
      xhttp.send();
    }
  });
});
