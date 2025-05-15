document.getElementById("yearFilter").addEventListener("change", function () {
  const selectedYear = this.value;

  document.querySelectorAll(".project").forEach(project => {
    const projectYear = project.getAttribute("data-year");
    if (selectedYear === "all" || projectYear === selectedYear) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });

  document.querySelectorAll(".description").forEach(d => d.style.display = "none");
});
