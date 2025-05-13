window.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("langToggle");
  const ko = document.querySelector('[id$="-ko"]');
  const en = document.querySelector('[id$="-en"]');

  if (!btn || !ko || !en) return;

  btn.addEventListener("click", () => {
    const isKoVisible = ko.style.display !== "none";

    ko.style.display = isKoVisible ? "none" : "block";
    en.style.display = isKoVisible ? "block" : "none";
    btn.textContent = isKoVisible ? "KR 🇰🇷" : "EN 🇺🇸";
  });
});
