window.onscroll = function () {
    const btn = document.getElementById("toTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("toTopBtn");
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  