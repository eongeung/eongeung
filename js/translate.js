document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include-path]");
  let loadedCount = 0;

  includes.forEach((el) => {
    const path = el.getAttribute("data-include-path");

    fetch(path)
      .then((res) => res.text())
      .then((data) => {
        el.innerHTML = data;
        loadedCount++;
        if (loadedCount === includes.length) {
          initTranslate();
        }
      });
  });
});

function initTranslate() {
  const btn = document.getElementById("langToggle");
  const ko = document.getElementById("about-ko");
  const en = document.getElementById("about-en");

  if (!btn || !ko || !en) {
    console.log("오류류")} return;

  btn.addEventListener("click", () => {
    const isKoVisible = ko.style.display !== "none";

    if (isKoVisible) {
      ko.style.display = "none";
      en.style.display = "block";
      btn.textContent = "KR 🇰🇷";
    } else {
      ko.style.display = "block";
      en.style.display = "none";
      btn.textContent = "EN 🇺🇸";
    }
  });
}
