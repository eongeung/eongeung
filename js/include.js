window.addEventListener('load', function () {
  const allElements = document.querySelectorAll('[data-include-path]');
  let loadedCount = 0;

  allElements.forEach(function (el) {
    const includePath = el.getAttribute("data-include-path");
    if (includePath) {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          el.innerHTML = this.responseText;
          el.removeAttribute("data-include-path");
          loadedCount++;
          if (loadedCount === allElements.length && window.location.hash) {
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
