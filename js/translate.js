window.addEventListener("includesLoaded", function () {
  const allToggleButtons = document.querySelectorAll("#langToggle");

  allToggleButtons.forEach((btn) => {
    const container = btn.closest("section") || document;
    const ko = container.querySelector('[id$="-ko"]');
    const en = container.querySelector('[id$="-en"]');

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
});
