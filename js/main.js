window.addEventListener("scroll", () => {
    const btn = document.getElementById("toTopBtn");
    btn.style.display = window.scrollY > 150 ? "block" : "none";
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toTopBtn").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  