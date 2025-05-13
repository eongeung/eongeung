window.addEventListener("includesLoaded", function () {
  const btn = document.getElementById("langToggle");
  const ko = document.getElementById("about-ko");
  const en = document.getElementById("about-en");

  if (!btn || !ko || !en) return;


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
});
