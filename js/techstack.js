window.addEventListener("includesLoaded", () => {
  const techImgs = document.querySelectorAll(".tech-grid img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  techImgs.forEach(img => observer.observe(img));
});
